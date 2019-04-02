/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   isascii_test.c                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tvandivi <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/02/13 19:30:17 by tvandivi          #+#    #+#             */
/*   Updated: 2019/02/13 20:04:03 by tvandivi         ###   ########.fr       */
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
		if (ft_isdigit(i) != isdigit(i))
		{
			printf("Failed: %d\nisdigit: %d\n ft_isdigit: %d\n", i, isdigit(i), ft_isdigit(i));
		}
		i++;
	}
	return (0);
}
