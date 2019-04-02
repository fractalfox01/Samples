/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   isascii_test.c                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tvandivi <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/02/13 19:30:17 by tvandivi          #+#    #+#             */
/*   Updated: 2019/02/13 19:44:51 by tvandivi         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdio.h>
#include <ctype.h>
#include "../include/libft.h"

int	main(void)
{
	int i;

	i = -1;
	while (i < 530)
	{
		if (ft_isascii(i) != isascii(i))
		{
			printf("Failed: %d\nisascii: %d\n ft_isascii: %d\n", i, isascii(i), ft_isascii(i));
		}
		i++;
	}
	return (0);
}
