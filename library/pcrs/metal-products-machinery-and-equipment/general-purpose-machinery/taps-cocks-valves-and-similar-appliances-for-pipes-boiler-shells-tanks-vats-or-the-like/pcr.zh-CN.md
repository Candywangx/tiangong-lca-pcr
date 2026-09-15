---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.taps-cocks-valves-and-similar-appliances-for-pipes-boiler-shells-tanks-vats-or-the-like
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 用于管道、锅炉、罐、桶或类似品的龙头、旋塞、阀门及类似装置

## 1. 范围与适用性

本 PCR 适用于在管道、锅炉、罐、桶或类似设备中控制、切断、减压、泄压、止回或调节流体的龙头、旋塞、阀门及类似机械装置的工厂门生产。当申报的成品属于 CPC 43240 时，手动操作和自动控制的机械装置均在范围内，包括减压阀和恒温控制阀。

代表性参考产品为钢制阀门。本规则仅在生产者以经过审核的精确流替换材料特定流，且不把非钢制产品标记为 TianGong `Steel valve` 流时，方可指导范围内的其他材料变体。前景边界始于进入工厂的粗制阀体、阀盖、内件、紧固件、涂覆材料、化学品、水和能源，终于工厂门处检验合格的装置。

不包括单独销售的零件；泵和压缩机；液压或气动动力机械；归入其他类别的灭火器阀、气雾阀、轮胎阀、发动机阀、制冷压缩机阀或电子管阀；单独销售的执行机构；安装；运输；使用期、使用期泄漏、维护和寿命终止。默认参考产品不含包装；若研究目标纳入包装，应以单独原子交换建模。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.taps-cocks-valves-and-similar-appliances-for-pipes-boiler-shells-tanks-vats-or-the-like |
| classification_refs | CPC 3.0：43240（精确分类语境；映射接受仍是独立治理决策） |
| covered_products | 用于管道、锅炉、罐、桶或类似设备的成品龙头、旋塞、阀门及类似机械流量控制装置；归入 CPC 43240 时包括减压阀和恒温控制阀 |
| excluded_products | 单独的 CPC 43254 零件；泵；压缩机；动力机械；归入 CPC 43240 以外的灭火器阀、轮胎阀、发动机阀、电子管阀或其他阀门；独立执行机构；安装和使用服务 |
| representative_product | 已声明类型、材料牌号、公称尺寸、压力等级、连接形式、密封系统、驱动方式和检验状态的钢制阀门 |
| production_route | 来料粗制部件的机加工与清洗、条件性表面处理、装配以及功能/泄漏或压力试验 |
| market_state | 制造工厂门处经检验合格的成品装置，默认不含包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在管道或容器系统中控制、切断、减压、泄压、止回或调节已声明流体的流动 |
| How much | 制造工厂门处 1 kg 经检验合格的钢制阀门 |
| How well | 符合已声明的阀门类型、公称尺寸、压力等级、阀体和内件材料牌号、端部连接、阀座/密封系统、驱动方式、适用产品标准和验收试验记录 |
| How long or cycle | 已声明的设计寿命或工作循环基准；工厂门清单按产品质量归一化，不包括使用阶段运行 |
| reference_flow_link | `final_testing` 中 1 kg 验收合格成品输出，不含包装以及报废或返工件 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 钢制阀门 `3cb88a81-618f-4fa5-814e-46399b121622` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 阀门类型和功能；受控流体；阀体、阀盖、阀杆、启闭件、阀座和密封的材料/牌号；公称尺寸；压力等级或额定压力；温度等级；端部连接；驱动方式；涂覆或电镀路线；适用产品与试验标准；试验介质、压力、持续时间和验收结果；工厂地域和技术；报告期；包装纳入情况；再生含量和废料处理选择；产品质量计量基准 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 检验合格的钢制阀门输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终试验、排水之后和排除的包装之前，用校准衡器测定产品净质量；所有交换量归一化到 1 kg 合格输出。 |
| `mass_exchange_basis` | 所有质量计量的材料、部件、废物和水流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留湿基或供货状态实测质量，并按相关性披露浓度、水分或夹带液体基准；不得静默替换为干物质、金属含量或件数。 |
| `electricity_conversion` | 电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表原始读数，并以精确恒等式 1 kWh = 3.6 MJ 转换；报告电网地域、电压、现场发电处理和纳入的损耗。 |
| `water_mass_conversion` | 工艺用水和试验用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先直接计量质量；若计量体积，使用有记录且温度适用的密度，并保留原始体积、温度、密度和换算。 |
| `component_mass_reconciliation` | 被产品吸收的部件和涂层 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将阀体、阀盖、内件、阀座/密封、紧固件、涂层和残留润滑脂质量与合格产品质量、实测废料、收集残余物和库存变化进行核对。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造现场收到的粗制钢阀体和阀盖，以及分开供应的阀杆、启闭件、阀座/密封、紧固件、涂覆材料、工艺化学品、水和能源 |
| starting_condition_role | 前景起始条件；每项来料产品的上游制造和运输仍由关联的上游数据集表示 |
| product_classification_scope | CPC 43240 的成品机械流量控制装置；本 PCR 不把单独的 CPC 43254 零件转化为成品身份 |
| recursive_input_rule | 若成品 CPC 43240 阀门作为投入消耗，应作为精确的上游产品流关联并披露用途；不得在同一过程中再次按本 PCR 递归展开。未完成的阀体、阀盖和装配件使用场址特定前景中间流。 |
| upstream_dataset_requirement | 跨越边界的每项外购部件、化学品、涂覆材料、水、电力和处理服务都应关联地域和技术代表性数据集，或披露数据缺口 |
| disclosure | 披露外购与内部制造部件、机加工操作、清洗化学品、涂覆/电镀路线、装配配置、试验方法、返工环路、报废处理、水循环、废水边界、包装纳入、报告期、地域和分配选择 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | 前景生产 | 从已声明的来料部件状态开始。除非在现场实施并明确添加为单独原子前景过程，否则阀体铸造、锻造、棒材生产、弹性体生产、紧固件制造、涂覆材料制造、电力、水和化学品供应均作为关联投入。 | `us-epa-mpm-2003` |
| `boundary_operations` | 过程纳入 | 纳入为申报产品实施的机加工/清洗、装配和验收试验。仅在产品实际进行电镀、粉末涂装或其他表面处理时纳入相应过程，并逐项识别路线特定投入和输出。 | `us-epa-mpm-2003`; `eu-jrc-stm-bref-2006` |
| `boundary_end` | 工厂门输出 | 终点为工厂门处已排水并验收合格的成品。排除安装、运输、使用期驱动和泄漏、维护以及寿命终止；包装是否加入应另行声明。 | `us-epa-mpm-2003` |
| `boundary_wastewater` | 液体输出 | 在清洗废水、表面处理废水和水压试验废水离开其发生过程的位置记录；现场处理应作为单独过程关联，外送处理应披露处理数据集，不得把废物转换为基本流排放。 | `us-epa-mpm-2003` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_machining_cleaning` | 部件机加工与清洗 | required | 对申报钢制阀门阀体和阀盖实际使用的机加工及清洗适用；披露外购已精加工部件的例外 | 前景部件制备 | 实测输出和废物归一化至 1 kg 检验合格钢制阀门 |
| `surface_treatment` | 表面处理 | conditional | 当阀体或阀盖在报告场址进行电镀、化学处理或粉末涂装时纳入 | 前景防护与精饰 | 每 1 kg 合格钢制阀门的路线特定处理部件质量 |
| `valve_assembly` | 阀门装配 | required | 纳入申报产品的最终机械装配及有记录的返工环路 | 前景最终装配 | 每 1 kg 检验合格钢制阀门对应的未试验装配件 |
| `final_testing` | 最终功能和泄漏/压力试验 | required | 使用已声明的验收试验方法；仅当水作为介质时应用水压试验用水行 | 前景质量验收 | 恰好 1 kg 合格钢制阀门输出 |

### 过程：部件机加工与清洗（`component_machining_cleaning`）

#### 输入

##### 产品流

###### 粗制钢阀体（`mc_rough_steel_body`）

记录进入机加工的来料未完成钢制承压阀体，并保留供应商、钢材牌号、铸造/锻造路线、炉批号和来料质量。

- 选定流：粗制钢阀体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按申报生产批次分配的实测来料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 检验合格钢制阀门
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：

###### 粗制钢阀盖（`mc_rough_steel_bonnet`）

记录将要承压或封闭阀体的来料未完成钢制阀盖，并保留设计版本、钢材牌号、炉批号和来料质量。

- 选定流：粗制钢阀盖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按申报生产批次分配的实测来料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 检验合格钢制阀门
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：

###### 机加工电力（`mc_electricity`）

记录供应给机床、零件清洗机、泵、过滤装置和本过程可直接归因辅助设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：过程电表读数或共享电表的有记录分配值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 机加工阀体和阀盖合计输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：

###### 切削液（`mc_cutting_fluid`）

记录进入机加工系统的新鲜切削液浓缩液和补加液；不得与清洗化学品或废切削液合并。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用新鲜质量减去有记录的未开封退回量；稀释水另行记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 机加工阀体和阀盖合计输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：

###### 机加工与清洗工艺用水（`mc_process_water`）

记录本过程切削液稀释、零件清洗和水洗加入的水，扣除由其他过程进入且单独计量的回用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：跨越过程边界的实测补加水和漂洗水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 机加工阀体和阀盖合计输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：

###### 碱洗用氢氧化钠（`mc_sodium_hydroxide`）

仅当碱洗槽实际加入氢氧化钠时纳入；按供货质量记录并披露溶液浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于申报生产批次的实测供货状态补加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 机加工阀体和阀盖合计输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 机加工钢阀体（`mc_machined_body`）

将验收合格并转入表面处理或装配的机加工阀体记录为一个场址特定内部中间流。

- 选定流：机加工钢阀体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测合格转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 机加工阀体和阀盖合计输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：

###### 机加工钢阀盖（`mc_machined_bonnet`）

将验收合格并转入表面处理或装配的机加工阀盖记录为一个场址特定内部中间流。

- 选定流：机加工钢阀盖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测合格转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 机加工阀体和阀盖合计输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：

##### 废物流

###### 钢制机加工切屑（`mc_steel_swarf`）

记录从申报阀体和阀盖去除的钢屑及细屑；先扣除另行回收和计量的切削液。

- 选定流：钢切屑 `6a16eab5-8097-4e37-8d28-aa1e81b8bb5c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移废物质量，并披露夹带液体基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 机加工阀体和阀盖合计输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：

###### 有色金属机加工切屑（`mc_nonferrous_swarf`）

仅当单独识别的有色金属内件或部件进行机加工时纳入；保留合金身份，不得与钢切屑合并。

- 选定流：有色金属机加工切屑
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移的合金特定废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 机加工阀体和阀盖合计输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：

###### 废切削液（`mc_spent_cutting_fluid`）

记录从机加工系统移出并送往处理或回收的失效切削液；除非单独回收和计量，不得重复计入切屑夹带液。

- 选定流：废切削液 `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开机加工液系统的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 机加工阀体和阀盖合计输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：

###### 部件清洗废水（`mc_cleaning_wastewater`）

在零件清洗和漂洗水进入现场处理或离开场址送往处理的位置记录水性废水。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测废水质量，包括已声明的倒槽液和漂洗水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 机加工阀体和阀盖合计输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：

##### 基本流

### 过程：表面处理（`surface_treatment`）

#### 输入

##### 产品流

###### 进入表面处理的机加工钢阀体（`st_machined_body`）

记录转入已声明涂覆或电镀路线的机加工阀体。

- 选定流：机加工钢阀体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 表面处理阀体和阀盖合计输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：

###### 进入表面处理的机加工钢阀盖（`st_machined_bonnet`）

记录转入已声明涂覆或电镀路线的机加工阀盖。

- 选定流：机加工钢阀盖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 表面处理阀体和阀盖合计输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：

###### 表面处理电力（`st_electricity`）

记录供应给申报路线的清洗、整流、喷涂、回收、通风、固化、泵和可直接归因辅助设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：路线电表读数或共享电表的有记录分配值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 表面处理阀体和阀盖合计输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：

###### 表面处理工艺用水（`st_process_water`）

记录预处理、槽液、漂洗和路线特定清洗加入的水，扣除过程内部实测循环水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：跨越过程边界的实测补加水和漂洗水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 表面处理阀体和阀盖合计输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：

###### 镀锌用锌金属（`st_zinc_metal`）

仅用于已声明的电镀锌或等效金属锌涂层路线；保留阳极牌号、纯度和补加记录。

- 选定流：特高纯锌金属 `2d8ff1bd-e128-4c74-a99d-b8734c99bbd2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于申报批次的实测锌金属补加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 镀锌阀体和阀盖合计输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：

###### 粉末涂料（`st_powder_coating`）

仅用于已声明的粉末涂装路线；记录新鲜粉末领用量减去未开封退回量，回收粉末在清除前留在过程内部。

- 选定流：涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：申报批次实测消耗的新鲜粉末质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粉末涂装阀体和阀盖合计输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 表面处理钢阀体（`st_surface_body`）

记录转入装配的合格处理阀体，并识别具体电镀、转化膜或涂层体系。

- 选定流：表面处理钢阀体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测合格转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 表面处理阀体和阀盖合计输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：

###### 表面处理钢阀盖（`st_surface_bonnet`）

记录转入装配的合格处理阀盖，并识别具体电镀、转化膜或涂层体系。

- 选定流：表面处理钢阀盖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测合格转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 表面处理阀体和阀盖合计输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：

##### 废物流

###### 表面处理废水（`st_wastewater`）

仅当路线特定的倒槽液、漂洗水、洗涤器用水和水性预处理废水在处理前实际合并时，才记录为一个已表征废水流；否则应添加单独原子废水行。

- 选定流：金属表面处理废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在处理或转移边界实测质量，并披露化学组成和来源操作
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 表面处理阀体和阀盖合计输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：

###### 粉末涂装废弃物（`st_powder_waste`）

仅用于粉末涂装路线，记录作为废物转移的未回收过喷粉末或清除粉末。

- 选定流：粉末涂装废弃物 `9aa53a82-5462-400e-9096-efab7718201f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测干基或收集状态废物质量，并披露基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粉末涂装阀体和阀盖合计输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：

##### 基本流

### 过程：阀门装配（`valve_assembly`）

#### 输入

##### 产品流

###### 装配用成品钢阀体（`as_finished_body`）

记录转入装配的机加工或表面处理阀体，并使用与供给过程相同的前景中间流身份。

- 选定流：装配用成品钢阀体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发往合格和不合格装配件的实测阀体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未试验钢制阀门装配件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：

###### 装配用成品钢阀盖（`as_finished_bonnet`）

记录转入装配的机加工或表面处理阀盖，并使用与供给过程相同的前景中间流身份。

- 选定流：装配用成品钢阀盖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发往合格和不合格装配件的实测阀盖质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未试验钢制阀门装配件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：

###### 钢制阀杆（`as_valve_stem`）

记录被申报阀门吸收的产品特定钢制阀杆，并保留钢材牌号、涂层、供应商和图纸版本。

- 选定流：钢制阀杆
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：物料清单数量与实测领用和退回质量核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未试验钢制阀门装配件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_records`
- 来源：

###### 钢制阀瓣或启闭件（`as_valve_disc`）

记录产品特定的钢制阀瓣、塞体、球体、闸板、针体或其他单一申报启闭件设计；一个数据集中不得合并多个备选件。

- 选定流：钢制阀瓣
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：申报阀瓣设计的物料清单数量，并与领退料记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未试验钢制阀门装配件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_records`
- 来源：

###### 弹性体阀座（`as_elastomer_seat`）

仅当申报阀门使用弹性体阀座或密封时纳入，并识别精确的弹性体配方和部件形状。

- 选定流：弹性体阀座
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：申报阀座设计的物料清单数量，并与领退料记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未试验钢制阀门装配件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_records`
- 来源：

###### 钢紧固件（`as_steel_fasteners`）

用已审核紧固件产品流记录被申报阀门吸收的钢制螺栓、螺母、螺钉或螺柱，并保留等级、涂层和件数到质量换算。

- 选定流：钢紧固件 `ebfe08f5-42c8-484e-b39a-684a35981c24`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：件数乘以经验证的单件质量，并与领退料记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未试验钢制阀门装配件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_records`
- 来源：

###### 阀门装配润滑脂（`as_lubricating_grease`）

仅纳入保留在产品中或装配期间消耗的润滑脂；识别产品配方，不得与机加工切削液合并。

- 选定流：阀门装配润滑脂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测领用量减去可回收退回量，并分配到申报装配件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未试验钢制阀门装配件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：

###### 装配电力（`as_electricity`）

记录装配工具、压装设备、搬运设备和可直接归因辅助设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：过程电表读数或共享电表的有记录分配值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未试验钢制阀门装配件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已装配未试验钢制阀门（`as_assembled_valve`）

记录获得成品验收状态前转入最终试验的已装配阀门。

- 选定流：已装配未试验钢制阀门
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量，包括之后返工或报废的装配件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未试验钢制阀门装配件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：

##### 废物流

###### 不合格装配件产生的新钢废料（`as_new_steel_scrap`）

仅记录在拆除可复用内件、弹性体、流体和其他单独管理材料后，生产过程中不可修复的钢制不合格件；送返工的装配件留在前景系统内。

- 选定流：新钢废料 `bd11f214-0a1c-4d5d-ba77-c7f6a5780f33`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：最终报废处置后从装配过程转出的实测钢废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未试验钢制阀门装配件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：

##### 基本流

### 过程：最终功能和泄漏/压力试验（`final_testing`）

#### 输入

##### 产品流

###### 进入最终试验的未试验装配阀（`te_assembled_valve`）

记录从 `valve_assembly` 收到的同一装配中间流，并保持产品型号和批次可追溯性。

- 选定流：已装配未试验钢制阀门
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测试验批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 检验合格钢制阀门
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_testing_records`
- 来源：

###### 水压试验用水（`te_process_water`）

仅当水是申报的试验介质时纳入。记录跨越试验边界的新鲜补加量，并披露循环、排放频率、添加剂和排水做法。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：合格、返工和不合格试验循环使用的实测新鲜补加水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 检验合格钢制阀门
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_testing_records`
- 来源：

###### 试验台电力（`te_electricity`）

记录泵、压缩机、控制系统、数据采集、干燥和试验台可直接归因辅助设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：试验台电表读数或共享电表的有记录分配值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 检验合格钢制阀门
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_testing_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 检验合格钢制阀门（`te_steel_valve`）

仅记录满足申报验收准则且已排水的产品。本行是唯一参考产品输出。

- 选定流：钢制阀门 `3cb88a81-618f-4fa5-814e-46399b121622`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测合格产品净质量并归一化为恰好 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：恰好 1 kg 检验合格钢制阀门
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_testing_records`
- 来源：

##### 废物流

###### 水压试验废水（`te_test_wastewater`）

仅纳入离开试验系统的废弃试验水，并保留添加剂、污染状态、排放去向和是否现场处理等记录。

- 选定流：阀门水压试验废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在处理或转移边界实测排放试验水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 检验合格钢制阀门
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_testing_records`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共享制造操作 | 首先通过分表计量、批次特定领料、机器工时、槽负荷、试验循环和直接废物计量避免分配。 | |
| `allocation_mass` | 无法避免的共享操作 | 若无法进行物理细分，应按有记录的因果参数分配共享材料和能源；仅当加工质量能合理代表机器、槽液或搬运需求时使用该参数。 | |
| `allocation_rework` | 返工环路 | 返工件及新增机加工、清洗、涂覆、装配和试验交换均留在前景系统内并归属于合格输出，不作为共产品。 | |
| `allocation_scrap` | 钢切屑和新钢废料 | 分别记录废物质量和下游回收或处理。除非研究采用并披露一致的回收分配方法，不得从前景清单中扣减避免的原生金属负担。 | |
| `allocation_no_product_credit` | 废水和涂覆废物 | 废切削液、废水和粉末涂装废弃物按废物处理，除非有符合规格、可销售的共产品离场；应披露任何偏离及其分配基准。 | `us-epa-mpm-2003` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_machining_records` | `component_machining_cleaning` | 全部投入、中间输出、切屑、废切削液和清洗废水 | 仪表、衡器、领退料、转移和废物联单记录 | lot_id; product_model; component_id; supplier; material_grade; opening_stock; receipts; issues; returns; closing_stock; meter_start; meter_end; water_mass_or_volume; density; accepted_transfer_mass; waste_mass; retained_fluid_basis | 校准仪表与衡器，并与库存和转移记录核对 | kg; MJ; 保留原始仪表单位 | 每批或每班，按月汇总 | 至少一个代表性生产年度，较短生产活动则覆盖全活动 | 服务于申报产品的全部机床、清洗机、槽体和废物点 | 汇总净领用和实测交换；共享仪表按有记录机器工时或加工质量分配，并按合格输出归一化 | 校准状态；发票；领退料记录；批次流转卡；衡器票据；仪表日志；废物联单；核对签字 |
| `cp_surface_treatment_records` | `surface_treatment` | 路线特定部件、电力、水、锌、粉末涂料、废水和涂覆废物 | 槽液、涂装线、仪表、领退料、转移和废物记录 | lot_id; route_id; bath_id; coating_product; opening_stock; issues; recovered_powder; returns; closing_stock; meter_start; meter_end; make_up_water; treated_input_mass; treated_output_mass; wastewater_mass; waste_mass; chemistry | 校准仪表/衡器与槽液和涂料库存核对 | kg; MJ; 保留原始仪表单位 | 每批或每班，按月汇总 | 至少一个代表性生产年度，较短生产活动则覆盖全活动 | 范围内各电镀、预处理、粉末、固化、漂洗和废物系统 | 电镀和粉末路线分开；汇总净消耗和输出并按处理输出归一化 | 校准；批记录；槽液分析；涂料领退记录；仪表日志；废物联单；路线核对 |
| `cp_assembly_records` | `valve_assembly` | 被产品吸收的部件、润滑脂、电力、装配输出和新钢废料 | BOM、工单、领退料、衡器、仪表、返工和不合格记录 | product_model; drawing_revision; lot_id; component_id; item_count; verified_unit_mass; issues; returns; grease_issue; meter_start; meter_end; assembled_mass; rework_count; reject_disposition; scrap_mass | BOM 计算并用校准质量和生产记录检查 | kg; MJ; 件数作为原始字段保留 | 每工单或每班，按月汇总 | 至少一个代表性生产年度，较短生产活动则覆盖全活动 | 服务于申报产品的全部装配和返工工位 | 件数乘以验证单件质量；核对领料、退料、装配输出、返工和废料 | 受控 BOM；图纸；单件质量验证；仪表日志；返工流转卡；不合格和废料记录 |
| `cp_testing_records` | `final_testing` | 装配投入、水压水、电力、合格产品和废弃试验水 | 试验、仪表、衡器、补水、排水、返工和报废记录 | product_model; serial_or_lot; test_standard; medium; pressure; temperature; hold_time; acceptance_result; retest_count; input_mass; accepted_mass; water_make_up; water_discharge; meter_start; meter_end; drainage_state | 校准试验台、仪表和成品衡器，并保留验收记录 | kg; MJ; 压力和时间使用申报单位 | 每次验收试验，按月汇总 | 至少一个代表性生产年度，较短生产活动则覆盖全活动 | 服务于申报产品的全部最终试验台和关联水系统 | 汇总合格排水后质量；纳入合格、复试和不合格循环资源；按合格质量归一化 | 校准证书；签字/电子试验记录；仪表日志；排水记录；工单追溯 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 所有清单交换 | 归一化量 = 报告期交换量 / 报告期已排水合格钢制阀门质量 | 实测交换量；`te_steel_valve` 合格质量 | 每 1 kg 参考产品交换量 | |
| `calc_net_material_issue` | 切削液、氢氧化钠、锌、粉末涂料、润滑脂和部件 | 净消耗 = 期初库存 + 入库 - 期末库存 - 未开封退料 - 单独计量转移库存 | 库存、入库、退料和转移记录 | 产品消耗质量 | |
| `calc_component_mass` | 阀杆、阀瓣、阀座和紧固件 | 被产品吸收质量 = 合格装配件数 × 经验证单件质量，并与净领退料质量核对 | 受控 BOM；合格件数；经验证单件质量；领料；退料 | 部件吸收质量 | |
| `calc_electricity_mj` | 电力行 | 电力 MJ = 实测 kWh × 3.6；保留原始 kWh 读数和仪表边界 | 仪表起止读数或分配 kWh | MJ 电力 |
| `calc_water_mass` | 水流 | 无直接质量时，水质量 = 实测体积 × 有记录密度；保留体积、温度、密度和不确定度 | 水体积；温度；密度 | kg 水质量 | |
| `calc_mass_reconciliation` | 每个过程 | 将投入和期初在制品与产品输出、废物、实测损失及期末在制品比较；调查并披露物料残差 | 过程全部质量流和库存变化 | 经签字的过程物料平衡核对 | |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留型号、阀门功能/类型、受控流体、材料牌号、尺寸、压力和温度等级、连接、驱动、涂覆、试验标准和工厂门状态。 | 受控图纸/BOM、产品规范、铭牌或流转卡及合格试验记录 |
| `dq_temporal` | 全部前景数据 | 连续生产使用代表性连续 12 个月；较短活动覆盖全部活动，并披露季节性、启动、停机和异常排除。 | 报告期定义、生产日历和异常日志 |
| `dq_completeness` | 四个过程 | 核对每个已映射仪表、领料点、中间转移、返工环路、废物点和试验结果；量化排除流并说明截断，不得隐藏在组合行中。 | 经签字流图、仪表清单、核对、废物联单和排除登记 |
| `dq_measurement` | 仪表和衡器 | 使用在校准有效期内且量程合适的仪器，保留原始读数、换算、分配因子和不确定度或分辨率。 | 校准和维护记录、原始仪表/衡器日志及计算表 |
| `dq_upstream` | 外购投入和外部处理 | 匹配地域、技术、材料牌号或化学组成、产品状态和交付边界；披露代理，不得使用已拒绝的 TianGong UUID 候选。 | 供应商记录、数据集元数据、UUID 审核和代理登记 |
| `dq_route_separation` | 表面处理 | 锌路线和粉末涂装路线分开；当申报场址使用其他化学品或治理设施时，添加单独原子化学品、废物和排放行。 | 路线流图、槽液/涂料记录和排放/废物清单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认 `te_steel_valve` 是唯一参考产品输出，使用 UUID `3cb88a81-618f-4fa5-814e-46399b121622`，以 Mass 和 kg 计量，并代表已排水合格钢制阀门而非零件、未试验件、包装或非钢制装置。 | `un-cpc-3-0-structure-2025` |
| `validate_inventory_completeness` | 过程清单 | 确认 37 个定义行均带有本 PCR 所示已审核 UUID 或在清单中有明确的未解决身份；新增场址特定流应为原子流并具有路线特异性。 | |
| `validate_mass_balance` | 每个过程和完整前景系统 | 核对实测投入、内部转移、合格输出、返工、废物、库存变化和已披露残差；数据集发布前调查无法解释的残差。 | |
| `validate_route_condition` | 条件行 | 仅在已声明镀锌路线中要求锌投入；仅在已声明粉末路线中要求粉末涂料和粉末废物；仅在已声明水试验路线中要求水压水和废水；不得平均互斥路线。 | `eu-jrc-stm-bref-2006` |
| `validate_testing` | 成品验收 | 验证合格产品质量可追溯到适用试验标准、介质、压力、温度、保压时间、结果、复试和报废记录；参考输出排除不合格件。 | `us-epa-mpm-2003` |
| `validate_no_external_ranges` | 数量检查 | 所有数量均来自前景记录或其计算。在至少两个相互独立、原文已核验且系统边界兼容的来源支持前，不授权外部数值范围。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 审查和发布后作为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 在过程数据集和生命周期模型中对已声明钢制阀门进行从摇篮到工厂门建模 |
| allowed_use | 用于已声明的钢制阀门型号、材料牌号、尺寸/压力等级、制造路线、试验方法、地域、期间和工厂门状态；仅在这些限定信息具有充分代表性时作为背景数据 |
| excluded_use | 把非钢制产品标记为 `Steel valve`；单独零件；独立执行机构；安装；运输；使用期泄漏或驱动能源；维护；寿命终止；未单独建模的包装；无条件跨技术或跨地域替代 |
| required_metadata | 全部参考流限定信息；场址和报告期；过程图；仪表和分配边界；外购与内部制造部件；涂覆路线；试验记录；返工和报废处理；废水去向；上游数据集选择；未解决 UUID 和范围需求 |
| required_quality_disclosure | 前景覆盖；校准和时间代表性；物料平衡残差；共享仪表分配；水换算；路线分离；供应商和上游代表性；代理或数据缺口；再生含量和废料分配方法 |
| update_trigger | 阀门设计或材料牌号、公称尺寸/压力等级组合、部件采购、机器技术、清洗化学品、表面处理路线、试验标准或介质、场址或电力供应、废水处理、分配方法、报告期发生变化，或未解决 UUID/范围证据需求得到解决 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《Central Product Classification Version 3.0》结构，CPC 43240，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 官方分类身份和英文产品标题；原始 CSV 字节由回执 `179c0d1b-a2ad-4a02-a96a-2c7e3c809e3f` 核验，SHA-256 `sha256:5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c` |
| `cn-product-specific-origin-rules-hs8481-2015` | 官方指南（`official_guidance`） | 《第2部分 产品特定原产地规则》，HS 84.81 中英双语条目（2015 年政府网站 PDF）。https://www.ks.gov.cn/kss/Upload_zwgk/ggxx2015122195763975384.pdf | 本产品系列专业中文术语；已核验原文第 160 页文本及渲染 |
| `us-epa-mpm-2003` | 官方指南（`official_guidance`） | 美国环境保护署，《Development Document for the Final Effluent Limitations Guidelines and Standards for the Metal Products and Machinery Point Source Category》，EPA-821-B-03-001，2003 年 2 月。https://www.epa.gov/sites/default/files/2015-11/documents/mp-m_dd_2003.pdf | 机加工、清洗、表面准备/沉积/精饰、装配、泄漏试验和废水边界的原文过程分解；已核验第 4-12 至 4-14 页及附录 D |
| `eu-jrc-stm-bref-2006` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《Surface Treatment of Metals and Plastics BAT Reference Document》，2006 年 8 月通过。https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics | 已核验正式网页关于电解和化学金属表面处理、水基过程及相关活动的原文范围 |
