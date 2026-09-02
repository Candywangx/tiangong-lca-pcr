---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cold-water-shrimps-and-prawns-frozen-dried-salted-or-in-brine
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冷水虾和对虾，冷冻的、干制的、盐腌的或盐水保藏的

## 1. 范围与适用性

本 PCR 用于生产“从加工厂入口到工厂出口”的冷水虾或对虾前景数据包，且每个数据包只声明一条实际保藏路线：冷冻、干制、盐腌或盐水保藏。边界包括原料虾在加工场址的接收、预处理、路线特定保藏、包装及至包装产品工厂门的场内储存。捕捞或养殖、饲料、船舶、上岸和进厂运输由上游数据集表示，不在本前景清单中重复构造。

每个数据包必须只建模一条实际保藏路线。除非研究另行定义、加权并披露情景，否则不得混合路线或使用产品组合平均。罐藏、发酵、裹粉、挂浆、复合预制食品和暖水虾产品不在适用范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cold-water-shrimps-and-prawns-frozen-dried-salted-or-in-brine |
| classification_refs | UNSD CPC 3.0：21255，精确分类参考 |
| covered_products | 以冷冻、干制、盐腌或盐水状态销售的冷水虾和对虾；仅在声明时包括生制、部分熟制或熟制状态 |
| excluded_products | 活虾或未保藏鲜虾；暖水虾；罐藏、发酵、仅烟熏、裹粉、挂浆或复合预制食品 |
| representative_product | 采用一条声明路线保藏的包装冷水虾或对虾 |
| production_route | 原料虾接收与预处理 -> 冷冻、干制、盐腌或盐水保藏中恰好一种 -> 包装与路线适用的储存 |
| market_state | 保藏食品在加工厂出口的包装状态；声明冷冻、干制、盐腌或盐水状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在加工厂出口交付的保藏冷水虾或对虾 |
| How much | 1 kg 虾产品净质量 |
| How well | 符合声明的市场规格和保藏路线，产品形态及食品安全控制已记录 |
| How long or cycle | 一个生产批次至工厂门放行；披露货架期但不给予使用时长信用 |
| reference_flow_link | `pack_store` 的包装产品输出净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 产品净质量，不包括包装、冻结镀冰和游离盐水或沥液 |
| 参考产品流 | 冷水虾和对虾，冷冻的、干的、盐腌的或盐水的 `49df5af0-c626-4914-acf6-3ed9640172e9` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 保藏路线（冷冻、干制、盐腌、盐水保藏中恰好一种）；物种或商业名称；生制/部分熟制/熟制状态；去壳/带壳及带头/去头形态；冷冻产品的镀冰与否及去镀冰基准；盐腌/盐水产品的盐或盐水配方；干制产品的干燥终点或水分规格；净质量方法；储存温度和时长；生产的地理和时间范围 |

构建前景数据包时，必须在元数据、过程说明、参考流备注、产品说明或等效字段中声明所有必需限定信息。缺失限定信息时，参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部清单归一化到 1 kg 虾产品净质量；参考质量不包括包装、镀冰和游离盐水/沥液。 |
| `wet_mass_balance` | 每个前景过程 | Mass | kg | 使用一致称重基准记录输入和输出湿质量，并分别记录产品、分离固体、废水、保留的盐或水以及适用时的蒸发水。 |
| `energy_units` | 电力和热能 | Energy | 电力用 kWh；燃料或热量用 MJ | 保留实测单位和换算因子；不得在没有显式换算且未分开连接来源数据集时合并电力和热能。 |
| `route_conditioning` | 路线特定数量 | 路线声明属性 | 声明单位 | 仅当相应路线或操作已声明时，才应用冷冻、干燥、盐、盐水、镀冰、冷藏和干燥能源行。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在加工场地接收的原料冷水虾或对虾，已记录供应商、产地、产品形态、温度和接收质量 |
| starting_condition_role | 前景加工系统的上游产品输入 |
| product_classification_scope | 语义匹配 CPC 3.0 代码 21255 的保藏冷水虾和对虾产品 |
| recursive_input_rule | 如果输入已是本 PCR 类别的保藏产品，则使用其自身数据集仅记录一次上游产品输入，不递归重建其保藏过程。 |
| upstream_dataset_requirement | 按适用性要求供应商、渔业、养殖、能源、水、盐、包装、制冷剂、运输和废物处理数据集；披露未解决的代理。 |
| disclosure | 声明保藏路线、原料虾产地和生产系统、预处理/熟制状态、产品形态、产率、储存方式、分配、排除操作、数据期间及全部代理。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 全部数据包 | 包括接收、预处理、实际路线保藏、包装、场内公用工程、清洗、废水和固体残余物处理以及至工厂门放行的储存；当研究范围需要时，以链接数据集表示接收前生产和出厂后配送。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `boundary_route_gate` | 保藏 | 选择恰好一条实际路线，只包括其操作和控制；不得无条件混合冷冻、干制、盐腌或盐水保藏。 | `codex-cxc-52-2003`; `codex-cxs-92-1981` |
| `boundary_food_safety` | 水、处理、保藏和储存 | 保留证明路线适用的卫生、产品接触时的饮用水或清洁海水、时间-温度或干燥/盐控制和放行去向的记录；这些控制不取代实测 LCI 数量。 | `codex-cxc-52-2003`; `codex-cxs-92-1981` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receive_prepare` | 接收与预处理原料虾 | required | 所有路线；仅包括实际清洗、分级、去壳、去头、去肠、熟制和冷却操作 | 建立原料输入与预处理产品质量平衡 | kg 预处理虾输出 |
| `preserve_route` | 路线特定保藏 | required | 冷冻、干制、盐腌或盐水保藏中恰好一种；镀冰或熟制仅在实际执行时包括 | 不进行路线平均，应用保藏和路线控制 | kg 保藏虾输出 |
| `pack_store` | 包装并储存至放行 | required | 包装及路线适用的场内储存至工厂门放行 | 生产参考产品，并记录包装、冷藏或干燥储存 | 1 kg 净质量参考产品 |

### 过程：接收与预处理原料虾（`receive_prepare`）

#### 输入

##### 产品流

###### 接收的原料冷水虾（`raw_shrimp_input`）

该产品输入在加工厂接收时跨越前景边界，并建立批次身份和质量。

- 选定流：原料冷水虾或对虾（UUID 待审）
- 流属性/单位：Mass / kg
- 数量规则：按批次和产品形态称量接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理虾输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_and_preparation`
- 来源：`codex-cxc-52-2003`

###### 预处理水和冰（`prep_water_ice`）

记录为接触、清洗、冷却或支持该批次而跨越边界的水和冰。

- 选定流：饮用品质工艺水和/或清洁冰（UUID 待审）
- 流属性/单位：Mass / kg
- 数量规则：计量或通过采购平衡获得与批次接触或为其服务的水和冰
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理虾输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_and_preparation`
- 来源：`codex-cxc-52-2003`; `codex-cxs-92-1981`
- 数量范围：水和冰的暂定 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 预处理虾输出
  - 基准：宽泛、可替换的筛查区间
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理能源（`prep_energy`）

记录可归属于实际预处理操作的电力和热能。

- 选定流：电力和/或热能，分开记录（UUID 待审）
- 流属性/单位：Energy / kWh 电力和 MJ 热能
- 数量规则：用于预处理及已声明熟制/冷却的计量、发票或设备运行时间推导能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理虾输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_and_preparation`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预处理虾中间产品（`prepared_shrimp_output`）

该中间产品将实测预处理质量转移到声明的保藏路线。

- 选定流：预处理冷水虾中间产品（UUID 待审）
- 流属性/单位：Mass / kg
- 数量规则：转入保藏过程的称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：本过程定量参考
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_and_preparation`

##### 废物流

###### 预处理残余物（`prep_residues`）

按组成和实际经济或废物去向记录分离固体。

- 选定流：按实际去向分列的虾头、虾壳、剔除虾及其他分离固体（UUID 待审）
- 流属性/单位：Mass / kg
- 数量规则：称量或质量平衡各种实质不同的残余物，并记录销售、回收、处理或处置
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理虾输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_and_preparation`

###### 预处理废水（`prep_wastewater`）

记录流向场内或外部处理的液体排放、实测数量和去向。

- 选定流：按处理路线分列的工艺废水（UUID 待审）
- 流属性/单位：Mass 或 volume / kg 或 m3
- 数量规则：计量排放或用水平衡，并保留处理去向和相关负荷数据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理虾输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_and_preparation`

##### 基本流

### 过程：路线特定保藏（`preserve_route`）

#### 输入

##### 产品流

###### 供入保藏过程的预处理虾（`prepared_shrimp_input`）

该输入是从预处理进入所选保藏路线的实测连接。

- 选定流：预处理冷水虾中间产品（UUID 待审）
- 流属性/单位：Mass / kg
- 数量规则：来自 `receive_prepare` 的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 保藏虾输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_route`

###### 保藏用电力和热量（`preservation_energy`）

仅记录声明路线使用的电力和热量，并将能源载体分开。

- 选定流：声明路线使用的电力、燃料、蒸汽或热量，作为独立流记录（UUID 待审）
- 流属性/单位：Energy / kWh 电力和 MJ 热能
- 数量规则：冷冻、干燥、盐水配制、泵送、加热、冷却及本过程内路线特定储存的计量或设备运行时间推导能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 保藏虾输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_route`
- 数量范围：路线能源的暂定 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kWh/kg 保藏虾输出的电力；热能仍以 MJ 分开记录
  - 基准：宽泛、可替换的筛查区间；不得作为路线平均默认值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 路线用水、冰、盐和盐水配料（`preservation_materials`）

记录实际进入声明保藏操作的每种材料，并核算再循环和排放。

- 选定流：水、冰、食品级盐和其他已声明盐水配料，分开记录（UUID 待审）
- 流属性/单位：Mass / kg
- 数量规则：仅记录声明路线实际使用的材料；区分保留材料、再循环、排放和废弃
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 保藏虾输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_route`
- 来源：`codex-cxc-52-2003`; `codex-cxs-92-1981`
- 数量范围：盐腌或盐水路线盐输入的暂定 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg 盐/kg 保藏虾输出
  - 基准：宽泛、可替换的筛查区间；不适用于未加盐路线
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 保藏虾中间产品（`preserved_shrimp_output`）

该输出将路线特定的保藏质量从已验证终点转移到最终包装。

- 选定流：与声明路线匹配的冷冻、干制、盐腌或盐水冷水虾中间产品（UUID 待审）
- 流属性/单位：Mass / kg
- 数量规则：路线终点后、最终包装前称量输出；镀冰或游离盐水单独记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：本过程定量参考
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_route`
- 来源：`codex-cxc-52-2003`; `codex-cxs-92-1981`

##### 废物流

###### 保藏废水和废盐水（`preservation_wastewater`）

记录路线特定液体废物及其处理去向，不混合不兼容的排放类型。

- 选定流：按实际路线分列的废水、解冻/冷却水、废盐水或清洗排放（UUID 待审）
- 流属性/单位：Mass 或 volume / kg 或 m3
- 数量规则：计量或平衡数量并记录处理路线；当具实质影响时表征盐或相关负荷
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 保藏虾输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_route`

###### 保藏固体与产品损失（`preservation_residues`）

按实际回收或处理去向记录离开保藏过程的固体和产品损失。

- 选定流：按去向分列的路线特定剔除物、碎屑、破损或其他产品损失（UUID 待审）
- 流属性/单位：Mass / kg
- 数量规则：称量或质量平衡残余物，并记录去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 保藏虾输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_route`

##### 基本流

###### 释放的制冷剂（`preservation_refrigerant_release`）

当使用制冷时，记录可归属于保藏设备的各种制冷剂对空气的损失。

- 选定流：释放到空气的制冷剂种类（UUID 待审）
- 流属性/单位：Mass / kg
- 数量规则：按设备负荷和批次分配到各种类的年度充注量或泄漏记录；只有记录了无制冷路线或验证无损失时才可记录零
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 保藏虾输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_route`

### 过程：包装并储存至放行（`pack_store`）

#### 输入

##### 产品流

###### 供包装的保藏虾（`preserved_shrimp_input`）

该输入是进入最终包装和储存的实测路线特定中间产品。

- 选定流：与声明路线匹配的保藏冷水虾中间产品（UUID 待审）
- 流属性/单位：Mass / kg
- 数量规则：来自 `preserve_route` 的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_storage`

###### 一次和二次包装（`packaging_input`）

按材料和质量记录进入包装产品系统的每个包装组件。

- 选定流：分开记录的各包装材料和组件（UUID 待审）
- 流属性/单位：Mass / kg
- 数量规则：物料清单或采购-生产平衡；除非建模其使用份额，否则不包括可重复使用资产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_storage`
- 数量范围：包装的暂定 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 包装/kg 净质量参考产品
  - 基准：宽泛、可替换的筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装和储存电力（`packing_storage_energy`）

记录包装和场内储存电力，并按负载和时长分配共享储存。

- 选定流：包装及路线适用的冷藏、干燥或常温储存电力（UUID 待审）
- 流属性/单位：Energy / kWh
- 数量规则：计量电力，按设备负荷、储存容积或质量及记录的储存时长分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净质量参考产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_storage`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净质量保藏冷水虾产品（`reference_product_output`）

该工厂门输出在排除包装和游离液后实现 1 kg 净质量参考流。

- 选定流：冷水虾和对虾，冷冻的、干的、盐腌的或盐水的 `49df5af0-c626-4914-acf6-3ed9640172e9`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定为 1 kg 产品净质量，不包括包装、镀冰和游离盐水/沥液
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 采集协议：`cp_packaging_and_storage`
- 来源：`codex-cxs-92-1981`

##### 废物流

###### 包装与产品剔除物（`packing_waste`）

按材料和实际去向分开记录包装边角料和剔除食品。

- 选定流：按材料和去向分列的包装边角料及剔除产品（UUID 待审）
- 流属性/单位：Mass / kg
- 数量规则：称量或通过生产平衡得到数量；食品废物与包装废物分开记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_storage`

##### 基本流

###### 释放的储存制冷剂（`storage_refrigerant_release`）

当使用制冷时，记录可归属于场内储存设备的各种制冷剂对空气的损失。

- 选定流：释放到空气的制冷剂种类（UUID 待审）
- 流属性/单位：Mass / kg
- 数量规则：按负荷和储存时长分配到种类的充注量或泄漏记录；只有在未使用制冷或验证无损失时才可记录零
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净质量参考产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_storage`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 多输出预处理和保藏 | 首先细分已计量过程或使用物理因果归属，使已分开计量的产品线和路线获得各自的输入与排放。 | `eu-pef-2021-2279` |
| `allocation_residues` | 虾头、虾壳、小规格虾和其他回收材料 | 按实际去向对每个输出分类。废物承担其处理负担，且前景清单内不计避免产品信用；当细分无法实施时，有市场的共产品才进行显式分配。 | `eu-pef-2021-2279` |
| `allocation_fallback` | 无法避免的联合输入和排放 | 优先使用已记录的湿质量、干物质或其他因果参数等物理关系。如无可辩护的物理关系，使用同期价格进行经济分配，并披露份额、价格期间、敏感性及排除流。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_and_preparation` | `receive_prepare` | 批次身份、接收/预处理质量、水、冰、能源、残余物、废水 | 称重单、仪表、发票、批次和卫生记录 | lot_id; species; origin; raw_or_cooked_state; product_form; receipt_temperature; received_mass; prepared_mass; water_mass; ice_mass; electricity; thermal_energy; residue_mass_by_destination; wastewater_quantity | 校准秤和仪表；核对采购与批次日志 | kg; m3; kWh; MJ; degC | 质量和身份逐批记录；仪表/发票期间分配到批次 | 有代表性的运行期，通常为 12 个月，并披露季节性 | 为该产品服务的所有前景生产线和公用工程 | 按过程和路线汇总，共享公用工程按实测驱动因子分配，归一化到预处理输出 | 校准、发票、批次可追溯性、仪表覆盖率、质量平衡闭合 |
| `cp_preservation_route` | `preserve_route` | 路线材料、能源、控制、输出、损失、废水、制冷剂 | 批次配方、控制日志、仪表、秤、维护和排放记录 | route; input_mass; output_mass; water; ice; salt; brine_ingredients; electricity; fuel_or_heat; time_temperature_or_drying_endpoint; glaze_mass; spent_brine; wastewater; solids; refrigerant_species; refrigerant_recharge | 每批记录实际路线；计量或从已记录的设备运行时间计算；核对材料和制冷剂平衡 | kg; m3; kWh; MJ; degC; h | 路线和质量逐批记录；控制连续或按批记录；制冷剂年度核对 | 有代表性的运行期，通常为 12 个月，按路线分层 | 每条路线和技术生产线；不得跨路线平均 | 只在一条声明路线内汇总；归一化到保藏输出 | 路线日志、校准控制、配方、发票、维护日志、放行记录 |
| `cp_packaging_and_storage` | `pack_store` | 净质量、镀冰/游离液、包装、能源、时长、剔除物、制冷剂 | 包装称重、BOM、仪表、仓库和维护日志 | lot_id; gross_mass; packaging_mass; glaze_or_free_liquid_mass; net_product_mass; packaging_by_material; electricity; storage_temperature; storage_duration; rejects; refrigerant_species; refrigerant_recharge | 用已记录的去镀冰或沥液方法确定净质量；核对包装和仓库能源 | kg; kWh; degC; day | 净质量和 BOM 逐批记录；连续温度记录；能源按发票/仪表期间记录 | 有代表性的运行期，通常为 12 个月 | 放行前使用的所有包装线和场内储存 | 包装和剔除物归一化到净产品；储存能源和泄漏按负载及时长分配 | 秤校准、BOM、去镀冰/沥液方法、温度日志、仪表覆盖率、维护记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 参考产品 | 产品净质量 = 包装毛重 - 包装质量 - 镀冰质量 - 游离盐水/沥液质量 | gross_mass; packaging_mass; glaze_or_free_liquid_mass | net_product_mass | `codex-cxs-92-1981` |
| `calc_process_yield` | `receive_prepare`; `preserve_route` | 产率 = 实测产品输出 / 实测产品输入；按路线和产品形态分别报告 | input_mass; output_mass | process_yield |  |
| `calc_inventory_normalization` | 所有流 | 归一化数量 = 可归属流数量 / 净质量参考产品 | attributable flow quantity; net_product_mass | amount per 1 kg reference flow | `eu-pef-2021-2279` |
| `calc_refrigerant_release` | 使用制冷的保藏和储存 | 各种制冷剂释放 = 可归属充注量或核对损失 / 净质量参考产品 | refrigerant_species; recharge_or_loss; allocation_driver; net_product_mass | kg refrigerant per kg reference flow |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 原料和最终产品 | 保留批次、物种/商业名称、产地和生产系统、保藏路线、产品形态、熟制状态及从供应商到输出的可追溯性。 | 批次和供应商记录；`unsd-cpc-3-0`；`codex-cxc-52-2003` |
| `dq_mass_completeness` | 所有过程 | 核对湿质量输入与输出，并说明实质不平衡、水分移除/添加、镀冰、保留盐、废水和残余物。 | 校准称重、批次平衡、去镀冰/沥液方法 |
| `dq_route_separation` | 保藏 | 分开保留路线、技术、能源、材料、产率和控制记录；不得平均冷冻、干制、盐腌和盐水生产。 | 批次路线和设备记录 |
| `dq_representativeness` | 前景数据包 | 记录数据期间、季节覆盖、地理、技术、产能利用率、场址覆盖、分配驱动因子、代理和排除项；对短于有代表性年度周期的期间说明理由。 | 数据清单和质量评估；`eu-pef-2021-2279` |
| `dq_food_safety_records` | 产品接触水和保藏控制 | 保留饮用水或清洁海水证据，以及路线适用的卫生、终点、温度、干燥、盐/盐水和储存控制。 | HACCP/控制和放行记录；`codex-cxc-52-2003`；`codex-cxs-92-1981` |
| `dq_estimate_replacement` | 推理估算范围 | 候选范围仅作为 QA 标记。进入 active 状态前以已评审外部证据或前景记录替换；对保留的离群值作出说明，不得截断。 | 评审记录和基础一手数据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 参考产品 | 如参考流 UUID、Mass 属性 UUID、质量单位组 UUID、kg 单位、CPC/产品语义或规范 PCR 身份与本 PCR 不同，则失败。 | `unsd-cpc-3-0` |
| `validation_route` | 数据集范围 | 如未声明恰好一条路线、无说明纳入不适用路线的流，或在无显式加权情景时平均多条路线，则失败。 | `codex-cxc-52-2003`; `codex-cxs-92-1981` |
| `validation_reference_mass` | 参考数量 | 如 1 kg 不是虾产品净质量，或包含包装、冻结镀冰或游离盐水/沥液，则失败。 | `codex-cxs-92-1981` |
| `validation_inventory` | 前景清单 | 如缺少任一必需过程，或未说明适用性即遗漏产品输入/输出、水/冰、路线能源/材料、包装、残余物、废水、储存和制冷剂，则失败。 | `eu-pef-2021-2279` |
| `validation_allocation` | 多输出过程 | 如未披露共产品/废物去向、分配方法、驱动因子、份额、适用时的价格期间和敏感性，则失败。 | `eu-pef-2021-2279` |
| `validation_controls` | 冷冻及其他声明路线 | 对冷冻产品，如缺少速冻和 -18 degC 或更低储存证据，则失败；对任一路线，如适用的产品接触水、卫生、终点和储存控制未记录，则失败。 | `codex-cxc-52-2003`; `codex-cxs-92-1981` |
| `validation_quality` | 数据包 | 如未披露采集覆盖、质量平衡闭合、数据期间、地理、技术、场址覆盖、代理、排除和估算状态，则失败。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一条声明保藏路线的前景生产数据集 |
| downstream_use | `secondary_dataset`；评审并发布后可作 `background_dataset` |
| allowed_use | 参考质量、边界、地理、技术和期间兼容的产品与路线匹配 LCA process 或 lifecyclemodel 研究 |
| excluded_use | 未声明的路线混合；代替鲜品、暖水虾、罐藏、裹粉、发酵或复合虾产品；营养或食品安全认证 |
| required_metadata | PCR id 和版本；产品和路线限定信息；参考流 UUID；场址/地理；期间；技术；产品形态；产地/生产系统；产率；分配；来源数据集；采集覆盖 |
| required_quality_disclosure | 质量平衡闭合；仪表和批次覆盖；路线分离；代理和估算清单；数据缺口；不确定性/离群值；制冷剂方法；排除操作；食品安全控制证据状态 |
| update_trigger | 路线、产品形态、供应商/产地组合、技术、能源系统、包装、储存、分配、法规、来源证据、UUID 身份或代表性数据期间实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | dataset | 联合国统计司，中央产品分类第 3.0 版结构与导言，https://unstats.un.org/unsd/classifications/Econ/cpc（访问日期 2026-08-11） | 分类参考与产品类别身份 |
| `codex-cxc-52-2003` | standard | 国际食品法典，CXC 52-2003，《鱼和渔业产品操作规程》，https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/（访问日期 2026-08-11） | 渔业产品过程边界、处理、卫生、路线控制和记录 |
| `codex-cxs-92-1981` | standard | 国际食品法典，CXS 92-1981，《速冻虾或对虾标准》，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B92-1981%252FCXS_092e.pdf（访问日期 2026-08-11） | 冷冻路线定义、产品接触水、速冻、-18 degC 储存、镀冰、净质量和产品说明 |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会关于使用环境足迹方法的建议 (EU) 2021/2279，https://eur-lex.europa.eu/eli/reco/2021/2279/oj | 系统边界、分配层级、清单完整性、归一化和数据质量披露 |
