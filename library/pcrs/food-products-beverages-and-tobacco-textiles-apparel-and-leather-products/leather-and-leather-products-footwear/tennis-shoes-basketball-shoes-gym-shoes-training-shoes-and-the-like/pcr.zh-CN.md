---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.tennis-shoes-basketball-shoes-gym-shoes-training-shoes-and-the-like
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 网球鞋、篮球鞋、体操鞋、训练鞋及类似鞋类

## 1. 范围与适用性

本 PCR 适用于 CPC 29420 网球鞋、篮球鞋、体操鞋、训练鞋及类似运动鞋成品的前景制造。范围涵盖制造场址的产品特定 BOM 准备、部件裁切、鞋面缝制与预组装、有条件鞋底成型、楦制、胶黏粘合、整理、检验和包装。

前景边界始于进入工厂的采购鞋材或部件，止于工厂门的净成品包装运动鞋。纺织品、皮革、涂层纺织品、聚合物、橡胶胶料、金属、胶黏剂、化学品、公用工程、制冷剂和包装材料的上游生产由匹配的供应商或背景数据集表示。

本 PCR 不包括 CPC 29420 以外的通用鞋类、防护或安全鞋、滑雪靴和冰鞋、单独销售的鞋材、配送、零售、消费者使用、维修和寿命终止。申报数据集应明确运动或预期活动、尺码范围、每 kg 双数、鞋面构造、中底和外底材料、闭合方式、粘合路线及包装配置。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.tennis-shoes-basketball-shoes-gym-shoes-training-shoes-and-the-like` |
| classification_refs | CPC 3.0：29420，网球鞋、篮球鞋、体操鞋、训练鞋及类似鞋类 |
| covered_products | 为网球、篮球、体操、训练或类似体育活动设计的成品运动鞋 |
| excluded_products | CPC 29420 以外鞋类；防护或安全鞋；滑雪靴；带刀片或轮子的滑行鞋；单独销售的未完成材料或部件 |
| representative_product | 具有申报产品特定 BOM 和包装配置的一双成品训练鞋 |
| production_route | 产品特定材料裁切；鞋面缝制与预组装；有条件场内鞋底成型；楦制、粘合、整理、检验和包装 |
| market_state | 工厂门成品包装运动鞋，按净产品质量报告，并披露双数和尺码范围 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供申报合脚性和体育功能的网球鞋、篮球鞋、体操鞋、训练鞋或类似运动鞋成品 |
| How much | 工厂门 1 kg 净成品包装运动鞋 |
| How well | 符合生产商申报的运动、尺码、合脚性、鞋面、中底、外底、闭合方式、耐用性、质量等级和包装规范 |
| How long or cycle | 工厂门一个完成制造批次；不表示使用寿命或穿着周期声明 |
| reference_flow_link | `reference_sports_shoe_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Tennis shoes, basketball shoes, gym shoes, training shoes and the like `3fb395b7-1901-4a81-8b89-b8300bd9134e` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 预期运动或活动；成人或儿童尺码体系及范围；每 kg 的鞋双数和单只鞋数；鞋面材料与构造；里料；中底材料；外底材料；鞋垫；闭合方式；粘合系统；场内或供应商制造的鞋底部件；配色；质量等级；净产品质量；包装配置；工厂与地域 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告恰好 1 kg 净运动鞋，不含可拆卸运输包装；披露该质量所代表的鞋双数、单只鞋数和尺码范围。 |
| `bom_mass` | 材料和部件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 核对产品特定 BOM 的发料、退料、产出、废料、不合格品及库存变化，不合并不同成分材料。 |
| `chemical_mass` | 胶黏剂树脂、分散体、底涂剂和溶剂 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留商业产品质量、可得时的活性含量、化学身份、批次和过程用途；不得合并胶黏剂、底涂剂或溶剂行。 |
| `energy_carrier_separation` | 电力、外购蒸汽、外供热水、天然气和 LPG | Energy | kWh 或 MJ | 分别记录每种载体，并保留换算所用的仪表、发票、蒸汽状态、热水温度、低位热值和分配证据。 |
| `packaging_mass` | 薄页纸、鞋盒、运输箱、LDPE 袋和纸标签 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录每种包装材料，并从净参考产品质量中排除其质量。 |
| `waste_mass` | 材料边角料、成型废料、化学残余物、不合格品和包装废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对每项废物记录成分、相关时的湿基或干基、危险属性和处理去向。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入运动鞋制造工厂的采购鞋材和部件 |
| starting_condition_role | 产品特定部件转换与最终鞋组装的前景进入条件 |
| product_classification_scope | CPC 29420 网球鞋、篮球鞋、体操鞋、训练鞋及类似运动鞋 |
| recursive_input_rule | 当采购投入已是 CPC 29420 鞋或承载相同产品功能的合同制造预组装件时，使用其供应商数据集记录一次，并只省略被该数据集明确覆盖的工序；不得递归重建同一产品类别 |
| upstream_dataset_requirement | 供应商数据集应覆盖每种纺织品、皮革、涂层纺织品、聚合物、橡胶胶料、金属部件、胶黏剂、溶剂、公用工程、制冷剂和包装材料，以及每个采购中底、外底、鞋面或鞋垫的生产 |
| disclosure | 声明产品特定 BOM、供应商制造与场内制造部件、过程纳入、材料和化学身份、能源载体、制冷剂、直接空气排放、废物去向、包装、工厂、地域和生产期 |

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `boundary_cpc_scope` | 产品身份 | 只纳入 CPC 29420 的成品运动鞋，并披露预期运动或等效训练功能。 | `un-cpc-v3-2025` |
| `boundary_factory_gate` | 前景系统 | 纳入从采购投入到工厂门产品的所有场内材料准备、鞋面组装、已纳入鞋底成型、楦制、粘合、整理、检验和包装。 | `af-pefcr-2025`；`eu-pef-2021` |
| `boundary_complete_lci` | 清单 | 纳入产品特定原料和部件投入、每种能源载体、产品、废物以及与纳入制造过程相关的各项空气、水或土壤排放。 | `eu-pef-2021` |
| `boundary_supplier_components` | 采购部件 | 将每个采购鞋面、中底、外底、鞋垫或其他成品部件连接到供应商数据集，只省略该数据集明确覆盖的场内操作。 | `af-pefcr-2025`；`eu-pef-2021` |
| `boundary_packaging` | 包装 | 纳入工厂门参考点之前施加的零售和运输包装，并分别记录每种包装材料和废物流。 | `af-pefcr-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_cutting` | 部件裁切与准备 | `required` | 鞋面与支撑材料在场内裁切时必需；供应商已制部件应使用匹配的上游数据集。 | 将申报 BOM 中的片材和卷材转换为可追溯的鞋面部件组。 | kg 鞋面裁片组 |
| `upper_stitching` | 鞋面缝制与预组装 | `required` | 鞋面预组装必需；缝纫线和鞋眼行按申报设计有条件适用。 | 连接鞋面部件并安装系带部件。 | kg 缝制鞋面 |
| `sole_molding` | 鞋底成型与准备 | `conditional` | 纳入场内实施的每种材料成型路线；采购中底或外底须使用供应商数据集，且只跳过对应成型行。 | 分别模压和准备中底、外底及支撑部件。 | kg 合格鞋底部件 |
| `lasting_bonding_finishing` | 楦制、粘合与整理 | `required` | 鞋面、鞋底、鞋垫组装及申报整理步骤必需。 | 进行套楦、鞋底部件粘合、整理和检验。 | kg 包装前成品运动鞋 |
| `final_packaging` | 最终检验与包装 | `required` | 工厂门参考产品必需；每种包装材料仅在实际使用时适用。 | 包装并放行申报的 CPC 29420 产品。 | 1 kg 净参考产品 |

### 过程：部件裁切与准备（`component_cutting`）

#### 输入

##### 产品流

###### 聚酯针织网眼鞋面织物（`polyester_mesh_upper_input`）

该产品投入仅记录聚酯针织网眼鞋面织物在部件裁切与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Polyester knitted mesh fabric for sports shoe uppers
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录发料质量减去退回的可用库存；申报产品不使用该材料时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 裁切部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_cutting`
- 来源：`af-pefcr-2025`

###### 牛皮鞋面材料（`cow_leather_upper_input`）

该产品投入仅记录牛皮鞋面材料在部件裁切与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Finished cow leather for sports shoe uppers
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录发料质量减去退回的可用库存；申报产品不使用该材料时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 裁切部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_cutting`
- 来源：`af-pefcr-2025`

###### 聚氨酯涂层纺织鞋面材料（`pu_coated_textile_upper_input`）

该产品投入仅记录聚氨酯涂层纺织鞋面材料在部件裁切与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Polyurethane-coated polyester textile for sports shoe uppers
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录发料质量减去退回的可用库存；申报产品不使用该材料时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 裁切部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_cutting`
- 来源：`af-pefcr-2025`

###### 聚酯里布（`polyester_lining_input`）

该产品投入仅记录聚酯里布在部件裁切与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Polyester knitted lining fabric for sports shoes
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录发料质量减去退回的可用库存；申报产品不使用该材料时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 裁切部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_cutting`
- 来源：`af-pefcr-2025`

###### 热塑性聚氨酯支撑片材（`tpu_sheet_input`）

该产品投入仅记录热塑性聚氨酯支撑片材在部件裁切与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Thermoplastic polyurethane sheet for sports shoe supports
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录发料质量减去退回的可用库存；申报产品不使用该材料时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 裁切部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_cutting`
- 来源：`af-pefcr-2025`

###### 聚氨酯泡沫片材（`pu_foam_sheet_input`）

该产品投入仅记录聚氨酯泡沫片材在部件裁切与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Flexible polyurethane foam sheet for sports shoe collars and tongues
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录发料质量减去退回的可用库存；申报产品不使用该材料时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 裁切部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_cutting`
- 来源：`af-pefcr-2025`

###### 部件裁切用电（`cutting_electricity_input`）

该产品投入仅记录部件裁切用电在部件裁切与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Electricity supplied to sports shoe cutting equipment
- 流属性/单位：Energy / kWh
- 数量规则：使用分表电量，或依据设备运行时间及实测或额定功率分配电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 裁切部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_cutting`
- 来源：`eu-pef-2021`；`af-pefcr-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 运动鞋鞋面裁片（`cut_upper_components_output`）

该产品产出仅记录运动鞋鞋面裁片在部件裁切与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Cut sports shoe upper component set
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量转移质量，并与部件投入、工艺废物、不合格品和库存变化核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 裁切部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_component_cutting`
- 来源：`af-pefcr-2025`

##### 废物流

###### 聚酯纺织裁切边角料（`polyester_textile_offcuts_output`）

该废物产出仅记录聚酯纺织裁切边角料在部件裁切与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Polyester textile cutting offcuts from sports shoe uppers
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料身份和处理去向分别称量废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 裁切部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_cutting`
- 来源：`af-pefcr-2025`

###### 牛皮裁切边角料（`cow_leather_offcuts_output`）

该废物产出仅记录牛皮裁切边角料在部件裁切与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Cow leather cutting offcuts from sports shoe uppers
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料身份和处理去向分别称量废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 裁切部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_cutting`
- 来源：`af-pefcr-2025`

###### 聚氨酯涂层纺织边角料（`pu_coated_textile_offcuts_output`）

该废物产出仅记录聚氨酯涂层纺织边角料在部件裁切与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Polyurethane-coated polyester textile cutting offcuts
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料身份和处理去向分别称量废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 裁切部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_cutting`
- 来源：`af-pefcr-2025`

###### 热塑性聚氨酯片材边角料（`tpu_sheet_offcuts_output`）

该废物产出仅记录热塑性聚氨酯片材边角料在部件裁切与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Thermoplastic polyurethane sheet cutting offcuts
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料身份和处理去向分别称量废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 裁切部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_cutting`
- 来源：`af-pefcr-2025`

###### 聚氨酯泡沫裁切边角料（`pu_foam_offcuts_output`）

该废物产出仅记录聚氨酯泡沫裁切边角料在部件裁切与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Flexible polyurethane foam cutting offcuts
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料身份和处理去向分别称量废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 裁切部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_cutting`
- 来源：`af-pefcr-2025`

##### 基本流

### 过程：鞋面缝制与预组装（`upper_stitching`）

#### 输入

##### 产品流

###### 运动鞋鞋面裁片（`cut_upper_components_input`）

该产品投入仅记录运动鞋鞋面裁片在鞋面缝制与预组装边界上的单一交换，不与任何其他交换合并。

- 选定流：Cut sports shoe upper component set
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量从部件裁切工序转入的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 缝制鞋面产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_stitching`

###### 聚酯缝纫线（`polyester_sewing_thread_input`）

该产品投入仅记录聚酯缝纫线在鞋面缝制与预组装边界上的单一交换，不与任何其他交换合并。

- 选定流：Polyester sewing thread for sports shoe uppers
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录发料质量减去退回的可用库存；申报产品不使用该材料时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 缝制鞋面产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_stitching`
- 来源：`af-pefcr-2025`

###### 聚酯鞋带（`polyester_shoelace_input`）

该产品投入仅记录聚酯鞋带在鞋面缝制与预组装边界上的单一交换，不与任何其他交换合并。

- 选定流：Polyester shoelace for sports shoes
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：部件数量乘以实测或供应商声明的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 缝制鞋面产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_upper_stitching`
- 来源：`af-pefcr-2025`

###### 钢制鞋眼（`steel_eyelet_input`）

该产品投入仅记录钢制鞋眼在鞋面缝制与预组装边界上的单一交换，不与任何其他交换合并。

- 选定流：Steel eyelet for sports shoe lacing
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：部件数量乘以实测或供应商声明的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 缝制鞋面产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_upper_stitching`
- 来源：`af-pefcr-2025`

###### 鞋面缝制用电（`stitching_electricity_input`）

该产品投入仅记录鞋面缝制用电在鞋面缝制与预组装边界上的单一交换，不与任何其他交换合并。

- 选定流：Electricity supplied to sports shoe upper stitching equipment
- 流属性/单位：Energy / kWh
- 数量规则：使用分表电量，或依据设备运行时间及实测或额定功率分配电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 缝制鞋面产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_stitching`
- 来源：`eu-pef-2021`；`af-pefcr-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 缝制运动鞋鞋面（`stitched_upper_output`）

该产品产出仅记录缝制运动鞋鞋面在鞋面缝制与预组装边界上的单一交换，不与任何其他交换合并。

- 选定流：Stitched upper for sports shoes
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量转移质量，并与部件投入、工艺废物、不合格品和库存变化核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 缝制鞋面产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_upper_stitching`
- 来源：`af-pefcr-2025`

##### 废物流

###### 聚酯缝纫线边角料（`polyester_thread_offcuts_output`）

该废物产出仅记录聚酯缝纫线边角料在鞋面缝制与预组装边界上的单一交换，不与任何其他交换合并。

- 选定流：Polyester sewing thread offcuts from sports shoe upper stitching
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料身份和处理去向分别称量废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 缝制鞋面产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_stitching`
- 来源：`af-pefcr-2025`

###### 不合格缝制运动鞋鞋面（`defective_stitched_upper_output`）

该废物产出仅记录不合格缝制运动鞋鞋面在鞋面缝制与预组装边界上的单一交换，不与任何其他交换合并。

- 选定流：Defective stitched upper for sports shoes
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按处理去向称量不合格鞋面质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 缝制鞋面产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_stitching`
- 来源：`af-pefcr-2025`

##### 基本流

### 过程：鞋底成型与准备（`sole_molding`）

#### 输入

##### 产品流

###### 乙烯-醋酸乙烯酯泡沫料（`eva_compound_input`）

该产品投入仅记录乙烯-醋酸乙烯酯泡沫料在鞋底成型与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Ethylene-vinyl acetate compound for sports shoe midsoles
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录发料质量减去退回的可用库存；申报产品不使用该材料时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格鞋底部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_molding`
- 来源：`af-pefcr-2025`

###### 天然橡胶外底胶料（`natural_rubber_compound_input`）

该产品投入仅记录天然橡胶外底胶料在鞋底成型与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Natural rubber compound for sports shoe outsoles
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录发料质量减去退回的可用库存；申报产品不使用该材料时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格鞋底部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_molding`
- 来源：`af-pefcr-2025`

###### 丁苯橡胶外底胶料（`sbr_compound_input`）

该产品投入仅记录丁苯橡胶外底胶料在鞋底成型与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Styrene-butadiene rubber compound for sports shoe outsoles
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录发料质量减去退回的可用库存；申报产品不使用该材料时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格鞋底部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_molding`
- 来源：`af-pefcr-2025`

###### 热塑性聚氨酯颗粒（`tpu_granules_input`）

该产品投入仅记录热塑性聚氨酯颗粒在鞋底成型与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Thermoplastic polyurethane granules for sports shoe sole components
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录发料质量减去退回的可用库存；申报产品不使用该材料时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格鞋底部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_molding`
- 来源：`af-pefcr-2025`

###### 鞋底成型用电（`sole_molding_electricity_input`）

该产品投入仅记录鞋底成型用电在鞋底成型与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Electricity supplied to sports shoe sole molding equipment
- 流属性/单位：Energy / kWh
- 数量规则：使用分表电量，或依据设备运行时间及实测或额定功率分配电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鞋底部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_molding`
- 来源：`eu-pef-2021`；`af-pefcr-2025`

###### 鞋底成型外购蒸汽（`sole_molding_steam_input`）

该产品投入仅记录鞋底成型外购蒸汽在鞋底成型与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Purchased steam supplied to sports shoe sole molding
- 流属性/单位：Energy / MJ
- 数量规则：计量能量，或使用有记录的热力学参数或低位热值换算载体质量；未使用时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鞋底部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_molding`
- 来源：`eu-pef-2021`；`af-pefcr-2025`

###### 鞋底成型外供热水（`sole_molding_hot_water_input`）

该产品投入仅记录鞋底成型外供热水在鞋底成型与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Hot water supplied as a heat carrier to sports shoe sole molding
- 流属性/单位：Energy / MJ
- 数量规则：计量能量，或使用有记录的热力学参数或低位热值换算载体质量；未使用时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鞋底部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_molding`
- 来源：`eu-pef-2021`；`af-pefcr-2025`

###### 鞋底成型天然气（`sole_molding_natural_gas_input`）

该产品投入仅记录鞋底成型天然气在鞋底成型与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Natural gas combusted on site for sports shoe sole molding
- 流属性/单位：Energy / MJ
- 数量规则：计量能量，或使用有记录的热力学参数或低位热值换算载体质量；未使用时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鞋底部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_molding`
- 来源：`eu-pef-2021`；`af-pefcr-2025`

###### 鞋底成型液化石油气（`sole_molding_lpg_input`）

该产品投入仅记录鞋底成型液化石油气在鞋底成型与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Liquefied petroleum gas combusted on site for sports shoe sole molding
- 流属性/单位：Energy / MJ
- 数量规则：计量能量，或使用有记录的热力学参数或低位热值换算载体质量；未使用时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鞋底部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_molding`
- 来源：`eu-pef-2021`；`af-pefcr-2025`

###### R-134a 制冷剂补充量（`r134a_refrigerant_makeup_input`）

该产品投入仅记录R-134a 制冷剂补充量在鞋底成型与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：1,1,1,2-Tetrafluoroethane refrigerant (R-134a)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量分配给鞋底成型冷水机的 R-134a 补充质量；未使用 R-134a 系统时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格鞋底部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_molding`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 模压 EVA 中底（`eva_midsole_output`）

该产品产出仅记录模压 EVA 中底在鞋底成型与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Molded ethylene-vinyl acetate midsole for sports shoes
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量转移质量，并与部件投入、工艺废物、不合格品和库存变化核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格鞋底部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sole_molding`
- 来源：`af-pefcr-2025`

###### 模压天然橡胶外底（`natural_rubber_outsole_output`）

该产品产出仅记录模压天然橡胶外底在鞋底成型与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Molded natural rubber outsole for sports shoes
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量转移质量，并与部件投入、工艺废物、不合格品和库存变化核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格鞋底部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sole_molding`
- 来源：`af-pefcr-2025`

###### 模压丁苯橡胶外底（`sbr_outsole_output`）

该产品产出仅记录模压丁苯橡胶外底在鞋底成型与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Molded styrene-butadiene rubber outsole for sports shoes
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量转移质量，并与部件投入、工艺废物、不合格品和库存变化核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格鞋底部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sole_molding`
- 来源：`af-pefcr-2025`

###### 模压热塑性聚氨酯鞋底部件（`tpu_sole_component_output`）

该产品产出仅记录模压热塑性聚氨酯鞋底部件在鞋底成型与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Molded thermoplastic polyurethane sole component for sports shoes
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量转移质量，并与部件投入、工艺废物、不合格品和库存变化核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格鞋底部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sole_molding`
- 来源：`af-pefcr-2025`

##### 废物流

###### EVA 成型废料（`eva_molding_scrap_output`）

该废物产出仅记录EVA 成型废料在鞋底成型与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Ethylene-vinyl acetate molding scrap from sports shoe midsoles
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料身份和处理去向分别称量废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鞋底部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_molding`
- 来源：`af-pefcr-2025`

###### 天然橡胶成型废料（`natural_rubber_molding_scrap_output`）

该废物产出仅记录天然橡胶成型废料在鞋底成型与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Natural rubber molding scrap from sports shoe outsoles
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料身份和处理去向分别称量废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鞋底部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_molding`
- 来源：`af-pefcr-2025`

###### 丁苯橡胶成型废料（`sbr_molding_scrap_output`）

该废物产出仅记录丁苯橡胶成型废料在鞋底成型与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Styrene-butadiene rubber molding scrap from sports shoe outsoles
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料身份和处理去向分别称量废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鞋底部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_molding`
- 来源：`af-pefcr-2025`

###### 热塑性聚氨酯成型废料（`tpu_molding_scrap_output`）

该废物产出仅记录热塑性聚氨酯成型废料在鞋底成型与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Thermoplastic polyurethane molding scrap from sports shoe sole components
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料身份和处理去向分别称量废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鞋底部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_molding`
- 来源：`af-pefcr-2025`

##### 基本流

###### 排放至空气的 R-134a（`r134a_to_air_output`）

该基本流产出仅记录排放至空气的 R-134a在鞋底成型与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：1,1,1,2-Tetrafluoroethane (R-134a), to air
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据期初充注量、补充量、期末充注量、回收量和有记录的转移进行制冷剂平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格鞋底部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sole_molding`

###### 鞋底成型天然气化石二氧化碳（`sole_molding_natural_gas_co2_output`）

该基本流产出仅记录鞋底成型天然气化石二氧化碳在鞋底成型与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Carbon dioxide, fossil, to air from natural gas combustion for sports shoe sole molding
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：天然气能量乘以有记录的场址或供应商碳因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鞋底部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sole_molding`

###### 鞋底成型液化石油气化石二氧化碳（`sole_molding_lpg_co2_output`）

该基本流产出仅记录鞋底成型液化石油气化石二氧化碳在鞋底成型与准备边界上的单一交换，不与任何其他交换合并。

- 选定流：Carbon dioxide, fossil, to air from LPG combustion for sports shoe sole molding
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：液化石油气能量乘以有记录的场址或供应商碳因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鞋底部件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sole_molding`

### 过程：楦制、粘合与整理（`lasting_bonding_finishing`）

#### 输入

##### 产品流

###### 缝制运动鞋鞋面（`stitched_upper_input`）

该产品投入仅记录缝制运动鞋鞋面在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Stitched upper for sports shoes
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量从鞋面缝制工序转入的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lasting_bonding`

###### 模压 EVA 中底（`eva_midsole_input`）

该产品投入仅记录模压 EVA 中底在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Molded ethylene-vinyl acetate midsole for sports shoes
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：部件数量乘以实测或供应商声明的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_lasting_bonding`

###### 模压天然橡胶外底（`natural_rubber_outsole_input`）

该产品投入仅记录模压天然橡胶外底在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Molded natural rubber outsole for sports shoes
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：部件数量乘以实测或供应商声明的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_lasting_bonding`

###### 模压丁苯橡胶外底（`sbr_outsole_input`）

该产品投入仅记录模压丁苯橡胶外底在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Molded styrene-butadiene rubber outsole for sports shoes
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：部件数量乘以实测或供应商声明的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_lasting_bonding`

###### 模压热塑性聚氨酯鞋底部件（`tpu_sole_component_input`）

该产品投入仅记录模压热塑性聚氨酯鞋底部件在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Molded thermoplastic polyurethane sole component for sports shoes
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：部件数量乘以实测或供应商声明的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_lasting_bonding`

###### 聚氨酯泡沫鞋垫（`pu_foam_sockliner_input`）

该产品投入仅记录聚氨酯泡沫鞋垫在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Flexible polyurethane foam sockliner for sports shoes
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：部件数量乘以实测或供应商声明的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_lasting_bonding`
- 来源：`af-pefcr-2025`

###### 水性聚氨酯胶黏剂（`waterborne_pu_adhesive_input`）

该产品投入仅记录水性聚氨酯胶黏剂在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Waterborne polyurethane dispersion adhesive for sports shoe bonding
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录发料质量减去退回的可用库存；申报产品不使用该材料时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lasting_bonding`
- 来源：`af-pefcr-2025`

###### 聚氨酯胶黏剂树脂（`polyurethane_adhesive_resin_input`）

该产品投入仅记录聚氨酯胶黏剂树脂在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Polyurethane adhesive resin for sports shoe bonding
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录发料质量减去退回的可用库存；申报产品不使用该材料时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lasting_bonding`
- 来源：`af-pefcr-2025`

###### 乙酸乙酯胶黏剂溶剂（`ethyl_acetate_input`）

该产品投入仅记录乙酸乙酯胶黏剂溶剂在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Ethyl acetate for sports shoe adhesive preparation
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录发料质量减去退回的可用库存；申报产品不使用该材料时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lasting_bonding`
- 来源：`af-pefcr-2025`

###### 氯化聚烯烃底涂剂（`chlorinated_polyolefin_primer_input`）

该产品投入仅记录氯化聚烯烃底涂剂在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Chlorinated polyolefin primer for sports shoe sole bonding
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录发料质量减去退回的可用库存；申报产品不使用该材料时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lasting_bonding`
- 来源：`af-pefcr-2025`

###### 丙酮清洗溶剂（`acetone_cleaning_solvent_input`）

该产品投入仅记录丙酮清洗溶剂在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Acetone used for sports shoe bonding-equipment cleaning
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录发料质量减去退回的可用库存；申报产品不使用该材料时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lasting_bonding`
- 来源：`af-pefcr-2025`

###### 楦制与粘合用电（`lasting_electricity_input`）

该产品投入仅记录楦制与粘合用电在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Electricity supplied to sports shoe lasting and bonding equipment
- 流属性/单位：Energy / kWh
- 数量规则：使用分表电量，或依据设备运行时间及实测或额定功率分配电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lasting_bonding`
- 来源：`eu-pef-2021`；`af-pefcr-2025`

###### 鞋面调湿外购蒸汽（`lasting_steam_input`）

该产品投入仅记录鞋面调湿外购蒸汽在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Purchased steam supplied to sports shoe upper conditioning
- 流属性/单位：Energy / MJ
- 数量规则：计量能量，或使用有记录的热力学参数或低位热值换算载体质量；未使用时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lasting_bonding`
- 来源：`eu-pef-2021`；`af-pefcr-2025`

###### 粘合外供热水（`lasting_hot_water_input`）

该产品投入仅记录粘合外供热水在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Hot water supplied as a heat carrier to sports shoe bonding
- 流属性/单位：Energy / MJ
- 数量规则：计量能量，或使用有记录的热力学参数或低位热值换算载体质量；未使用时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lasting_bonding`
- 来源：`eu-pef-2021`；`af-pefcr-2025`

###### 胶黏剂活化天然气（`lasting_natural_gas_input`）

该产品投入仅记录胶黏剂活化天然气在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Natural gas combusted on site for sports shoe adhesive activation
- 流属性/单位：Energy / MJ
- 数量规则：计量能量，或使用有记录的热力学参数或低位热值换算载体质量；未使用时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lasting_bonding`
- 来源：`eu-pef-2021`；`af-pefcr-2025`

###### 胶黏剂活化液化石油气（`lasting_lpg_input`）

该产品投入仅记录胶黏剂活化液化石油气在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Liquefied petroleum gas combusted on site for sports shoe adhesive activation
- 流属性/单位：Energy / MJ
- 数量规则：计量能量，或使用有记录的热力学参数或低位热值换算载体质量；未使用时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lasting_bonding`
- 来源：`eu-pef-2021`；`af-pefcr-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装前成品运动鞋（`finished_sports_shoe_output`）

该产品产出仅记录包装前成品运动鞋在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Finished sports shoe before packaging
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量转移质量，并与部件投入、工艺废物、不合格品和库存变化核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_lasting_bonding`
- 来源：`af-pefcr-2025`

##### 废物流

###### 聚氨酯胶黏剂残余物（`polyurethane_adhesive_residue_output`）

该废物产出仅记录聚氨酯胶黏剂残余物在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Waste polyurethane adhesive residue from sports shoe bonding
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料身份和处理去向分别称量废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lasting_bonding`
- 来源：`af-pefcr-2025`

###### 氯化聚烯烃底涂剂残余物（`chlorinated_polyolefin_primer_residue_output`）

该废物产出仅记录氯化聚烯烃底涂剂残余物在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Waste chlorinated polyolefin primer from sports shoe bonding
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料身份和处理去向分别称量废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lasting_bonding`
- 来源：`af-pefcr-2025`

###### 废丙酮清洗溶剂（`waste_acetone_output`）

该废物产出仅记录废丙酮清洗溶剂在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Waste acetone from sports shoe bonding-equipment cleaning
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料身份和处理去向分别称量废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lasting_bonding`
- 来源：`af-pefcr-2025`

###### 不合格成品运动鞋（`defective_sports_shoe_output`）

该废物产出仅记录不合格成品运动鞋在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Defective finished sports shoe
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按处理去向称量不合格鞋质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lasting_bonding`
- 来源：`af-pefcr-2025`

##### 基本流

###### 排放至空气的乙酸乙酯（`ethyl_acetate_to_air_output`）

该基本流产出仅记录排放至空气的乙酸乙酯在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Ethyl acetate, to air from sports shoe bonding
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：乙酸乙酯投入减去回收溶剂、产品和废物中的残留溶剂及期末库存
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_lasting_bonding`
- 来源：`eu-pef-2021`

###### 排放至空气的丙酮（`acetone_to_air_output`）

该基本流产出仅记录排放至空气的丙酮在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Acetone, to air from sports shoe equipment cleaning
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：丙酮投入减去回收溶剂、废物中的残留溶剂及期末库存
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_lasting_bonding`
- 来源：`eu-pef-2021`

###### 粘合天然气化石二氧化碳（`lasting_natural_gas_co2_output`）

该基本流产出仅记录粘合天然气化石二氧化碳在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Carbon dioxide, fossil, to air from natural gas combustion for sports shoe bonding
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：天然气能量乘以有记录的场址或供应商碳因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_lasting_bonding`

###### 粘合液化石油气化石二氧化碳（`lasting_lpg_co2_output`）

该基本流产出仅记录粘合液化石油气化石二氧化碳在楦制、粘合与整理边界上的单一交换，不与任何其他交换合并。

- 选定流：Carbon dioxide, fossil, to air from LPG combustion for sports shoe bonding
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：液化石油气能量乘以有记录的场址或供应商碳因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品运动鞋产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_lasting_bonding`

### 过程：最终检验与包装（`final_packaging`）

#### 输入

##### 产品流

###### 待包装成品运动鞋（`finished_sports_shoe_packaging_input`）

该产品投入仅记录待包装成品运动鞋在最终检验与包装边界上的单一交换，不与任何其他交换合并。

- 选定流：Finished sports shoe before packaging
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量从最终检验转入的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging`

###### 鞋用包装薄页纸（`tissue_paper_input`）

该产品投入仅记录鞋用包装薄页纸在最终检验与包装边界上的单一交换，不与任何其他交换合并。

- 选定流：Tissue paper for wrapping sports shoes
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录发料质量减去退回的可用库存；申报产品不使用该材料时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging`
- 来源：`af-pefcr-2025`

###### 纸板鞋盒（`paperboard_shoebox_input`）

该产品投入仅记录纸板鞋盒在最终检验与包装边界上的单一交换，不与任何其他交换合并。

- 选定流：Paperboard retail box for sports shoes
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：部件数量乘以实测或供应商声明的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_final_packaging`
- 来源：`af-pefcr-2025`

###### 瓦楞纸板运输箱（`corrugated_carton_input`）

该产品投入仅记录瓦楞纸板运输箱在最终检验与包装边界上的单一交换，不与任何其他交换合并。

- 选定流：Corrugated cardboard shipping carton for sports shoes
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：部件数量乘以实测或供应商声明的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_final_packaging`
- 来源：`af-pefcr-2025`

###### 低密度聚乙烯包装袋（`ldpe_bag_input`）

该产品投入仅记录低密度聚乙烯包装袋在最终检验与包装边界上的单一交换，不与任何其他交换合并。

- 选定流：Low-density polyethylene bag for sports shoe packaging
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录发料质量减去退回的可用库存；申报产品不使用该材料时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging`
- 来源：`af-pefcr-2025`

###### 纸质包装标签（`paper_label_input`）

该产品投入仅记录纸质包装标签在最终检验与包装边界上的单一交换，不与任何其他交换合并。

- 选定流：Paper label for sports shoe packaging
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：部件数量乘以实测或供应商声明的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_final_packaging`
- 来源：`af-pefcr-2025`

###### 运动鞋包装用电（`packaging_electricity_input`）

该产品投入仅记录运动鞋包装用电在最终检验与包装边界上的单一交换，不与任何其他交换合并。

- 选定流：Electricity supplied to sports shoe packaging equipment
- 流属性/单位：Energy / kWh
- 数量规则：使用分表电量，或依据设备运行时间及实测或额定功率分配电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging`
- 来源：`eu-pef-2021`；`af-pefcr-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考运动鞋产品（`reference_sports_shoe_output`）

该产品产出仅记录参考运动鞋产品在最终检验与包装边界上的单一交换，不与任何其他交换合并。

- 选定流：Tennis shoes, basketball shoes, gym shoes, training shoes and the like `3fb395b7-1901-4a81-8b89-b8300bd9134e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 净成品包装运动鞋
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每功能单位
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-v3-2025`

##### 废物流

###### 废鞋用包装薄页纸（`waste_tissue_paper_output`）

该废物产出仅记录废鞋用包装薄页纸在最终检验与包装边界上的单一交换，不与任何其他交换合并。

- 选定流：Waste tissue paper from sports shoe packaging
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料身份和处理去向分别称量废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging`

###### 废纸板鞋盒（`waste_paperboard_shoebox_output`）

该废物产出仅记录废纸板鞋盒在最终检验与包装边界上的单一交换，不与任何其他交换合并。

- 选定流：Waste paperboard from sports shoe boxes
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料身份和处理去向分别称量废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging`

###### 废瓦楞纸板（`waste_corrugated_cardboard_output`）

该废物产出仅记录废瓦楞纸板在最终检验与包装边界上的单一交换，不与任何其他交换合并。

- 选定流：Waste corrugated cardboard from sports shoe packaging
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料身份和处理去向分别称量废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging`

###### 废低密度聚乙烯包装袋（`waste_ldpe_bag_output`）

该废物产出仅记录废低密度聚乙烯包装袋在最终检验与包装边界上的单一交换，不与任何其他交换合并。

- 选定流：Waste low-density polyethylene film from sports shoe bags
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料身份和处理去向分别称量废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging`

###### 废纸质包装标签（`waste_paper_label_output`）

该废物产出仅记录废纸质包装标签在最终检验与包装边界上的单一交换，不与任何其他交换合并。

- 选定流：Waste paper from sports shoe packaging labels
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料身份和处理去向分别称量废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging`

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `allocation_avoidance` | 共享前景操作 | 在采用分配前，优先使用产品细分、产品特定 BOM、批次记录、独立计量和直接废物称量。 | `eu-pef-2021`；`af-pefcr-2025` |
| `allocation_shared_equipment` | 共享裁切、缝制、成型、楦制、粘合、整理和包装设备 | 无法直接测量时，使用机器时间乘实测功率、处理部件质量、模压周期、处理双数或包装件数等有记录因果驱动因素进行分配。 | `eu-pef-2021` |
| `allocation_energy_carriers` | 共享电力、蒸汽、热水、天然气、LPG 和制冷 | 使用各载体独立仪表和因果驱动因素分别分配；不得通过一个未区分能源总量分配全部公用工程。 | `eu-pef-2021` |
| `allocation_scrap` | 转移回收的材料废料 | 首先采用产品细分和实测废料；废料获得抵扣或承担后续负荷时，披露所采用的回收模型，不得把处置流当作共产品。 | `af-pefcr-2025`；`eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_cutting` | `component_cutting` | 产品特定片材和卷材、裁切用电、部件产出及材料特定边角料 | BOM、采购、发料、退料、称量、机器、仪表和废物记录 | SKU；材料身份；供应商；发料和退料质量；产出质量；电力；各边角料质量；不合格品；库存变化 | 使用校准秤和过程仪表与产品特定 BOM 及裁切方案核对 | kg；kWh | 每生产批次采集并按月核对 | 至少一个有代表性的连续 12 个月或完整生产活动期 | 所有纳入的裁切和准备设备 | 按 SKU 分别汇总每种材料和废物，核对质量后归一化至裁切部件产出 | 批准 BOM、裁切方案、采购和发料记录、秤和仪表校准及质量平衡签署 |
| `cp_upper_stitching` | `upper_stitching` | 裁片组、缝纫线、鞋带、鞋眼、电力、缝制鞋面、线废料和不合格品 | BOM、计数、发料、退料、机器、仪表、称量和检验记录 | 部件质量；缝纫线发料和退料；鞋带与鞋眼数量和单件质量；电力；鞋面产出；线废料；不合格品 | 部件转移记录、数量换算质量、校准秤和设备仪表 | kg；件；kWh | 每生产批次采集并按月核对 | 至少一个有代表性的连续 12 个月或完整生产活动期 | 所有纳入的缝制和鞋面预组装设备 | 计算计件部件质量，汇总原子流，核对鞋面质量后归一化至缝制鞋面产出 | BOM、部件规范、仪表记录、检验报告和质量平衡签署 |
| `cp_sole_molding` | `sole_molding` | 各聚合物或橡胶胶料、电力、蒸汽、热水、燃料、R-134a、鞋底部件、材料特定废料及直接排放 | 配方、采购、发料、退料、模压周期、仪表、燃料、冷水机维护、称量和废物记录 | 胶料身份和质量；周期；电力；蒸汽；热水；天然气；LPG；R-134a 充注、补充和回收；部件产出；各废料；碳因子 | 胶料称量、校准公用工程仪表、模压周期日志、冷水机平衡和废物称量 | kg；kWh；MJ | 每成型批次采集并按月核对 | 至少一个有代表性的连续 12 个月或完整生产活动期 | 所有纳入的鞋底成型、加热、冷却和修边设备 | 按胶料和部件路线汇总，分别计算制冷剂和燃料排放，核对质量后归一化至合格鞋底部件产出 | 配方、供应商规范、仪表、燃料发票、制冷剂维护日志、秤校准和质量平衡签署 |
| `cp_lasting_bonding` | `lasting_bonding_finishing` | 鞋面和鞋底部件、鞋垫、各胶黏剂或化学品、电力、蒸汽、热水、燃料、成品鞋、残余物、不合格品、VOC 和燃烧 CO2 | BOM、发料、退料、配方、计数、仪表、燃料、溶剂、称量、检验和废物记录 | 各部件；胶黏剂分散体；树脂；乙酸乙酯；底涂剂；丙酮；电力；蒸汽；热水；天然气；LPG；产出；残余物；不合格品；回收溶剂；库存；碳因子 | 产品特定 BOM 和配方、校准仪表与秤、溶剂平衡及检验记录 | kg；件；kWh；MJ | 每组装批次采集并按月核对 | 至少一个有代表性的连续 12 个月或完整生产活动期 | 所有纳入的楦制、粘合、活化、整理和检验设备 | 汇总各交换，分别计算部件计数质量、溶剂或燃料排放，核对质量后归一化至成品鞋产出 | 批准 BOM 和配方、SDS、供应商检测、仪表、燃料发票、溶剂回收、废物联单和检验签署 |
| `cp_final_packaging` | `final_packaging` | 成品鞋、薄页纸、鞋盒、纸箱、LDPE 袋、纸标签、电力、参考产出和各包装废物 | 包装规范、采购、发料、退料、计数、称量、仪表、发运和废物记录 | 净产品质量；双数；单只鞋数；尺码；薄页纸质量；鞋盒、纸箱和标签数量与单件质量；LDPE 发料和退料；电力；各废物 | 校准产品秤、计件质量测量、库存记录和包装设备仪表 | kg；件；kWh | 每包装批次采集并按月核对 | 至少一个有代表性的连续 12 个月或完整生产活动期 | 所有纳入的最终检验和包装设备 | 分别汇总每种包装交换，从净产品质量中排除可拆卸包装，并归一化至恰好 1 kg 参考产品 | 包装规范、采购和发料记录、秤和仪表校准、发运记录及废物核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_bom_mass_balance` | 各制造过程 | 核对期初库存加发料与退料、合格产出、每种材料特定废物、不合格品和期末库存；调查而非虚构无法解释的差异。 | 产品特定 BOM、发料和退料、产出、废物、不合格品及库存记录 | 按过程和 SKU 签署的质量平衡 | `af-pefcr-2025` |
| `calc_count_to_mass` | 鞋带、鞋眼、鞋底部件、鞋垫、鞋盒、纸箱和标签 | 部件质量等于产品特定数量乘以实测或供应商声明的单件质量。 | 数量和单件质量 | 一种部件或包装物的 kg | `af-pefcr-2025` |
| `calc_shared_energy` | 共享制造公用工程 | 使用载体特定仪表和因果驱动因素分别分配电力、蒸汽、热水、天然气和 LPG。 | 仪表总量；设备功率或热力数据；运行时间或周期；过程产出 | 分配给一个过程的 kWh 或 MJ | `eu-pef-2021` |
| `calc_refrigerant_emission` | R-134a 鞋底成型冷水机 | R-134a 排放等于期初充注量加补充量，减期末充注量和回收制冷剂，并只对有记录的转移进行调整。 | 期初和期末充注量；补充量；回收量；转移 | 排放至空气的 kg R-134a |  |
| `calc_solvent_emission` | 乙酸乙酯或丙酮 | 对每种溶剂分别按投入加期初库存，减回收量、产品和废物中保留量、期末库存及有记录转移进行计算；不得合并 VOC 物种。 | 溶剂特定采购、发料、退料、回收、废物分析和库存 | 排放至空气的一种溶剂 kg | `eu-pef-2021` |
| `calc_combustion_co2` | 天然气或 LPG | 依据实测低位热值能量和有记录的场址或供应商碳因子，分别计算每种燃料的化石 CO2。 | 燃料特定能量和碳因子 | 按燃料和过程划分的排放至空气化石 CO2 kg |  |
| `calc_reference_normalization` | 完整前景清单 | 将所有纳入交换除以不含可拆卸包装的净合格运动鞋质量，使参考产出恰好等于 1 kg。 | 纳入交换总量和净参考产品质量 | 每 1 kg 参考产品的交换量 | `eu-pef-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 记录预期运动、尺码体系和范围、每 kg 双数和鞋数、配色、鞋面、里料、中底、外底、鞋垫、闭合方式、粘合系统、等级和包装。 | 批准产品规范、BOM、检验和发运记录 |
| `dq_bom_specificity` | 材料和部件 | 使用精确 SKU 或配色的 BOM；保留每种材料和部件的供应商、成分、单件质量、声称时的再生含量、发料、退料和损失证据。 | 批准 BOM、供应商规范、采购、发料和退料记录 |
| `dq_chemical_identity` | 胶黏剂、底涂剂和溶剂 | 保留商业产品、活性物质或树脂、载体溶剂、浓度、供应商、批次、SDS 和过程用途；禁止通用化学品行。 | 采购文件、SDS、供应商检测和签署配方 |
| `dq_metering` | 水和能源载体 | 可用时使用校准过程仪表，并披露共享仪表的载体特定分配、驱动因素和不确定性。 | 校准证书、仪表日志、发票和分配工作表 |
| `dq_temporal` | 前景活动数据 | 覆盖有代表性的连续 12 个月或完整生产活动期，并披露停机、非典型批次和数据缺口。 | 生产日历和完整性审查 |
| `dq_completeness` | 清单 | 证明已覆盖产品特定 BOM 材料、部件、每种胶黏剂或化学品、分阶段电力、蒸汽、热水、每种燃料、每种制冷剂、包装、材料特定废物和每项直接排放，且无聚合选择流。 | 与 BOM、采购、公用工程、生产、维护、溶剂和废物台账核对的签署完整性清单 |
| `dq_transparency` | 数据集 | 披露排除项、供应商制造部件、共享仪表分配、缺失前景记录、计算、废物去向、直接排放平衡和局限性。 | 数据集报告和审查清单 |

## 9. 校验规则

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 除非产出恰好为 1 kg，使用流 `3fb395b7-1901-4a81-8b89-b8300bd9134e`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`、kg，并声明全部必需限定信息，否则拒绝数据集。 | `un-cpc-v3-2025` |
| `validate_scope` | 产品身份 | 拒绝 CPC 29420 以外或未声明网球、篮球、体操、训练或类似体育功能的鞋类。 | `un-cpc-v3-2025` |
| `validate_atomic_inventory` | 清单行 | 拒绝合并材料、部件、化学品、能源载体、制冷剂、包装、废物或排放的任何行；每个选定流应表示一项具体交换。 | `eu-pef-2021` |
| `validate_bom_loss` | 材料和部件 | 要求每个纳入过程的产品特定 BOM 质量、退回库存、合格产出、材料特定损失、不合格品和库存变化相平衡。 | `af-pefcr-2025` |
| `validate_adhesives_and_solvents` | 粘合 | 实际使用时，要求水性聚氨酯分散体、聚氨酯树脂、乙酸乙酯、氯化聚烯烃底涂剂、丙酮、残余物和溶剂排放分别成行；其他实际配方或物质另加原子行。 | `af-pefcr-2025`；`eu-pef-2021` |
| `validate_energy_routes` | 制造能源 | 实际使用时，要求分阶段电力以及外购蒸汽、外供热水、天然气和 LPG 分别成行；禁止合并热量或燃料交换。 | `eu-pef-2021` |
| `validate_refrigerants` | 冷却系统 | 要求每种实际存在的制冷剂分别设置产品投入和空气排放行；仅在有设备及维护日志证据时，R-134a 行可设为不适用。 | `eu-pef-2021` |
| `validate_direct_emissions` | 空气排放 | 适用时，要求乙酸乙酯、丙酮、R-134a、天然气化石 CO2 和 LPG 化石 CO2 按物种和过程分别成行。 | `eu-pef-2021` |
| `validate_packaging` | 包装 | 实际使用时，要求薄页纸、鞋盒、运输箱、LDPE 袋、纸标签及其材料特定废物分别成行，并从净参考质量中排除可拆卸包装。 | `af-pefcr-2025` |
| `validate_supplier_components` | 采购部件 | 要求每个采购鞋面、中底、外底、鞋垫或模压部件具有匹配的供应商数据集，并只省略上游明确覆盖的场内操作。 | `af-pefcr-2025`；`eu-pef-2021` |
| `validate_no_reasoned_ranges` | 数量 | 拒绝无记录默认数量和 AI 生成数值范围；使用前景记录或有记录计算。 | `eu-pef-2021` |
| `validate_sources_and_protocols` | 证据链接 | 要求清单行或规则引用的每个来源 ID 和采集协议都能解析到已声明来源或协议。 | `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 29420 运动鞋前景制造数据集 |
| downstream_use | 用于需要匹配成品运动鞋投入的产品系统的次级数据集或背景数据集 |
| allowed_use | 与预期运动、尺码范围、每 kg 双数、鞋面、中底、外底、鞋垫、闭合方式、粘合系统、配色、质量等级、工厂技术、地域、时期和包装相匹配的产品 |
| excluded_use | CPC 29420 以外鞋类、安全或防护鞋、滑雪靴、冰鞋、BOM 或生产路线存在实质差异的产品，或未披露参考限定信息的产品 |
| required_metadata | PCR id；CPC 代码；参考流 UUID；预期运动；尺码体系和范围；双数和鞋数；净质量；产品特定 BOM；供应商制造部件；过程纳入；胶黏剂和溶剂；能源路线；制冷剂；配色；等级；包装；工厂；地域；时期；分配；废物去向 |
| required_quality_disclosure | 前景覆盖；缺失或计算记录；BOM 版本；秤和仪表校准；化学身份；溶剂和制冷剂平衡；质量核对；共享公用工程分配；上游数据集身份；不确定性和局限性 |
| update_trigger | SKU 或 BOM、供应商、材料成分、部件构造、成型路线、胶黏剂或溶剂、设备、制冷剂、能源结构、包装、废物去向、分配、地域或生产绩效发生实质变化后重新评估 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC 3.0 官方分类入口及 CPC_Ver_3.0_Structure_30Jun2025.csv，https://unstats.un.org/unsd/classifications/Econ/CPC | CPC 29420 范围和名称 |
| `eu-pef-2021` | 官方指南（`official_guidance`） | 欧盟委员会建议 (EU) 2021/2279，产品环境足迹方法，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定 BOM、企业特定制造数据、LCI 完整性、分配、透明度和数据质量 |
| `af-pefcr-2025` | 官方指南（`official_guidance`） | Apparel and Footwear Product Environmental Footprint Category Rules v3.1，2025-04-29，https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf | 鞋类 BOM、制造损耗、包装和过程数据结构 |
