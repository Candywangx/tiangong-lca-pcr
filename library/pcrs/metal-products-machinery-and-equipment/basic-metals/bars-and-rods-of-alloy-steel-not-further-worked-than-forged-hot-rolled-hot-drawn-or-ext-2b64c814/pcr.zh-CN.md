---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-of-alloy-steel-not-further-worked-than-forged-hot-rolled-hot-drawn-or-ext-2b64c814
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 合金钢条、杆（高速钢或硅锰钢条、杆除外），除锻造、热轧、热拉拔或挤压外未经进一步加工

## 1. 范围与适用性

本 PCR 适用于最终制造状态为锻造、热轧、热拉拔或挤压且未经进一步加工的合金钢条、杆的工厂大门生产。其涵盖由高速钢和硅锰钢以外的合金钢制成的直条或定尺产品。前景边界始于接收合金钢钢坯、初轧坯或等效半成品原料，止于完成所声明的热加工路线、除鳞、冷却、切头尾及合格产品检验。

不规则盘卷产品、冷成形或冷加工产品、进一步机械加工产品、高速钢条或杆、硅锰钢条或杆、不锈钢产品、涂层产品以及下游制成品不属于本 PCR。除非研究明确扩展边界并单独报告，否则上游炼钢通过相连接的供应商数据集表示。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-of-alloy-steel-not-further-worked-than-forged-hot-rolled-hot-drawn-or-ext-2b64c814 |
| classification_refs | CPC 3.0: 41244 |
| covered_products | 直条或定尺合金钢条、杆，除锻造、热轧、热拉拔或挤压外未经进一步加工 |
| excluded_products | 高速钢或硅锰钢条、杆；不锈钢产品；不规则盘卷；冷成形、冷加工、机械加工、涂层或以其他方式进一步加工的产品 |
| representative_product | 工厂大门处经切头尾、冷却和检验的定尺热轧合金钢条 |
| production_route | 接收合金钢半成品原料；按需修整；再加热；一种已声明的热加工路线；除鳞；冷却；切头尾；检验 |
| market_state | 工厂大门处可销售条或杆，已声明合金牌号、热加工路线、尺寸、表面状态和交货状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 处于 CPC 41244 所界定的热加工、未经进一步加工状态的可销售合金钢条或杆 |
| How much | 1,000 kg 产品净质量，不含运输包装 |
| How well | 符合所声明的合金牌号、尺寸、公差、表面状态和交货规范；不包括高速钢和硅锰钢 |
| How long or cycle | 工厂大门处一个已完成的生产批次；不表示使用寿命 |
| reference_flow_link | `descaling_cooling_finishing` 的 `reference_product` 输出实现所声明单位 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 除锻造、热轧、热拉拔或挤压外未经进一步加工的合金钢条和杆（高速钢或硅锰钢条或杆除外）`c11c7e9a-d020-4b89-a50c-4a82c0f76943` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 合金牌号和规范；非高速钢；非硅锰钢；产品形态和横截面；热加工路线；尺寸和公差；表面状态；交货状态；生产场址和地域；参考期；上游炼钢数据集；再生含量核算；工厂大门边界 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及所有质量平衡行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对干基或交付状态质量采用一致口径，声明水分或表面附着液体口径，排除运输包装，并将可销售参考输出精确归一化为 1,000 kg。 |
| `electricity_energy` | 所有购入电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表读数，并按 1 kWh = 3.6 MJ 将 kWh 转换为 MJ；披露电压、供应商电力组合、地域、技术和交付边界。 |
| `fuel_gas_volume` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明计量参考温度、压力及干湿基准；未记录换算时不得混用正常立方米与标准立方米。 |
| `process_mass_balance` | 各前景过程 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在归一化前，按一致批次基准核对原料、产品、废钢、氧化铁皮、粉尘和在制品库存。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 热加工场址接收的合金钢钢坯、初轧坯或等效半成品原料，已声明供应商、牌号、质量、温度和表面状态 |
| starting_condition_role | 进入从门到门前景热加工系统的上游产品投入 |
| product_classification_scope | 符合 CPC 3.0 代码 41244 的合金钢条、杆；分类仅作为辅助背景，不能替代语义产品边界 |
| recursive_input_rule | 对已属于本 PCR 产品类别的购入投入，在其供应商大门处用上游数据集表示，不再递归展开为另一个前景生产周期 |
| upstream_dataset_requirement | 将每项接收的合金钢半成品投入连接至在地域、技术和时间上有代表性的炼钢数据集；披露 BOF/EAF 或其他路线、合金牌号及再生含量口径 |
| disclosure | 报告起始原料形态、温度、合金牌号、供应商地域、上游路线、热加工路线、所纳入的修整、除鳞和精整操作以及任何边界扩展 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_start_end` | 前景过程边界 | 纳入半成品合金钢的接收与修整、再加热、所声明的热加工操作、除鳞、冷却、切头尾、检验、直接相关公用工程、现场废物处理及直至工厂大门的直接排放。 | `ec-jrc-fmp-bref-2022` |
| `boundary_upstream_link` | 上游炼钢 | 除非研究明确扩展前景边界并防止重复计算，否则用相连接的上游数据集表示合金钢炼制和半成品生产。 | `worldsteel-lci-methodology-2017` |
| `boundary_downstream_exclusion` | 下游生命周期阶段 | 默认前景边界排除冷成形、冷加工、机械加工、涂层、制造、配送、使用和生命周期末期；任何可选扩展均须单独报告。 | `un-cpc-3-0-structure-2025`; `worldsteel-wire-rod-eco-profile-2023` |
| `boundary_energy_completeness` | 前景公用工程 | 将每种实际燃料、电力供应、蒸汽或购入热量分别记录为原子流；不得用汇总公用工程或能源载体行替代。 | `worldsteel-lci-methodology-2017`; `ec-jrc-fmp-bref-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `feedstock_conditioning` | 原料接收与修整 | `required` | 每个数据集均纳入接收记录；仅在实际实施时纳入切割、打磨或火焰清理 | 确立起始状态并准备原料 | kg 修整后原料 |
| `reheating` | 原料再加热 | `required` | 始终纳入；声明炉型以及每种实际燃料或电加热投入 | 将原料加热至所声明的热加工温度 | kg 再加热原料 |
| `hot_working` | 锻造、热轧、热拉拔或挤压 | `required` | 选择并声明实际采用的路线；仅在分别计量并进行质量平衡时合并路线 | 通过热变形形成条或杆的横截面 | kg 热加工中间产品 |
| `descaling_cooling_finishing` | 除鳞、冷却、切头尾和检验 | `required` | 始终纳入；声明是否采用高压水除鳞和直接接触冷却 | 生产工厂大门处可销售条或杆 | 1,000 kg 参考产品 |

### 过程：原料接收与修整（`feedstock_conditioning`）

#### 输入

##### 产品流

###### 接收的合金钢半成品原料（`received_alloy_steel_feedstock`）

按牌号、供应商和交付状态分别记录每项外购钢坯、初轧坯或等效合金钢半成品投入。

- 选定流：合金钢钢坯或初轧坯
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：为参考产品批次接收并验收的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_conditioning`
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-fmp-bref-2022`

###### 修整用电（`conditioning_electricity`）

记录本过程锯切机、磨削设备、火焰清理抽风设备和物料搬运设备使用的计量交流电。

- 选定流：交流电
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`；Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`；MJ
- 数量规则：由分表取得或按有文件依据的运行时间计算分配的过程用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 修整后原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_conditioning`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 修整后的合金钢原料（`conditioned_alloy_steel_feedstock`）

该内部中间流将实测合金牌号、质量和表面状态传递至再加热过程。

- 选定流：修整后的合金钢钢坯或初轧坯
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：修整后的实测验收原料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 修整后原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_conditioning`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

###### 合金钢修整废钢（`conditioning_steel_scrap`）

将再加热前去除的切头、火焰清理残料或不合格原料作为一项分流收集的合金钢废物流记录。

- 选定流：合金钢修整废钢
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：再加热前从验收原料中去除的称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 修整后原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_conditioning`
- 来源：`ec-jrc-fmp-bref-2022`

##### 基本流

### 过程：原料再加热（`reheating`）

#### 输入

##### 产品流

###### 转入再加热的修整后原料（`reheating_feedstock`）

记录装入再加热炉的内部修整后合金钢质量。

- 选定流：修整后的合金钢钢坯或初轧坯
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：实测炉料装入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 再加热原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reheating_energy_mass`
- 来源：`ec-jrc-fmp-bref-2022`

###### 再加热用天然气（`natural_gas_input`）

仅在气态天然气跨越炉子边界时纳入本行；每种其他实际燃料必须作为各自独立的原子交换添加。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66`；Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`；m3
- 数量规则：在所声明参考条件下计量的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 再加热原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reheating_energy_mass`
- 来源：`ec-jrc-fmp-bref-2022`

###### 再加热辅助用电（`reheating_electricity`）

记录炉子传动、风机、泵、控制系统以及直接相关抽风设备使用的交流电。

- 选定流：交流电
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`；Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`；MJ
- 数量规则：计量的再加热过程用电或有文件依据的分表分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 再加热原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reheating_energy_mass`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 再加热后的合金钢原料（`reheated_alloy_steel_feedstock`）

该内部中间流记录送往热加工的合金钢质量和出炉温度。

- 选定流：再加热后的合金钢钢坯或初轧坯
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：与入炉料和氧化铁皮损失核对后的实测出炉质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 再加热原料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_reheating_energy_mass`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

###### 再加热产生的化石源二氧化碳（`fossil_co2_air`）

记录分配给再加热过程的现场燃烧化石源二氧化碳排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：实测烟道质量，或使用有文件依据的碳含量和氧化数据，按每种已记录燃料计算的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 再加热原料
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_reheating_emissions`
- 来源：`ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

###### 再加热产生的化石源一氧化碳（`carbon_monoxide_air`）

记录现场化石燃料燃烧通过再加热炉烟道排放的实测化石源一氧化碳。

- 选定流：一氧化碳（化石源）`08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：烟道浓度乘以干基标准化烟气流量和运行时间，并记录氧基准修正
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 再加热原料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_reheating_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

###### 再加热产生的一氧化氮（`nitrogen_monoxide_air`）

当具备分物种监测或有文件依据的物种划分方法时，单独记录一氧化氮。

- 选定流：排入空气的一氧化氮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：分物种烟道浓度乘以干基标准化烟气流量和运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 再加热原料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_reheating_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

###### 再加热产生的二氧化氮（`nitrogen_dioxide_air`）

单独记录二氧化氮；不得在两个氮物种行中重复记录以二氧化氮计的氮氧化物总量。

- 选定流：排入空气的二氧化氮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：分物种烟道浓度乘以干基标准化烟气流量和运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 再加热原料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_reheating_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

### 过程：锻造、热轧、热拉拔或挤压（`hot_working`）

#### 输入

##### 产品流

###### 转入热加工的再加热原料（`hot_working_feedstock`）

记录进入所声明热加工路线的内部再加热合金钢原料。

- 选定流：再加热后的合金钢钢坯或初轧坯
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：进入热加工线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 热加工中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_working_mass_energy`
- 来源：`ec-jrc-fmp-bref-2022`

###### 轧制用电（`rolling_electricity`）

对于热轧路线，记录粗轧和精轧机架及直接相关传动设备消耗的交流电；其他热加工路线必须使用单独计量的行并遵守同一原子流规则。

- 选定流：交流电
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`；Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`；MJ
- 数量规则：计量的轧线用电或有文件依据的设备级分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 热加工中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_working_mass_energy`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 热加工合金钢条或杆中间产品（`hot_worked_alloy_steel_bar_rod`）

该内部中间流将实测质量、路线、横截面和出口状态传递至除鳞和精整过程。

- 选定流：热加工合金钢条或杆
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：最终切头尾和检验前的实测生产线输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 热加工中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_working_mass_energy`
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-fmp-bref-2022`

##### 废物流

###### 合金钢切头和轧废（`hot_working_steel_scrap`）

将切头、轧废和不合格热加工产品作为一项分流收集的合金钢废物流记录。

- 选定流：合金钢切头和轧废
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：从热加工线移除的称重废钢质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 热加工中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_working_waste_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

###### 热加工干氧化铁皮（`hot_working_mill_scale`）

将高压水除鳞前收集的干氧化铁皮与湿氧化铁皮和污泥分开记录。

- 选定流：合金钢热加工干氧化铁皮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：热加工过程中收集的干氧化铁皮称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 热加工中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_working_waste_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

##### 基本流

###### 热加工产生的氧化铁颗粒物（`iron_oxide_particulate_air`）

记录机械修整和热加工抽风点捕集或排放的氧化铁颗粒物质量，并声明粒径级别。

- 选定流：排入空气的氧化铁颗粒物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：实测浓度乘以标准化排气流量和运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热加工中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_hot_working_waste_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

### 过程：除鳞、冷却、切头尾和检验（`descaling_cooling_finishing`）

#### 输入

##### 产品流

###### 转入精整的热加工产品（`finishing_hot_worked_product`）

记录进入最终除鳞、冷却、切头尾和检验的内部热加工合金钢条或杆质量。

- 选定流：热加工合金钢条或杆
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：进入精整段的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_mass_water_energy`
- 来源：`ec-jrc-fmp-bref-2022`

###### 除鳞和冷却工艺水（`finishing_water`）

记录供高压水除鳞和直接接触冷却使用的补充水；循环水不得重复计为边界投入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：跨越场址或过程边界的计量补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_mass_water_energy`
- 来源：`ec-jrc-fmp-bref-2022`

###### 精整用电（`finishing_electricity`）

记录除鳞泵、应归属于本过程的冷却水循环、切头尾设备和检验线使用的交流电。

- 选定流：交流电
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`；Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`；MJ
- 数量规则：计量的精整过程用电或有文件依据的设备级分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_mass_water_energy`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售合金钢条或杆（`reference_product`）

该参考产品已完成所声明的热加工路线、除鳞、冷却、切头尾和检验，且不包含进一步加工。

- 选定流：除锻造、热轧、热拉拔或挤压外未经进一步加工的合金钢条和杆（高速钢或硅锰钢条或杆除外）`c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：符合所声明规范的 1,000 kg 可销售产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_finishing_mass_water_energy`
- 来源：`un-cpc-3-0-structure-2025`; `worldsteel-lci-methodology-2017`

##### 废物流

###### 除鳞湿氧化铁皮（`finishing_mill_scale`）

记录从除鳞水中分离的湿氧化铁皮；不得与干氧化铁皮或废水合并。

- 选定流：合金钢除鳞湿氧化铁皮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：报告含水率的脱水氧化铁皮称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_wastewater`
- 来源：`ec-jrc-fmp-bref-2022`

###### 含悬浮氧化铁固体和油的热加工废水（`finishing_wastewater`）

记录循环后排放的水相废物流，并在保留的分析中分别表征悬浮氧化铁固体和油。

- 选定流：含悬浮氧化铁固体和油的热加工废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：内部循环后从前景边界排放的计量废水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_wastewater`
- 来源：`ec-jrc-fmp-bref-2022`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用前景操作 | 优先采用过程细分、分表计量和批次特定质量跟踪，在进行任何分配前直接归属修整、再加热、热加工和精整负荷。 | `worldsteel-lci-methodology-2017` |
| `allocation_internal_recycling` | 内部返回的废钢和氧化铁皮 | 对在建模场址内返回的废钢或氧化铁皮按内部循环处理：在质量平衡中保留其产生量，不作为外部产品输出，并避免再次计入上游负荷或回收收益。 | `worldsteel-wire-rod-eco-profile-2023` |
| `allocation_external_coproduct` | 外部利用的废钢、氧化铁皮或回收材料 | 当输出承担有文件依据的外部产品功能时，优先采用系统扩展并报告被替代功能和替代假设；若不可行，则采用有依据的物理或经济分配，并报告敏感性检查。 | `worldsteel-lci-methodology-2017`; `worldsteel-wire-rod-eco-profile-2023` |
| `allocation_multiple_products` | 多种可销售牌号或尺寸 | 尽可能使用分别计量的过程数据；否则仅按可销售质量分配剩余共用负荷，并披露产品组合、分配基准和敏感性。 | `worldsteel-lci-methodology-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feedstock_conditioning` | `feedstock_conditioning` | 原料、电力、修整后输出和废钢 | 过磅单、批次记录、分表和运行日志 | batch_id; supplier; alloy_grade; feedstock_form; received_mass_kg; accepted_mass_kg; scrap_mass_kg; electricity_kWh; meter_id | 将校准秤和电表记录核对至生产批次 | kg; kWh | 每批次；电表至少每月 | 至少连续 12 个月；较短代表性活动期须有依据 | 每个生产场址和修整线 | 汇总验收批次，归一化前仅分配有文件依据的共用电力 | 秤校准；电表校准；批次核对；异常日志 |
| `cp_reheating_energy_mass` | `reheating` | 炉料、燃料、电力和再加热输出 | 炉子日志、燃料表、发票、秤和分表 | batch_id; furnace_id; charge_mass_kg; discharge_mass_kg; inlet_temperature_C; discharge_temperature_C; natural_gas_m3; gas_reference_conditions; electricity_kWh; operating_hours | 读取校准仪表并核对装炉至出炉质量 | kg; m3; kWh; degree C; h | 每批次，并每月核对仪表 | 至少连续 12 个月；季节影响不显著且有依据时可缩短 | 每座炉子和生产线 | 按炉子和产品族汇总，再按实测再加热输出归一化 | 仪表校准；燃料发票核对；炉子日志完整性 |
| `cp_reheating_emissions` | `reheating` | 化石源二氧化碳、一氧化碳、一氧化氮和二氧化氮 | 连续或周期烟道监测及燃料成分记录 | stack_id; pollutant; concentration; concentration_unit; gas_flow; gas_flow_unit; oxygen_reference; moisture_basis; operating_hours; fuel_carbon_content; oxidation_factor | 采用场址批准的监测方法并保留物种分辨率；不得将氮氧化物总量同时重复计为 NO 和 NO2 | kg; mg/Nm3; Nm3/h; h | 有连续系统时连续监测，否则按许可证规定的活动频次 | 与生产数据相同的代表期 | 每个再加热排放点 | 将浓度和标准化烟气流量换算为质量，按运行时间汇总并按再加热输出归一化 | 校准证书；采样报告；检出限；计算工作簿 |
| `cp_hot_working_mass_energy` | `hot_working` | 再加热原料、轧制用电和热加工输出 | 生产线秤、生产记录和电力分表 | batch_id; route; line_id; input_mass_kg; output_mass_kg; electricity_kWh; passes; section_reduction; product_section | 用校准仪表核对生产线投入和输出质量及路线记录 | kg; kWh | 每批次；电力至少每月 | 至少连续 12 个月或有依据的代表性活动期 | 每条热加工线和路线 | 归一化前仅汇总路线、牌号和产品状态相同的记录 | 秤校准；电表校准；路线和牌号可追溯性 |
| `cp_hot_working_waste_emissions` | `hot_working` | 废钢、干氧化铁皮和氧化铁颗粒物 | 废物称重、氧化铁皮收集记录和排放监测 | batch_id; scrap_mass_kg; dry_scale_mass_kg; scale_moisture; pollutant_fraction; concentration; gas_flow; operating_hours | 对分流固体称重，并由监测数据计算排放质量 | kg; mg/Nm3; Nm3/h; h | 每次清运或每批次；排放按监测频次 | 与生产数据相同的代表期 | 每条生产线和抽风点 | 汇总分流输出和排放质量，再按热加工输出归一化 | 过磅单；实验室分析；监测校准 |
| `cp_finishing_mass_water_energy` | `descaling_cooling_finishing` | 精整投入、补充水、电力和参考产品 | 产品秤、水表、电表和检验记录 | batch_id; input_mass_kg; make_up_water_kg; recirculated_water_kg; electricity_kWh; saleable_mass_kg; rejected_mass_kg; specification; inspection_result | 仅计量跨越边界的补充水，并将可销售输出与检验记录核对 | kg; kWh | 每批次；公用工程至少每月 | 至少连续 12 个月或有依据的代表性活动期 | 每条精整线 | 汇总合格产品和应归属公用工程，再归一化至 1,000 kg 参考产品 | 秤和仪表校准；检验放行；水平衡检查 |
| `cp_finishing_wastewater` | `descaling_cooling_finishing` | 湿氧化铁皮和排放废水 | 废水流量计、脱水氧化铁皮称重和实验室结果 | discharge_point; wastewater_mass_kg; suspended_solids; oil_and_grease; wet_scale_mass_kg; scale_moisture; treatment_route | 测量循环后的净排放量，并分别表征固体和油 | kg; mg/L | 流量连续累计，并进行代表性混合采样 | 与生产数据相同的代表期 | 每个水循环和排放点 | 汇总净排放量和脱水氧化铁皮，不将循环水作为新投入或输出重复计算 | 流量计校准；采样交接记录；实验室认可 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 所有前景行 | 归一化数量 = 记录数量 / 可销售产品质量 × 1,000 kg | 记录的流数量；可销售产品质量 | 每 1,000 kg 参考产品的数量 | `worldsteel-lci-methodology-2017` |
| `calc_electricity_conversion` | 电力行 | electricity_MJ = metered_kWh × 3.6 MJ/kWh | 以 kWh 计的电表读数 | 以 MJ 计的电力 |  |
| `calc_stack_mass` | 监测的烟道排放 | 污染物质量 = 干基标准化浓度 × 干基标准化烟气流量 × 运行时间，并记录单位、氧基准和湿度修正 | 浓度；标准化烟气流量；运行时间；修正因子 | 以 kg 计的污染物质量 | `ec-jrc-fmp-bref-2022` |
| `calc_fossil_co2` | 每种炉用燃料产生的化石源二氧化碳 | 根据采集的燃料数量、供应商碳含量和有文件依据的氧化因子，分别计算各燃料的化石源二氧化碳；仅在保留每项原子燃料结果后求和 | 燃料数量；碳含量；氧化因子 | 以 kg 计的化石源二氧化碳质量 | `worldsteel-lci-methodology-2017` |
| `calc_process_mass_balance` | 各前景过程和完整前景系统 | 质量平衡差 = 总质量投入 - 总质量输出 - 有文件依据的库存变化；解释重大差异并避免重复计算内部转移 | 原料；产品；废钢；氧化铁皮；粉尘；废水固体；库存变化 | 已核对的质量平衡差 | `worldsteel-lci-methodology-2017`; `ec-jrc-fmp-bref-2022` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 原料和参考产品 | 保留供应商、合金牌号、规范、产品形态、路线、尺寸、交货状态和批次追溯信息，以充分证明纳入范围和排除项。 | 供应商证书；批次记录；检验放行 |
| `dq_temporal_representativeness` | 所有前景记录 | 使用至少连续 12 个月的代表性运行数据；对至少六个月的较短期间作出说明，并考虑季节或运行模式变化。 | 覆盖报告；生产日历；代表性说明 |
| `dq_measurement_control` | 质量、能源、水和排放计量 | 使用校准仪器，声明参考条件，并保留原始读数、修正、检出限和分配计算。 | 校准证书；仪表台账；监测报告；计算工作簿 |
| `dq_completeness` | 所有过程 | 记录全部能源投入以及高于所声明截断值的全部材料或排放流；每项排除流不得超过相应过程质量、能源或环境相关性的 1%，全部排除流合计不得超过 5%，且不得以截断为由省略危险或实质性排放。 | 完整性核查表和排除项登记表 |
| `dq_consistency` | PCR 双语实施和数据集 | 采用统一参考质量基准，避免内部转移重复计算，并记录对过程图或计算规则的每项偏离。 | 质量平衡报告；偏离日志；独立审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_product_identity` | 参考产品 | 未声明合金牌号、热加工路线、产品形态、尺寸、交货状态以及明确排除高速钢和硅锰钢的数据集应判为不合格。 | `un-cpc-3-0-structure-2025` |
| `validation_reference_amount` | 参考流 | 确认归一化后可销售输出精确等于 1,000 kg，且不含运输包装、不合格品和外运废物。 | `worldsteel-lci-methodology-2017` |
| `validation_mass_balance` | 各过程和完整前景系统 | 检查含铁物料和总质量平衡；发布前调查并解释差异、内部循环和库存变化。 | `worldsteel-lci-methodology-2017` |
| `validation_energy_completeness` | 再加热和热加工 | 确认每种实际燃料、电力、蒸汽或购入热量均由单独原子行表示，且仪表覆盖期与运行时间一致。 | `worldsteel-lci-methodology-2017`; `ec-jrc-fmp-bref-2022` |
| `validation_emission_no_double_count` | 再加热排放 | 确认物种、空气区室、氧基准和湿度基准；不得在一氧化氮和二氧化氮行中重复记录以二氧化氮计的氮氧化物总量。 | `ec-jrc-fmp-bref-2022` |
| `validation_water_balance` | 除鳞和冷却 | 核对补充水、循环水、蒸发水、产品或污泥夹带水及排放水；仅计算跨边界补充水和净废水排放。 | `ec-jrc-fmp-bref-2022` |
| `validation_boundary_links` | 上游和下游数据集 | 确认上游半成品钢仅连接一次，且冷加工、机械加工、涂层、运输、使用和生命周期末期过程均未纳入，除非另行声明。 | `worldsteel-lci-methodology-2017`; `worldsteel-wire-rod-eco-profile-2023` |
| `validation_unresolved_identities` | TianGong UUID 引用 | 发布前，对每项未解决交换直接核验公共 state_code=100 的精确流；否则数据集须维持“需审查”状态并披露该缺口。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 所声明热加工、未经进一步加工状态的工厂大门合金钢条、杆前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 从门到门建模；连接一个兼容的上游半成品钢数据集后的从摇篮到大门建模；范围协调一致的路线和牌号特定前景比较 |
| excluded_use | 表示不规则盘卷、高速钢、硅锰钢、不锈钢、冷加工或进一步加工产品；未经功能等效性协调和审查的公开比较性声明 |
| required_metadata | PCR id 和版本；CPC 背景；合金牌号；规范；产品形态；热加工路线；尺寸；表面和交货状态；场址和地域；参考期；上游路线和再生含量口径；截断；分配；数据源；未解决身份 |
| required_quality_disclosure | 时间和地域覆盖；初级数据占比；仪表和秤覆盖；质量、能源和水平衡结果；排放监测基准；分配和系统扩展选择；排除流；不确定性；未解决 UUID |
| update_trigger | 合金系列、产品状态、热加工路线、炉用燃料或电力供应、场址技术、水循环、排放控制、分配方法、上游炼钢数据集、规范或代表性数据期发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《CPC 3.0 版结构》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-03） | CPC 41244 的官方分类身份和排除项 |
| `ec-jrc-fmp-bref-2022` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《黑色金属加工行业最佳可行技术参考文件》，EUR 31321 EN，JRC131649，DOI 10.2760/196475，2022 | 热轧过程分解；能源、水、油、废物、废水和直接排放清单；监测和数据质量规则 |
| `worldsteel-lci-methodology-2017` | 方法因子（`method_factor`） | 世界钢铁协会，《钢铁产品生命周期清单方法报告》，ISBN 978-2-930069-89-0，2017，https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf（检索于 2026-09-03） | 声明质量单位、边界披露、采集期、截断、校验、分配和钢铁回收方法规则 |
| `worldsteel-wire-rod-eco-profile-2023` | 数据集（`dataset`） | 世界钢铁协会，《全球线材 LCA 环境概况》，2023 年 6 月，https://worldsteel.org/wp-content/uploads/Wire-rod-Global-Construction.pdf（检索于 2026-09-03） | 可比轧制钢产品说明、工厂大门边界区分、内部废钢核算和数据集画像背景；不用于 CPC 41244 数量范围 |
