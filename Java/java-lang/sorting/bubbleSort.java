import java.util.Arrays;

public class bubbleSort {

    public static void main(String[] args) {
        int[] arr={1,2,3,4,5};
        bubble(arr);
        System.out.println(Arrays.toString(arr));
    }

    static void bubble(int[] arr){
        for (int i = 0; i < arr.length; i++) {
            boolean swaped=false;

            for (int j = 1; j < arr.length-i; j++) {
                if (arr[j]<arr[j-1]) {
                    //swap
                    int temp = arr[j];
                    arr[j]=arr[j-1];
                    arr[j-1]=temp;
                    swaped=true;
                }    
            }
            if (!swaped) {
                break;
            }
            
        }
       
    }
    
}
