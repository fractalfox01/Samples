/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   strstr_test.c                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tvandivi <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/02/12 16:33:19 by tvandivi          #+#    #+#             */
/*   Updated: 2019/02/12 22:46:09 by tvandivi         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <string.h>
#include <stdio.h>
#include "../include/libft.h"

int	main(void)
{
	const char str1[11] = "ababBbc222";
	const char str2[6] = "ababc";
	char	*ptr;
	const char str3[18] = "42 Silicon Valley";
	const char str4[7] = "icon V";
	char	*ptr1;

	ptr = ft_strstr(str1, str2);
	printf("%s\n", ptr);
	ptr1 = ft_strstr(str3, str4);
	printf("%s\n", ptr1);
	return (0);
}
