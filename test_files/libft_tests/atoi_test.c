/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   atoi_test.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tvandivi <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/02/12 09:54:21 by tvandivi          #+#    #+#             */
/*   Updated: 2019/02/12 10:02:49 by tvandivi         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */
#include <stdio.h>
#include "../include/libft.h"

int	main(int argc, char **argv)
{
	if (argc > 1)
	{
		printf("%d\n", ft_atoi(argv[1]));
	}
	else
		printf("No test string entered.\n");
	return (0);
}
