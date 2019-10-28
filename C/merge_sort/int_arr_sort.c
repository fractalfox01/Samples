#include <stdio.h>
#include "../../../libft/libft.h"

typedef struct	s_sort_lst
{
	int			i;
	int			j;
	int			k;
	int			n1;
	int 		n2;
	int			*L;
	int			*R;
}				t_sort;

int		*new_int_arr(int size)
{
	int	*ptr;

	ptr = (int *)malloc(sizeof(int) * size);
	return (ptr);
}

void	merge(int tab[], int l, int m, int r)
{
	t_sort sptr;

	sptr.i = 0;
	sptr.j = 0;
	sptr.n1 = m - l + 1;
	sptr.n2 = r - m;
	sptr.L = new_int_arr(sptr.n1);
	sptr.R = new_int_arr(sptr.n2);
	while (sptr.i < sptr.n1)
	{
		sptr.L[sptr.i] = tab[sptr.i];
		sptr.i += 1;
	}
	while (sptr.j < sptr.n2)
	{
		sptr.R[sptr.j] = tab[m + 1 + sptr.j];
		sptr.j += 1;
	}
	sptr.i = 0;
	sptr.j = 0;
	sptr.k = l;
	while (sptr.i < sptr.n1 && sptr.j < sptr.n2)
	{
		if (sptr.L[sptr.i] <= sptr.R[sptr.j])
		{
			tab[sptr.k] = sptr.R[sptr.j];
			sptr.i += 1;
		}
		else
		{
			tab[sptr.k] = sptr.R[sptr.j];
			sptr.j += 1;
		}
		sptr.k += 1;
	}
	while (sptr.i < sptr.n1)
	{
		tab[sptr.k] = sptr.L[sptr.i];
		sptr.i += 1;
		sptr.k += 1;
	}
	while (sptr.j < sptr.n2)
	{
		tab[sptr.k] = sptr.R[sptr.j];
		sptr.k += 1;
		sptr.j += 1;
	}
}

void	merge_sort(int	tab[], int l, int r)
{
	int	m;

	m = 0;
	if (l < r)
	{
		m = l + (r - l) / 2;
		merge_sort(tab, l, m);
		merge_sort(tab, (m + 1), r);
		merge(tab, l, m, r);
	}
	//sptr = new_slst(size);
	/*
	** recursivly calls self till size becomes 1
	*/
}

int	main(void)
{
	int	tab[10] = { 12, 5, 75, 32, 19, 3, 91, 202, 10, 17};
	int	i;

	i = 0;
	merge_sort(tab, 0, 10);
	while (i < 10)
	{
		printf("ptr[i] = %d\n",tab[i]);
		i++;	
	}
	return (0);
}
