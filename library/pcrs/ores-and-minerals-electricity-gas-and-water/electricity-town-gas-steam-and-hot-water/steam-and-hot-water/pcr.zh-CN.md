---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.steam-and-hot-water
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 蒸汽和热水

## 1. 范围与适用性

本PCR适用于通过蒸汽或热水供应的有效热能，涵盖锅炉、电加热、热电联产、余热换热和热泵。前景数据包须声明一种载体、其热力状态、一个计量交付点及一个核算期。混合生产组合须先按载体和状态拆分，再汇总。设备制造、以电力为参考产品的生产、未加热的水、冰、制冷服务及下游用热不属于本产品类别。具有实质影响的基础设施及其报废通过关联数据集纳入；所有排除及截断须明确评估。

产品类别名称译为“蒸汽和热水”：蒸汽指供热用水蒸气，热水指液态载热介质。该中文类别名是对已核实的联合国统计司英文标题所作的专业翻译，不宣称为联合国统计司发布的官方中文名称。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.steam-and-hot-water |
| classification_refs | CPC 3.0: 17300；仅作分类识别，不宣称已有接受映射 |
| covered_products | 蒸汽供热；热水供热 |
| excluded_products | 锅炉和汽轮机设备；未加热的水；制冷；用热服务 |
| representative_product | 以一种已声明蒸汽或热水状态交付的计量热能 |
| production_route | 燃烧锅炉；电加热；热电联产；余热回收；热泵 |
| market_state | 生产者或用户指定交付点的热能 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 通过一种已声明载体供应有效热能 |
| How much | 1 MJ 净交付热量 |
| How well | 声明压力、温度、相态、蒸汽干度、供回焓基准及交付点 |
| How long or cycle | 声明核算期；纳入启停及季节运行 |
| reference_flow_link | supplied_heat |


| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 蒸汽或热水供热 `8c96c869-cd82-4301-bb74-b2f9f61ce109` |
| 参考流属性 | 总热值 `93a60a56-a3c8-14da-a746-0800200c9a66` |
| 参考单位组 | 能量 `93a60a57-a3c8-11da-a746-0800200c9a66` |
| 参考单位 | MJ |
| 必需限定信息 | 载体；相态；压力；供热温度；湿蒸汽干度；回水温度和压力或明确的无回流基准；计量交付点；生产技术；燃料；地域；核算期；热电联产分配；管网范围 |


参考流为一个能量交换。数据库名称覆盖产品类别，但具体数据集须固定载体，不得将不同载体的替代交换合并为一行。限定信息须记录在元数据、产品说明或参考流备注中。保留数据库属性名称以保持身份一致；热量按净传递能量计量，不为水赋予燃烧热值。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| heat_basis | supplied_heat | 能量 | MJ | 所有数量以每参考流为基准：指定交付点的1 MJ净热量。采用cp_heat采集并保持核算期一致。 |
| heat_meter | supplied_heat | 能量 | MJ | 使用经校准的净热量计。否则分别积分供、回焓流，并扣除净输出载体质量乘以已声明的补水基准比焓。记录状态、焓方法及蒸汽干度；开放蒸汽系统不得假定供、回质量相等。 |
| electric_units | generation_power; delivery_power; chp_electricity | 能量 | MJ | 采用1 kWh = 3.6 MJ将计量电量换算为MJ；保留原始读数和计量边界。 |
| gas_volume | gas_fuel | 体积 | m3 | 保留气表基准温度、绝对压力、压缩因子修正及供应商热值基准；基准状态不一致的气体体积不得直接比较。 |
| chemical_mass | alkali; oxygen_scavenger | 质量 | kg | 记录化学品产品质量、纯度及溶液浓度；活性化学品质量为产品质量与实测质量分数之积。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 燃料、电力、补水及外购蒸汽在已识别场址入口交付；余热入口另行声明 |
| starting_condition_role | 前景从场址计量接收开始；上游生产由背景数据表示 |
| product_classification_scope | 蒸汽和热水热能；电力共产品保持独立身份 |
| recursive_input_rule | 外购蒸汽仅记录一次为imported_steam_heat；关联供应商数据集，不递归重复展开同一供应商 |
| upstream_dataset_requirement | 关联相容的燃料、电力、水、化学品、外购热、废物处理及重要基础设施上游数据集 |
| disclosure | 声明厂端或用户端交付点、管网长度和所有权、回流回路、余热来源、联产范围、基础设施、截断及上游覆盖 |


| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_operation | foreground | 纳入指定交付点内的水管理、发热、计量及交付，以及启停和待机消耗。 | `doe-steam-boiler-water` |
| boundary_returns | water_management | 分别计量补水与回流；内部凝结水循环为平衡记录，不重复记录为外购水。记录外排排污水及泄漏。 | `doe-steam-boiler-water` |
| boundary_network | heat_delivery | 用户端交付点须纳入管网泵耗和损失；厂端交付点须披露排除的下游管网。 | `doe-steam-boiler-water` |
| boundary_chp | heat_generation | 分配共同负荷前纳入完整联产发电和热回收机组；总发电量须扣除内部自用电。 | `epa-chp-efficiency` |
| boundary_additions | all processes | 对于通用清单未列出的实际燃料、处理药剂、灰渣、制冷剂及环境热源，须分别添加原子交换；不得整体忽略未列交换。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| water_management | 水处理及回流核算 | required | 指定交付点内 | 前景 | 1 MJ净交付热量 |
| heat_generation | 发热与热回收 | required | 指定交付点内 | 前景 | 1 MJ净交付热量 |
| heat_delivery | 热量计量与交付 | required | 指定交付点内 | 前景 | 1 MJ净交付热量 |


每张卡片均有独立inclusion_condition。交换缺失须以可审计的不适用记录证明，不得假设为零。上述过程构成一个前景系统；内部热量及水转移须核对，不额外记录为外购投入。适用路线须计量环境取热及回收热，并声明为独立补充交换。

### 过程：水处理及回流核算（`water_management`）

#### 输入

##### 产品流

###### 自来水（`makeup_water`）

纳入条件（`inclusion_condition`）：外购水进入补水回路。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_material采集交换数量；保留未分配总量，并提供每参考流的分配后数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`doe-steam-boiler-water`

###### 氢氧化钠（`alkali`）

纳入条件（`inclusion_condition`）：声明的水处理配方使用氢氧化钠。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_material采集交换数量；保留未分配总量，并提供每参考流的分配后数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`doe-steam-boiler-water`

###### 亚硫酸钠（`oxygen_scavenger`）

纳入条件（`inclusion_condition`）：采用亚硫酸钠除氧。

- 选定流：亚硫酸钠 `4fbdce66-c23d-4890-b16e-d53c39afa224`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_material采集交换数量；保留未分配总量，并提供每参考流的分配后数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`doe-steam-boiler-water`

#### 输出

##### 废物流

###### 锅炉排污废水（`boiler_blowdown`）

纳入条件（`inclusion_condition`）：锅炉排污水送往外部处理。

- 选定流：锅炉排污废水
- 流属性/单位：质量 / kg
- 数量规则：采用cp_waste采集交换数量；保留未分配总量，并提供每参考流的分配后数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`doe-steam-boiler-water`

### 过程：发热与热回收（`heat_generation`）

#### 输入

##### 产品流

###### 交流电（`generation_power`）

纳入条件（`inclusion_condition`）：发热设备、电加热器或热泵使用外购电力。

- 选定流：交流电 `a500e350-83b8-4347-894e-b81ecd418615`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`；单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用cp_energy采集交换数量；保留未分配总量，并提供每参考流的分配后数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

###### 管输品质天然气（`gas_fuel`）

纳入条件（`inclusion_condition`）：燃烧管道天然气。

- 选定流：管输品质天然气 `7766e51e-0b64-4fbb-89cb-489c33293137`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66`；单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：采用cp_fuel采集交换数量；保留未分配总量，并提供每参考流的分配后数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel`
- 来源：

###### 烟煤（`coal_fuel`）

纳入条件（`inclusion_condition`）：燃烧烟煤。

- 选定流：烟煤 `f10e7264-fc49-491a-a886-f717e3c7a437`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_fuel采集交换数量；保留未分配总量，并提供每参考流的分配后数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel`
- 来源：

###### 重质燃料油（`oil_fuel`）

纳入条件（`inclusion_condition`）：燃烧重质燃料油。

- 选定流：重质燃料油 `9490cf0e-a790-44a1-9c2f-3793bbdb452d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_fuel采集交换数量；保留未分配总量，并提供每参考流的分配后数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel`
- 来源：

###### 木屑（`wood_fuel`）

纳入条件（`inclusion_condition`）：燃烧木片。

- 选定流：木屑 `e0ccd0e1-9f75-4f2a-a9b9-5ebc8b3e5315`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_fuel采集交换数量；保留未分配总量，并提供每参考流的分配后数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel`
- 来源：

###### 蒸汽供热（`imported_steam_heat`）

纳入条件（`inclusion_condition`）：外购蒸汽向换热器供热；上游制汽位于前景边界外。

- 选定流：蒸汽供热 `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- 流属性/单位：总热值 `93a60a56-a3c8-14da-a746-0800200c9a66`；单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用cp_heat采集交换数量；保留未分配总量，并提供每参考流的分配后数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat`
- 来源：

#### 输出

##### 产品流

###### 交流电（`chp_electricity`）

纳入条件（`inclusion_condition`）：热电联产机组扣除自用电后输出净电量。

- 选定流：交流电 `a500e350-83b8-4347-894e-b81ecd418615`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`；单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用cp_energy采集交换数量；保留未分配总量，并提供每参考流的分配后数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`epa-chp-efficiency`

##### 废物流

###### 燃煤底灰（`bottom_ash`）

纳入条件（`inclusion_condition`）：燃煤底灰外运处置；作为共产品出售时须另行判定流类型并处理分配。

- 选定流：燃煤底灰
- 流属性/单位：质量 / kg
- 数量规则：采用cp_waste采集交换数量；保留未分配总量，并提供每参考流的分配后数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 化石二氧化碳，排入空气（`fossil_co2`）

纳入条件（`inclusion_condition`）：前景内发生化石碳氧化。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：采用cp_emissions采集交换数量；保留未分配总量，并提供每参考流的分配后数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：

###### 生物源二氧化碳，排入空气（`biogenic_co2`）

纳入条件（`inclusion_condition`）：前景内发生生物源碳氧化。

- 选定流：生物源二氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：采用cp_emissions采集交换数量；保留未分配总量，并提供每参考流的分配后数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：

###### 氮氧化物，排入空气（`nitrogen_oxides`）

纳入条件（`inclusion_condition`）：燃烧释放氮氧化物。

- 选定流：氮氧化物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：采用cp_emissions采集交换数量；保留未分配总量，并提供每参考流的分配后数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：

###### 二氧化硫，排入空气（`sulfur_dioxide`）

纳入条件（`inclusion_condition`）：燃料硫产生二氧化硫，计量值为治理后排放。

- 选定流：二氧化硫，排入空气
- 流属性/单位：质量 / kg
- 数量规则：采用cp_emissions采集交换数量；保留未分配总量，并提供每参考流的分配后数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：

###### 一氧化碳，排入空气（`carbon_monoxide`）

纳入条件（`inclusion_condition`）：不完全燃烧释放一氧化碳。

- 选定流：一氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：采用cp_emissions采集交换数量；保留未分配总量，并提供每参考流的分配后数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：

###### 粒径小于2.5微米的颗粒物，排入空气（`fine_particles`）

纳入条件（`inclusion_condition`）：细颗粒物通过烟囱或无组织排放跨越空气边界。

- 选定流：粒径小于2.5微米的颗粒物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：采用cp_emissions采集交换数量；保留未分配总量，并提供每参考流的分配后数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：

###### 甲烷，排入空气（`methane_emission`）

纳入条件（`inclusion_condition`）：存在甲烷泄漏或不完全燃烧。

- 选定流：甲烷，排入空气
- 流属性/单位：质量 / kg
- 数量规则：采用cp_emissions采集交换数量；保留未分配总量，并提供每参考流的分配后数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：

###### 氧化亚氮，排入空气（`nitrous_oxide`）

纳入条件（`inclusion_condition`）：燃烧释放氧化亚氮。

- 选定流：氧化亚氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：采用cp_emissions采集交换数量；保留未分配总量，并提供每参考流的分配后数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：

###### 1,1,1,2-四氟乙烷，排入空气（`refrigerant_loss`）

纳入条件（`inclusion_condition`）：声明的热泵含R134a且发生泄漏；其他制冷剂须建立独立原子流行。

- 选定流：1,1,1,2-四氟乙烷，排入空气
- 流属性/单位：质量 / kg
- 数量规则：采用cp_emissions采集交换数量；保留未分配总量，并提供每参考流的分配后数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：

### 过程：热量计量与交付（`heat_delivery`）

#### 输入

##### 产品流

###### 交流电（`delivery_power`）

纳入条件（`inclusion_condition`）：泵或输配设备使用外购电力。

- 选定流：交流电 `a500e350-83b8-4347-894e-b81ecd418615`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`；单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用cp_energy采集交换数量；保留未分配总量，并提供每参考流的分配后数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

#### 输出

##### 产品流

###### 蒸汽或热水供热（`supplied_heat`）

纳入条件（`inclusion_condition`）：数据集输出由一种已声明载体和一个供热交付点确定。

- 选定流：蒸汽或热水供热 `8c96c869-cd82-4301-bb74-b2f9f61ce109`
- 流属性/单位：总热值 `93a60a56-a3c8-14da-a746-0800200c9a66`；单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：1 MJ
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_separate | all processes | 先将单独计量的设备及输配负荷直接归属，再分配共同发热负荷。 |  |
| allocation_chp | heat_generation | 不可拆分的联产共同负荷采用与研究方法一致的、明确声明的物理分配。采集净外送电量、各品位有效热量及共同燃料消耗；说明能量、火用或其他因果模型为何能够代表耦合过程。不同热品位之间不得默认为等价值能量分配。 | `epa-chp-efficiency` |
| allocation_recovery | imported_steam_heat | 回收热须声明上游负荷或截断协议并关联来源过程。避免的热或电生产属于独立的后果型比较；未声明系统扩展时不得从归因型清单扣除。 |  |
| allocation_losses | heat_delivery | 将实际发热及管网损失归属至指定交付点的交付热量。凝结水回流属于内部回收，不自动取得避免生产抵扣。 | `doe-steam-boiler-water` |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_heat | heat_delivery | 交付及外购热量 | 计量及状态记录 | 载体；交付点；供回质量；压力；温度；蒸汽干度；供回比焓；净热量；补水基准比焓 | 经校准热量计或热力积分；核对供方热表及回流回路记录 | MJ | 连续采集、按月核对 | 同一完整声明运行期 | 指定热量交付点 | 每参考流 | 校准；焓方法版本；热平衡 |
| cp_energy | heat_generation | 电力投入和产出 | 电表 | 表号；过程；总发电；自用电；购入及送出电；kWh | 分别计量电加热、辅机和管网泵；核对外购电及联产发电 | MJ | 连续采集、按月核对 | 同一完整声明运行期 | 场址及纳入管网 | 每参考流 | 电表校准；账单；总量净量不重复 |
| cp_fuel | heat_generation | 每种燃料收储及消耗 | 燃料库存及计量记录 | 燃料身份；期初库存；收货；期末库存；水分；热值；基准状态 | 逐种燃料核对计量或称重收货、库存变化及供应商检测 | kg或m3，按清单行指定 | 每次收货及月度平衡 | 同一完整声明运行期 | 前景内发热机组 | 每参考流 | 称重；气表修正；燃料凭证 |
| cp_material | water_management | 水及各项化学品 | 计量及投药记录 | 补水质量；回流质量；化学品身份；交付质量；浓度；库存变化 | 补水与循环水独立计量；核对投药与采购库存 | kg | 连续水计量及每批药剂 | 同一完整声明运行期 | 水处理系统 | 每参考流 | 校准；投药记录；配方和化验 |
| cp_waste | water_management | 外排排污水及外运灰渣 | 排放及转移记录 | 废物身份；质量；水分；去向；处理；排水成分 | 计量排水、称重灰渣外运；保留处理联单；排除内部循环 | kg | 每次转移及月度汇总 | 同一完整声明运行期 | 外部废物出口 | 每参考流 | 水质检测；处理及称重凭证 |
| cp_emissions | heat_generation | 各项空气排放 | 烟气检测；平衡；泄漏记录 | 化学身份；环境介质；烟气浓度与流量；小时数；燃料碳；生物源比例；制冷剂充注及补充 | 对各物种监测积分；估算须保留场址活动量、经验证因子、方法及不确定性；保留制冷剂库存平衡 | kg | 可监测时连续采集；其他按检测及月度活动量 | 同一完整声明运行期 | 直接烟囱及无组织排放源 | 每参考流 | 检测报告；因子原文来源；质量平衡闭合 |


协议process_id表示牵头过程；cp_heat同时覆盖imported_steam_heat，cp_energy同时覆盖heat_delivery，cp_waste同时覆盖heat_generation。保留原始总量。直接归属并按声明方法分配后，以适用核算期总量除以净交付热量（MJ），得到每参考流交换量。交付热量固定记录为1 MJ，不记录为核算期总量。不规定跨路线数值范围。

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| heat_integration | supplied_heat; imported_steam_heat | 逐时段计算：供给质量乘供给比焓，减去回流质量乘回流比焓，再减去净输出质量乘基准比焓；质量采用kg、比焓采用kJ/kg，求和并除以1000得到MJ。供回质量相等的闭式回路简化为质量乘焓差；无回流蒸汽采用已声明基准。 | cp_heat | 净交付热量（MJ） |  |
| period_normalization | all inventory rows | 将归属后的核算期交换总量除以净交付热量（MJ）；supplied_heat固定为1 MJ。除法前执行已记录分配。 | cp_heat; cp_energy; cp_fuel; cp_material; cp_waste; cp_emissions | 每参考流交换量 |  |
| electric_conversion | generation_power; delivery_power; chp_electricity | 记录的kWh乘以3.6，得到MJ。 | cp_energy | 电能（MJ） |  |


### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_period | all inventory rows | 采用同一完整运行期，保留季节运行、停机及启动记录。 | 计量及生产日志 |
| quality_balance | foreground | 核对燃料、热、水、库存及电平衡；披露残差和计量不确定性，不虚构容差。 | 平衡表及校准 |
| quality_state | supplied_heat | 载体、温度、压力、焓基准或交付点不匹配时不得互换使用。 | 状态记录及供热协议 |
| quality_emissions | heat_generation | 分开化石与生物源碳；声明氮氧化物报告基准和颗粒粒径；估算须有可追溯因子及当地活动量。 | 排放检测及场址记录 |
| quality_completeness | all processes | 补充通用清单未列的实际原子交换，并记录路线特定缺失依据；识别未核实身份及范围证据缺口。 | 场址流程图及来源审查 |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | supplied_heat | 要求输出恰为1 MJ，限定信息完整，所有清单行及采集协议采用同一分母。 |  |
| validate_identity | all inventory rows | 核对原子交换身份、流类型、产品状态、属性、单位及公开UUID证据；未解决UUID须明确保留。 |  |
| validate_balance | foreground | 核对核算期平衡、分配之和，以及外购热、购售电和循环水重复计入；无法解释的残差须纠正或披露。 |  |
| validate_gate | heat_delivery | 用户端数据集须具有实际输配泵耗和损失核算，不得假定厂端产热等于用户交付热量。 | `doe-steam-boiler-water` |
| validate_evidence | all inventory rows | 不得以缺乏证据的行业范围替代场址记录；数值证据缺失时保留采集要求。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 用于process及lifecyclemodel投影中的限定热能投入 |
| allowed_use | 载体、热力品位、交付点、地域及技术相匹配的使用 |
| excluded_use | 无条件燃料替代；制冷服务；设备生产；自动避免发电抵扣 |
| required_metadata | 参考限定信息；核算期；边界；流身份；供应商关联；分配方法；基础设施评估 |
| required_quality_disclosure | 计量不确定性；缺失记录；估算排放；未解决身份；上游覆盖；范围限制 |
| update_trigger | 燃料或技术变化；交付点或热品位变化；管网或回流回路变化；新增排放检测 |


## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-structure | official_guidance | 联合国统计司，《产品总分类》第3.0版结构，2025年6月30日；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ；原始行526-532；访问日期2026-10-01 | 仅用于产品身份 |
| doe-steam-boiler-water | official_guidance | 美国能源部，Best Management Practice #8: Steam Boiler Systems（最佳管理实践8：蒸汽锅炉系统）；https://www.energy.gov/cmei/femp/best-management-practice-8-steam-boiler-systems ；运行维护及改造选项；访问日期2026-10-01 | 补水计量、凝结水回收、排污及水处理采集 |
| epa-chp-efficiency | official_guidance | 美国环境保护署，Methods for Calculating CHP Efficiency（热电联产效率计算方法）；https://www.epa.gov/chp/methods-calculating-chp-efficiency ；系统总效率；更新日期2026-02-13；访问日期2026-10-01 | 联产净有效输出及电热等价值比较的局限；不采用效率范围 |
