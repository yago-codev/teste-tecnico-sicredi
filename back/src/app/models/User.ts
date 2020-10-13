import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm'
import bcrypt from 'bcryptjs'

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  email: string

  @Column()
  password: string

  // o método 'hashPassword' será executado antes dos dados serem persistidos no banco
  @BeforeInsert()
  // o método 'hashPassword' será executado antes dos dados serem atualizados no banco
  @BeforeUpdate()
  // método para encriptar o password
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8)
  }
}