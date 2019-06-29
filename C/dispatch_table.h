/*
** This header goes with dispatch_table.c
** map_movement is declared and instantiated as
** pointers to their respective function.
*/

#ifndef DISPATCH_TABLE_H
#define DISPATCH_TABLE_H

int     move_up(int f, int s);
int     move_down(int f, int s);
int     move_left(int f, int s);
int     move_right(int f, int s);

typedef int map_movement(int f, int s);

map_movement *myarr[4] = { \
    move_up, \
    move_down, \
    move_left, \
    move_right \
};

#endif
