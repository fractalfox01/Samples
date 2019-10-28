/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_ftoa.c                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tvandivi <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/08/26 12:33:27 by tvandivi          #+#    #+#             */
/*   Updated: 2019/08/26 12:51:16 by tvandivi         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "floater.h"

char	*ft_ftoa(double flt)
{
	char			*ret;
	ftdbl			ndbl;
	double			remanider;

	ret = NULL;
	ndbl.mantissa = (flt - (long long)flt);
	ndbl.exponent = (int)((long long)flt - flt);
	ndbl.sign = (flt < 0) ? 1 : 0;
	return (ret);
}

int	main(void)
{
	float a = 123487645.32445464563;
	ft_ftoa(a);
	return (0);
}

