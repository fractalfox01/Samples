#ifndef FLOATER_H
# define FLOATER_H

union				ft_dbl
{
	long long		mantissa:52;
	signed int		exponent:11;
	int				sign:1;
}					ftdbl;

char				*ft_ftoa(double flt);

#endif
