#include <stdio.h>
#include <stdlib.h>
#include "dispatch_table.h"

int move_up(int f, int s)
{
  printf("Up:\t\t\t\t x is %d\ty is %d\n", f, s);
  return (1);
}

int move_down(int f, int s)
{
  printf("Down:\t\t\t x is %d\ty is %d\n", f, s);
  return (2);
}

int move_left(int f, int s)
{
  printf("Left:\t\t\t x is %d\ty is %d\n", f, s);
  return (3);
}

int move_right(int f, int s)
{
  printf("Right:\t\t\t x is %d\ty is %d\n", f, s);
  return (4);
}

void  passoff(map_movement *myarr[4], char *str)
{
  int i = 0;

  while (i < 8)
  {
    if (str[i] == 'u')
      myarr[0](10, 10);
    else if (str[i] == 'd')
      myarr[1](11, -11);
    else if (str[i] == 'l')
      myarr[2](12, 12);
    else if (str[i] == 'r')
      myarr[3](14, -13);
    else
      printf("No matches...\n");
    i++;
  }
}

int main(void) {
  char str[10] = "udrglwdu";

  passoff(myarr, str);
  return (0);
}
