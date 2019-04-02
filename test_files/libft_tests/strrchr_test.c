/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   strchr_test.c                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tvandivi <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/02/11 20:49:57 by tvandivi          #+#    #+#             */
/*   Updated: 2019/02/12 14:25:44 by tvandivi         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

//  The strchr() function locates the first occurrence of c (converted to a char) in the string pointed to by
//  s.  The terminating null character is considered to be part of the string; therefore if c is `\0', the
//  functions locate the terminating `\0'.

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "../include/libft.h"

int	main(void)
{
	char	str1[13] = "HelloW World";
	char	str2[21] = "atoms\0Proton\0neutron";
	char	*ptr1;
	char	*ptr2;
	char	*ptr3;
	char	*ptr4;

	printf("Searching for \'W\' in: %s\n", str1);
	ptr1 = ft_strrchr(str1, 'W');
	printf("mine: %s\n", ptr1);
	ptr2 = strrchr(str1, 'W');
	printf("their's: %s\n", ptr2);
	
	printf("Searching for \'P\' in: atoms\\0Proton\\0neutron\n");
	ptr3 = ft_strrchr(str2, 'P');
	printf("mine: %s\n", ptr3);
	ptr4 = strrchr(str2, 'P');
	printf("their's: %s\n", ptr4);
	return (0);
}
