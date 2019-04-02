#include <stdio.h>
#include <limits.h>
#include <string.h>
#include "../../libft/libft.h"

int			main(void)
{
	int i = -100000;

	while (i <= 100000)
	{
		if (i == ft_atoi(ft_itoa(i)))
			printf("");
		else
		{
			printf("Failed at %d\n", i);
			return (0);
		}
		if (i > -100 && i < 100)
			printf("itoa at %d = %s\n", i, ft_itoa(i));
		i++;
	}
	i = INT_MIN;
	if (INT_MIN == ft_atoi(ft_itoa(i)))
	{
		printf("ft_itoa(INT_MIN) = %s\n", ft_itoa(i));
		printf("\033[1;32mAll Tests Passed!\n");
	}
	else
		printf("failed to pass MIN_INT: %d\n", INT_MIN);
	return (0);
}
