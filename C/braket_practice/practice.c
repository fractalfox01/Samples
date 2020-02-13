#include <stdio.h>
#include <stdlib.h>

/*
** Some practice at collecting substrings based
** on a starting and ending character delimiter
*/

#define DOUBLE_QUOTE_DELIM "\"\""
#define CURLY_BRAKETS_DELIM "{}"

int ft_strlen(char *str)
{
  int i;

  i = 0;
  while (str[i] != '\0')
    i++;
  return (i);
}

/*
** ft_strdelim_count: counts the number of occurances of
** each character in delim against each character in str.
** example: ft_strdelim_count("hello world\ngoodbye moon!", " \no");
** returns: 9
*/

int ft_strdelim_count(char *str, char *delim)
{
  int   i;
  int   j;
  int   len;
  int   count;

  i = 0;
  j = 0;
  len = ft_strlen(delim);
  count = 0;
  while (str[i] != '\0')
  {
    while (j < len)
    {
      if (str[i] == delim[j])
      {
        count++;
        break ;
      }
      j++;
    }
    j = 0;
    i++;
  }
  return (count);
}

void  ft_strdel(char **str)
{
  if (str[0])
  {
    free(str[0]);
    str[0] = NULL;
  }
}

/*
** chomp_at_delim: returns the substring in between the first
** occurance of delim[0] and the first occuance of delim[1].
**
** if delim[0] and delim[1] dont both occur in str at least once,
** NULL is returned signifying str is not closed by the
** passed delimiter.
**
** only the first 2 characters of delim are used.
*/

char  *chomp_at_delim(char *str, char *delim)
{
  int i;
  int j;
  int len;
  int start;
  int end;
  int flag;
  char  *chomp;

  i = 0;
  j = 0;
  start = 0;
  end = 0;
  flag = 0;
  i = ft_strlen(delim);
  if (i < 2)
    return (NULL);
  len = ft_strdelim_count(str, delim);
  chomp = NULL;
  if (len >= 2)
  {
    while (str[i] != '\0')
    {
      if (str[i] == delim[0])
      {
        if (flag == 0)
          start = i;
        else if ((delim[0] == delim[1]) && flag)
        {
          end = i;
          break ;
        }
        flag = 1;
      }
      else if (str[i] == delim[1])
      {
          end = i;
          break ;
      }
      i++;
    }
    printf("%d : %d\n", start, end);
    chomp = (char *)malloc(sizeof(char) * ((end - start) + 2));
    while (start <= end)
    {
      chomp[j++] = str[start++];
    }
    chomp[j] = '\0';
  }
  return (chomp);
}

int main(void)
{
  char  *tmp;

  tmp = NULL;
  printf("Hello World\n");
  
  printf("count: %d\n", ft_strdelim_count("hello world\ngoodbye moon!", " \no"));
  ft_strdelim_count("echo\n {\"hello world\"}", "\"}{");

  tmp = chomp_at_delim("echo\n {\"hello world\"}", CURLY_BRAKETS_DELIM);
  if (tmp)
    printf("chomped: %s\n", tmp);
  ft_strdel(&tmp);
  
  tmp = chomp_at_delim("echo\n {\"hello world\"}", DOUBLE_QUOTE_DELIM);
  if (tmp)
    printf("chomped: %s\n", tmp);
  ft_strdel(&tmp);
  
  tmp = chomp_at_delim("echo\n {\"hello world\"}", "\nb");
  if (tmp)
    printf("chomped: %s\n", tmp);
  else
    printf("not found\n");
  ft_strdel(&tmp);
  
  return 0;
}
