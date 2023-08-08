'use client'

import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

type ForgotPasswordFormInputs = {
  email: string
}

export default function FormularioEsqueceuSenha() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }} className='flex justify-center items-center text-xl p-10'>
          Esqueceu sua senha?
        </Heading>
        <Text className='flex justify-center items-center  p-2'
          fontSize={{ base: 'sm', sm: 'md' }}
          >
          Você receberá um link para redefinir sua senha
        </Text>
        <FormControl id="email" className='flex items-center justify-center'>
        <Input
                                    type="text"
                                    className="peer block min-h-[auto] w-full  border-0 bg-transparent px-3  leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1 border-b-2 border-aliceblue-50"
                                    id="email"
                                    placeholder="seu-email@exemplo.com"
                                    
                                />
        </FormControl>
        <Stack spacing={6}>
            <Button className="bg-gray-400  text-white font-bold py-2 px-4 mt-2 rounded-sm">
      Enviar
    </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}

