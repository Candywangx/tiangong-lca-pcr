---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-rabbits-and-hares-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 兔和野兔肉，鲜或冷藏

## 1. 范围与适用性

本 PCR 适用于 CPC 21114 范围内，在加工厂门口提供的净合格鲜或冷藏兔肉或野兔肉。范围包括活体动物接收、屠宰与胴体整理、胴体修整或标准分割、冷却与冷藏暂存、工厂清洗与废水处理、最终检验，以及适用时的包装。

前景边界排除冻肉、将食用内脏作为参考产品、动物饲养、饲料生产、活体动物进厂运输、出厂后配送、零售、烹饪、使用及生命末期。食用器官、皮张、血液、脂肪、修整料、骨及其他产出仍须分别记录，以用于分配和去向披露。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-rabbits-and-hares-fresh-or-chilled |
| classification_refs | CPC 3.0：21114 兔和野兔肉，鲜或冷藏 |
| covered_products | 鲜或冷藏兔肉及鲜或冷藏野兔肉，包括整修胴体或标准肉块，不包括食用内脏 |
| excluded_products | 冻兔肉或冻野兔肉；作为参考产品销售的食用内脏；其他物种肉；活体动物 |
| representative_product | 在加工厂门口放行的净合格冷藏兔胴体或兔肉块 |
| production_route | 活体动物接收；屠宰、放血、剥皮、去内脏；胴体整理或标准分割；冷却；冷藏暂存；检验；适用时包装 |
| market_state | 未冻结的鲜或冷藏状态，按声明采用包装或散装，在加工厂门口交付 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供下游食品用途的净合格鲜或冷藏兔肉或野兔肉 |
| How much | 1 kg 不含包装和食用内脏的净产品 |
| How well | 符合声明规范、物种标识、产品形态、卫生验收以及未冻结的鲜或冷藏温度条件 |
| How long or cycle | 一个生产批次和一次工厂门口放行；不包括下游储存服务 |
| reference_flow_link | `reference_rabbit_hare_meat_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量（`reference_amount`） | 1 kg |
| 参考产品流（`reference_product_flow`） | Meat of rabbits and hares, fresh or chilled `6fb95713-8813-4a4e-a0cd-1a3139e8347a` |
| 参考流属性（`reference_flow_property`） | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组（`reference_unit_group`） | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位（`reference_unit`） | kg |
| 必需限定信息（`required_qualifiers`） | 物种; 整胴体或分割形态; 带骨状态; 排除内脏; 鲜或冷藏状态; 出口温度; 净质量; 包装形式; 等级或合格规范; 加工地域和期间 |

构建前景数据包时，每项必需限定信息均须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少限定信息即视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 计量冷却和最终检验后的净合格肉质量；排除包装、食用内脏、不合格品及不随产品销售的游离液体。 |
| `live_and_output_mass` | 动物、胴体、肉、共产品和固体废物 | Mass | kg | 保留分物种毛质量记录，仅在核对相应过程平衡后归一化。 |
| `water_volume` | 工艺水和废水 | Volume | m3 | 采用计量体积或有文件支持的平衡，不得将污染物质量换算为废水体积。 |
| `energy_carriers` | 电力、蒸汽、热水、天然气、柴油和液化石油气 | Energy | kWh or MJ | 电力与各热载体分别记录；说明热值基准和每项单位换算。 |
| `temperature_state` | 冷藏产品 | Temperature | degree C | 记录足以证明未冻结鲜或冷藏状态的产品温度和时间证据。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在屠宰场门口接收活兔或活野兔，并声明物种、批次、供应方、活重、到达时间、状况和验收结果 |
| starting_condition_role | 前景门口条件；动物饲养和进厂运输为关联上游数据集，而非前景屠宰作业 |
| product_classification_scope | 仅 CPC 21114：鲜或冷藏兔肉或野兔肉；参考产品排除冻肉和食用内脏 |
| recursive_input_rule | 鲜或冷藏兔肉或野兔肉重新进入纳入过程时，将其记录为单一分物种产品投入并关联上游数据集，不递归重建其生产 |
| upstream_dataset_requirement | 关联兼容的动物饲养、进厂运输、外购公用工程、化学品、包装及任何场外废物或废水处理数据集 |
| disclosure | 声明物种、产品形态、鲜或冷藏状态、截断、上游关联、场内或场外处理、分配方法、去向、包装、地域、技术、期间和数据缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | 前景系统边界 | 以屠宰场门口接收的活兔或活野兔为起点，以加工厂门口放行的净合格鲜或冷藏肉为终点。 | `ec-jrc-sa-bref-2024`、`eu-pef-2021` |
| `boundary_required_operations` | 纳入作业 | 纳入动物接收、屠宰、放血、剥皮、去内脏、胴体整理或标准分割、冷却、冷藏暂存、清洗、消毒、废水处理、最终检验及适用时的包装。 | `ec-jrc-sa-bref-2024` |
| `boundary_exclusions` | 排除的前景作业 | 排除动物饲养、饲料生产、至屠宰场运输、零售、工厂门口后的配送、烹饪或使用及生命末期；研究扩展时仅通过关联数据集表示。 | `ec-jrc-sa-bref-2024`、`eu-pef-2021` |
| `boundary_product_state` | 产品状态 | 参考产品排除冻肉和食用内脏；食用内脏及其他可销售产出分别记录，并声明参考产品为未冻结的鲜或冷藏状态。 | `un-cpc-v3-2025`、`ec-jrc-sa-bref-2024` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `animal_receiving` | 动物接收与暂养 | `required` | 进入前景边界的每个屠宰批次均须纳入。 | 在屠宰前接收、识别、检验并暂养活兔或活野兔。 | kg 验收合格活体动物 |
| `slaughter_dressing` | 屠宰、放血、剥皮与去内脏 | `required` | 所有产品路线均须纳入。 | 将验收合格活体动物转化为分物种修整胴体，并分别记录可食与不可食产出。 | kg 修整胴体 |
| `cutting_portioning` | 胴体整理与标准分割 | `required` | 须纳入；整胴体市场形态记录胴体整理及零分割或最少分割。 | 在冷却前修整并形成声明的整胴体或肉块。 | kg 冷却前准备肉 |
| `chilling_storage` | 冷却与冷藏暂存 | `required` | 在工厂门口放行前建立并维持鲜或冷藏状态时须纳入。 | 在不冻结的情况下冷却准备肉，并在受控冷藏条件下暂存。 | kg 合格冷藏肉 |
| `cleaning_wastewater` | 清洗、消毒与废水处理 | `required` | 纳入的屠宰与分割作业均须纳入；场外废水处理仅可用关联数据集替代场内处理子步骤。 | 清洗食品接触设备，并在不聚合污染物排放的情况下处理或转移各股废水。 | m3 处理后出水 |
| `packaging_release` | 包装、最终检验与放行 | `required` | 工厂门口放行须纳入；各包装材料卡片按声明包装形式有条件适用。 | 检验、按需包装、称量并放行净合格鲜或冷藏兔肉或野兔肉。 | 1 kg 净参考产品 |

### 过程：动物接收与暂养（`animal_receiving`）

#### 输入

##### 产品流

###### 活兔投入（`live_rabbit_input`）

该产品流投入仅记录 Live rabbit at slaughterhouse gate 在动物接收与暂养边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Live rabbit at slaughterhouse gate
- 流属性/单位：Mass / kg
- 数量规则：采用该单一产品投入的批次实测、计量或经核对台账记录；未适用的物种或路线保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格活体动物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_receiving`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 活野兔投入（`live_hare_input`）

该产品流投入仅记录 Live hare at slaughterhouse gate 在动物接收与暂养边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Live hare at slaughterhouse gate
- 流属性/单位：Mass / kg
- 数量规则：采用该单一产品投入的批次实测、计量或经核对台账记录；未适用的物种或路线保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格活体动物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_receiving`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 接收工艺水（`reception_process_water_input`）

该产品流投入仅记录 Process water supplied to animal reception 在动物接收与暂养边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Process water supplied to animal reception
- 流属性/单位：Volume / m3
- 数量规则：采用该过程经校准水表记录的工艺水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格活体动物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_receiving`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 动物接收电力（`reception_electricity_input`）

该产品流投入仅记录 Electricity supplied to animal reception equipment 在动物接收与暂养边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Electricity supplied to animal reception equipment
- 流属性/单位：Energy / kWh
- 数量规则：采用分表电量，或依据设备运行记录形成有文件支持的该阶段电力分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格活体动物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_receiving`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格兔活体产出（`accepted_live_rabbit_output`）

该产品流产出仅记录 Accepted live rabbit for slaughter 在动物接收与暂养边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Accepted live rabbit for slaughter
- 流属性/单位：Mass / kg
- 数量规则：依据批次实测投入、产出、废物和库存变化计算并核对该单一产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格活体动物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_animal_receiving`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 验收合格野兔活体产出（`accepted_live_hare_output`）

该产品流产出仅记录 Accepted live hare for slaughter 在动物接收与暂养边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Accepted live hare for slaughter
- 流属性/单位：Mass / kg
- 数量规则：依据批次实测投入、产出、废物和库存变化计算并核对该单一产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格活体动物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_animal_receiving`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

##### 废物流

###### 到厂死亡兔胴体废物（`doa_rabbit_carcass_output`）

该废物流产出仅记录 Rabbit carcass dead on arrival 在动物接收与暂养边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Rabbit carcass dead on arrival
- 流属性/单位：Mass / kg
- 数量规则：采用称量、容器净重或去向台账记录该单一废物流数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格活体动物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_receiving`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 到厂死亡野兔胴体废物（`doa_hare_carcass_output`）

该废物流产出仅记录 Hare carcass dead on arrival 在动物接收与暂养边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Hare carcass dead on arrival
- 流属性/单位：Mass / kg
- 数量规则：采用称量、容器净重或去向台账记录该单一废物流数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格活体动物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_receiving`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 兔粪便废物（`rabbit_manure_output`）

该废物流产出仅记录 Rabbit manure from reception pens 在动物接收与暂养边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Rabbit manure from reception pens
- 流属性/单位：Mass / kg
- 数量规则：采用称量、容器净重或去向台账记录该单一废物流数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格活体动物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_receiving`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 野兔粪便废物（`hare_manure_output`）

该废物流产出仅记录 Hare manure from reception pens 在动物接收与暂养边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Hare manure from reception pens
- 流属性/单位：Mass / kg
- 数量规则：采用称量、容器净重或去向台账记录该单一废物流数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格活体动物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_receiving`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 接收废水（`lairage_wastewater_output`）

该废物流产出仅记录 Lairage wastewater from animal reception 在动物接收与暂养边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Lairage wastewater from animal reception
- 流属性/单位：Volume / m3
- 数量规则：采用计量值或水量平衡计算转入废水过程的该股废水体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格活体动物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_animal_receiving`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

##### 基本流


### 过程：屠宰、放血、剥皮与去内脏（`slaughter_dressing`）

#### 输入

##### 产品流

###### 验收合格兔投入（`accepted_live_rabbit_input`）

该产品流投入仅记录 Accepted live rabbit for slaughter 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Accepted live rabbit for slaughter
- 流属性/单位：Mass / kg
- 数量规则：采用该单一产品投入的批次实测、计量或经核对台账记录；未适用的物种或路线保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 验收合格野兔投入（`accepted_live_hare_input`）

该产品流投入仅记录 Accepted live hare for slaughter 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Accepted live hare for slaughter
- 流属性/单位：Mass / kg
- 数量规则：采用该单一产品投入的批次实测、计量或经核对台账记录；未适用的物种或路线保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 屠宰工艺水（`slaughter_process_water_input`）

该产品流投入仅记录 Process water supplied to slaughter and dressing 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Process water supplied to slaughter and dressing
- 流属性/单位：Volume / m3
- 数量规则：采用该过程经校准水表记录的工艺水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 屠宰电力（`slaughter_electricity_input`）

该产品流投入仅记录 Electricity supplied to slaughter and dressing equipment 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Electricity supplied to slaughter and dressing equipment
- 流属性/单位：Energy / kWh
- 数量规则：采用分表电量，或依据设备运行记录形成有文件支持的该阶段电力分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 外购蒸汽（`slaughter_purchased_steam_input`）

该产品流投入仅记录 Purchased steam supplied to slaughter and dressing 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Purchased steam supplied to slaughter and dressing
- 流属性/单位：Energy / MJ
- 数量规则：采用供应本过程的外购蒸汽计量能量；不存在时记录为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 外购热水（`slaughter_purchased_hot_water_input`）

该产品流投入仅记录 Purchased hot water supplied to slaughter and dressing 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Purchased hot water supplied to slaughter and dressing
- 流属性/单位：Energy / MJ
- 数量规则：采用供应本过程的外购热水计量能量；不存在时记录为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 天然气燃料（`slaughter_natural_gas_input`）

该产品流投入仅记录 Natural gas combusted for slaughterhouse thermal demand 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Natural gas combusted for slaughterhouse thermal demand
- 流属性/单位：Energy / MJ
- 数量规则：采用服务本过程设备的天然气计量低位热值能量；不存在时记录为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 柴油燃料（`slaughter_diesel_input`）

该产品流投入仅记录 Diesel combusted for slaughterhouse thermal demand 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Diesel combusted for slaughterhouse thermal demand
- 流属性/单位：Energy / MJ
- 数量规则：将服务本过程设备的该燃料领用记录换算为低位热值能量；不存在时记录为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 液化石油气燃料（`slaughter_lpg_input`）

该产品流投入仅记录 Liquefied petroleum gas combusted for slaughterhouse thermal demand 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Liquefied petroleum gas combusted for slaughterhouse thermal demand
- 流属性/单位：Energy / MJ
- 数量规则：将服务本过程设备的该燃料领用记录换算为低位热值能量；不存在时记录为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 氢氧化钠清洗剂（`slaughter_sodium_hydroxide_input`）

该产品流投入仅记录 Sodium hydroxide cleaning solution supplied to slaughter equipment 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Sodium hydroxide cleaning solution supplied to slaughter equipment
- 流属性/单位：Mass / kg
- 数量规则：采集该单一化学品的实测产品质量和适用时的有效成分浓度；不存在时记录为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 过氧乙酸消毒剂（`slaughter_peracetic_acid_input`）

该产品流投入仅记录 Peracetic acid disinfectant solution supplied to slaughter equipment 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Peracetic acid disinfectant solution supplied to slaughter equipment
- 流属性/单位：Mass / kg
- 数量规则：采集该单一化学品的实测产品质量和适用时的有效成分浓度；不存在时记录为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 兔修整胴体产出（`rabbit_dressed_carcass_output`）

该产品流产出仅记录 Rabbit dressed carcass after evisceration 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Rabbit dressed carcass after evisceration
- 流属性/单位：Mass / kg
- 数量规则：依据批次实测投入、产出、废物和库存变化计算并核对该单一产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 兔肝共产品（`rabbit_liver_output`）

该产品流产出仅记录 Rabbit liver for human consumption 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Rabbit liver for human consumption
- 流属性/单位：Mass / kg
- 数量规则：采用该单一产出的批次实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 兔心共产品（`rabbit_heart_output`）

该产品流产出仅记录 Rabbit heart for human consumption 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Rabbit heart for human consumption
- 流属性/单位：Mass / kg
- 数量规则：采用该单一产出的批次实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 兔肾共产品（`rabbit_kidney_output`）

该产品流产出仅记录 Rabbit kidney for human consumption 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Rabbit kidney for human consumption
- 流属性/单位：Mass / kg
- 数量规则：采用该单一产出的批次实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 野兔修整胴体产出（`hare_dressed_carcass_output`）

该产品流产出仅记录 Hare dressed carcass after evisceration 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Hare dressed carcass after evisceration
- 流属性/单位：Mass / kg
- 数量规则：依据批次实测投入、产出、废物和库存变化计算并核对该单一产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 野兔肝共产品（`hare_liver_output`）

该产品流产出仅记录 Hare liver for human consumption 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Hare liver for human consumption
- 流属性/单位：Mass / kg
- 数量规则：采用该单一产出的批次实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 野兔心共产品（`hare_heart_output`）

该产品流产出仅记录 Hare heart for human consumption 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Hare heart for human consumption
- 流属性/单位：Mass / kg
- 数量规则：采用该单一产出的批次实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 野兔肾共产品（`hare_kidney_output`）

该产品流产出仅记录 Hare kidney for human consumption 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Hare kidney for human consumption
- 流属性/单位：Mass / kg
- 数量规则：采用该单一产出的批次实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

##### 废物流

###### 兔屠宰血液（`rabbit_blood_output`）

该废物流产出仅记录 Rabbit blood from slaughter 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Rabbit blood from slaughter
- 流属性/单位：Mass / kg
- 数量规则：采用实测记录和对应过程平衡计算该单一废物流数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 兔屠宰皮张（`rabbit_skin_output`）

该废物流产出仅记录 Rabbit skin from slaughter 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Rabbit skin from slaughter
- 流属性/单位：Mass / kg
- 数量规则：采用称量、容器净重或去向台账记录该单一废物流数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 兔不可食内脏（`rabbit_inedible_viscera_output`）

该废物流产出仅记录 Rabbit inedible viscera from slaughter 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Rabbit inedible viscera from slaughter
- 流属性/单位：Mass / kg
- 数量规则：采用称量、容器净重或去向台账记录该单一废物流数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 兔消化道内容物（`rabbit_digestive_content_output`）

该废物流产出仅记录 Rabbit digestive-tract content from slaughter 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Rabbit digestive-tract content from slaughter
- 流属性/单位：Mass / kg
- 数量规则：采用实测记录和对应过程平衡计算该单一废物流数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 野兔屠宰血液（`hare_blood_output`）

该废物流产出仅记录 Hare blood from slaughter 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Hare blood from slaughter
- 流属性/单位：Mass / kg
- 数量规则：采用实测记录和对应过程平衡计算该单一废物流数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 野兔屠宰皮张（`hare_skin_output`）

该废物流产出仅记录 Hare skin from slaughter 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Hare skin from slaughter
- 流属性/单位：Mass / kg
- 数量规则：采用称量、容器净重或去向台账记录该单一废物流数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 野兔不可食内脏（`hare_inedible_viscera_output`）

该废物流产出仅记录 Hare inedible viscera from slaughter 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Hare inedible viscera from slaughter
- 流属性/单位：Mass / kg
- 数量规则：采用称量、容器净重或去向台账记录该单一废物流数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 野兔消化道内容物（`hare_digestive_content_output`）

该废物流产出仅记录 Hare digestive-tract content from slaughter 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Hare digestive-tract content from slaughter
- 流属性/单位：Mass / kg
- 数量规则：采用实测记录和对应过程平衡计算该单一废物流数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 屠宰废水（`slaughter_wastewater_output`）

该废物流产出仅记录 Slaughter and carcass-washing wastewater 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Slaughter and carcass-washing wastewater
- 流属性/单位：Volume / m3
- 数量规则：采用计量值或水量平衡计算转入废水过程的该股废水体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

##### 基本流

###### 天然气化石二氧化碳（`slaughter_natural_gas_co2_output`）

该基本流产出仅记录 Carbon dioxide, fossil, to air from natural gas combustion for slaughterhouse thermal demand 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Carbon dioxide, fossil, to air from natural gas combustion for slaughterhouse thermal demand
- 流属性/单位：Mass / kg
- 数量规则：对应燃料能量记录乘以有记录的场址、供应商或法规化石碳因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`eu-pef-2021`

###### 柴油化石二氧化碳（`slaughter_diesel_co2_output`）

该基本流产出仅记录 Carbon dioxide, fossil, to air from diesel combustion for slaughterhouse thermal demand 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Carbon dioxide, fossil, to air from diesel combustion for slaughterhouse thermal demand
- 流属性/单位：Mass / kg
- 数量规则：对应燃料能量记录乘以有记录的场址、供应商或法规化石碳因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`eu-pef-2021`

###### 液化石油气化石二氧化碳（`slaughter_lpg_co2_output`）

该基本流产出仅记录 Carbon dioxide, fossil, to air from liquefied petroleum gas combustion for slaughterhouse thermal demand 在屠宰、放血、剥皮与去内脏边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Carbon dioxide, fossil, to air from liquefied petroleum gas combustion for slaughterhouse thermal demand
- 流属性/单位：Mass / kg
- 数量规则：对应燃料能量记录乘以有记录的场址、供应商或法规化石碳因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 修整胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`eu-pef-2021`


### 过程：胴体整理与标准分割（`cutting_portioning`）

#### 输入

##### 产品流

###### 兔修整胴体投入（`rabbit_dressed_carcass_input`）

该产品流投入仅记录 Rabbit dressed carcass after evisceration 在胴体整理与标准分割边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Rabbit dressed carcass after evisceration
- 流属性/单位：Mass / kg
- 数量规则：采用该单一产品投入的批次实测、计量或经核对台账记录；未适用的物种或路线保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷却前准备肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 野兔修整胴体投入（`hare_dressed_carcass_input`）

该产品流投入仅记录 Hare dressed carcass after evisceration 在胴体整理与标准分割边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Hare dressed carcass after evisceration
- 流属性/单位：Mass / kg
- 数量规则：采用该单一产品投入的批次实测、计量或经核对台账记录；未适用的物种或路线保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷却前准备肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 分割工艺水（`cutting_process_water_input`）

该产品流投入仅记录 Process water supplied to carcass finishing and cutting 在胴体整理与标准分割边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Process water supplied to carcass finishing and cutting
- 流属性/单位：Volume / m3
- 数量规则：采用该过程经校准水表记录的工艺水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷却前准备肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 分割电力（`cutting_electricity_input`）

该产品流投入仅记录 Electricity supplied to carcass cutting equipment 在胴体整理与标准分割边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Electricity supplied to carcass cutting equipment
- 流属性/单位：Energy / kWh
- 数量规则：采用分表电量，或依据设备运行记录形成有文件支持的该阶段电力分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷却前准备肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷却前兔肉产出（`rabbit_prepared_meat_output`）

该产品流产出仅记录 Rabbit meat prepared for chilling 在胴体整理与标准分割边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Rabbit meat prepared for chilling
- 流属性/单位：Mass / kg
- 数量规则：依据批次实测投入、产出、废物和库存变化计算并核对该单一产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷却前准备肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 兔可食脂肪共产品（`rabbit_edible_fat_output`）

该产品流产出仅记录 Rabbit edible fat trimming 在胴体整理与标准分割边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Rabbit edible fat trimming
- 流属性/单位：Mass / kg
- 数量规则：采用该单一产出的批次实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷却前准备肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 兔可食肉修整料共产品（`rabbit_edible_meat_trim_output`）

该产品流产出仅记录 Rabbit edible meat trimming 在胴体整理与标准分割边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Rabbit edible meat trimming
- 流属性/单位：Mass / kg
- 数量规则：采用该单一产出的批次实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷却前准备肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 冷却前野兔肉产出（`hare_prepared_meat_output`）

该产品流产出仅记录 Hare meat prepared for chilling 在胴体整理与标准分割边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Hare meat prepared for chilling
- 流属性/单位：Mass / kg
- 数量规则：依据批次实测投入、产出、废物和库存变化计算并核对该单一产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷却前准备肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 野兔可食脂肪共产品（`hare_edible_fat_output`）

该产品流产出仅记录 Hare edible fat trimming 在胴体整理与标准分割边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Hare edible fat trimming
- 流属性/单位：Mass / kg
- 数量规则：采用该单一产出的批次实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷却前准备肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 野兔可食肉修整料共产品（`hare_edible_meat_trim_output`）

该产品流产出仅记录 Hare edible meat trimming 在胴体整理与标准分割边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Hare edible meat trimming
- 流属性/单位：Mass / kg
- 数量规则：采用该单一产出的批次实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷却前准备肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

##### 废物流

###### 兔分割骨产出（`rabbit_bone_output`）

该废物流产出仅记录 Rabbit bone from carcass cutting 在胴体整理与标准分割边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Rabbit bone from carcass cutting
- 流属性/单位：Mass / kg
- 数量规则：采用称量、容器净重或去向台账记录该单一废物流数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷却前准备肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 兔不可食修整料（`rabbit_inedible_trim_output`）

该废物流产出仅记录 Rabbit inedible trimming from carcass cutting 在胴体整理与标准分割边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Rabbit inedible trimming from carcass cutting
- 流属性/单位：Mass / kg
- 数量规则：采用称量、容器净重或去向台账记录该单一废物流数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷却前准备肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 野兔分割骨产出（`hare_bone_output`）

该废物流产出仅记录 Hare bone from carcass cutting 在胴体整理与标准分割边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Hare bone from carcass cutting
- 流属性/单位：Mass / kg
- 数量规则：采用称量、容器净重或去向台账记录该单一废物流数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷却前准备肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 野兔不可食修整料（`hare_inedible_trim_output`）

该废物流产出仅记录 Hare inedible trimming from carcass cutting 在胴体整理与标准分割边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Hare inedible trimming from carcass cutting
- 流属性/单位：Mass / kg
- 数量规则：采用称量、容器净重或去向台账记录该单一废物流数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷却前准备肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 分割废水（`cutting_wastewater_output`）

该废物流产出仅记录 Carcass-cutting and food-contact-rinse wastewater 在胴体整理与标准分割边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Carcass-cutting and food-contact-rinse wastewater
- 流属性/单位：Volume / m3
- 数量规则：采用计量值或水量平衡计算转入废水过程的该股废水体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷却前准备肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

##### 基本流


### 过程：冷却与冷藏暂存（`chilling_storage`）

#### 输入

##### 产品流

###### 冷却前兔肉投入（`rabbit_prepared_meat_input`）

该产品流投入仅记录 Rabbit meat prepared for chilling 在冷却与冷藏暂存边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Rabbit meat prepared for chilling
- 流属性/单位：Mass / kg
- 数量规则：采用该单一产品投入的批次实测、计量或经核对台账记录；未适用的物种或路线保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格冷藏肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 冷却前野兔肉投入（`hare_prepared_meat_input`）

该产品流投入仅记录 Hare meat prepared for chilling 在冷却与冷藏暂存边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Hare meat prepared for chilling
- 流属性/单位：Mass / kg
- 数量规则：采用该单一产品投入的批次实测、计量或经核对台账记录；未适用的物种或路线保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格冷藏肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 冷却冷藏电力（`chilling_electricity_input`）

该产品流投入仅记录 Electricity supplied to meat chilling and cold-storage equipment 在冷却与冷藏暂存边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Electricity supplied to meat chilling and cold-storage equipment
- 流属性/单位：Energy / kWh
- 数量规则：采用分表电量，或依据设备运行记录形成有文件支持的该阶段电力分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格冷藏肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### R-717 制冷剂补充量（`r717_refrigerant_makeup_input`）

该产品流投入仅记录 Ammonia (R-717) refrigerant make-up 在冷却与冷藏暂存边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Ammonia (R-717) refrigerant make-up
- 流属性/单位：Mass / kg
- 数量规则：采集向冷却系统补充的该种制冷剂实测质量；未使用时记录为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格冷藏肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### R-134a 制冷剂补充量（`r134a_refrigerant_makeup_input`）

该产品流投入仅记录 1,1,1,2-Tetrafluoroethane (R-134a) refrigerant make-up 在冷却与冷藏暂存边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：1,1,1,2-Tetrafluoroethane (R-134a) refrigerant make-up
- 流属性/单位：Mass / kg
- 数量规则：采集向冷却系统补充的该种制冷剂实测质量；未使用时记录为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格冷藏肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 兔冷藏肉产出（`rabbit_chilled_meat_output`）

该产品流产出仅记录 Rabbit meat, fresh or chilled, before packaging 在冷却与冷藏暂存边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Rabbit meat, fresh or chilled, before packaging
- 流属性/单位：Mass / kg
- 数量规则：依据批次实测投入、产出、废物和库存变化计算并核对该单一产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格冷藏肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilling_storage`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 野兔冷藏肉产出（`hare_chilled_meat_output`）

该产品流产出仅记录 Hare meat, fresh or chilled, before packaging 在冷却与冷藏暂存边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Hare meat, fresh or chilled, before packaging
- 流属性/单位：Mass / kg
- 数量规则：依据批次实测投入、产出、废物和库存变化计算并核对该单一产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格冷藏肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilling_storage`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

##### 废物流

###### 兔温控不合格肉（`rabbit_temperature_reject_output`）

该废物流产出仅记录 Rabbit meat rejected after chilling temperature deviation 在冷却与冷藏暂存边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Rabbit meat rejected after chilling temperature deviation
- 流属性/单位：Mass / kg
- 数量规则：采用称量、容器净重或去向台账记录该单一废物流数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格冷藏肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 野兔温控不合格肉（`hare_temperature_reject_output`）

该废物流产出仅记录 Hare meat rejected after chilling temperature deviation 在冷却与冷藏暂存边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Hare meat rejected after chilling temperature deviation
- 流属性/单位：Mass / kg
- 数量规则：采用称量、容器净重或去向台账记录该单一废物流数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格冷藏肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

##### 基本流

###### 排放至空气的 R-717（`r717_to_air_output`）

该基本流产出仅记录 Ammonia (R-717), to air from meat refrigeration 在冷却与冷藏暂存边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Ammonia (R-717), to air from meat refrigeration
- 流属性/单位：Mass / kg
- 数量规则：按期初充注量、补充量、期末充注量、回收量和有记录转移量进行该制冷剂充注平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格冷藏肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilling_storage`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 排放至空气的 R-134a（`r134a_to_air_output`）

该基本流产出仅记录 1,1,1,2-Tetrafluoroethane (R-134a), to air from meat refrigeration 在冷却与冷藏暂存边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：1,1,1,2-Tetrafluoroethane (R-134a), to air from meat refrigeration
- 流属性/单位：Mass / kg
- 数量规则：按期初充注量、补充量、期末充注量、回收量和有记录转移量进行该制冷剂充注平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格冷藏肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilling_storage`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`


### 过程：清洗、消毒与废水处理（`cleaning_wastewater`）

#### 输入

##### 产品流

###### 清洗消毒工艺水（`sanitation_process_water_input`）

该产品流投入仅记录 Process water supplied to plant cleaning and sanitation 在清洗、消毒与废水处理边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Process water supplied to plant cleaning and sanitation
- 流属性/单位：Volume / m3
- 数量规则：采用该过程经校准水表记录的工艺水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 处理后出水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 废水处理电力（`wastewater_electricity_input`）

该产品流投入仅记录 Electricity supplied to slaughterhouse wastewater treatment 在清洗、消毒与废水处理边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Electricity supplied to slaughterhouse wastewater treatment
- 流属性/单位：Energy / kWh
- 数量规则：采用分表电量，或依据设备运行记录形成有文件支持的该阶段电力分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 处理后出水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 废水 pH 调节氢氧化钠（`wastewater_sodium_hydroxide_input`）

该产品流投入仅记录 Sodium hydroxide solution supplied to wastewater treatment 在清洗、消毒与废水处理边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Sodium hydroxide solution supplied to wastewater treatment
- 流属性/单位：Mass / kg
- 数量规则：采用进入处理过程的该股废水计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 m3 处理后出水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 三氯化铁混凝剂（`ferric_chloride_input`）

该产品流投入仅记录 Ferric chloride solution supplied to wastewater treatment 在清洗、消毒与废水处理边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Ferric chloride solution supplied to wastewater treatment
- 流属性/单位：Mass / kg
- 数量规则：采集该单一化学品的实测产品质量和适用时的有效成分浓度；不存在时记录为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 m3 处理后出水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 阴离子聚丙烯酰胺絮凝剂（`anionic_polyacrylamide_input`）

该产品流投入仅记录 Anionic polyacrylamide flocculant supplied to wastewater treatment 在清洗、消毒与废水处理边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Anionic polyacrylamide flocculant supplied to wastewater treatment
- 流属性/单位：Mass / kg
- 数量规则：采集该单一化学品的实测产品质量和适用时的有效成分浓度；不存在时记录为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 m3 处理后出水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

##### 废物流

###### 接收废水投入（`lairage_wastewater_input`）

该废物流投入仅记录 Lairage wastewater from animal reception 在清洗、消毒与废水处理边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Lairage wastewater from animal reception
- 流属性/单位：Volume / m3
- 数量规则：采用进入处理过程的该股废水计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 处理后出水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 屠宰废水投入（`slaughter_wastewater_input`）

该废物流投入仅记录 Slaughter and carcass-washing wastewater 在清洗、消毒与废水处理边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Slaughter and carcass-washing wastewater
- 流属性/单位：Volume / m3
- 数量规则：采用进入处理过程的该股废水计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 处理后出水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 分割废水投入（`cutting_wastewater_input`）

该废物流投入仅记录 Carcass-cutting and food-contact-rinse wastewater 在清洗、消毒与废水处理边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Carcass-cutting and food-contact-rinse wastewater
- 流属性/单位：Volume / m3
- 数量规则：采用进入处理过程的该股废水计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 处理后出水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废水处理栅渣（`wastewater_screenings_output`）

该废物流产出仅记录 Screenings from slaughterhouse wastewater treatment 在清洗、消毒与废水处理边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Screenings from slaughterhouse wastewater treatment
- 流属性/单位：Mass / kg
- 数量规则：采用计量值或水量平衡计算转入废水过程的该股废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 处理后出水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 溶气气浮污泥（`daf_sludge_output`）

该废物流产出仅记录 Dissolved-air-flotation sludge from slaughterhouse wastewater treatment 在清洗、消毒与废水处理边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Dissolved-air-flotation sludge from slaughterhouse wastewater treatment
- 流属性/单位：Mass / kg
- 数量规则：采用称量、容器净重或去向台账记录该单一废物流数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 处理后出水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

##### 基本流

###### 处理后出水（`treated_effluent_water_output`）

该基本流产出仅记录 Water, to surface water from slaughterhouse wastewater treatment 在清洗、消毒与废水处理边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Water, to surface water from slaughterhouse wastewater treatment
- 流属性/单位：Volume / m3
- 数量规则：计量排入地表水的处理后出水体积；转移至场外处理时记录为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 处理后出水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 排放至水体的五日生化需氧量（`bod5_to_water_output`）

该基本流产出仅记录 Biochemical oxygen demand (BOD5), to surface water 在清洗、消毒与废水处理边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Biochemical oxygen demand (BOD5), to surface water
- 流属性/单位：Mass / kg
- 数量规则：处理后出水实测体积乘以同一期间对应实验室浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 处理后出水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 排放至水体的化学需氧量（`cod_to_water_output`）

该基本流产出仅记录 Chemical oxygen demand (COD), to surface water 在清洗、消毒与废水处理边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Chemical oxygen demand (COD), to surface water
- 流属性/单位：Mass / kg
- 数量规则：处理后出水实测体积乘以同一期间对应实验室浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 处理后出水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 排放至水体的总悬浮固体（`tss_to_water_output`）

该基本流产出仅记录 Total suspended solids, to surface water 在清洗、消毒与废水处理边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Total suspended solids, to surface water
- 流属性/单位：Mass / kg
- 数量规则：处理后出水实测体积乘以同一期间对应实验室浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 处理后出水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 排放至水体的总氮（`total_nitrogen_to_water_output`）

该基本流产出仅记录 Nitrogen, total, to surface water 在清洗、消毒与废水处理边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Nitrogen, total, to surface water
- 流属性/单位：Mass / kg
- 数量规则：处理后出水实测体积乘以同一期间对应实验室浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 处理后出水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 排放至水体的总磷（`total_phosphorus_to_water_output`）

该基本流产出仅记录 Phosphorus, total, to surface water 在清洗、消毒与废水处理边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Phosphorus, total, to surface water
- 流属性/单位：Mass / kg
- 数量规则：处理后出水实测体积乘以同一期间对应实验室浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 处理后出水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`


### 过程：包装、最终检验与放行（`packaging_release`）

#### 输入

##### 产品流

###### 兔冷藏肉投入（`rabbit_chilled_meat_input`）

该产品流投入仅记录 Rabbit meat, fresh or chilled, before packaging 在包装、最终检验与放行边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Rabbit meat, fresh or chilled, before packaging
- 流属性/单位：Mass / kg
- 数量规则：采用该单一产品投入的批次实测、计量或经核对台账记录；未适用的物种或路线保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 野兔冷藏肉投入（`hare_chilled_meat_input`）

该产品流投入仅记录 Hare meat, fresh or chilled, before packaging 在包装、最终检验与放行边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Hare meat, fresh or chilled, before packaging
- 流属性/单位：Mass / kg
- 数量规则：采用该单一产品投入的批次实测、计量或经核对台账记录；未适用的物种或路线保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 聚丙烯托盘（`pp_tray_input`）

该产品流投入仅记录 Polypropylene tray for chilled meat packaging 在包装、最终检验与放行边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Polypropylene tray for chilled meat packaging
- 流属性/单位：Mass / kg
- 数量规则：采用声明包装形式下该单一包装件的实测或采购平衡质量；不存在时记录为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 聚乙烯盖膜（`pe_film_input`）

该产品流投入仅记录 Polyethylene lidding film for chilled meat packaging 在包装、最终检验与放行边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Polyethylene lidding film for chilled meat packaging
- 流属性/单位：Mass / kg
- 数量规则：采用声明包装形式下该单一包装件的实测或采购平衡质量；不存在时记录为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 纤维素吸水垫（`cellulose_pad_input`）

该产品流投入仅记录 Cellulose absorbent pad for chilled meat packaging 在包装、最终检验与放行边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Cellulose absorbent pad for chilled meat packaging
- 流属性/单位：Mass / kg
- 数量规则：采用声明包装形式下该单一包装件的实测或采购平衡质量；不存在时记录为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 纸标签（`paper_label_input`）

该产品流投入仅记录 Paper label for chilled meat packaging 在包装、最终检验与放行边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Paper label for chilled meat packaging
- 流属性/单位：Mass / kg
- 数量规则：采用声明包装形式下该单一包装件的实测或采购平衡质量；不存在时记录为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 瓦楞运输纸箱（`corrugated_carton_input`）

该产品流投入仅记录 Corrugated paperboard carton for chilled meat transport 在包装、最终检验与放行边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Corrugated paperboard carton for chilled meat transport
- 流属性/单位：Mass / kg
- 数量规则：采用声明包装形式下该单一包装件的实测或采购平衡质量；不存在时记录为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 包装电力（`packaging_electricity_input`）

该产品流投入仅记录 Electricity supplied to meat packaging and final-inspection equipment 在包装、最终检验与放行边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Electricity supplied to meat packaging and final-inspection equipment
- 流属性/单位：Energy / kWh
- 数量规则：采用分表电量，或依据设备运行记录形成有文件支持的该阶段电力分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 鲜或冷藏兔和野兔肉参考产出（`reference_rabbit_hare_meat_output`）

该产品流产出仅记录 Meat of rabbits and hares, fresh or chilled 在包装、最终检验与放行边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：兔肉和野兔肉，新鲜或冷藏 `6fb95713-8813-4a4e-a0cd-1a3139e8347a`
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：采用工厂门口放行的净合格参考产品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格鲜或冷藏参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`un-cpc-v3-2025`、`eu-pef-2021`

##### 废物流

###### 兔最终产品不合格肉（`packaged_rabbit_reject_output`）

该废物流产出仅记录 Rabbit meat rejected during final inspection 在包装、最终检验与放行边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Rabbit meat rejected during final inspection
- 流属性/单位：Mass / kg
- 数量规则：采用称量、容器净重或去向台账记录该单一废物流数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 野兔最终产品不合格肉（`packaged_hare_reject_output`）

该废物流产出仅记录 Hare meat rejected during final inspection 在包装、最终检验与放行边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Hare meat rejected during final inspection
- 流属性/单位：Mass / kg
- 数量规则：采用称量、容器净重或去向台账记录该单一废物流数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 废聚丙烯托盘（`waste_pp_tray_output`）

该废物流产出仅记录 Waste polypropylene tray from chilled meat packaging 在包装、最终检验与放行边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Waste polypropylene tray from chilled meat packaging
- 流属性/单位：Mass / kg
- 数量规则：采用产品放行前丢弃的该单一包装材料的实测或采购平衡质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 废聚乙烯薄膜（`waste_pe_film_output`）

该废物流产出仅记录 Waste polyethylene film from chilled meat packaging 在包装、最终检验与放行边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Waste polyethylene film from chilled meat packaging
- 流属性/单位：Mass / kg
- 数量规则：采用产品放行前丢弃的该单一包装材料的实测或采购平衡质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 废纤维素吸水垫（`waste_cellulose_pad_output`）

该废物流产出仅记录 Waste cellulose absorbent pad from chilled meat packaging 在包装、最终检验与放行边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Waste cellulose absorbent pad from chilled meat packaging
- 流属性/单位：Mass / kg
- 数量规则：采用产品放行前丢弃的该单一包装材料的实测或采购平衡质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 废纸标签（`waste_paper_label_output`）

该废物流产出仅记录 Waste paper label from chilled meat packaging 在包装、最终检验与放行边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Waste paper label from chilled meat packaging
- 流属性/单位：Mass / kg
- 数量规则：采用产品放行前丢弃的该单一包装材料的实测或采购平衡质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

###### 废瓦楞纸箱（`waste_corrugated_carton_output`）

该废物流产出仅记录 Waste corrugated paperboard carton from chilled meat packaging 在包装、最终检验与放行边界上的单一交换。数量按所列前景规则获得，不与其他交换合并。

- 选定流：Waste corrugated paperboard carton from chilled meat packaging
- 流属性/单位：Mass / kg
- 数量规则：采用产品放行前丢弃的该单一包装材料的实测或采购平衡质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-2024`、`eu-pef-2021`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 屠宰、胴体整理与分割 | 分配前优先采用细分或直接计量，将可分别计量的作业归属于兔肉、野兔肉、食用器官、皮张、血液、脂肪、肉修整料及其他产出。 | `eu-pef-2021` |
| `allocation_causal_then_economic` | 不可避免的多功能性 | 细分无法消除多功能性时，采用有文件支持的物理因果关系；不存在可辩护物理关系时，采用有代表性的经济价值并披露价格、期间、地域和敏感性。 | `eu-pef-2021` |
| `allocation_gross_output_records` | 所有共产品与废物 | 分配前记录每项具体产出的毛实测质量和去向，不得从前景清单数量中抵扣收入、处理信用或避免产品。 | `ec-jrc-sa-bref-2024`、`eu-pef-2021` |
| `allocation_waste_boundary` | 废物处理 | 将废物处理归于生产者直至声明的废物系统边界；任何下游回收或替代信用均属于声明的下游模型，不得隐含嵌入。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animal_receiving` | `animal_receiving` | 活体动物、用水、电力、验收、死亡、粪便与接收废水记录 | 批次接收、称量、检验、仪表、栏舍清洗与废物记录 | 物种；批次；供应方；到达时间；活重；验收质量；到厂死亡质量；用水；电力；粪便；废水 | 经校准活畜秤、仪表、检验日志和去向记录 | kg；m3；kWh | 每生产批次采集并按月核对 | 至少一个有代表性的连续 12 个月期间或完整生产活动 | 本过程所有纳入设备和作业区域 | 按物种和批次分别汇总每个原子流，核对平衡后归一化至过程定量参考 | 校准资料、批准规范、签署日志、适用时的实验室报告及质量平衡审查 |
| `cp_slaughter_dressing` | `slaughter_dressing` | 分物种胴体、食用器官、不可食产出、用水、公用工程、燃料、化学品、废水与排放记录 | 屠宰批次、称量、仪表、燃料、化学品领用、清洗消毒与去向记录 | 物种；活体投入；胴体；肝；心；肾；血液；皮张；内脏；消化道内容物；用水；电力；蒸汽；热水；各燃料；各化学品；废水 | 经校准秤和仪表，与屠宰批次及签署去向记录核对 | kg；m3；kWh；MJ | 每生产批次采集并按月核对 | 至少一个有代表性的连续 12 个月期间或完整生产活动 | 本过程所有纳入设备和作业区域 | 按物种和批次分别汇总每个原子流，核对平衡后归一化至过程定量参考 | 校准资料、批准规范、签署日志、适用时的实验室报告及质量平衡审查 |
| `cp_cutting_portioning` | `cutting_portioning` | 胴体投入、准备肉、食用修整料、骨、不可食修整料、用水、电力与废水记录 | 分割批次、称量、分割方案、仪表、不合格品与去向记录 | 物种；胴体投入；市场形态；准备肉；可食脂肪；可食肉修整料；骨；不可食修整料；用水；电力；废水 | 经校准秤和仪表，与分割方案及批次记录核对 | kg；m3；kWh | 每生产批次采集并按月核对 | 至少一个有代表性的连续 12 个月期间或完整生产活动 | 本过程所有纳入设备和作业区域 | 按物种和批次分别汇总每个原子流，核对平衡后归一化至过程定量参考 | 校准资料、批准规范、签署日志、适用时的实验室报告及质量平衡审查 |
| `cp_chilling_storage` | `chilling_storage` | 准备肉、冷藏产出、温控不合格品、电力、制冷剂与冷库记录 | 批次、称量、温度记录仪、电表、制冷剂维护与不合格品记录 | 物种；投入质量；产出质量；产品温度；时间；电力；制冷剂标识；期初充注量；补充量；回收量；期末充注量；不合格质量 | 经校准秤、连续温度记录、电表和制冷剂维护日志 | kg；kWh；degree C；h | 每生产批次采集并按月核对 | 至少一个有代表性的连续 12 个月期间或完整生产活动 | 本过程所有纳入设备和作业区域 | 按物种和批次分别汇总每个原子流，核对平衡后归一化至过程定量参考 | 校准资料、批准规范、签署日志、适用时的实验室报告及质量平衡审查 |
| `cp_cleaning_wastewater` | `cleaning_wastewater` | 废水流入、清洗消毒用水、处理电力、化学品、残余物、出水与污染物记录 | 流量计、化学品领用、实验室、污泥、栅渣、排放与转移记录 | 来源废水；流入量；用水；电力；各化学品；栅渣；污泥；出水体积；BOD5；COD；TSS；总氮；总磷；排放路线 | 经校准流量计、认可实验室结果、化学品记录和签署废物去向 | m3；kg；kWh；mg/L | 每生产批次采集并按月核对 | 至少一个有代表性的连续 12 个月期间或完整生产活动 | 本过程所有纳入设备和作业区域 | 按物种和批次分别汇总每个原子流，核对平衡后归一化至过程定量参考 | 校准资料、批准规范、签署日志、适用时的实验室报告及质量平衡审查 |
| `cp_packaging_release` | `packaging_release` | 分物种冷藏肉、净产品、各包装件、各包装废物、电力、不合格品与放行记录 | 批次、称量、BOM、采购、领用、仪表、检验、不合格品与发运记录 | 物种；形态；鲜或冷藏状态；投入质量；净放行质量；各包装质量；各包装废物；电力；不合格品；发运 | 经校准秤和仪表，与产品 BOM、检验及发运记录核对 | kg；kWh | 每生产批次采集并按月核对 | 至少一个有代表性的连续 12 个月期间或完整生产活动 | 本过程所有纳入设备和作业区域 | 按物种和批次分别汇总每个原子流，核对平衡后归一化至过程定量参考 | 校准资料、批准规范、签署日志、适用时的实验室报告及质量平衡审查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_receiving_balance` | 动物接收 | 期初活重加接收量等于验收转出量、到厂死亡胴体、其他实测移出量和期末活重之和；调查差异。 | 物种；接收量；验收质量；到厂死亡质量；移出量；期初和期末活重 | 分物种接收平衡 | `ec-jrc-sa-bref-2024` |
| `calc_slaughter_balance` | 屠宰与胴体整理 | 将验收活重与修整胴体、各食用器官、血液、皮张、不可食内脏、消化道内容物、已量化的废水携带固体及库存变化核对。 | 分物种屠宰和去向记录 | 分物种屠宰质量平衡 | `ec-jrc-sa-bref-2024`、`eu-pef-2021` |
| `calc_cutting_balance` | 胴体整理与分割 | 将修整胴体投入与准备肉、可食脂肪、可食肉修整料、骨、不可食修整料、已量化的废水携带固体及库存变化核对。 | 分物种分割记录 | 分物种分割质量平衡 | `ec-jrc-sa-bref-2024`、`eu-pef-2021` |
| `calc_fuel_co2` | 直接燃料燃烧 | 每种燃料能量记录分别乘以其有记录的场址、供应商或法规化石碳因子，不得合并燃料。 | 燃料标识；能量；因子；因子来源与有效期 | 单一燃料和过程的化石 CO2 | `eu-pef-2021` |
| `calc_refrigerant_loss` | 冷却与冷藏暂存 | 对每种制冷剂，期初充注量加补充量减回收量、期末充注量和有记录转移量，得到排放至空气的损失量。 | 制冷剂标识；期初充注量；补充量；回收量；期末充注量；转移量 | 单一制冷剂空气损失量 | `ec-jrc-sa-bref-2024`、`eu-pef-2021` |
| `calc_effluent_load` | 废水排放 | 处理后出水体积乘以同一期间单一污染物的实验室浓度，并明确换算单位。 | 出水体积；污染物浓度；采样期间；换算因子 | 单一污染物排放质量 | `ec-jrc-sa-bref-2024` |
| `calc_reference_mass` | 包装与放行 | 净放行质量等于包装或散装产品毛质量减包装质量；核对分物种投入、不合格品、样品和库存变化。 | 毛质量；各包装质量；分物种冷藏肉投入；不合格品；样品；库存变化 | 参考产品净 kg | `eu-pef-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 记录物种、整胴体或分割形态、带骨状态、排除内脏、鲜或冷藏状态、出口温度、净质量、包装形式、等级、场址和生产期间。 | 批准产品规范、检验、温度、标签和发运记录 |
| `dq_company_specific` | 前景清单 | 纳入制造过程采用公司特定活动数据，并保留各原子流所用原始记录。 | 仪表、秤、发票、领用记录、日志、实验室报告和供应商记录 |
| `dq_temporal_scope` | 所有过程 | 采用有代表性的连续 12 个月期间或完整生产活动，并披露季节、物种、产品组合、停机和异常运行覆盖。 | 生产日历、批次登记、维护日志和代表性声明 |
| `dq_completeness` | 清单 | 核算每项声明材料、公用工程、燃料、制冷剂、清洗化学品、包装件、共产品、废物和基本流排放，或记录该原子行不适用的原因。 | 签署完整性清单和经核对过程记录 |
| `dq_measurement` | 实测数据 | 保留各实测或推导值的仪器标识、校准状态、读数频率、估算或分配方法及不确定性或数据限制。 | 校准证书、仪表图、计算工作簿和审查记录 |
| `dq_external_links` | 上下游数据集 | 记录关联的饲养、运输、外购公用工程、材料、化学品、包装、废物和处理数据集的地域、技术、时间、产品状态、分配兼容性和质量。 | 数据集元数据和数据质量评估 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考产品 | 确认 CPC 21114、物种、鲜或冷藏状态、排除冻肉和内脏、净质量、形态及工厂门口放行。 | `un-cpc-v3-2025` |
| `validate_reference_uuid` | 参考流 | 确认仅参考产出使用 UUID 6fb95713-8813-4a4e-a0cd-1a3139e8347a、Mass 93a60a56-a3c8-11da-a746-0800200b9a66、单位组 93a60a57-a4c8-11da-a746-0800200c9a66 和 kg。 |  |
| `validate_process_completeness` | 前景过程图 | 确认六个必需过程记录均存在，任何场外废水处理均已关联而非遗漏。 | `ec-jrc-sa-bref-2024` |
| `validate_atomic_inventory` | 清单 | 拒绝集合标签，并要求各物种、材料、公用工程、燃料、制冷剂、化学品、包装件、废物、共产品和基本流排放分别成行。 | `ec-jrc-sa-bref-2024`、`eu-pef-2021` |
| `validate_mass_balance` | 接收、屠宰、分割、冷藏与包装 | 每批核对实测投入、合格产出、具体共产品、具体废物、不合格品和库存变化，并调查无法解释的差异。 | `ec-jrc-sa-bref-2024`、`eu-pef-2021` |
| `validate_energy_refrigerant` | 公用工程与制冷 | 分别核对各阶段电力和各热燃料；按期初充注量、补充量、回收量、期末充注量及转移记录核对每种制冷剂。 | `ec-jrc-sa-bref-2024`、`eu-pef-2021` |
| `validate_effluent` | 废水处理 | 将出水体积和各污染物负荷匹配到同一采样期间、分析结果、排放路线和运行记录。 | `ec-jrc-sa-bref-2024` |
| `validate_transparency` | 发布数据集 | 保留公司特定记录、分配选择、排除项、数据缺口、因子、代表性和质量证据，以支持独立审查。 | `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 加工厂门口鲜或冷藏兔肉或野兔肉的前景生产数据集 |
| downstream_use | 经审查且对消费模型具有代表性时作为 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 关联至物种、产品状态、形态、地域、技术、期间、分配和质量需求均与本数据集匹配的下游食品产品及生命周期模型 |
| excluded_use | 冻肉、将食用内脏作为参考产品、其他物种、活体动物生产、零售或使用阶段建模，以及技术或分配情境不匹配的用途 |
| required_metadata | PCR id；CPC 21114；参考 UUID；物种；形态；带骨状态；排除内脏；鲜或冷藏条件与温度；净质量；包装；场址；地域；技术；期间；过程覆盖；分配；去向；上下游关联 |
| required_quality_disclosure | 公司特定数据覆盖；仪表和秤覆盖；实验室方法；质量平衡闭合；分配敏感性；制冷剂平衡；数据缺口；排除项；替代；数据集质量和代表性 |
| update_trigger | 物种组合、产品形态、过程路线、冷却系统、制冷剂、燃料、清洗化学品、废水路线、包装形式、分配基准、场址、法规或代表期间发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-2025` | 官方指南（`official_guidance`） | United Nations Statistics Division，CPC Version 3.0 官方分类条目及 CPC_Ver_3.0_Structure_30Jun2025.csv，https://unstats.un.org/unsd/classifications/Econ/CPC，访问日期 2026-08-13 | CPC 21114 鲜或冷藏精确范围，以及参考类别排除冻肉和内脏 |
| `ec-jrc-sa-bref-2024` | 官方指南（`official_guidance`） | European Commission Joint Research Centre，Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and Edible Co-products Industries，JRC135916，DOI 10.2760/18199，https://publications.jrc.ec.europa.eu/repository/handle/JRC135916，访问日期 2026-08-13 | 动物接收、屠宰、胴体整理、分割、冷却、清洗、公用工程、废水、排放及具体产出的过程结构，不采用默认数量 |
| `eu-pef-2021` | 官方指南（`official_guidance`） | European Commission Recommendation (EU) 2021/2279，整合版产品环境足迹方法，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng，访问日期 2026-08-13 | 产品特定清单、公司特定制造数据、完整 LCI、分配层级、透明度、数据质量和验证 |
