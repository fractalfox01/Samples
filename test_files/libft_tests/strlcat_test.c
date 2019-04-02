#include <string.h>
#include <stdio.h>
#include "../include/libft.h"

int	main(void)
{
	char	src[50] = "This is source";
	char	dst[50] = "This is destination";
	char	src2[50] = "This is source";
	char	dst2[50] = "This is destination";

	ft_strlcat(dst, src, 25);
	printf("Output: %s\n", dst);

	ft_strlcat(dst2, src2, 35);
	printf("Output: %s\n", dst2);
	
	return (0);
}
