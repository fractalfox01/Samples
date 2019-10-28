#include <stdlib.h>
#include <stdio.h>
#include <limits.h>

/*
** This implementation of a dynamic array uses a structure as a main container
** for the array as well as array information like; 
** Total array size as:             size, 
** Current array index as:          cur, (Represents the next available index in the array)
** Array pointer as:                *arr (Start size is 2; doubles each time more space is needed).
*/

typedef struct  s_Array
{
  int           size;
  int           cur;
  int           *arr;
}               t_arr;

/*
** Prototypes:
**
** remove_at:   Removes int contained at index n
** add_new:     Adds int n to next available index in the array. if array size is insufficient a new array
**              with double the size is created and each item from the original is repopulated before adding
**              in the new number n.
*/

void remove_at(t_arr *arr, int n);
void add_new(t_arr *arr, int n);

/*
** MACROS:
**
** Array points to our dynamic array structue.
** Add_new takes two arguments and passes them to the add_new function
** Remove_last takes an Array pointer as argument and passes the last inserted items
** index to remove_at() function.
*/

#define Array struct s_Array
#define Add_new(a, b) add_new(a, b)
#define Remove_last(a) remove_at(a, (a->cur - 1))

void  resize_arr(t_arr *arr, int a)
{
  int i;
  int *tmp;

  i = 0;
  // printf("resizing\n");
  tmp = (int *)malloc(sizeof(int) * (arr->size * 2));
  while (i <= arr->size)
  {
    tmp[i] = arr->arr[i];
    i++;
  }
  tmp[arr->cur] = a;
  arr->size *= 2;
  arr->cur++;
  free((void *)arr->arr);
  arr->arr = NULL;
  arr->arr = tmp;
}

void  remove_at(t_arr *arr, int index)
{
  if (arr && index >= 0)
  {
    if (index > arr->cur)
      return ;
    while (index < arr->cur)
    {
      arr->arr[index] = arr->arr[index + 1];
      index++;
    }
    arr->cur--;
  }
  return ;
}

void add_new(t_arr *arr, int a)
{
  if (arr->cur == arr->size)
  {
    resize_arr(arr, a);
  }
  else
  {
    arr->arr[arr->cur] = a;
    arr->cur++;
  }
}

t_arr *init_arr(void)
{
  t_arr *arr;

  arr = (t_arr *)malloc(sizeof(t_arr) * 1);
  arr->size = 2;
  arr->cur = 0;
  arr->arr = (int *)malloc(sizeof(int) * 2);
  arr->arr[0] = 0;
  arr->arr[1] = 0;
  return (arr);
}

/*
** Testing:
**
** the following test begins by populating a new Array pointer
** up to a maz size of 1,000,000,000 (1 billion)
** then removes each element in the array by using the defined Remove_last macro.
** The program then repopulates the now (1 billion) length array up to half the last loops
** size "c"; and so on until c is equal to zero.
*/

int main(void)
{
  Array *arr;
  int   i;
  int j;
  int c;
  
  j = 0;
  i = 1;
  c = 1000000000;
  arr = init_arr();
  while (c > 0)
  {
    while (i < c)
    {
      Add_new(arr, (i));
      i++;
    }
    i = 0;
    printf("round: %d at %d\n", j, c);
    while (i++ < c)
      Remove_last(arr);
    i = 0;
    j++;
    printf("round: %d at %d\n", j, c);
    i = 0;
    c /= 2;
  }
  i = 0;
  printf("bytes malloc'd: %d\n", arr->size * 4);
  return 0;
}
