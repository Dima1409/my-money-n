import { StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import { useState } from "react";

const COURSES = [
  {
    id: "45k6-j54k-4jth",
    title: "HTML",
  },
  {
    id: "4116-jfk5-43rh",
    title: "JavaScript",
  },
  {
    id: "4d16-5tt5-4j55",
    title: "React",
  },
  {
    id: "LG16-ant5-0J25",
    title: "React Native",
  },
];

const List: React.FC = () => {
  const [courses, setCourses] = useState(COURSES);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <Text style={{ marginBottom: 500 }}>{item.title}</Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
});
