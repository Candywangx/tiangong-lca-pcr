---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.groundnut-oil-crude
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 粗花生油

## 1. 范围与适用性

本 PCR 适用于以工厂接收的花生为原料生产粗花生油（arachis oil 或 peanut oil）的门到门过程。范围包括接收、清理、以带壳花生为原料时的脱壳、干燥或调质、机械压榨和/或溶剂萃取、粗油固液分离或澄清、场内储存，以及生产厂门口装运。

本 PCR 不包括花生种植、到厂前场外运输、食用油精炼（包括中和、脱色、脱臭与冬化）、分提、氢化、配方调和、零售包装、配送、使用及生命末期。可连接上游花生和能源数据集，但不得在本前景边界中重复构建其清单。精炼花生油及与其他植物油调和的产品不在范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.groundnut-oil-crude |
| classification_refs | CPC 3.0：21621，Groundnut oil, crude |
| covered_products | 仅以花生（*Arachis hypogaea* L. 种子）制得、经机械压榨、溶剂萃取或所声明组合路线并完成物理澄清后离开工厂的未精炼油，包括 arachis oil 和 peanut oil |
| excluded_products | 精炼花生油；作为终端消费品的初榨/冷榨零售油；调和植物油；以花生粕或压榨饼为参考产品的数据集；其他植物来源的油 |
| representative_product | 精炼前、生产厂门口的粗花生油 |
| production_route | 接收与预处理后采用机械压榨、溶剂萃取或所声明组合路线，再进行澄清、储存和装运 |
| market_state | 工厂门口的散装未精炼粗油；声明萃取路线、预期等级以及含水/含固状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供供后续精炼或所声明工业用途使用的未精炼花生油 |
| How much | 1 kg 粗花生油净产出 |
| How well | 仅源自花生；按声明完成物理澄清；未精炼、未调和、未稀释；已声明路线和预期等级 |
| How long or cycle | 一个报告期内在工厂门口的生产产出；不适用服务时长 |
| reference_flow_link | 澄清后、精炼前离开前景生产系统的合格粗油净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 粗花生油 `4becfdba-2a4c-4c6f-a503-75db987fdc16` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 植物来源（*Arachis hypogaea* L.）；原料状态（带壳或脱壳）；萃取路线；机械路线适用时的压榨机类型与压榨次数；溶剂路线适用时的溶剂身份与回收系统；澄清方式；预期食用/非食用等级；地理范围；报告期；分配方法；共产品与残余物去向 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 粗花生油参考产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 确定澄清后、精炼前的可销售粗油净质量；一致地扣除退货、转为不合格品的数量和期末库存增加量，并加回期初库存消耗量。 |
| `material_mass_basis` | 花生、油、饼/粕、壳、污泥、溶剂和废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录湿质量及其含水率或干物质基准；质量平衡或分配不得混用湿基和干基数量，除非明确换算。 |
| `energy_conversion` | 电力、燃料和外购蒸汽/热 | 所选 Tiangong 流的能量属性 | kWh 或 MJ | 保留仪表或发票原始单位，仅采用有记录的单位换算；不得将电力和燃料能量视为可互换的流。 |
| `solvent_mass_balance` | 溶剂萃取路线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在同一期间核对溶剂采购/补充量、期初期末库存、回收再用量、随产品或废物带出的溶剂和排放量。 |
| `conditioning_temperature` | 机械压榨前加热调质 | 所选测量记录的温度属性 | °C | 记录实际时间、温度和含水率。FAO 小型螺旋榨机资料中的 60–90 °C 仅作路线特定诊断参考，不是默认值或符合性限值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 工厂门口接收的花生，声明带壳/脱壳状态、来源、含水率、储存状况和接收/拒收质量 |
| starting_condition_role | 粗花生油前景生产的上游产品输入 |
| product_classification_scope | 仅限粗花生油；CPC 3.0 代码 21621 仅为映射语境，不扩展语义边界 |
| recursive_input_rule | 购入后被调和、返工或以其他方式进入同一产品类别的粗花生油，应作为独立上游产品输入记录，不得在本 PCR 边界内递归重构 |
| upstream_dataset_requirement | 为花生生产、外购电力、燃料、热/蒸汽、水、溶剂、包装及场外废物处理连接有代表性的上游数据集，并披露地理、技术和时间匹配性 |
| disclosure | 声明萃取路线、原料状态与含水基准、纳入的预处理步骤、适用时的溶剂回收与排放核算方法、内部循环、共产品去向、分配方法、排除操作和数据缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_received_to_crude_gate` | 所有数据集 | 纳入从花生到厂接收到合格粗油储存与装运的全部前景操作；排除种植和精炼，研究系统需要时仅连接相应数据集。 | `codex-cxs-210-1999`; `fao-groundnut-postharvest-2002` |
| `boundary_route_specific_steps` | 萃取路线 | 仅在实际执行时纳入脱壳、调质、各次压榨、溶剂萃取、脱溶、粕干燥/冷却、溶剂回收和澄清；路线声明决定启用哪些条件过程。 | `fao-rural-oilseed-quality-1995`; `fao-groundnut-postharvest-2002`; `us-epa-ap42-9-11-1-1995` |
| `boundary_internal_recycling` | 回收油、溶剂、水和固体 | 内部循环只记录一次，外部输入与排放按净值报告，同时保留验证平衡所需的总回收数据。 | `us-epa-ap42-9-11-1-1995` |
| `boundary_no_refining` | 粗油产品 | 边界止于碱炼或物理精炼、脱色、脱臭、冬化、分提或配方调和之前。 | `us-epa-ap42-9-11-1-1995` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p_receiving_preparation` | 接收与花生预处理 | `required` | 始终纳入；接收带壳原料时才脱壳，按所声明路线决定是否加热 | 建立被接收的含油原料和预处理物料 | kg 预处理花生 |
| `p_mechanical_extraction` | 机械榨油 | `conditional` | 液压榨、螺旋榨、ghani 或其他压榨路线适用时纳入 | 通过压力分离粗油和压榨饼，并采用路线特定调质 | kg 压榨粗油 |
| `p_solvent_extraction` | 溶剂萃取与回收 | `conditional` | 对预处理花生或压榨饼使用溶剂时纳入 | 萃取油、对粕脱溶并回收溶剂 | kg 溶剂萃取粗油 |
| `p_clarification_storage` | 粗油澄清、储存与装运 | `required` | 始终纳入；选择所声明的沉降、过滤、离心或其他物理方式 | 形成粗油参考净产出 | 1 kg 粗花生油净产出 |

### 过程：接收与花生预处理（`p_receiving_preparation`）

#### 输入

##### 产品流

###### 接收的花生（`received_groundnuts`）

记录跨越工厂门口的接收花生。仅在接收带壳花生时使用所选流；若接收脱壳原料，应选择身份与市场状态匹配的 Tiangong 脱壳花生流。

- 选定流：花生 `19b26342-ff22-426f-bac3-74cd48cae179`
- 流属性/单位：Mass / kg
- 数量规则：计量接收净质量，并分别记录拒收批次、杂质和期初/期末库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理花生产出，随后再归一化到参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`codex-cxs-210-1999`; `fao-rural-oilseed-quality-1995`

###### 预处理公用工程（`preparation_utilities`）

将清理、脱壳、干燥、破碎、轧片和调质所用电力、燃料、蒸汽/热和水分别记录为场址与地理特定产品流。

- 选定流：选择适用于场址的 Tiangong 公用工程流；不规定脱离地理语境的公用工程 UUID
- 流属性/单位：流特定能量、质量或体积属性 / 计量单位
- 数量规则：归属于预处理的计量用量或经发票核对的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理花生产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`fao-rural-oilseed-quality-1995`; `fao-groundnut-postharvest-2002`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预处理花生（`prepared_groundnuts`）

记录送往压榨或溶剂萃取的含油物料实测内部转移量。其作为内部中间物，不规定外部 Tiangong 产品流 UUID。

- 选定流：预处理花生，声明路线和含水状态（内部中间物）
- 流属性/单位：Mass / kg
- 数量规则：计量转移质量并声明含水基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理花生产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`fao-rural-oilseed-quality-1995`; `fao-groundnut-postharvest-2002`

###### 资源化花生壳（`shells_coproduct`）

仅在存在有记录的接收方和有益用途时将花生壳记录为产品输出；否则使用下方废物流行。

- 选定流：选择与有记录用途匹配的 Tiangong 花生壳产品流
- 流属性/单位：Mass / kg
- 数量规则：计量发出质量，与废弃花生壳质量互斥
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理花生产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`fao-groundnut-postharvest-2002`

##### 废物流

###### 废弃花生壳与预处理剔除物（`preparation_rejects`）

记录送往废物处理且未作为产品记录的花生壳、石块、受损花生仁、除尘固体和拒收物料。

- 选定流：选择与物理材料和处理路线匹配的废物流
- 流属性/单位：Mass / kg
- 数量规则：称重或核对得到的废物发出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理花生产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`fao-rural-oilseed-quality-1995`; `fao-groundnut-postharvest-2002`

##### 基本流

### 过程：机械榨油（`p_mechanical_extraction`）

#### 输入

##### 产品流

###### 进入压榨的预处理花生（`press_feed`）

记录进入每次压榨的内部转移实测值，避免重复计算再循环压榨饼。

- 选定流：预处理花生，声明路线和含水状态（内部中间物）
- 流属性/单位：Mass / kg
- 数量规则：进入压榨操作的净投料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 压榨粗油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`fao-groundnut-postharvest-2002`

###### 压榨公用工程（`pressing_utilities`）

将电力、驱动燃料和直接热或蒸汽分别记录为场址特定流。

- 选定流：选择适用于场址的 Tiangong 公用工程流
- 流属性/单位：流特定能量或质量属性 / 计量单位
- 数量规则：归属于压榨的计量或发票核对消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 压榨粗油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`fao-groundnut-postharvest-2002`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 压榨粗花生油（`pressed_crude_oil`）

记录在任何精炼操作之前送往澄清的粗油。

- 选定流：粗花生油 `4becfdba-2a4c-4c6f-a503-75db987fdc16`
- 流属性/单位：Mass / kg
- 数量规则：计量转移质量，并调整内部回油和库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 压榨粗油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`fao-groundnut-postharvest-2002`

###### 花生压榨饼（`groundnut_press_cake`）

记录机械压榨固体共产品及其含水率、残油状态、去向和对所声明用途的适用性。

- 选定流：花生压榨饼粕 `51d899e2-0ace-4f0b-8db9-b1ebf0533eac`
- 流属性/单位：Mass / kg
- 数量规则：计量发出或内部转移质量，并计入库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 压榨粗油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`fao-groundnut-postharvest-2002`; `fao-leap-animal-feeds-2016`

##### 废物流

##### 基本流

###### 压榨与物料处理颗粒物（`pressing_particulate`）

按实际接收环境区室和控制装置记录实测或场址建模的颗粒物排放。

- 选定流：选择与粒径和接收环境区室匹配的 Tiangong 基本流
- 流属性/单位：Mass / kg
- 数量规则：采用场址测量或有记录的场址排放计算；不得将无关油料默认值当作花生实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 压榨粗油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`us-epa-ap42-9-11-1-1995`

### 过程：溶剂萃取与回收（`p_solvent_extraction`）

#### 输入

##### 产品流

###### 进入溶剂萃取的预处理花生或压榨饼（`solvent_feed`）

记录进入萃取器的实际含油物料，并区分预处理花生与先前压榨过的饼。

- 选定流：与所声明路线匹配的预处理花生或花生压榨饼
- 流属性/单位：Mass / kg
- 数量规则：萃取器净投料，排除内部再循环
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 溶剂萃取粗油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`fao-groundnut-postharvest-2002`; `us-epa-ap42-9-11-1-1995`

###### 己烷补充量（`hexane_makeup`）

记录进入场址平衡的外购或外部供应己烷净量；内部回收己烷不得再次作为外部输入。

- 选定流：己烷 `7e175110-5d8a-419e-8dee-2649554084e7`
- 流属性/单位：Mass / kg
- 数量规则：采购量加期初库存减期末库存，并调整转移量以及产品或废物中有记录的溶剂含量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 溶剂萃取粗油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_balance`
- 来源：`us-epa-ap42-9-11-1-1995`

###### 溶剂萃取公用工程（`solvent_utilities`）

分别记录萃取、蒸馏、汽提、脱溶、干燥、冷却与溶剂回收所用电力、蒸汽/热、冷却水和其他公用工程。

- 选定流：选择适用于场址的 Tiangong 公用工程流
- 流属性/单位：流特定属性 / 计量单位
- 数量规则：归属于溶剂路线的计量或发票核对数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 溶剂萃取粗油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`us-epa-ap42-9-11-1-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 溶剂萃取粗花生油（`solvent_crude_oil`）

记录完成脱溶并送往澄清的粗油。

- 选定流：粗花生油 `4becfdba-2a4c-4c6f-a503-75db987fdc16`
- 流属性/单位：Mass / kg
- 数量规则：汽提后计量转移质量，并调整回流和库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 溶剂萃取粗油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`us-epa-ap42-9-11-1-1995`

###### 溶剂萃取花生粕（`groundnut_meal`）

仅在有记录的有益用途且满足相应用途质量要求时将脱溶粕记录为产品。应选择经核验的 Tiangong 花生粕流；本 PCR 当前不规定 UUID。

- 选定流：溶剂萃取花生粕，声明饲料或其他去向
- 流属性/单位：Mass / kg
- 数量规则：计量发出或内部转移质量，并记录含水率和库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 溶剂萃取粗油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`fao-groundnut-postharvest-2002`; `fao-leap-animal-feeds-2016`

##### 废物流

###### 不合格粕与含溶剂残余物（`solvent_route_waste`）

按物理身份和处理路线记录废弃粕、污泥、废吸附剂和受污染残余物。

- 选定流：选择与材料和处理路线匹配的 Tiangong 废物流
- 流属性/单位：Mass / kg
- 数量规则：称量发出废物，并计入有记录的溶剂含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 溶剂萃取粗油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`us-epa-ap42-9-11-1-1995`

##### 基本流

###### 排入空气的己烷（`hexane_to_air`）

采用经核对的场址溶剂平衡并按实际接收环境区室记录己烷净排放。下列 UUID 仅适用于非城市空气或高架源；场址条件不同时应选择其他 Tiangong 区室。

- 选定流：己烷 `fe0acd60-3ddc-11dd-a692-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：分别核算产品、废水与废物中的溶剂后计算空气净损失；有经核验直接监测时以其替代
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 溶剂萃取粗油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_balance`
- 来源：`us-epa-ap42-9-11-1-1995`

### 过程：粗油澄清、储存与装运（`p_clarification_storage`）

#### 输入

##### 产品流

###### 未澄清粗花生油（`unclarified_crude_oil`）

记录所有启用萃取路线送来的内部粗油转移，不把它计为额外外部输入。

- 选定流：粗花生油 `4becfdba-2a4c-4c6f-a503-75db987fdc16`
- 流属性/单位：Mass / kg
- 数量规则：从萃取到澄清的计量转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗花生油净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`fao-rural-oilseed-quality-1995`; `fao-groundnut-postharvest-2002`

###### 澄清与储存公用工程（`clarification_utilities`）

使用时分别记录电力、过滤介质、惰性气体和其他消耗品。

- 选定流：选择适用于场址的 Tiangong 公用工程与耗材流
- 流属性/单位：流特定属性 / 计量或采购单位
- 数量规则：归属于澄清、储存和装运的计量或采购核对数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗花生油净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`fao-groundnut-postharvest-2002`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 粗花生油参考净产出（`reference_crude_oil`）

记录物理澄清后、任何精炼步骤之前的可销售粗花生油。

- 选定流：粗花生油 `4becfdba-2a4c-4c6f-a503-75db987fdc16`
- 流属性/单位：Mass / kg
- 数量规则：根据采集的合格净产出归一化后恰为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：工厂门口 1 kg 粗花生油净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_balance`
- 来源：`codex-cxs-210-1999`

##### 废物流

###### 澄清污泥与废过滤材料（`clarification_waste`）

记录送往处理的油脚、沉渣、废过滤介质和不合格油，回收油则返回内部平衡。

- 选定流：选择与材料和处理路线匹配的 Tiangong 废物流
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录内部回油后的称量废物发出量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗花生油净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`fao-groundnut-postharvest-2002`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 油、饼/粕、花生壳及路线特定操作 | 首先通过拆分工厂过程避免分配，将投入、排放及分离后操作直接归属于引起它们的产品或生产单元。 | `fao-leap-animal-feeds-2016` |
| `allocation_shared_burdens` | 产品分离前仍无法直接归属的共同负荷 | 无法通过拆分解决时，采用同期且有记录的价格在粗油和有益共产品之间进行经济分配；在代表性期间计算分配因子并确保其合计为一。 | `fao-leap-animal-feeds-2016` |
| `allocation_sensitivity` | 重要共产品 | 数据允许时报告干物质质量和总能量分配敏感性，并披露方法选择对粗油结果的影响。 | `fao-leap-animal-feeds-2016` |
| `allocation_waste_definition` | 花生壳、剔除物、污泥和不合格粕 | 仅当存在有记录接收方和有益用途时才将输出认定为共产品。无市场功能的废物不得获得共产品抵扣，其处理负荷留在产生过程。 | `fao-leap-animal-feeds-2016` |
| `allocation_data_disclosure` | 所有已分配数据集 | 披露共产品湿/干质量、含水率、价格与平均期间、适用时的能量数据、分配因子、排除输出和敏感性结果。 | `fao-leap-animal-feeds-2016` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_balance` | 所有启用过程 | 原料、中间物、油、饼/粕、花生壳、产品、剔除物与库存 | 地磅、校准秤、罐计量、发运与库存记录 | timestamp; batch_id; material_id; route; gross_mass; tare_mass; net_mass; moisture; opening_stock; closing_stock; destination | 将批次/班次记录核对到月度与年度总量；保留内部转移标识 | kg; % moisture | 每批或每班；报告期边界盘点库存 | 完整代表性报告期，通常至少连续 12 个月 | 生产所声明产出的全部前景产线和储罐 | 汇总外部输入/输出；抵消匹配内部转移；调整库存变化；按 `calc_reference_normalization` 归一化 | 校准证书；签字过磅单；罐容表；盘点核对；拒收批次记录 |
| `cp_utilities` | 所有启用过程 | 电力、燃料、蒸汽/热、水和耗材 | 仪表、分表、发票、采购与运行小时记录 | meter_id; start_reading; end_reading; invoice_quantity; fuel_type; steam_condition; process_assignment; allocation_key | 优先使用分表；与场址发票总量核对并记录工程分配 | kWh; MJ; kg; m3 | 持续/每班/月度，视数据可得性 | 与产品产出相同期间 | 范围内全部前景设备 | 直接归属计量值；仅用有记录驱动因子分配剩余共用公用工程 | 仪表校准；发票；燃料证书；核对差异 |
| `cp_solvent_balance` | `p_solvent_extraction` | 己烷投入、回收、库存、产品/废物含量与排放 | 采购、罐库存、回收计量、实验室、废水、废物和监测记录 | opening_stock; purchases; closing_stock; recovered_reused; product_residual; wastewater_loss; waste_loss; monitored_air_release; transfers | 在报告期执行一套封闭溶剂平衡并调查不明差异 | kg | 日/班次记录汇总到月度与年度 | 与溶剂路线油产出相同期间 | 全部溶剂处理、萃取、回收、储存与排气系统 | 应用 `calc_hexane_balance`；内部回收溶剂不得计作新外部输入 | 罐体校准；采购发票；实验室方法；监测报告；签字废物联单 |
| `cp_waste_emissions` | 所有启用过程 | 废物、废水、颗粒物、VOC 和其他排放 | 过磅单、联单、排放流量计、烟囱/无组织监测及有记录排放计算 | material_or_substance; quantity; compartment; particle_size; treatment; control_device; method; uncertainty | 按物理身份与接收环境区室记录；保留计算参数和控制状态 | kg; m3 | 每次发运或监测活动；汇总到报告期 | 代表正常与异常运行状态 | 所有前景排放点和废物路线 | 汇总实测值；仅在未测期间使用有记录场址计算 | 实验室资质；方法引用；监测校准；联单；控制装置日志 |
| `cp_route_quality` | `p_receiving_preparation`; 萃取过程 | 原料状态、萃取路线、油/饼质量与运行状态 | 接收检验、实验室、批次表和控制系统记录 | botanical_identity; in_shell_or_shelled; moisture; mould_or_aflatoxin_control; press_type; press_passes; conditioning_time; conditioning_temperature; solvent_identity; meal_desolventized; oil_solids; intended_grade | 对代表性批次取样并记录每个生产活动的路线设置 | %, °C, min, categorical | 每批/活动并定期实验室检测 | 与清单相同期间 | 所有原料批次和启用萃取路线 | 适用时报告分布与产量加权平均；不得以基准值替代记录 | 取样计划；实验室方法；分析证书；控制系统日志 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 报告期流净量 / 报告期合格粗油净产出 | 经核对外部流总量；期初/期末库存；合格油产出 | 每 1 kg 粗花生油的数量 |  |
| `calc_material_balance` | 每个启用过程及整个前景系统 | 不平衡量 = 总质量输入 - 总质量输出 - 有记录排放 - 期末库存增加 + 期初库存增加；报告绝对值和百分比 | 一致含水基准的湿质量记录；排放；库存变化 | 质量平衡结果与不明差异 |  |
| `calc_hexane_balance` | 溶剂路线 | 外部己烷净输入 = 采购量 + 期初库存 - 期末库存 - 有记录净转移；与空气、废水、废物和产品/粕残留溶剂核对 | 溶剂采购、库存、回收、产品/废物含量和监测记录 | 每 kg 粗油的己烷净输入及分环境区室排放 | `us-epa-ap42-9-11-1-1995` |
| `calc_allocation_factors` | 共同萃取负荷 | factor_i = 共产品 i 的经济价值 / 全部有益共产品经济价值之和；数据允许时另算干物质质量与总能量敏感性因子 | 共产品数量、含水率、价格、平均期间、总能量 | 分配因子与敏感性情景 | `fao-leap-animal-feeds-2016` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 原料与参考产品 | 证明植物来源为花生，并从参考产出中排除精炼或调和油。 | 供应商/批次身份、路线记录、产品规格和参考流 UUID；`codex-cxs-210-1999` |
| `dq_temporal` | 前景清单 | 使用一个一致的代表性期间；披露停机、异常损失、生产活动和缺失月份。 | 生产日历、仪表覆盖与缺口记录 |
| `dq_mass_balance` | 物料与溶剂平衡 | 核对全部主要输入、输出、内部转移、库存、废物与排放；调查不明差异，不得强行闭合。 | `calc_material_balance`; `calc_hexane_balance`; 签字核对记录 |
| `dq_route` | 机械与溶剂路线 | 仅启用实际执行的过程模块，并保留压榨次数、调质、溶剂回收、脱溶和控制装置状态。 | 批次表、过程图与运行/控制日志；`fao-groundnut-postharvest-2002`; `us-epa-ap42-9-11-1-1995` |
| `dq_groundnut_quality` | 进厂花生与饼/粕去向 | 保留含水率、霉菌/黄曲霉毒素控制、拒收批次和去向证据；受污染或不可用物料不得列为有益共产品。 | 取样与实验室记录；`fao-rural-oilseed-quality-1995` |
| `dq_uuid` | Tiangong 引用 | 发布前核验每个所选 UUID 的流类型、参考属性、市场状态和接收环境区室。 | Tiangong 身份读回与数据集审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_product_identity` | 参考产品 | 若产出已精炼、已调和、来自其他植物来源或缺失粗油路线/等级声明，则失败。 | `codex-cxs-210-1999` |
| `validate_reference_flow` | 定量参考 | 要求归一化后恰为 1 kg，产品流 UUID 为 `4becfdba-2a4c-4c6f-a503-75db987fdc16`，Mass 属性 UUID 为 `93a60a56-a3c8-11da-a746-0800200b9a66`，Units of mass UUID 为 `93a60a57-a4c8-11da-a746-0800200c9a66`。 |  |
| `validate_boundary` | 前景系统 | 要求范围从工厂接收到物理澄清/储存/装运，禁止纳入精炼，并要求连接上游数据集而不是递归重构。 | `fao-groundnut-postharvest-2002`; `us-epa-ap42-9-11-1-1995` |
| `validate_route_inventory` | 启用过程 | 要求纳入预处理与澄清；要求机械和/或溶剂模块与所声明路线一致，并纳入全部路线特定投入、共产品、废物与排放。 | `fao-rural-oilseed-quality-1995`; `fao-groundnut-postharvest-2002`; `us-epa-ap42-9-11-1-1995` |
| `validate_material_balance` | 各过程及总系统 | 要求披露一致湿/干基准的物料平衡结果、库存变化、内部转移抵消以及对不明差异的调查。 |  |
| `validate_solvent_route` | 溶剂萃取 | 使用溶剂时，要求溶剂身份、回收系统说明、外部溶剂净输入、库存调整质量平衡、产品/废物残留和分环境区室排放；未使用时将该检查标为不适用并跳过。 | `us-epa-ap42-9-11-1-1995` |
| `validate_allocation` | 共产品 | 要求先拆分再分配、记录有益用途判定、剩余共同负荷的经济分配因子合计为一，并在数据允许时提供干物质质量/总能量敏感性。 | `fao-leap-animal-feeds-2016` |
| `validate_qualifiers_and_quality` | 数据集元数据 | 要求全部参考流限定信息、时间/场址覆盖、原料状态、共产品去向、UUID 审查和质量证据。 | `fao-rural-oilseed-quality-1995` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 生产厂门口粗花生油门到门前景生产数据集 |
| downstream_use | `secondary_dataset`; 审查并发布后可作 `background_dataset` |
| allowed_use | 需要显式粗花生油生产阶段的产品碳足迹和 LCA 模型；连接有代表性的上游花生/公用工程及下游精炼数据集 |
| excluded_use | 直接代表精炼零售油；在上游、分配和质量范围不等价时用于公开比较声明；使用与路线不适用的溶剂或压榨数据 |
| required_metadata | 地理；报告期；工厂技术；原料来源及带壳/脱壳状态；路线；油品等级；参考流限定信息；上游数据集；共产品去向；分配；物料与溶剂平衡方法 |
| required_quality_disclosure | 前景覆盖；仪表与秤覆盖；库存核对；含水基准；异常运行；缺失数据；UUID 选择；排放方法；分配敏感性；未解决平衡差异 |
| update_trigger | 原料状态、萃取路线、溶剂/控制系统、澄清边界、产品等级、共产品去向、分配方法、技术、地理或代表性报告期发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-210-1999` | `standard` | FAO/WHO Codex Alimentarius，*Standard for Named Vegetable Oils*，CXS 210-1999（官方 PDF：https://www.fao.org/input/download/standards/336/CXS_210e_2015.pdf；检索于 2026-08-10） | Arachis/peanut/groundnut oil 身份、植物来源以及与下游精炼/产品状态的区分 |
| `fao-rural-oilseed-quality-1995` | `official_guidance` | FAO，*Quality assurance for small-scale rural food industries*，第 2.1.2 节 Oilseeds（https://www.fao.org/4/v5380e/V5380E07.HTM；检索于 2026-08-10） | 接收质量、霉菌/黄曲霉毒素控制、脱壳、破碎、加热、压榨和粗油状态 |
| `fao-groundnut-postharvest-2002` | `official_guidance` | FAO INPhO，*Groundnut: Post-harvest Operations*（https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Groundnut.pdf；检索于 2026-08-10） | 花生特定预处理、调质、压榨、过滤、溶剂路线适用性、饼/粕共产品和粗油用途 |
| `us-epa-ap42-9-11-1-1995` | `official_guidance` | US EPA，AP-42 第 9.11.1 节，*Vegetable Oil Processing*，1995 年 11 月（https://gaftp.epa.gov/ap42/ch09/s1101/final/c9s1101_nov1995.pdf；检索于 2026-08-10） | 溶剂萃取、脱溶、粗油/粕分离、己烷回收、储存/排气源、颗粒物排放和溶剂质量平衡方法 |
| `fao-leap-animal-feeds-2016` | `official_guidance` | FAO LEAP Partnership，*Environmental performance of animal feeds supply chains: Guidelines for assessment*，Version 1，2016，ISBN 978-92-5-109499-0（官方记录：https://openknowledge.fao.org/handle/20.500.14283/i6433e；检索于 2026-08-10） | 多功能过程拆分、直接归属、油料压榨分配、经济分配以及干物质质量/总能量敏感性 |
