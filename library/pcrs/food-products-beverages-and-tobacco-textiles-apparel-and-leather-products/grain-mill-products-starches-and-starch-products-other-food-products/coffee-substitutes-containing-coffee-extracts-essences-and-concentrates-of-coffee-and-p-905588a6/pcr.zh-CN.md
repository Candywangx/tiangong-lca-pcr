---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.coffee-substitutes-containing-coffee-extracts-essences-and-concentrates-of-coffee-and-p-905588a6
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 咖啡提取物、浓缩物、代用品及相关制品

## 1. 范围与适用性

本 PCR 支持咖啡提取物和浓缩物、可溶或速溶咖啡、以咖啡提取物或咖啡为基础的制品、含咖啡的代用品，以及烘焙菊苣或其他烘焙咖啡代用品及其提取物的前景数据包。范围涵盖从申报的烘焙咖啡、菊苣、代用配料或外购提取物接收到制造厂门的提取或混合、浓缩、可选干燥和包装作业。

天工参考产品流是真实流 `Instant Coffee / 速溶咖啡`。它是 CPC 23912 的代表产品，但并非该类别所有产品的通用身份。液态或膏状咖啡提取物、咖啡基制品、烘焙菊苣或其他代用品的数据包应在发布前选择并核验更具体的天工产品流；不得重新命名速溶咖啡 UUID 或将其用于这些产品。

咖啡种植、咖啡果初加工、生咖啡制造、供应商实施的上游烘焙、分销、用户冲调饮品以及工厂门之后的生命末期，在研究需要时以关联的上游或下游数据集表示，不属于本 PCR 的前景过程。若烘焙、配料制造或包装材料制造发生在报告场址，应增加相应前景作业并予以披露。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.coffee-substitutes-containing-coffee-extracts-essences-and-concentrates-of-coffee-and-p-905588a6 |
| classification_refs | CPC 3.0: 23912 |
| covered_products | 干燥可溶或速溶咖啡提取物；咖啡提取物膏；液态咖啡提取物或浓缩物；以咖啡提取物或咖啡为基础的制品；含咖啡的代用品；烘焙菊苣和其他烘焙咖啡代用品；这些代用品的提取物和浓缩物 |
| excluded_products | 生咖啡；未经提取或代用品配制而直接出售的烘焙或脱咖啡因咖啡；即饮冲泡咖啡饮料；不以咖啡或咖啡代用品为基础的纯香精；饮料供应服务 |
| representative_product | Instant Coffee / 速溶咖啡；已核验的天工流，仅用于干燥可溶或速溶咖啡产品 |
| production_route | 接收并制备烘焙咖啡或申报的代用配料；适用时进行水提和澄清；浓缩；可选喷雾干燥或冷冻干燥和造粒；条件性混合或配制；包装 |
| market_state | 制造厂门处可销售的干粉或颗粒、膏体、液态浓缩物、烘焙代用品或配制制品，并申报产品形态、组成基础、干物质含量、脱咖啡因状态和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造厂门处可销售的咖啡提取物、浓缩物、速溶咖啡、咖啡基制品或申报的咖啡代用品产品 |
| How much | 1 kg 净产品；除非研究明确将运输包装计入参考产品质量，否则不含运输包装 |
| How well | 产品形态、咖啡或代用品基础、干物质含量、脱咖啡因状态、制品配方份额、适用的干燥技术和包装状态符合申报规格 |
| How long or cycle | 工厂门处一个完整生产批次；本质量参考流不表示货架期和饮品冲调 |
| reference_flow_link | 1 kg 净可销售产出是所有前景清单数量的定量参考 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Instant Coffee / 速溶咖啡 `16ecdc48-3ef5-40b0-8a5d-56b3794a2ba4` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品形态：干粉/颗粒、膏体、液态浓缩物、烘焙代用品或制品；咖啡/菊苣/代用品基础和配方份额；咖啡基或代用品基干物质含量；脱咖啡因状态；提取介质；干燥产品的干燥技术；净包装状态；地理范围；参考年份 |

构建前景数据包时，`必需限定信息` 中每一项均应在数据集元数据、产品说明、参考流备注或等效数据包字段中声明。任何非速溶咖啡产品均应在发布前用产品特定的天工流替换代表流。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 净参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将前景输入和输出归一化至 1 kg 净可销售产品。毛包装质量应单独记录，不得将包装计入产品参考质量。 |
| `product_form_dry_matter` | 干燥、膏状和液态提取物 | 质量分数 | kg/kg 或质量百分比 | 记录干物质检测结果和方法。面向欧盟市场的咖啡提取物按 Directive 1999/4/EC 校验：干燥提取物的咖啡基干物质至少为 95%，膏状为 70–85%，液态为 15–55%；其他地区采用适用司法辖区规格。 |
| `ingredient_mass_basis` | 咖啡、菊苣、代用配料、添加料和包装 | 质量 | kg | 使用接收状态质量；当水分或干物质基础实质影响收率或比较时，应单独记录。 |
| `energy_conversion` | 外购电力、燃料、蒸汽、制冷和压缩空气 | 能量 | kWh 或 MJ | 保留计费或计量单位及换算因子。没有记录低位或高位热值及其基础时，不得将能源载体换算为质量。 |
| `water_balance` | 工艺水和废水 | 质量或体积 | kg 或 m3 | 使用实测质量或体积；从体积换算质量时，应记录与温度相关的密度或明确且有依据的近似值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告场址接收的烘焙咖啡、烘焙菊苣或其他代用配料、外购咖啡/代用品提取物、配制配料、公用工程和包装材料 |
| starting_condition_role | 进入前景制造系统的上游产品 |
| product_classification_scope | 申报类别范围覆盖的咖啡提取物、浓缩物、咖啡基制品、含咖啡代用品、烘焙菊苣和其他烘焙代用品及其提取物 |
| recursive_input_rule | 同一类别的外购提取物、浓缩物或制品仅作为具有自身上游数据集的技术圈产品输入记录一次；不得在接收方前景过程中递归重建其生产 |
| upstream_dataset_requirement | 为咖啡或代用配料、外购提取物、水、能源载体、包装材料、范围内运输和废物处理关联有代表性的上游数据集；披露地理、时间和技术代表性 |
| disclosure | 申报哪些起始材料已烘焙、已提取、已浓缩或已配制；区分场内和供应商作业；说明产品形态、配方基础、干物质、干燥技术、包装边界、地理范围、参考年份和所有排除项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 前景制造 | 纳入申报路线实际发生的所有场内物料制备、水提和澄清、浓缩、干燥或造粒、配制、清洗、场址公用工程、废水处理、产品损失和包装作业。 | `eu-coffee-extracts-directive-1999`; `eu-pef-method-2021` |
| `boundary_upstream_links` | 外购输入 | 用关联上游数据集表示外购咖啡、菊苣、代用配料、提取物、配制配料、公用工程、包装材料和处理服务，不得省略其负荷。 | `eu-pef-method-2021` |
| `boundary_route_conditionals` | 条件性作业 | 仅纳入申报产品实际发生的路线步骤，但过程图中的每个条件性过程均应记录不适用决定。 | `eu-pef-method-2021` |
| `boundary_cutoff_disclosure` | 排除流 | 不得采用未记录的质量、能量或环境显著性截断。应量化排除流，或说明并披露其为何对预期数据集用途不具实质影响。 | `iso-14044-2006`; `eu-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `ingredient_preparation` | 配料接收与制备 | `required` | 始终适用；配料以可直接提取或混合状态到货时，该作业可仅为计量转移 | 前景物料制备 | kg 制备进料 |
| `aqueous_extraction` | 水提与澄清 | `conditional` | 场内生产咖啡或代用品提取物时必需；仅混合或包装外购提取物时不适用 | 前景提取 | kg 澄清提取液 |
| `concentration` | 浓缩与香气处理 | `conditional` | 场内浓缩提取液或回添回收香气时必需 | 前景浓缩 | kg 浓缩提取物 |
| `drying_finishing` | 干燥、造粒与干产品后处理 | `conditional` | 场内生产干燥可溶或速溶产品时必需 | 前景产品后处理 | kg 干燥成品 |
| `formulation` | 混合与配制 | `conditional` | 咖啡基制品、含咖啡代用品或多配料产品必需 | 前景配制 | kg 配制产品 |
| `packaging` | 最终检验与包装 | `required` | 可销售厂门产品始终适用；仅当未包装状态本身是商业产出时才可明确使用未包装状态 | 前景包装 | 1 kg 净可销售产品 |

### 过程：配料接收与制备（`ingredient_preparation`）

#### 输入

##### 产品流

###### 烘焙咖啡、菊苣、代用品或外购提取物进料（`primary_ingredient_feed`）

按身份、来源、烘焙/提取状态、水分或干物质和批次分别记录各主要配料。不得将咖啡、菊苣、其他代用品或外购提取物合并为未命名汇总项。

- 选定流：申报的烘焙咖啡、烘焙菊苣、咖啡代用品或外购提取物
- 流属性/单位：质量 / kg
- 数量规则：实测接收状态批次消耗质量，扣除有记录的退库
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_lot_records`
- 数量范围：暂定配料输入 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：10
  - 单位：kg/kg 净可销售产品
  - 基准：覆盖制品、液态提取物和干燥提取物的宽泛类别级筛查；应用产品和场址特定收率证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 少量配制配料和加工助剂（`minor_ingredients`）

使用时分别记录糖、载体、抗结剂或其他申报配料及加工助剂。应用适用的产品组成规则并保留配方记录。

- 选定流：申报的配制配料或加工助剂
- 流属性/单位：质量 / kg
- 数量规则：按配料实测领用至生产的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_lot_records`
- 来源：`eu-coffee-extracts-directive-1999`

##### 废物流

###### 不合格或洒落配料（`ingredient_rejects`）

按物料和去向记录不合格、洒落和废弃配料质量。

- 选定流：有机食品加工废物
- 流属性/单位：质量 / kg
- 数量规则：实测不合格或废弃质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 制备进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 数量范围：暂定物料损失 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg 制备进料
  - 基准：宽泛首轮筛查；应用场址物料平衡历史替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 产品流

###### 制备后的配料进料（`prepared_feed`）

转入提取或配制的制备物料根据期初库存、接收、期末库存、退库和实测损失计算。

- 选定流：制备后的咖啡或代用品进料
- 流属性/单位：质量 / kg
- 数量规则：计算转入下一前景过程的制备进料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备进料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_lot_records`

##### 废物流

##### 基本流

### 过程：水提与澄清（`aqueous_extraction`）

#### 输入

##### 产品流

###### 制备后的烘焙物料（`extraction_feed`）

记录进入提取的制备烘焙咖啡或代用物料。外购提取物绕过本过程，进入浓缩或配制。

- 选定流：制备后的烘焙咖啡或代用物料
- 流属性/单位：质量 / kg
- 数量规则：计量或按批称量的提取进料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 澄清提取液
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_lot_records`
- 来源：`eu-coffee-extracts-directive-1999`

###### 提取与清洗用水（`process_water`）

计量条件允许时，分别记录并入提取物的水和清洗水；记录循环水和冷凝水，不得重复计算补充水。

- 选定流：工艺水
- 流属性/单位：质量 / kg
- 数量规则：计量进入过程的新鲜补充水和其他外部供应水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meter_records`
- 数量范围：暂定用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：50
  - 单位：kg/kg 净可销售产品
  - 基准：覆盖提取物形态和清洗制度的宽泛首轮筛查；应用场址计量替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 提取能源和公用工程（`extraction_energy`）

分别记录电力和热能源载体。跨越过程边界的蒸汽应包含压力或温度基础以及冷凝水回流处理。

- 选定流：外购电力和热能源载体
- 流属性/单位：能量 / kWh 或 MJ
- 数量规则：提取和澄清的计量或分配公用工程消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meter_records`
- 数量范围：暂定提取能耗 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：50
  - 单位：MJ/kg 净可销售产品
  - 基准：宽泛首轮综合能耗筛查；应用独立仪表或工程记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 澄清咖啡或代用品提取液（`clarified_extract`）

在转入浓缩或直接液态产品后处理的节点记录提取物质量和干物质分数。

- 选定流：澄清咖啡或代用品提取液
- 流属性/单位：质量 / kg
- 数量规则：实测转移质量并配对干物质检测
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 澄清提取液
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass_quality_records`

##### 废物流

###### 废咖啡渣或代用品固体（`spent_extraction_solids`）

记录湿质量、干物质、回收咖啡油或其他共产品，以及处理或利用去向。

- 选定流：废咖啡渣或废代用品固体
- 流属性/单位：质量 / kg
- 数量规则：实测离开提取过程的湿质量，并配对有代表性的干物质样品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 数量范围：暂定废固体 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg 湿固体/kg 净可销售产品
  - 基准：宽泛首轮筛查；应用场址物料平衡和水分数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 提取废水（`extraction_wastewater`）

记录废水体积或质量、相关负荷指标和去向；不得与并入产品或蒸发的水合并。

- 选定流：食品加工废水
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：计量归属于产品路线的提取、清洗和澄清排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 数量范围：暂定废水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg/kg 净可销售产品
  - 基准：宽泛首轮筛查；应用流量计和生产记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：浓缩与香气处理（`concentration`）

#### 输入

##### 产品流

###### 澄清提取液或外购提取物（`concentration_feed`）

记录进料质量、干物质以及是否回收并回添香气。

- 选定流：澄清或外购咖啡/代用品提取物
- 流属性/单位：质量 / kg
- 数量规则：实测进料转移质量并配对干物质检测
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 浓缩提取物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass_quality_records`

###### 浓缩能源和公用工程（`concentration_energy`）

可用时分别记录电力、蒸汽、制冷和真空系统公用工程。

- 选定流：外购电力和热能源载体
- 流属性/单位：能量 / kWh 或 MJ
- 数量规则：计量或工程分配的浓缩公用工程消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meter_records`
- 数量范围：暂定浓缩能耗 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：50
  - 单位：MJ/kg 净可销售产品
  - 基准：宽泛首轮综合能耗筛查；应用场址公用工程数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 浓缩提取物（`concentrated_extract`）

记录浓缩出口处的产品质量、产品形态和干物质。回添同一产品的回收香气是内部流，不得计为额外输出。

- 选定流：浓缩咖啡或代用品提取物
- 流属性/单位：质量 / kg
- 数量规则：实测出口质量并配对干物质检测
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 浓缩提取物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass_quality_records`
- 来源：`eu-coffee-extracts-directive-1999`

##### 废物流

###### 浓缩冷凝水或废水（`concentration_water_output`）

分别记录冷凝水回用、排放或处理，避免将回收水同时计为废物和避免输入。

- 选定流：工艺冷凝水或废水
- 流属性/单位：质量 / kg
- 数量规则：按去向计量或由物料平衡计算水输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 浓缩提取物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`

##### 基本流

### 过程：干燥、造粒与干产品后处理（`drying_finishing`）

#### 输入

##### 产品流

###### 浓缩提取物进料（`drying_feed`）

申报喷雾干燥、冷冻干燥或其他经评审的干燥技术，并记录进料质量和干物质。

- 选定流：浓缩咖啡或代用品提取物
- 流属性/单位：质量 / kg
- 数量规则：实测进入干燥机的浓缩进料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干燥产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass_quality_records`

###### 干燥能源和公用工程（`drying_energy`）

按干燥技术分别记录电力、热力、制冷、压缩空气和惰性气体。

- 选定流：外购电力和热能源载体
- 流属性/单位：能量 / kWh 或 MJ
- 数量规则：干燥和造粒的计量或工程分配公用工程消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 干燥产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meter_records`
- 数量范围：暂定干燥能耗 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：100
  - 单位：MJ/kg 干燥产品
  - 基准：覆盖喷雾和冷冻干燥的宽泛首轮筛查；应用技术特定场址数据替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 干燥可溶或速溶产品（`dried_product`）

分别记录净干燥产出、干物质、内部返回的截留细粉和不合格产品。

- 选定流：Instant Coffee / 速溶咖啡 `16ecdc48-3ef5-40b0-8a5d-56b3794a2ba4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转入配制或包装的合格干燥产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 干燥产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass_quality_records`
- 来源：`eu-coffee-extracts-directive-1999`

##### 废物流

###### 不合格干燥产品和截留细粉（`drying_rejects`）

记录最终去向，并区分内部循环细粉和离开前景系统的物料。

- 选定流：不合格可溶咖啡或代用品产品
- 流属性/单位：质量 / kg
- 数量规则：实测离开过程的不合格产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干燥产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 数量范围：暂定干燥损失 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg 干燥产品产出
  - 基准：宽泛首轮筛查；应用场址收率历史替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：混合与配制（`formulation`）

#### 输入

##### 产品流

###### 咖啡提取物、代用品和配制组分（`formulation_components`）

分别记录每一种配方组分，并识别咖啡、菊苣或其他代用品基础。

- 选定流：申报的配制组分
- 流属性/单位：质量 / kg
- 数量规则：实测批次配方数量并校正退回和返工
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 配制产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_lot_records`
- 来源：`eu-coffee-extracts-directive-1999`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 配制咖啡或代用品制品（`formulated_product`）

记录净批次产出、配方版本、干物质和产品特定流身份。

- 选定流：配制咖啡或代用品制品
- 流属性/单位：质量 / kg
- 数量规则：实测合格配制产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 配制产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass_quality_records`

##### 废物流

##### 基本流

### 过程：最终检验与包装（`packaging`）

#### 输入

##### 产品流

###### 未包装合格产品（`unpacked_product`）

记录进入包装的产品特定流。仅当产品是速溶或可溶咖啡时使用速溶咖啡 UUID。

- 选定流：产品特定的咖啡提取物、制品或代用品产品
- 流属性/单位：质量 / kg
- 数量规则：实测转入包装的合格产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass_quality_records`

###### 初级和次级包装材料（`packaging_materials`）

分别记录每种材料和部件，包括多层包装、封盖、标签、纸箱，以及位于申报包装边界内的托盘。

- 选定流：产品特定包装材料
- 流属性/单位：质量 / kg
- 数量规则：实测或按材料清单确定的包装材料消耗质量，扣除退回部件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 数量范围：暂定包装质量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：1
  - 单位：kg/kg 净可销售产品
  - 基准：覆盖散装和零售规格的宽泛首轮筛查；应用包装材料清单替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 包装废料（`packaging_scrap`）

按材料和处理去向记录包装废料。

- 选定流：按材料区分的包装废物
- 流属性/单位：质量 / kg
- 数量规则：实测离开过程的包装废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`

##### 基本流

#### 输出

##### 产品流

###### 净可销售参考产品（`reference_product_output`）

输出流应为产品特定流。仅对速溶或可溶咖啡使用已核验的 Instant Coffee 流；所有其他产品均需已核验的、更具体的天工流。

- 选定流：Instant Coffee / 速溶咖啡 `16ecdc48-3ef5-40b0-8a5d-56b3794a2ba4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定定量参考 1 kg 净可销售产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 多产出前景过程 | 首先通过过程细分、独立计量和物料平衡避免分配，包括分别核算回收香气、咖啡油、可回用冷凝水、内部循环细粉和可销售共产品。 | `iso-14044-2006`; `eu-pef-method-2021` |
| `allocation_physical_then_other` | 不可避免的共享负荷 | 无法细分时采用有记录的物理因果关系。若不存在可辩护的物理关系，则采用明确说明理由的替代方式（如经济分配），报告价格和参考期并开展敏感性分析。 | `iso-14044-2006`; `eu-pef-method-2021` |
| `allocation_internal_recycling` | 内部循环 | 对返回同一前景路线的回收香气、冷凝水、提取物或细粉，不得分配第二个产品产出或避免负荷；记录循环，仅计算跨越系统边界的补充输入和损失。 | `eu-pef-method-2021` |
| `allocation_waste_treatment` | 废咖啡渣、废水和包装废料 | 将处理负荷分配给前景产品直至申报的系统边界。除非下游方法和数据集范围明确要求且披露建模选择，否则不得计入替代或回收收益。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_lot_records` | `ingredient_preparation` | 主要和少量配料输入；制备进料；配制组分 | ERP 领料记录、秤单、批次表、库存核对 | material_id; supplier; lot_id; product_state; opening_stock; receipts; issues; returns; closing_stock; moisture_or_dry_matter; timestamp | 校准秤结合库存核对 | kg 和 kg/kg 干物质 | 每批或每生产批次，按月核对 | 有代表性的生产周期；年度数据集优先覆盖连续 12 个月 | 每个纳入的制造场址和产品配方 | 按物料汇总净消耗并除以合格参考产品产出；保持配料相互独立 | 秤校准、批次追溯、库存差异复核、配方批准 |
| `cp_utility_meter_records` | `aqueous_extraction` | 提取、浓缩和干燥的水、电力、燃料、蒸汽、制冷、压缩空气及其他公用工程 | 公用工程仪表、账单、锅炉日志、工程分配记录 | meter_id; carrier; opening_reading; closing_reading; unit; conversion_factor; process_area; production_period; allocation_key | 优先使用分表；否则从场址总量采用有记录的工程分配 | kg、m3、kWh 或 MJ | 连续或每批，按月核对 | 与产品产出相同的代表性时期；优先连续 12 个月 | 服务于纳入过程的所有设备和共享公用工程 | 使用有记录的因子换算，扣除经核验的输出或返还，使用因果运行数据分配共享总量并归一化至产出 | 仪表校准、账单核对、运行小时记录、换算因子来源 |
| `cp_product_mass_quality_records` | `packaging` | 提取物中间体和合格产品产出 | 批次质量记录、罐或料斗测量、实验室结果、放行记录 | batch_id; product_id; input_mass; output_mass; product_form; dry_matter; caffeine_status; recipe_version; drying_technology; release_status | 校准质量测量结合有代表性的实验室取样 | kg 和质量百分比 | 每批或每生产批次 | 代表性数据集期间的全部批次 | 每个纳入的产品和场址 | 仅汇总已放行产出；保留用于物料平衡的中间体质量和干物质配对值 | 秤校准、实验室方法、取样方案、放行授权 |
| `cp_waste_records` | `ingredient_preparation` | 配料不合格品、废固体、不合格产品和包装废料 | 废物秤、容器单、转移单、处理发票 | waste_id; material; wet_mass; dry_matter_if_relevant; destination; treatment; recovery_status; batch_or_period | 每次转移称重，或使用经定期称重核验的校准容器因子 | kg，相关时为 kg/kg 干物质 | 每次转移，按月核对 | 与产品产出相同的代表性时期 | 所有纳入过程和去向 | 按废物类型和去向汇总；仅在跨越边界前扣除有记录的内部返回 | 秤校准、转移文件、处理接收凭证、水分取样 |
| `cp_wastewater_records` | `aqueous_extraction` | 废水和冷凝水排放或回用 | 流量计、罐记录、排放许可取样、处理日志 | stream_id; volume_or_mass; density_if_used; COD_or_relevant_load; destination; reuse_quantity; period | 连续流量计或有记录的水平衡结合有代表性的取样 | kg、m3 和适用负荷单位 | 连续/每月，加许可规定取样频次 | 与产品产出相同的代表性时期，包括季节性清洗活动 | 所有纳入的废水和冷凝水流 | 区分排放、处理、蒸发、并入产品和内部回用；避免重复计算 | 仪表校准、平衡闭合、实验室报告、排放记录 |
| `cp_packaging_records` | `packaging` | 申报边界内的初级、次级和三级包装 | 材料清单、供应商规格、领用和废料记录 | component_id; material; unit_mass; units_used; recycled_content_if_claimed; scrap; pallet_cycles; product_format | 部件称重和经批准的材料清单，并与领用记录核对 | kg | 每个包装规格；领用按月核对 | 代表性数据集期间生产的全部包装规格 | 每个可销售规格和纳入场址 | 汇总部件消耗质量，扣除有记录且可复用的返回件；归一化至净产品质量 | 经批准规格、供应商声明、称重记录、库存核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景流 | 归一化数量 = 同期或同批流数量 / 净合格可销售产品质量 | flow_amount; net_saleable_product_mass | 每 1 kg 净可销售参考产品的数量 | `eu-pef-method-2021` |
| `calc_dry_matter` | 提取物和产品质量 | 干物质分数 = 干样质量 / 接收状态样品质量；保留实验室方法和取样基础 | dry_sample_mass; as_received_sample_mass | kg/kg 和质量百分比干物质 | `eu-coffee-extracts-directive-1999` |
| `calc_material_balance` | 每个过程和完整前景路线 | 物料平衡差 = 实测总输入质量 - 实测总输出质量 - 单独实测的蒸发或其他质量转移；相对于总输入报告差值 | input_masses; product_outputs; waste_outputs; wastewater; evaporation_or_transfer | kg 差值和闭合百分比 |  |
| `calc_shared_utility` | 共享公用工程系统 | 分配公用工程 = 共享计量总量 × 过程因果驱动量 / 所服务过程的同一驱动量之和；仅当运行时间能合理代表需求时才使用运行时间 | shared_utility_total; causal_driver_by_process | 分配至各过程的公用工程数量 | `eu-pef-method-2021` |
| `calc_packaging_mass` | 包装 | 包装质量 = 各部件单位质量 × 消耗数量之和 - 未跨越边界的经核验可复用返回部件 | component_unit_mass; units_consumed; reusable_returns | 每 kg 净产品的 kg 包装 |  |
| `calc_yield` | 提取、浓缩、干燥、配制和包装 | 过程收率 = 合格产出干质量 / 适用输入干质量；包装过程采用合格净产品质量 / 未包装输入质量 | input_mass_and_dry_matter; conforming_output_mass_and_dry_matter | 申报基础上的 kg/kg 过程收率 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和配料 | 保留产品特定身份、批次关联、产品形态、咖啡/菊苣/代用品基础、配方版本和经核验的天工流 UUID。非速溶产品不得使用 Instant Coffee UUID。 | 产品规格、批次放行记录、供应商记录和天工身份核验 |
| `dq_measurement` | 质量、公用工程、水、废物和质量检测 | 适用时使用经校准或法定检定的仪器；保留校准状态、读数单位、换算因子和实验室方法。 | 校准证书、仪表日志、实验室报告和换算记录 |
| `dq_temporal` | 前景年度或生产活动数据集 | 至少覆盖一个有代表性的生产周期；当季节性或产品生产活动影响公用工程或收率时，优先覆盖连续 12 个月；披露较短覆盖及其局限。 | 生产日历、月度核对和代表性评估 |
| `dq_completeness` | 前景系统 | 在每个纳入过程核对物料、水、能量、产品、废物和废水记录，并记录排除或未计量流。 | 完整性清单、物料和水平衡、公用工程核对 |
| `dq_representativeness` | 上游数据集和共享分配 | 记录地理、时间和技术匹配性、共享场址分配驱动因素，以及没有准确上游数据时采用的替代项。 | 数据集元数据、分配工作表、供应商地理信息、技术说明 |
| `dq_uncertainty` | 暂定范围和建模估算 | 所有 `reasoned_estimate` 范围仅作为 QA 筛查；发布前用前景实测或经评审的来源证据替换，否则披露未解决的局限。 | 范围复核记录、实测值、来源引文或明确的局限说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认 UUID `16ecdc48-3ef5-40b0-8a5d-56b3794a2ba4`、流名称 Instant Coffee / 速溶咖啡、流类型 Product flow、state code 100、Mass 属性 UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、质量单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg 参考单位。 |  |
| `validate_non_instant_flow` | 非速溶产品 | 若液态或膏状提取物、咖啡基制品、烘焙菊苣或其他代用品产品重新命名或复用 Instant Coffee UUID，则拒绝发布；应使用经核验的产品特定流。 |  |
| `validate_qualifiers` | 参考产品元数据 | 要求产品形态、咖啡/菊苣/代用品及配方基础、干物质、脱咖啡因状态、提取介质、适用的干燥技术、包装状态、地理范围和参考年份。 | `eu-coffee-extracts-directive-1999` |
| `validate_route` | 过程覆盖 | 要求两个必需过程，并对水提、浓缩、干燥和配制记录纳入/不适用决定；详细清单应与申报生产路线一致。 | `eu-pef-method-2021` |
| `validate_mass_balance` | 前景过程 | 要求提取、浓缩、干燥、配制和包装的批次或期间物料平衡计算；调查并披露物料不平衡，不得强行闭合。 | `iso-14044-2006`; `eu-pef-method-2021` |
| `validate_foreground_evidence` | 采集和计算行 | 要求每个 `collected_record` 或 `calculated_from_collection` 行引用已实施的采集协议，并保留所述质量证据。 | `eu-pef-method-2021` |
| `validate_allocation` | 多产出和共享过程 | 要求记录过程细分尝试、分配方法、总和为一的分配因子、来源期间；采用非物理基础时还需敏感性分析。 | `iso-14044-2006`; `eu-pef-method-2021` |
| `validate_estimate_status` | 推理估算范围 | 将每个 `reasoned_estimate` 标记为非权威 QA 校验范围；正常发布使用前应以实测或评审证据替换，否则明确披露局限。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 申报的咖啡提取物、浓缩物、速溶咖啡、咖啡基制品或咖啡代用品产品的前景厂门生产数据集 |
| downstream_use | `secondary_dataset`；当产品身份、路线、地理、技术和数据质量对复用具有充分代表性时可作为 `background_dataset` |
| allowed_use | 产品足迹、过程和生命周期模型研究，且产品形态和组成基础、制造路线、边界、地理、时期、包装状态和分配假设一致 |
| excluded_use | 未进行干物质和功能调整而在干燥、膏状、液态、制品、菊苣或其他代用品形态间直接替代；消费者饮品冲调；农业咖啡生产；非速溶产品使用 Instant Coffee UUID；未经适用评审的公开比较声明 |
| required_metadata | 产品特定流 UUID；产品名称和形态；咖啡/菊苣/代用品基础和配方份额；干物质；脱咖啡因状态；提取介质；干燥技术；净质量和包装质量基础；过程纳入决定；地理范围；参考年份；场址覆盖；分配方法；上游数据集版本 |
| required_quality_disclosure | 前景覆盖期和场址份额；仪表和秤质量；实验室方法；物料和水平衡闭合；缺失流评估；共享公用工程分配；上游代表性；暂定估算状态；排除项和局限 |
| update_trigger | 产品流身份、产品形态或配方、干物质规格、提取或干燥技术、场址或地理、包装规格、分配方法、重要供应商路线发生变化，或收率、能耗、用水、废物或废水绩效发生实质变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `eu-coffee-extracts-directive-1999` | 官方指南（`official_guidance`） | 欧洲议会和欧盟理事会，Directive 1999/4/EC relating to coffee extracts and chicory extracts，当前整合版本，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:31999L0004（检索日期 2026-08-11） | 产品定义；仅用水提取的定义；干燥、膏状和液态形态区分；干物质和组成限定信息 |
| `eu-pef-method-2021` | 官方指南（`official_guidance`） | 欧盟委员会，Recommendation (EU) 2021/2279，Annex I Product Environmental Footprint Method，http://data.europa.eu/eli/reco/2021/2279/oj（检索日期 2026-08-11） | 功能单位和参考流；系统边界；企业特定数据；数据质量；多功能性；校验和报告规则 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006，Environmental management — Life cycle assessment — Requirements and guidelines，包含已发布修订；官方记录 https://www.iso.org/standard/38498.html（2022 年确认现行；检索日期 2026-08-11） | LCA 清单一致性、分配层级、完整性、解释、报告和关键性评审基础 |
