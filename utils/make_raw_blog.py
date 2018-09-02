import os
import re

postpath = "_posts/"
filename_list = []
for file in os.listdir(postpath) :
    filename_list.append(file)
filename_list = sorted(filename_list)

def tag_remover(post_string) :
    temp = ""
    result = ""
    is_ignored = False
    
    for c in post_string :
        if (c == '\t' or c == '\n' or c == '\r') :
            continue
        elif (c == ' ') :
            if (len(temp) == 0) :
                if (result.endswith(' ') or result.endswith('\n')) :
                    continue
            elif temp.endswith(' ') :
                continue                
        
        if not is_ignored :
            if (c == '<') :
                if ("AC_FL" not in temp
                and "Show" not in temp
                and "Hide" not in temp
                and "\'/>" not in temp
                and "title" not in temp
                and ";}" not in temp
                and "document" not in temp
                ) :
                    result += temp
                is_ignored = True
                temp = ""
            else :
                temp += c;
                if (temp.find("&lt;") != -1) :
                    # this could be in context, so is treated more carefully
                    # nepeta your quirk is bothering me
                    # also, if &lt; comes before nbsp, equa, amp or |, do not ignore. 
                    if (":33 &lt;" in temp
                        or "&lt; " in temp
                        or "&lt;=" in temp
                        or "&lt;&" in temp
                        or "&lt;|" in temp
                    ) :
                        temp = re.sub("\&lt;", "<", temp)
                        result += temp
                        is_ignored = False
                    else :
                        if ("AC_FL" not in temp
                        and "Show" not in temp
                        and "Hide" not in temp
                        and "\'/>" not in temp
                        and "title" not in temp
                        and ";}" not in temp
                        and "document" not in temp
                        ) :
                            temp = re.sub("\&lt;", "", temp)
                            result += temp
                        is_ignored = True
                    temp = ""
        #end if not is_ignored
        else : #is_ignored
            temp += c
            if (c == '>') :
                there_is_br = temp.endswith("br />") or temp.endswith("br/>") or temp.endswith("br>")
                # 3 diffent types of br tag :/
                if (there_is_br and not result.endswith('\n')) :
                    result += "\n"
                is_ignored = False
                temp = ""
            elif (len(temp) >= 5 and "&gt;" in temp[len(temp) - 5:]) :
                if (there_is_br and not result.endswith('\n')) :
                    result += "\n"
                is_ignored = False
                temp = ""
        #end else (is_ignored)
    # end for c in post_string
    if not result.endswith('\n') : result += '\n'
    return result
# end def tag_remover

blog_raw = open("blog-raw.txt",  'w+',  encoding = 'utf-8-sig')
post_string = ""
for file_i, filename in enumerate(filename_list) :
    if file_i % 1000 == 0 : print(file_i)
    old_file_lines = open("_posts/" + filename, 'r', encoding = 'utf-8-sig').readlines()
    # get title
    new_lines = [old_file_lines[2][7:]]
    new_lines += old_file_lines[11:]
    for new_l in new_lines :
        post_string += new_l
    post_string = tag_remover(post_string)
    post_string = re.sub("&nbsp;", " ", post_string)
    post_string = re.sub("&gt;", ">", post_string)
    post_string = re.sub("&amp;", "&", post_string)
    blog_raw.write(post_string)
    blog_raw.write("\n")        
    post_string = ""

blog_raw.write(open("blog-nonposts.txt", 'r', encoding = 'utf-8-sig').read())
blog_raw.close()
