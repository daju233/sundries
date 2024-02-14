#include <stdio.h>  
#include <stdlib.h>  
  
int main() {  
    char filename[] = "apple"; // 替换为您要检查的文件名  
    FILE *file;  
  
  printf("Where is my apple?\n");
    // 尝试以只读方式打开文件  
    file = fopen(filename, "r");  
  
    // 检查文件是否成功打开  
    if (file) {  
        printf("Thank you.The key is h0ppyva1ent1nes");  
        // 关闭文件  
        fclose(file);  
    } else {  
        printf("Return Apple and find apple.\n");  
    }  
  
    return 0;  
}