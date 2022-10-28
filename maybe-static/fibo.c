#include <stdio.h>


void swap(int *a, int *b) {
  int tmp = *a;
  *a = *b;
  *b+= tmp;
}


int main(int argc, char **argv) {
  int max;
  if (argc == 1) {
    max = 15;
  } else {
    if (sscanf (argv[1], "%i", &max) != 1) {
      printf("error - \"%s\" not an integer, tio listo\n", (argv[1]));
      return 1;
    }
    if (max > 40 || max < 0) {
      printf("Too many numbers, I'm a lazy program\n");
      max = 40;
    }
  }

  int index = 0;
  int a = 0;
  int b = 1;

  printf("Fibonacci sequence of %d nums\n", max);
  while (index++ < max) {
    if (index != 1) {
      printf(", ");
    }
    printf("%d", b);
    swap(&a, &b);
  }

  printf("\n");
  return 0;
}
