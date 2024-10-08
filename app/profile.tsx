import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import CustomButton from "@/components/Button";
import { router } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function Profile() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex flex-row justify-center items-center">
        <Pressable onPress={()=>router.back()} className="rounded-lg p-2 bg-[#0258D3] flex  absolute left-4">
        <View>
          <Feather name="chevron-left" size={24} color="white" />
        </View>
        </Pressable>
        <Text className="text-xl font-semibold">Notifications & Settings</Text>
      </View>

      <View className="flex flex-row gap-2 py-1 items-center mx-3 mt-6">
          <Pressable onPress={()=> router.push('/profile')}>
          <Image source={require("../assets/images/avatar.png")} />
          </Pressable>

          <View className="flex-col pt-1">
            <Text className="text-sm">Ohene-Agyekum</Text>
            <Text className="text-xs text-gray-600">ohene@hydrasens.com</Text>
          </View>
        </View>

      <Text className="text-gray-600 mt-4 ml-6">Account</Text>

      <View className="ml-10 mt-4 space-y-0">
        <View className="flex flex-row gap-4 items-center">
          <FontAwesome5 name="user-circle" size={28} color="#11458E" />
          <Text className="text-[#11458E] text-[16px]">Personal Settings</Text>
        </View>
        <Pressable className="flex flex-row items-center" onPress={()=>router.push('/notifications')}>
        <View className="flex flex-row gap-4 items-center -mt-1">
        <MaterialCommunityIcons name="bell-outline" size={28} color="#11458E" />
          <Text className="text-[#11458E] text-[16px]">Notifications</Text>
          <View className="bg-red-500 px-1.5 py-0.5 rounded-full">
            <Text className="text-white font-bold">1</Text>
          </View>
        </View>
        </Pressable>
        <View className="flex flex-row gap-4 items-center mb-7">
        <FontAwesome name="language" size={28} color="#11458E" />
          <Text className="text-[#11458E] text-[16px]">Languages</Text>
        </View>
        <View className="h-[1px] mb-3 w-[90%] bg-gray-500" />
        <View className="flex flex-row gap-4 items-center">
          <MaterialIcons name="privacy-tip" size={28} color="#11458E" />
          <Text className="text-[#11458E] text-[16px]">Privacy Notice</Text>
        </View>
        <View className="flex flex-row gap-4 items-center">
        <MaterialCommunityIcons name="file-document-multiple-outline" size={28} color="#11458E" />
          <Text className="text-[#11458E] text-[16px]">Terms and Conditions</Text>
        </View>
        <View className="flex flex-row gap-4 items-center">
        <MaterialCommunityIcons name="folder-check-outline" size={28} color="#11458E" />
          <Text className="text-[#11458E] text-[16px]">Data Security</Text>
        </View>
        <View className="flex flex-row gap-4 items-center">
        <AntDesign name="questioncircleo" size={24} color="#11458E" />
          <Text className="text-[#11458E] text-[16px]">FAQ</Text>
        </View>
      </View>

      <View className="bottom-7 absolute w-full">
      <CustomButton
                  title="Log Out"
                  onPress={() => router.push('/contribution/step1')}
                  textStyle={{ fontSize: 18, color: '#E3290F' }}
                  className="mx-3 mt-7 bg-[#ffcbc5]"
                />
        <CustomButton
                  title="Back To Home"
                  onPress={() => router.push('/contribution/step1')}
                  textStyle={{ fontSize: 18 }}
                  className="mx-3 mt-4"
                />
      </View>
    </SafeAreaView>
  );
}
