#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "../include/libft.h"

/*
	The memcpy() function copies n bytes from memory area src to memory
	area dest.  The memory areas must not overlap.  Use memmove(3) if the
	memory areas do overlap.
*/

int	main(void)
{
	long int	src1[10] = {45535, 13, 15, 17, 19, 21, 23, -2555555};
	long int	*dest1;
	long int	*tab1;
	char		src2[10][10] = {"All","Words","Less","Then","Ten","Bytes","In","Length"};
	char		*dest2;
	char		*ptr1;
	char		*ptr2;

	dest1 = (long int *)malloc(sizeof(long int) * 10);
	dest2 = (char *)malloc(sizeof(char) * sizeof(src2));

	tab1 = (long int *)malloc(sizeof(long int) * 10);
	ptr1 = ft_memcpy(dest1, src1, (sizeof(src1)));
	while (*dest1)
	{
		printf("%ld\n", *dest1);
		dest1++;
	}
	printf("%d\n", (int)ptr1);

	ptr1 = memcpy(dest1, src1, (sizeof(src1)));
	while (*dest1)
	{
		printf("%ld\n", *dest1);
		dest1++;
	}
	printf("%d\n", (int)ptr1);

	printf("\n");
	ptr2 = (char *)ft_memcpy(dest2, src2, (sizeof(src2)));
	while (*dest2)
	{
		printf("%s\n", dest2);
		dest2 += 10;
	}
	printf("%d\n", (int)ptr2);
	
	ptr2 = memcpy(dest2, src2, (sizeof(src2)));
	while (*dest2)
	{
		printf("%s\n", dest2);
		dest2 += 10;
	}
	printf("%d\n", (int)ptr2);
	return (0);
}
