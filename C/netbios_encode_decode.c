#include <stdio.h>
#include "libft/libft.h"

/*
** gcc .\decode_netbios.c .\libft\ft_strnew.c 
.\libft\ft_bzero.c .\libft\ft_memalloc.c .\libft\ft_strlen.c .\libft\ft_strcmp.c -o netbios_encode_decode
*/

unsigned char	*decode_string(unsigned char *str)
{
	size_t			len;
	size_t			i;
	size_t			j;
	unsigned char	*cnv;
	unsigned char	c;
	unsigned char	d;

	i = 0;
	j = 0;
	c = 0;
	d = 0;
	len = ft_strlen(str);
	cnv = ft_strnew(16);
	ft_bzero(cnv, 16);
	if (len != 32)
		return (str);
	while (str[i] != '\0')
	{
		if ((i % 2) == 0)
			c = ((str[i] - 'A') << 4);
		else
		{
			d = ((str[i] - 'A') & 0xf);
			cnv[j] = (unsigned char)(c | d);
			j++;
		}
		i++;
	}
	while (j < 16)
	{
		cnv[j++] = '\0';
	}
	return (cnv);
}

unsigned char	*encode_string(unsigned char *str)
{
	unsigned char	*ret;
	unsigned char	c;
	size_t			i;
	size_t			j;

	ret = NULL;
	i = 0;
	j = 0;
	ret = ft_strnew(32);
	ft_bzero(ret, 32);
	while (str[j] != '\0' && i < 32)
	{
		c = (str[j] >> 4) + 'A';
		ret[i++] = c;
		c = (str[j] & 0x0f) + 'A';
		ret[i++] = c;
		j++;
	}
	while (i < 32)
	{
		c = (' ' >> 4);
		ret[i++] = (c + 'A');
		c = (' ' & 0x0f);
		ret[i++] = (c + 'A');
		j++;
	}
	return (ret);
}

int main(int ac, char **av)
{
	if (ac == 3)
	{
		if (ft_strcmp("decode", av[1]) == 0)
			printf("Decoding <%s> to [%s]\n", av[2], decode_string(av[2]));
		else if (ft_strcmp("encode", av[1]) == 0)
			printf("Encodeing <%s>: [%s]\n", av[2], encode_string(av[2]));
	}
	else
	{
		printf("Example\n\t./netbios_encode_decode [encode|decode] string\n");
	}
	return (0);
}
