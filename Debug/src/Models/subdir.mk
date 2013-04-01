################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
CPP_SRCS += \
../src/Models/Entity.cpp \
../src/Models/GameMap.cpp \
../src/Models/Planet.cpp \
../src/Models/System.cpp \
../src/Models/Unit.cpp 

OBJS += \
./src/Models/Entity.o \
./src/Models/GameMap.o \
./src/Models/Planet.o \
./src/Models/System.o \
./src/Models/Unit.o 

CPP_DEPS += \
./src/Models/Entity.d \
./src/Models/GameMap.d \
./src/Models/Planet.d \
./src/Models/System.d \
./src/Models/Unit.d 


# Each subdirectory must supply rules for building sources it contributes
src/Models/%.o: ../src/Models/%.cpp
	@echo 'Building file: $<'
	@echo 'Invoking: GCC C++ Compiler'
	g++ -O0 -g3 -Wall -c -fmessage-length=0 -std=c++0x -MMD -MP -MF"$(@:%.o=%.d)" -MT"$(@:%.o=%.d)" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '


