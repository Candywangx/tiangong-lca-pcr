---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.waterproof-footwear-with-outer-soles-and-uppers-of-rubber-or-plastics-other-than-footwe-4b94079f
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 外底和鞋面为橡胶或塑料且不带金属防护包头的防水鞋靴

## 1. 范围与适用性

本 PCR 适用于外底和鞋面为橡胶或塑料、且不带金属防护包头的防水鞋靴工厂门口生产。包括整体模塑鞋靴和分别成形的防水鞋面与鞋底，以及已声明的衬里、密封系统、整理和销售包装。不包括带金属防护包头的鞋靴、非防水鞋靴、超出已声明鞋面/外底材料的产品，以及配送、使用、维修和生命末期。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.waterproof-footwear-with-outer-soles-and-uppers-of-rubber-or-plastics-other-than-footwe-4b94079f |
| classification_refs | CPC 3.0: 29310，精确分类引用 |
| covered_products | 外底和鞋面为橡胶或塑料的防水靴及其他防水鞋靴，包括整体模塑、部件成形后组装、浸塑、硫化或等效的已声明路线。 |
| excluded_products | 带金属防护包头的鞋靴；非防水鞋靴；鞋面与外底不同时符合橡胶或塑料要求的鞋靴；报告场址未实施的上游作业；下游配送、使用和生命末期。 |
| representative_product | 已声明尺码、结构、鞋面与鞋底聚合物、衬里、整理、密封系统和包装的质量验收合格工厂门口防水鞋靴。 |
| production_route | 购入或场内配混材料 → 鞋面、鞋底或整体鞋壳成形 → 加衬、组装和密封 → 整理与防水测试 → 最终检验和包装。 |
| market_state | 已完工、质量验收合格、工厂门口包装产品；包装与参考产品净质量分开。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 工厂门口供应外底和鞋面为橡胶或塑料且不带金属防护包头的防水鞋靴。 |
| How much | 质量验收合格成品鞋靴净质量 1 kg，不含单独列入清单的包装。 |
| How well | 符合已声明产品规格和防水质量测试，声明结构、聚合物组成、尺码基准并确认无金属防护包头。 |
| How long or cycle | 一次工厂门口制造输出；不表示使用寿命或穿着时长。 |
| reference_flow_link | `reference_footwear_output`，位于 `p5_packaging` 过程。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Waterproof footwear, with outer soles and uppers of rubber or plastics, other than footwear incorporating a protective metal toe-cap `c419cb3e-b7f4-44b5-9f7c-ed1ebfc6260b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 鞋靴形态；1 kg 所代表尺码范围和数量；鞋面聚合物；外底聚合物；整体或组装结构；混合料来源；衬里；密封系统；整理；防水测试及合格准则；确认无金属防护包头；包装；场址；地域；技术；报告期 |

全部必需限定信息须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终调湿和验收后、包装前计量净质量；全部交换归一化至正好 1 kg 参考输出。 |
| `count_to_mass` | 双或件数记录 | 质量和数量 | kg 及双或件 | 用产品和尺码特定的实测质量换算；保留抽样、秤校准、尺码加权和计算证据。 |
| `material_mass` | 材料、化学品、部件、包装、产品和固体废物 | Mass | kg | 使用经校准的批次、仓库、秤或规格记录；每种材料和废物流分开。 |
| `utility_measurement` | 电力、蒸汽、天然气、压缩空气和水 | 适用的能量、质量或体积 | kWh、MJ、kg 或 m3 | 优先分表；否则按第 7 节分配完整报告期总量。 |
| `conditioning_basis` | 产品、衬里和混合料质量 | Mass | kg | 声明调湿和含湿基准；没有有记录的换算时不得混用湿、调湿和干质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明每种材料以单项配混原料、可直接成形混合料、粒料、成形鞋面或鞋底、整体鞋壳、衬里或其他命名部件中的何种状态进入。 |
| starting_condition_role | 固定第一项前景转化并防止供应商作业重复计算。 |
| product_classification_scope | 与 CPC 3.0 代码 29310 精确对应的已审查语义范围内成品防水鞋靴。 |
| recursive_input_rule | 同类成品鞋靴作为投入时，只记录一个供应商产品投入及其供应商数据集，不再递归拆回相同前景过程。 |
| upstream_dataset_requirement | 对购入材料、部件、公用工程、包装、运输和废物处理使用可追溯上游数据集。成品皮革衬里须有覆盖鞣制的供应商数据；场址未实施鞣制时不得加入鞋厂前景。 |
| disclosure | 声明起始状态、路线、供应商已嵌入作业、防水测试、返工、废物去向、分配、上游数据集、排除项和数据缺口。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 前景制造 | 从已声明投入开始，纳入场内实际发生的配混、成形、组装、密封、整理、防水测试、检验和包装，以及直接公用工程、废物和排放。 | ec-pef-method-2021; af-pefcr-3-1-2025 |
| `boundary_rule_2` | 产品范围 | 要求外底和鞋面为橡胶或塑料、声明防水性能且不带金属防护包头。 | un-cpc-3-0 |
| `boundary_rule_3` | 上游材料 | 用可追溯上游数据集表示供应商生产，不得在鞋厂前景中重复供应商作业。 | ec-pef-method-2021; af-pefcr-3-1-2025 |
| `boundary_rule_4` | 条件性皮革投入 | 成品皮革衬里数据集须覆盖相关鞣制化学品、能源、水、废物和排放；鞣制不是强制鞋厂前景过程。 | jrc-tanning-bref |
| `boundary_rule_5` | 完整性 | 记录全部适用原材料、能源、产品、废物和直接排入空气/水的流；UUID 未解决不构成遗漏理由。 | ec-pef-method-2021 |
| `boundary_rule_6` | 下游阶段 | 排除配送、零售、使用、维修和生命末期，除非下游 lifecyclemodel 增加且避免重复计算。 | ec-pef-method-2021; af-pefcr-3-1-2025 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p1_compounding` | 场址内聚合物和橡胶配混 | conditional | 场址内用单项原料配制 PVC 或橡胶时纳入；仅使用购入的可直接成形混合料时不纳入。 | 生成已命名合格输出，并记录直接投入、废物和排放。 | kg 合格混合料 |
| `p2_component_forming` | 鞋面、鞋底和整体鞋壳成形 | required | 纳入实际模塑、浸塑、压延或硫化作业；每张不适用的原子路线卡均须声明不适用。 | 生成已命名合格输出，并记录直接投入、废物和排放。 | kg 合格成形部件 |
| `p3_assembly_sealing` | 衬里、组装和防水密封 | required | 纳入实际接合、加衬、缝制、粘合、密封和固化；整体鞋壳仅纳入实际发生的完工操作。 | 生成已命名合格输出，并记录直接投入、废物和排放。 | kg 合格组装鞋靴 |
| `p4_finishing_testing` | 表面整理和防水质量测试 | required | 纳入实际清洁、涂饰、固化、修边、检验和防水测试。 | 生成已命名合格输出，并记录直接投入、废物和排放。 | kg 包装前合格鞋靴 |
| `p5_packaging` | 最终检验和包装 | required | 纳入最终质量确定、配对或计件、包装及实际发生的场内搬运燃料。 | 生成已命名合格输出，并记录直接投入、废物和排放。 | 1 kg 参考产品 |

### 过程：场址内聚合物和橡胶配混（`p1_compounding`）

#### 输入

##### 产品流

###### 聚氯乙烯树脂（`pvc_resin_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Polyvinyl chloride resin
- 流属性/单位：Mass / kg
- 数量规则：按批次仓库、BOM 和过程记录计量净领用或转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p1_compounding_records`

###### 丁腈橡胶（`nbr_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Acrylonitrile-butadiene rubber
- 流属性/单位：Mass / kg
- 数量规则：按批次仓库、BOM 和过程记录计量净领用或转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p1_compounding_records`

###### 天然橡胶（`natural_rubber_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Natural rubber
- 流属性/单位：Mass / kg
- 数量规则：按批次仓库、BOM 和过程记录计量净领用或转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p1_compounding_records`

###### 对苯二甲酸二辛酯增塑剂（`dotp_plasticizer_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Dioctyl terephthalate
- 流属性/单位：Mass / kg
- 数量规则：按批次配方和库存记录计量净领用质量；保留化学品身份和浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p1_compounding_records`

###### 碳酸钙填料（`calcium_carbonate_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Calcium carbonate
- 流属性/单位：Mass / kg
- 数量规则：按批次配方和库存记录计量净领用质量；保留化学品身份和浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p1_compounding_records`

###### 炭黑（`carbon_black_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Carbon black
- 流属性/单位：Mass / kg
- 数量规则：按批次配方和库存记录计量净领用质量；保留化学品身份和浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p1_compounding_records`

###### 氧化锌（`zinc_oxide_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Zinc oxide
- 流属性/单位：Mass / kg
- 数量规则：按批次配方和库存记录计量净领用质量；保留化学品身份和浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p1_compounding_records`

###### 硫磺（`sulfur_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Sulfur
- 流属性/单位：Mass / kg
- 数量规则：按批次配方和库存记录计量净领用质量；保留化学品身份和浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p1_compounding_records`

###### 中压电力（`compounding_electricity_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：采用分表用量，或用设备时间和已核负荷记录分配完整仪表总量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p1_compounding_records`

###### 天然气（`compounding_natural_gas_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：将计量或发票燃料用量用有记录的低位热值换算并分配至过程。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p1_compounding_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 鞋用增塑聚氯乙烯混合料（`plasticized_pvc_compound_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Plasticized polyvinyl chloride compound for footwear
- 流属性/单位：Mass / kg
- 数量规则：计量转入下一前景过程的合格质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p1_compounding_records`

###### 鞋用配混橡胶（`rubber_compound_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Compounded rubber for footwear
- 流属性/单位：Mass / kg
- 数量规则：计量转入下一前景过程的合格质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p1_compounding_records`

##### 废物流

###### 废增塑聚氯乙烯混合料（`offspec_pvc_compound_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Waste plasticized polyvinyl chloride compound
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量废物转移质量，扣除有记录的过程内再利用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p1_compounding_records`

###### 废配混橡胶（`offspec_rubber_compound_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Waste compounded rubber
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量废物转移质量，扣除有记录的过程内再利用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p1_compounding_records`
##### 基本流

###### 排入空气的颗粒物（`compounding_dust_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Particulate matter to air
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据和有记录的排放因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p1_compounding_records`

###### 排入空气的非甲烷挥发性有机物（`compounding_nmvoc_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Non-methane volatile organic compounds to air
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据和有记录的排放因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p1_compounding_records`


### 过程：鞋面、鞋底和整体鞋壳成形（`p2_component_forming`）

#### 输入

##### 产品流

###### 鞋用增塑聚氯乙烯混合料（`pvc_compound_forming_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Plasticized polyvinyl chloride compound for footwear
- 流属性/单位：Mass / kg
- 数量规则：按批次仓库、BOM 和过程记录计量净领用或转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成形部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_forming_records`

###### 鞋用配混橡胶（`rubber_compound_forming_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Compounded rubber for footwear
- 流属性/单位：Mass / kg
- 数量规则：按批次仓库、BOM 和过程记录计量净领用或转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成形部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_forming_records`

###### 乙烯-醋酸乙烯共聚物粒料（`eva_granules_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Ethylene-vinyl acetate granules
- 流属性/单位：Mass / kg
- 数量规则：按批次仓库、BOM 和过程记录计量净领用或转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成形部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_forming_records`

###### 热塑性聚氨酯粒料（`tpu_granules_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Thermoplastic polyurethane granules
- 流属性/单位：Mass / kg
- 数量规则：按批次仓库、BOM 和过程记录计量净领用或转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成形部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_forming_records`

###### 中压电力（`forming_electricity_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：采用分表用量，或用设备时间和已核负荷记录分配完整仪表总量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成形部件
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p2_forming_records`

###### 蒸汽（`forming_steam_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Steam
- 流属性/单位：Energy / MJ
- 数量规则：计量交付蒸汽或分配供应商记录；声明压力和凝结水处理。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成形部件
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p2_forming_records`

###### 天然气（`forming_natural_gas_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：将计量或发票燃料用量用有记录的低位热值换算并分配至过程。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成形部件
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p2_forming_records`

###### 工艺水（`forming_process_water_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：计量工艺水体积，或用完整水平衡分配至作业。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成形部件
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p2_forming_records`

###### 水性有机硅脱模剂（`silicone_mold_release_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Aqueous silicone mold-release agent
- 流属性/单位：Mass / kg
- 数量规则：按批次配方和库存记录计量净领用质量；保留化学品身份和浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成形部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_forming_records`

###### R-410A 制冷剂（`forming_r410a_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Refrigerant R-410A
- 流属性/单位：Mass / kg
- 数量规则：期初库存加购入减期末库存、回收量和有记录的转移量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成形部件
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p2_forming_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 模塑防水鞋面（`molded_upper_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Molded waterproof footwear upper
- 流属性/单位：Mass / kg
- 数量规则：计量转入下一前景过程的合格质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成形部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_forming_records`

###### 模塑防水鞋外底（`molded_outer_sole_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Molded waterproof footwear outer sole
- 流属性/单位：Mass / kg
- 数量规则：计量转入下一前景过程的合格质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成形部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_forming_records`

###### 整体模塑防水鞋壳（`integral_footwear_shell_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Integral molded waterproof footwear shell
- 流属性/单位：Mass / kg
- 数量规则：计量转入下一前景过程的合格质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成形部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_forming_records`

##### 废物流

###### 废聚氯乙烯鞋料边角料（`pvc_forming_scrap_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Waste polyvinyl chloride footwear scrap
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量废物转移质量，扣除有记录的过程内再利用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成形部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_forming_records`

###### 废橡胶鞋料边角料（`rubber_forming_scrap_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Waste rubber footwear scrap
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量废物转移质量，扣除有记录的过程内再利用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成形部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_forming_records`
##### 基本流

###### 排入空气的非甲烷挥发性有机物（`forming_nmvoc_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Non-methane volatile organic compounds to air
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据和有记录的排放因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成形部件
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p2_forming_records`

###### 排入空气的 R-410A（`forming_r410a_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Refrigerant R-410A to air
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据和有记录的排放因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成形部件
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p2_forming_records`

###### 排入空气的化石二氧化碳（`forming_co2_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据和有记录的排放因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成形部件
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p2_forming_records`

###### 排入空气的氮氧化物（`forming_nox_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据和有记录的排放因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成形部件
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p2_forming_records`


### 过程：衬里、组装和防水密封（`p3_assembly_sealing`）

#### 输入

##### 产品流

###### 模塑防水鞋面（`molded_upper_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Molded waterproof footwear upper
- 流属性/单位：Mass / kg
- 数量规则：按批次仓库、BOM 和过程记录计量净领用或转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 模塑防水鞋外底（`molded_outer_sole_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Molded waterproof footwear outer sole
- 流属性/单位：Mass / kg
- 数量规则：按批次仓库、BOM 和过程记录计量净领用或转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 整体模塑防水鞋壳（`integral_shell_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Integral molded waterproof footwear shell
- 流属性/单位：Mass / kg
- 数量规则：按批次仓库、BOM 和过程记录计量净领用或转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 聚酯针织鞋衬里（`polyester_lining_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Polyester knitted footwear lining
- 流属性/单位：Mass / kg
- 数量规则：按批次仓库、BOM 和过程记录计量净领用或转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 成品牛皮鞋衬里（`leather_lining_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。 除非报告鞋厂实际实施鞣制，否则鞣制保持为上游过程。

- 选定流：Finished bovine leather footwear lining
- 流属性/单位：Mass / kg
- 数量规则：计量净领用质量；声明物种、整理、供应商及覆盖鞣制的上游数据集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`
- 来源：`jrc-tanning-bref`

###### 聚酯缝纫线（`polyester_thread_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Polyester sewing thread
- 流属性/单位：Mass / kg
- 数量规则：按批次仓库、BOM 和过程记录计量净领用或转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 硫化橡胶鞋用密封条（`rubber_sealing_strip_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Vulcanized rubber footwear sealing strip
- 流属性/单位：Mass / kg
- 数量规则：按批次仓库、BOM 和过程记录计量净领用或转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 聚氨酯鞋用胶粘剂（`pu_adhesive_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Polyurethane footwear adhesive
- 流属性/单位：Mass / kg
- 数量规则：按批次配方和库存记录计量净领用质量；保留化学品身份和浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 聚异氰酸酯胶粘剂固化剂（`isocyanate_hardener_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Polyisocyanate adhesive hardener
- 流属性/单位：Mass / kg
- 数量规则：按批次配方和库存记录计量净领用质量；保留化学品身份和浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 中压电力（`assembly_electricity_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：采用分表用量，或用设备时间和已核负荷记录分配完整仪表总量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格组装鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p3_assembly_records`

###### 700 kPa 压缩空气（`assembly_compressed_air_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Compressed air, 700 kPa
- 流属性/单位：Volume / m3
- 数量规则：计量体积，或由已核压缩机运行时间、负荷和供气记录计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格组装鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p3_assembly_records`

###### 天然气（`assembly_natural_gas_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：将计量或发票燃料用量用有记录的低位热值换算并分配至过程。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格组装鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p3_assembly_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 整理前组装防水鞋靴（`assembled_footwear_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Assembled waterproof footwear before finishing
- 流属性/单位：Mass / kg
- 数量规则：计量转入下一前景过程的合格质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

##### 废物流

###### 废聚酯衬里边角料（`assembly_textile_offcuts_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Waste polyester lining offcuts
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量废物转移质量，扣除有记录的过程内再利用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格组装鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 废成品牛皮边角料（`assembly_leather_offcuts_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Waste finished bovine leather offcuts
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量废物转移质量，扣除有记录的过程内再利用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格组装鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 废聚氨酯鞋用胶粘剂（`assembly_adhesive_waste_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Waste polyurethane footwear adhesive
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量废物转移质量，扣除有记录的过程内再利用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格组装鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`

###### 有缺陷的组装防水鞋靴（`assembly_reject_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Defective assembled waterproof footwear
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量废物转移质量，扣除有记录的过程内再利用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格组装鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_assembly_records`
##### 基本流

###### 排入空气的非甲烷挥发性有机物（`assembly_nmvoc_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Non-methane volatile organic compounds to air
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据和有记录的排放因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格组装鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p3_assembly_records`

###### 排入空气的氮氧化物（`assembly_nox_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据和有记录的排放因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格组装鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p3_assembly_records`


### 过程：表面整理和防水质量测试（`p4_finishing_testing`）

#### 输入

##### 产品流

###### 整理前组装防水鞋靴（`assembled_footwear_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Assembled waterproof footwear before finishing
- 流属性/单位：Mass / kg
- 数量规则：按批次仓库、BOM 和过程记录计量净领用或转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装前合格鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_testing_records`

###### 工艺水（`testing_process_water_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：计量工艺水体积，或用完整水平衡分配至作业。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前合格鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p4_finishing_testing_records`

###### 中压电力（`finishing_electricity_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：采用分表用量，或用设备时间和已核负荷记录分配完整仪表总量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前合格鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p4_finishing_testing_records`

###### 蒸汽（`finishing_steam_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Steam
- 流属性/单位：Energy / MJ
- 数量规则：计量交付蒸汽或分配供应商记录；声明压力和凝结水处理。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前合格鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p4_finishing_testing_records`

###### 异丙醇（`isopropanol_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Isopropanol
- 流属性/单位：Mass / kg
- 数量规则：按批次配方和库存记录计量净领用质量；保留化学品身份和浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装前合格鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_testing_records`

###### 水性聚氨酯鞋用涂饰剂（`waterborne_pu_coating_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Waterborne polyurethane footwear coating
- 流属性/单位：Mass / kg
- 数量规则：按批次配方和库存记录计量净领用质量；保留化学品身份和浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装前合格鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_testing_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装前成品防水鞋靴（`finished_footwear_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Finished waterproof footwear before packaging
- 流属性/单位：Mass / kg
- 数量规则：计量转入下一前景过程的合格质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装前合格鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_testing_records`

##### 废物流

###### 防水鞋靴测试废水（`testing_wastewater_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Wastewater from waterproof footwear testing
- 流属性/单位：Volume / m3
- 数量规则：计量排放体积，与污染物采样浓度和处理记录分开保存。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前合格鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_testing_records`

###### 废异丙醇（`waste_isopropanol_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Waste isopropanol
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量废物转移质量，扣除有记录的过程内再利用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前合格鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_testing_records`

###### 废水性聚氨酯涂饰剂（`waste_pu_coating_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Waste waterborne polyurethane coating
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量废物转移质量，扣除有记录的过程内再利用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前合格鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_testing_records`

###### 有缺陷的成品防水鞋靴（`finishing_reject_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Defective finished waterproof footwear
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量废物转移质量，扣除有记录的过程内再利用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前合格鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_finishing_testing_records`
##### 基本流

###### 排入空气的非甲烷挥发性有机物（`finishing_nmvoc_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Non-methane volatile organic compounds to air
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据和有记录的排放因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前合格鞋靴
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p4_finishing_testing_records`


### 过程：最终检验和包装（`p5_packaging`）

#### 输入

##### 产品流

###### 包装前成品防水鞋靴（`finished_footwear_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Finished waterproof footwear before packaging
- 流属性/单位：Mass / kg
- 数量规则：按批次仓库、BOM 和过程记录计量净领用或转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p5_packaging_records`

###### 中压电力（`packaging_electricity_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：采用分表用量，或用设备时间和已核负荷记录分配完整仪表总量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p5_packaging_records`

###### 低硫柴油（`packaging_diesel_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Low-sulphur diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：将计量或发票燃料用量用有记录的低位热值换算并分配至过程。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p5_packaging_records`

###### 低密度聚乙烯鞋袋（`ldpe_bag_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Low-density polyethylene footwear bag
- 流属性/单位：Mass / kg
- 数量规则：由规格、采购记录和产品特定包装数量计算包装质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p5_packaging_records`

###### 瓦楞纸板鞋盒（`corrugated_box_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Corrugated paperboard footwear box
- 流属性/单位：Mass / kg
- 数量规则：由规格、采购记录和产品特定包装数量计算包装质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p5_packaging_records`

###### 鞋用包装薄页纸（`paper_tissue_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Paper footwear wrapping tissue
- 流属性/单位：Mass / kg
- 数量规则：由规格、采购记录和产品特定包装数量计算包装质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p5_packaging_records`

###### 纸质鞋吊牌（`paper_hangtag_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Paper footwear hangtag
- 流属性/单位：Mass / kg
- 数量规则：由规格、采购记录和产品特定包装数量计算包装质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p5_packaging_records`

###### 聚丙烯包装带（`polypropylene_strapping_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；缺失时须声明不适用。

- 选定流：Polypropylene packaging strap
- 流属性/单位：Mass / kg
- 数量规则：由规格、采购记录和产品特定包装数量计算包装质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p5_packaging_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流


###### CPC 29310 成品防水鞋靴（`reference_footwear_output`）

这是质量验收合格的工厂门口输出；包装质量单独列入清单，产品不带金属防护包头。

- 选定流：Waterproof footwear, with outer soles and uppers of rubber or plastics, other than footwear incorporating a protective metal toe-cap `c419cb3e-b7f4-44b5-9f7c-ed1ebfc6260b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg in Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：质量验收合格成品鞋靴净质量正好 1 kg。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 废低密度聚乙烯薄膜（`waste_ldpe_film_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Waste low-density polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量废物转移质量，扣除有记录的过程内再利用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p5_packaging_records`

###### 废瓦楞纸板（`waste_corrugated_box_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Waste corrugated paperboard
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量废物转移质量，扣除有记录的过程内再利用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p5_packaging_records`

###### 废纸（`waste_paper_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Waste paper
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量废物转移质量，扣除有记录的过程内再利用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p5_packaging_records`
##### 基本流

###### 排入空气的化石二氧化碳（`packaging_co2_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据和有记录的排放因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p5_packaging_records`

###### 排入空气的氮氧化物（`packaging_nox_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；缺失时须声明不适用。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据和有记录的排放因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p5_packaging_records`


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 全部前景过程 | 优先通过单独计量和拆分配混、成形、组装、整理和包装避免分配。 | ec-pef-method-2021 |
| `allocation_rule_2` | 材料和废物 | 将批次特定材料、拒收品、返工和材料特定边角料直接归给产生它们的产品路线。 | af-pefcr-3-1-2025 |
| `allocation_rule_3` | 共享公用工程 | 用分表比例或机器时间乘已核负荷等物理动因分配未拆分总量；披露动因和比例。 | ec-pef-method-2021; af-pefcr-3-1-2025 |
| `allocation_rule_4` | 尺码和款式 | 按款式和尺码将数量换算为实测质量，再按产量加权；单位质量实质不同时不得用未加权数量。 | af-pefcr-3-1-2025 |
| `allocation_rule_5` | 内部再利用和回收 | 保留总投入、回收料、内部再利用、外运废物和最终输出；下游模型未明确要求时不得给予避免负荷抵扣。 | ec-pef-method-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_p1_compounding_records` | `p1_compounding` | 原料、公用工程、混合料、废物、排放 | 批次单；库存；仪表；废物记录 | 批次；配方；身份；领用质量；输出；废物；电力；燃料；排放活动 | 将每个配方批次与材料领用和合格混合料核对。 | kg; kWh; MJ; m3 | 每批及每月 | 有代表性时期，通常 12 个月，除非已论证 | 全部配混线 | 将核对批次归一化至合格混合料。 | 经校准秤/仪表；批次批准；质量平衡 |
| `cp_p2_forming_records` | `p2_component_forming` | 成形材料、公用工程、部件、边角料、排放 | 机器日志；仪表；维护日志 | 机器；模具；材料；运行时间；公用工程；合格质量；边角料；制冷剂平衡 | 将材料和公用工程匹配至成形批次。 | kg; kWh; MJ; m3 | 批次或班次 | 有代表性时期 | 全部成形设备 | 按部件和路线汇总后归一化至合格质量。 | 可追溯性；校准；边角料去向；制冷剂核对 |
| `cp_p3_assembly_records` | `p3_assembly_sealing` | 部件、衬里、接合材料、公用工程、废物 | BOM；领用和产线记录；胶粘剂日志 | 款式；尺码；部件质量；接合材料；公用工程；输出；废物 | 将产品 BOM 和净领用关联至产线输出和废物。 | kg; kWh; MJ; m3 | 批次或班次 | 有代表性时期 | 全部组装线 | 保持整体/组装、皮革/纺织衬里路线可区分。 | BOM 版本；批次追溯；产线平衡；废物凭证 |
| `cp_p4_finishing_testing_records` | `p4_finishing_testing` | 化学品、测试水、公用工程、产品、废水、拒收品 | 配方；测试日志；仪表；库存 | 批次；化学品；测试方法；测试/合格数量；公用工程；废水；拒收品 | 将整理和防水测试记录匹配至合格输出。 | kg; unit; kWh; MJ; m3 | 每批及每月 | 有代表性时期 | 全部整理/测试工位 | 按合格质量计算消耗、排放和拒收。 | 测试/仪表校准；配方；废水记录 |
| `cp_p5_packaging_records` | `p5_packaging` | 最终质量、数量、包装、燃料、废物 | 检验；秤；包装规格；发票 | 款式；尺码；数量；净质量；各包装质量；电力；柴油；废物 | 分别计量产品净质量和每个包装件。 | kg; count; kWh; MJ | 每批及报告期 | 有代表性时期 | 全部包装/搬运 | 归一化至正好 1 kg 净合格鞋靴。 | 秤校准；规格；数量-质量抽样；发票 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部交换 | 归一化交换 = 报告期交换 × 产品归属比例 ÷ 净合格参考质量 | 交换；比例；质量 | 每 kg 交换 | ec-pef-method-2021 |
| `calc_bom_reconciliation` | 材料 | 领用材料 = 合格产品含量 + 废物 + 库存变化 + 回收材料 + 残差 | BOM；领用；输出；废物；库存 | 材料平衡 | af-pefcr-3-1-2025 |
| `calc_count_to_mass` | 计数记录 | 产品质量 = 各款式/尺码合格数量 × 实测平均单件质量之和 | 数量；抽样质量 | kg 合格产品 | af-pefcr-3-1-2025 |
| `calc_shared_electricity` | 共享电力 | 分配电力 = 完整仪表总量 × 有记录的分表或机器时间/负荷比例 | 仪表；时间；负荷/比例 | 各过程 kWh | ec-pef-method-2021; af-pefcr-3-1-2025 |
| `calc_fuel_use` | 燃料 | 能量 = 实测燃料数量 × 有记录的低位热值 | 数量；因子 | 各过程 MJ | ec-pef-method-2021 |
| `calc_refrigerant_loss` | R-410A | 损失 = 期初 + 购入 − 期末 − 回收 − 转移 | 维护/库存记录 | kg 损失 | ec-pef-method-2021 |
| `calc_wastewater_pollutant` | 废水污染物 | 负荷 = 排放体积 × 有代表性实测浓度，并换算单位 | 体积；浓度 | 排入水的 kg | ec-pef-method-2021 |
| `calc_production_weighting` | 产品和路线 | 加权交换 = 各路线交换 × 合格质量比例之和 | 路线交换；质量 | 加权交换 | af-pefcr-3-1-2025 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和投入 | 保留分类、材料/化学品身份、等级、组成和已核参考 UUID；明确非参考 UUID 缺口。 | 规格；SDS；供应商记录；manifest |
| `dq_bom` | 材料 | 使用适用的产品特定 BOM，并与实际领用和制造损耗核对。 | BOM；领用；平衡 |
| `dq_temporal` | 前景数据 | 使用一个有代表性时期，披露例外、停机、启动和季节性。 | 日志；发票；登记 |
| `dq_measurement` | 计量流 | 保留校准、仪表边界、抽样、换算因子和局限。 | 证书；仪表图；报告 |
| `dq_completeness` | LCI | 覆盖适用原材料、能源、产品、废物及空气/水排放；说明残差和排除项。 | 清单；平衡 |
| `dq_route` | 产品路线 | 加权前保持整体/组装、橡胶/塑料、有衬里/无衬里路线可区分。 | 路线；机器；批次记录 |
| `dq_leather` | 皮革衬里 | 确认供应商数据覆盖鞣制且鞋厂清单不重复。 | 供应商范围；声明；场址图 |
| `dq_transparency` | 发布 | 披露分配、数据集、去向、缺口、UUID 缺口、排除项、不确定性和评审状态。 | 报告；评审 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 参考身份 | 要求已核产品流、Mass 属性和 Units of mass UUID 以及 kg。 |  |
| `validation_rule_2` | 范围 | 拒绝带金属防护包头、未声明防水或鞋面与外底不同时满足橡胶/塑料要求的产品。 | un-cpc-3-0 |
| `validation_rule_3` | 参考数量 | 要求正好 1 kg 净合格鞋靴，包装作为单独投入。 | ec-pef-method-2021 |
| `validation_rule_4` | 过程适用性 | 纳入全部实际过程，并论证每张标记不适用的路线原子卡。 | af-pefcr-3-1-2025 |
| `validation_rule_5` | 原子清单 | 拒绝集合标签及合并的公用工程、材料、废物、化学品、包装或排放。 |  |
| `validation_rule_6` | 材料平衡 | 核对领用、输出、库存变化、回收和每项废物；调查残差。 | ec-pef-method-2021; af-pefcr-3-1-2025 |
| `validation_rule_7` | 分配 | 验证完整总量、物理动因、比例合计等于源总量以及归一化。 | ec-pef-method-2021 |
| `validation_rule_8` | 防水测试 | 要求测试方法、准则、测试量、失败、复测和测试水处理。 | af-pefcr-3-1-2025 |
| `validation_rule_9` | 证据缺口 | 拒绝虚构数量和未确认 UUID；缺失值保留为采集要求。 | ec-pef-method-2021 |
| `validation_rule_10` | 重复计算 | 不得重复供应商配混、部件成形、鞣制、包装生产、运输或废物处理。 | ec-pef-method-2021; jrc-tanning-bref |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 29310 防水鞋靴的前景制造数据集。 |
| downstream_use | 通过身份、完整性、质量和评审门槛后，可用作 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 对已声明鞋靴形态、尺码、聚合物组成、结构、衬里、密封、整理、场址、技术、时期和包装进行工厂门口建模。 |
| excluded_use | 防护包头或非防水鞋靴；超出已声明鞋面/外底材料的产品；使用、耐久或寿命声明；未披露路线；超出代表条件的比较。 |
| required_metadata | PCR id/版本；UUID；鞋靴形态；尺码/数量基准；鞋面/鞋底聚合物；结构；混合料来源；衬里；密封；整理；防水测试；无金属防护包头；包装；场址；技术；时期；边界；分配；数据集；废物去向；评审。 |
| required_quality_disclosure | 初级数据/BOM 覆盖；计量/分配；平衡；路线覆盖；缺口；UUID 缺口；代表性；排除项；不确定性；测试证据；核证。 |
| update_trigger | 范围、身份、配方、结构、测试、衬里、胶粘剂/整理、技术、公用工程、包装、分配、法规、来源方法或代表性时期变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | `official_guidance` | 联合国统计司，产品总分类 3.0 版官方入口及官方 raw 结构中 subclass 29310 标题。https://unstats.un.org/unsd/classifications/Econ/CPC（调度来源包核验于 2026-08-13）。 | 精确类别范围和金属防护包头排除。 |
| `ec-pef-method-2021` | `official_guidance` | 欧盟委员会，委员会建议 (EU) 2021/2279，合并版产品环境足迹方法。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（调度来源包已核验官方正文）。 | 产品特定 BOM；公司特定制造数据；完整 LCI；分配；完整性；透明度；质量。 |
| `jrc-tanning-bref` | `official_guidance` | 欧盟委员会 JRC/EIPPCB，《皮革鞣制最佳可行技术参考文件》。https://eippcb.jrc.ec.europa.eu/reference/tanning-hides-and-skins-0（调度来源包已核验官方正文）。 | 仅用于条件性皮革衬里上游范围；未鞣制的鞋厂不强制纳入鞣制。 |
| `af-pefcr-3-1-2025` | `standard` | 《服装与鞋类产品环境足迹类别规则》3.1 版，2025-04-29。https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/（调度来源包已核验正文）。 | BOM、制造损耗、包装、过程数据组织、产量加权和质量；未引入数值默认值。 |
