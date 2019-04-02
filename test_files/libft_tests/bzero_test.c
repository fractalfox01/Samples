/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   bzero_test.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tvandivi <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/02/12 10:04:41 by tvandivi          #+#    #+#             */
/*   Updated: 2019/02/12 10:39:48 by tvandivi         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdio.h>
#include <string.h>
#include "../include/libft.h"

int	main(void)
{
	char	str[24] = "This is a sample string";
	char	tstr[24] = "This is a sample string";
	char	str2[27] = "yet another sample string";
	char	tstr2[27] = "yet another sample string";
	size_t	i = 0;

	printf("%s\n", str);
	printf("n = 10\n");
	ft_bzero(str, 10);
	printf("%s\n", str);
	while (i < sizeof(str))
	{
		printf("%c ", str[i]);
		i++;
	}
	printf("\n");
	i = 0;
	
	printf("%s\n", tstr);
	printf("n = 10\n");
	ft_bzero(tstr, 10);
	printf("%s\n", tstr);
	while (i < sizeof(tstr))
	{
		printf("%c ", tstr[i]);
		i++;
	}
	printf("\n");
	i = 0;
	
	printf("%s\n", str2);
	printf("n = sizeof(str2) / 2\n");
	ft_bzero(str2, sizeof(str2)/2);
	printf("%s\n", str2);
	while (i < sizeof(str2))
	{
		printf("%c\n", str2[i]);
		i++;
	}
	printf("\n");
	i = 0;

	printf("%s\n", tstr2);
	printf("n = sizeof(tstr2) / 2\n");
	ft_bzero(tstr2, sizeof(tstr2)/2);
	printf("%s\n", tstr2);
	while (i < sizeof(tstr2))
	{
		printf("%c\n", tstr2[i]);
		i++;
	}
	printf("\n");
	return (0);
}
