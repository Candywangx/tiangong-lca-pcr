---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.other-headgear-except-headgear-of-rubber-or-of-plastics-safety-headgear-and-asbestos-he-6479f76c
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他帽类，不包括橡胶或塑料制成的帽类、安全帽类和石棉帽，帽圈、帽里、帽罩、帽衬底、帽托、帽舌及帽颈带

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 28269 明确涵盖的产品和零件的工厂门生产。它涵盖该子类中的一种已声明其他帽类成品，或已声明的帽圈、帽里、帽罩、帽衬底、帽托、帽舌或帽颈带。数据包必须识别确切制品或零件，不得用子类名称替代产品特定物料清单。

前景边界始于带有上游数据集的进厂材料和组件，止于制造工厂内 1 kg 净质量的合格产品。若由报告工厂实施，则材料准备、裁切、成形、连接或安装、蒸汽或热力定形、检验以及一级或二级包装均纳入。进厂投入的上游开采和生产、出厂配送、使用、维护及寿命终结不属于前景边界，但应酌情通过上游或下游数据集衔接。

橡胶或塑料帽类、安全帽类、石棉帽，以及归入相邻 CPC 28261 或 28262 的产品均排除。生产多种帽类产品的工厂必须针对已声明的 CPC 28269 产品报告产品特定物料清单、路线、公用工程、损耗、直接排放和包装。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.other-headgear-except-headgear-of-rubber-or-of-plastics-safety-headgear-and-asbestos-he-6479f76c |
| classification_refs | CPC 3.0：28269，exact |
| covered_products | CPC 28269 中的其他帽类，以及帽圈、帽里、帽罩、帽衬底、帽托、帽舌和帽颈带 |
| excluded_products | 橡胶或塑料帽类；安全帽类；石棉帽；CPC 28261 中的帽胎、帽坯、帽盔和帽壳；CPC 28262 中的毡制、编结、针织、钩编、花边或整幅纺织物帽类和发网；未转化为已声明 CPC 28269 产品而直接出售的上游材料 |
| representative_product | 一种已声明 CPC 28269 帽类成品或帽用零件在工厂端的产品特定生产混合 |
| production_route | 接收产品特定材料和组件；裁切或成形；连接或安装；按条件采用蒸汽、外购热或场内燃料进行定形；整理与检验；包装 |
| market_state | 制造工厂内的合格成品，产品净质量与包装质量分开报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一种符合 CPC 28269 的合格其他帽类成品或帽用零件 |
| How much | 1 kg 合格产品净质量，不含包装 |
| How well | 符合已声明的制品或零件规格、材料组成、尺寸或尺码、工艺质量和验收准则 |
| How long or cycle | 工厂门处一个完整生产批次；不表示使用阶段服务期限 |
| reference_flow_link | 参考数量是已声明前景路线产出的合格 CPC 28269 产品净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 其他帽类，不包括橡胶或塑料制成的帽类、安全帽类和石棉帽，帽圈、帽里、帽罩、帽衬底、帽托、帽舌及帽颈带 `0300f33f-f723-4c63-901f-6f0d58ebfbb7` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 确切制品或零件类型；CPC 28269 纳入说明；材料组成与质量分数；构造和连接路线；尺码或尺寸规格；产品净质量方法；成品和包装状态；制造地点；报告期；成形适用性；蒸汽适用性；外购热适用性；燃料适用性；胶黏剂适用性；用水适用性；受控冷却适用性；包装规格；产率处理；边角料处理；废品处理；返工处理 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有清单值归一化到 1 kg 合格产品净质量。一级和二级包装不计入参考产品质量，每种包装材料单独记录。 |
| `component_mass_conversion` | 按件、长度或面积记录的外购材料和组件 | 质量 | kg | 使用产品特定的实测单件质量、线密度、面密度或地磅记录换算为干基或接收状态质量。保留换算证据和含水率基准。 |
| `energy_carrier_separation` | 电力、外购蒸汽、外购热和燃料 | 按发票记录的能量或质量 | kWh、MJ 或 kg | 保留发票单位，使用有文件依据的因子换算，并将电力、外购蒸汽、外购热和每种燃料分别作为独立交换报告。不得合并为一个能源行。 |
| `water_mass_conversion` | 过程用水 | 质量 | kg | 使用实测密度换算计量体积；仅在有记录证明为接近环境条件的普通水时可用 1 kg/L。蒸汽与液态水分开。 |
| `mass_balance` | 制造批次 | 质量 | kg | 在相同批次和含水率基准上，将接收材料质量与产品、可回收共产品（如有）、分别识别的废物、库存变化以及实测或估算排放进行核对。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 产品特定材料和组件进入报告工厂时，具有供应商身份、质量、组成和上游数据集引用 |
| starting_condition_role | 上游生产由链接数据集表示；前景仅采集报告工厂运营控制范围内的转化与损耗 |
| product_classification_scope | 精确 CPC 3.0 子类 28269；相邻 CPC 28261、28262 产品以及明确排除的橡胶/塑料帽类、安全帽类和石棉帽在范围之外 |
| recursive_input_rule | 若一种 CPC 28269 产品被用于另一种 CPC 28269 产品，作为一个产品输入记录，并在采购点终止前景递归；该输入必须具有独立上游数据集 |
| upstream_dataset_requirement | 跨越边界的每种材料、组件、电力供应、蒸汽、外购热、燃料、水、包装材料和处理服务均须有上游数据集或明确披露的数据缺口 |
| disclosure | 声明产品形式、物料清单、路线、外包工序、分配、截断、包装、废品与返工、公用工程、直接排放、制冷剂、时间覆盖和场址覆盖 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 所有数据集 | 纳入所有产品特定材料和组件投入、场内制造工序、产品损耗、直接排放以及直到工厂门的包装。 | `eu-pef-2021-2279`; `ncci-hat-manufacturing-2014` |
| `boundary_route_specificity` | 路线选择 | 仅在已声明制品或零件实际发生时纳入裁切、成形、缝制、安装、蒸汽或热力定形、压制、修整、检验和包装；披露每项省略或外包工序。 | `ncci-hat-manufacturing-2014` |
| `boundary_atomic_bom` | 物料清单 | 将每种实际材料和组件作为各自独立的原子产品流记录。下列命名行是常见路线候选，不允许聚合未列出的材料。 | `eu-pef-2021-2279` |
| `boundary_upstream_linkage` | 进厂投入 | 不在前景中重建上游开采或材料生产。为每项进厂投入链接上游数据集，并报告供应商或代理局限。 | `eu-pef-2021-2279` |
| `boundary_complete_interventions` | 所有纳入过程 | 记录每个纳入过程相关的全部材料和能源投入、废物以及基本流排放；零值或不适用断言必须有路线证据。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_forming_assembly` | 组件准备、成形、连接、整理和检验 | `required` | 始终纳入；具体裁切、成形、连接、胶黏剂、用水、蒸汽、热和冷却流仍取决于已声明路线 | 前景制造 | 合格未包装产品的 kg |
| `onsite_thermal_supply` | 场内天然气供热 | `conditional` | 仅在场内燃烧天然气并为分配给产品的定形、压制、干燥或空间/过程供热时纳入 | 前景公用工程生产 | 输送的有效过程热 MJ |
| `product_packaging` | 产品包装 | `required` | 始终描述包装状态；仅在有记录证明工厂门产品未包装时，具体行才可标为不适用 | 前景包装 | 每 kg 净合格参考产品的包装 |

### 过程：组件准备、成形、连接、整理和检验（`component_forming_assembly`）

本过程表示将进厂材料和组件转化为合格未包装帽类或帽用零件的产品特定序列。路线必须声明哪些原子行适用，并对下文未列出的每种实际材料、组件、公用工程、废物或排放另建独立原子行。

#### 输入

##### 产品流

###### 用于帽里、帽罩或帽圈的机织棉布（`cotton_fabric_input`）

仅当机织棉布是已声明产品的实际材料时记录。

- 选定流：机织棉布
- 流属性/单位：质量 / kg
- 数量规则：供应商接收量经库存变化调整后分配给已声明生产批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`eu-pef-2021-2279`

###### 用于帽衬底或帽舌的纸板片材（`paperboard_sheet_input`）

仅当纸板片材被裁切或成形成已声明帽衬底、帽托组件或帽舌时记录。

- 选定流：纸板片材
- 流属性/单位：质量 / kg
- 数量规则：供应商接收量经库存变化调整后分配给已声明生产批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`eu-pef-2021-2279`

###### 用于帽托的低碳钢丝（`steel_wire_input`）

仅当低碳钢丝被成形为已声明帽托或加强件时记录。

- 选定流：低碳钢丝
- 流属性/单位：质量 / kg
- 数量规则：供应商接收量经库存变化调整后分配给已声明生产批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`eu-pef-2021-2279`

###### 用于帽圈或帽颈带的聚酯弹性织带（`polyester_webbing_input`）

仅当聚酯弹性织带被纳入已声明帽圈或帽颈带时记录。

- 选定流：聚酯弹性织带
- 流属性/单位：质量 / kg
- 数量规则：发出织带的实测或计算质量，分配给生产批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`eu-pef-2021-2279`

###### 聚酯缝纫线（`polyester_thread_input`）

在已声明产品通过缝制连接或整理时记录聚酯缝纫线。

- 选定流：聚酯缝纫线
- 流属性/单位：质量 / kg
- 数量规则：发出线轴质量减期末库存，分配给生产批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`ncci-hat-manufacturing-2014`; `eu-pef-2021-2279`

###### 不锈钢带扣（`stainless_steel_buckle_input`）

仅当不锈钢带扣安装到已声明帽圈或帽颈带时记录。

- 选定流：不锈钢带扣
- 流属性/单位：质量 / kg
- 数量规则：合格组件数量乘实测单件质量，再加记录的组件废品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_bom_materials`
- 来源：`eu-pef-2021-2279`

###### 水性聚氨酯胶黏剂（`waterborne_pu_adhesive_input`）

仅当装配或整理采用水性聚氨酯胶黏剂时记录。

- 选定流：水性聚氨酯胶黏剂
- 流属性/单位：质量 / kg
- 数量规则：发出容器质量减退回材料和期末库存，分配给生产批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`eu-pef-2021-2279`

###### 外购电力（`manufacturing_electricity_input`）

记录用于裁切、成形、缝制、压制、检验、通风和所分配厂务的计量外购电力。

- 选定流：外购电力
- 流属性/单位：能量 / kWh
- 数量规则：产品线或工厂电表读数按有文件依据的机器工时或其他因果驱动量分配给已声明批次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manufacturing_energy`
- 来源：`eu-pef-2021-2279`

###### 外购蒸汽（`purchased_steam_input`）

蒸汽用于定形、压帽、压烫或整理时，应将外购蒸汽单独记录。

- 选定流：外购蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：蒸汽表或发票数量按有文件依据的压力和焓值换算为输送能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manufacturing_energy`
- 来源：`ncci-hat-manufacturing-2014`; `eu-pef-2021-2279`

###### 外购过程热（`purchased_heat_input`）

在不以外购蒸汽形式输送热力时，单独记录外购热。

- 选定流：外购过程热
- 流属性/单位：能量 / MJ
- 数量规则：热量表或发票数量分配给已声明生产批次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manufacturing_energy`
- 来源：`eu-pef-2021-2279`

###### 过程用水（`process_water_input`）

液态过程水用于蒸汽调湿、清洗或已声明湿法成形步骤时，应单独记录。

- 选定流：过程用水
- 流属性/单位：质量 / kg
- 数量规则：分表读数或有文件依据的工厂水量平衡分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_water`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已声明的合格未包装 CPC 28269 产品（`unpackaged_product_output`）

已声明制品或零件在最终制造检验后、包装前称量。

- 选定流：已声明的合格未包装 CPC 28269 产品
- 流属性/单位：质量 / kg
- 数量规则：实测合格产品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每制造批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_reject_mass`
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 棉布裁切边角料（`cotton_fabric_offcut_waste`）

清洁和受污染的棉布边角料应与其他材料废物分开记录。

- 选定流：棉布裁切边角料
- 流属性/单位：质量 / kg
- 数量规则：实测外运废物质量加期末积存量减期初积存量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manufacturing_waste`
- 来源：`bhuiyan-2023-apparel-cutting-waste`

###### 纸板裁切边角料（`paperboard_offcut_waste`）

裁切或成形纸板帽衬底或帽舌时，纸板边角料应单独记录。

- 选定流：纸板裁切边角料
- 流属性/单位：质量 / kg
- 数量规则：实测外运废物质量加期末积存量减期初积存量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manufacturing_waste`
- 来源：`eu-pef-2021-2279`

###### 低碳钢丝边角料（`steel_wire_offcut_waste`）

成形帽托或加强件时，低碳钢丝边角料应单独记录。

- 选定流：低碳钢丝边角料
- 流属性/单位：质量 / kg
- 数量规则：实测外运废物质量加期末积存量减期初积存量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manufacturing_waste`
- 来源：`eu-pef-2021-2279`

###### 聚酯弹性织带边角料（`polyester_webbing_offcut_waste`）

聚酯弹性织带边角料应与棉布及其他纺织废物分开记录。

- 选定流：聚酯弹性织带边角料
- 流属性/单位：质量 / kg
- 数量规则：实测外运废物质量加期末积存量减期初积存量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manufacturing_waste`
- 来源：`bhuiyan-2023-apparel-cutting-waste`

###### 不合格的已声明 CPC 28269 产品（`rejected_product_waste`）

不合格成品应与材料边角料分开记录，并披露其返工、回收利用或处置方式。

- 选定流：不合格的已声明 CPC 28269 产品
- 流属性/单位：质量 / kg
- 数量规则：离开返工闭环的不合格产品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_reject_mass`
- 来源：`bhuiyan-2023-apparel-cutting-waste`; `eu-pef-2021-2279`

###### 制造废水（`manufacturing_wastewater_output`）

仅在已声明路线排放液态水或蒸汽冷凝水时记录废水。

- 选定流：制造废水
- 流属性/单位：质量 / kg
- 数量规则：排水表读数或有文件依据的场址水量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_water`
- 来源：`eu-pef-2021-2279`

##### 基本流

###### 排放至空气的非甲烷挥发性有机物（`nmvoc_to_air`）

胶黏剂、涂层、油墨或清洗剂记录与排放控制证明存在适用源时，记录排放至空气的非甲烷挥发性有机物。

- 选定流：排放至空气的非甲烷挥发性有机物
- 流属性/单位：质量 / kg
- 数量规则：产品特定物料平衡，或实测排放乘运行时间并扣除有记录的捕集量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-pef-2021-2279`

###### 排放至空气的 R-410A 制冷剂（`r410a_to_air`）

仅对含 R-410A 的设备记录本行。每种其他制冷剂必须以其化学特定名称另建独立行。

- 选定流：排放至空气的 R-410A 制冷剂
- 流属性/单位：质量 / kg
- 数量规则：期初充注量加补充量减回收量和期末充注量，再分配给已声明生产批次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`eu-pef-2021-2279`

### 过程：场内天然气供热（`onsite_thermal_supply`）

仅在场内燃烧天然气时纳入本过程。不得将同一有效热量同时记录为外购热或外购蒸汽。

#### 输入

##### 产品流

###### 天然气（`natural_gas_input`）

记录服务于已声明路线的锅炉、加热器、干燥机或压机消耗的天然气。

- 选定流：天然气
- 流属性/单位：能量 / MJ
- 数量规则：燃料表或发票数量按有文件依据的低位或高位热值换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_fuel`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 有效过程热（`useful_process_heat_output`）

记录输送到制造过程的有效热量，不赋予外部产品抵扣。

- 选定流：有效过程热
- 流属性/单位：能量 / MJ
- 数量规则：实测输送热量，或燃料投入乘有文件依据的锅炉效率
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_fuel`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

###### 排放至空气的化石二氧化碳（`fossil_co2_to_air`）

由场址特定天然气记录和有文件依据的燃料碳因子或排放因子计算化石二氧化碳直接排放。

- 选定流：排放至空气的化石二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：天然气数量乘有文件依据的场址、供应商或辖区排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_fuel`
- 来源：`eu-pef-2021-2279`

###### 排放至空气的氮氧化物（`nox_to_air`）

由烟气实测值或有文件依据的源特定因子计算氮氧化物直接排放。

- 选定流：排放至空气的氮氧化物
- 流属性/单位：质量 / kg
- 数量规则：烟气实测质量，或天然气数量乘有文件依据的 NOx 因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未包装产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_fuel`
- 来源：`eu-pef-2021-2279`

### 过程：产品包装（`product_packaging`）

按照已声明工厂门状态包装合格产品。一级和二级包装不计入参考产品净质量。

#### 输入

##### 产品流

###### 已声明的合格未包装 CPC 28269 产品（`unpackaged_product_input`）

将制造过程的合格未包装产品转移到包装过程，不在前景质量平衡中重复增加其质量。

- 选定流：已声明的合格未包装 CPC 28269 产品
- 流属性/单位：质量 / kg
- 数量规则：转移到包装的合格产品实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每包装批次
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_reject_mass`
- 来源：`eu-pef-2021-2279`

###### 瓦楞纸板箱（`corrugated_carton_input`）

瓦楞纸板箱应与塑料薄膜和其他包装分开记录。

- 选定流：瓦楞纸板箱
- 流属性/单位：质量 / kg
- 数量规则：纸箱数量乘实测单件质量，并按包装废品调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：`eu-pef-2021-2279`

###### 低密度聚乙烯包装薄膜（`ldpe_film_input`）

用作袋、包裹膜或内衬时，单独记录低密度聚乙烯薄膜。

- 选定流：低密度聚乙烯包装薄膜
- 流属性/单位：质量 / kg
- 数量规则：薄膜件数或长度乘实测单件质量，并按包装废品调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：`eu-pef-2021-2279`

###### 包装用电力（`packaging_electricity_input`）

若单独计量，包装设备用电应与制造用电分开记录；否则只分配一次并披露边界。

- 选定流：外购电力
- 流属性/单位：能量 / kWh
- 数量规则：包装线电表读数或有文件依据的机器工时分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manufacturing_energy`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已包装参考产品（`reference_product_output`）

流数量是合格产品净质量；包装质量不计入参考数量。

- 选定流：其他帽类，不包括橡胶或塑料制成的帽类、安全帽类和石棉帽，帽圈、帽里、帽罩、帽衬底、帽托、帽舌及帽颈带 `0300f33f-f723-4c63-901f-6f0d58ebfbb7`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰为 1 kg 净合格产品；包装作为单独投入质量报告
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：

##### 废物流

###### 瓦楞纸板包装废料（`corrugated_packaging_scrap`）

损坏纸箱和纸箱裁切废料应与制造过程纸板边角料分开记录。

- 选定流：瓦楞纸板包装废料
- 流属性/单位：质量 / kg
- 数量规则：分配给包装批次的包装废料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：`eu-pef-2021-2279`

###### 低密度聚乙烯包装薄膜废料（`ldpe_packaging_scrap`）

不合格或裁切的 LDPE 包装薄膜应与纸板废料分开记录。

- 选定流：低密度聚乙烯包装薄膜废料
- 流属性/单位：质量 / kg
- 数量规则：分配给包装批次的包装废料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：`eu-pef-2021-2279`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共享生产线和公用工程 | 优先使用产品特定电表、生产订单、机器工时、领料和废物记录对清单进行细分。 | `eu-pef-2021-2279` |
| `allocation_physical_relationship` | 剩余共享投入和产出 | 无法细分时，按机器工时、输送热量或产品净质量等有文件依据的因果物理关系分配。不得仅因收入数据可得就采用收入分配。 | `eu-pef-2021-2279` |
| `allocation_rework` | 内部返工 | 将返工使用的材料和能源保留在已声明产品清单中；仅将离开返工闭环的废品计作废物。 | `eu-pef-2021-2279` |
| `allocation_scrap_and_recycling` | 出售或回收的废料 | 按实测质量记录每项废料流。除非另行声明适用的下游回收模型，不得从工厂门清单中减去废料收入或避免产品抵扣。 | `eu-pef-2021-2279`; `bhuiyan-2023-apparel-cutting-waste` |
| `allocation_disclosure` | 所有分配 | 报告共享过程、分配驱动量、分子、分母、期间，以及分配对结果有实质影响时的敏感性。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `component_forming_assembly` | 原子材料和组件投入 | 采购、领用、库存和规格记录 | 材料身份；组成；供应商；期初和期末库存；领用量；单件质量或换算因子；批次 | 将采购和仓储记录核对到产品订单 | kg | 每生产批次并按月汇总 | 代表性的连续 12 个月或完整的较短生产活动 | 生产已声明产品的所有生产线 | 投入 = 领用量 + 所分配库存变化；按合格产品净质量归一化 | 发票；领料单；称量单件样品；规格；库存核对 |
| `cp_manufacturing_energy` | `component_forming_assembly`; `product_packaging` | 外购电力、蒸汽和热 | 电表、发票、机器工时、压力和温度记录 | 载能体；电表起止读数；输送单位；压力；温度；机器工时；分配驱动量 | 优先读取分表；否则核对发票并按因果关系分配 | kWh 或 MJ | 每月和每次生产活动 | 与生产数据相同期间 | 所有纳入制造和包装作业 | 各载能体分开；过程表和工厂总表不得重复计数 | 经校准电表记录；发票；分配工作表 |
| `cp_process_water` | `component_forming_assembly` | 过程用水和废水 | 进水和排水表或平衡记录 | 进水量；排水量；密度；蒸汽冷凝水；库存变化 | 读取水表或构建有文件依据的场址水量平衡 | kg | 每月和每次湿法生产活动 | 与生产数据相同期间 | 所有纳入的湿法、蒸汽、清洗和排放点 | 进水和排水分别按合格产品净质量归一化 | 水表校准；水费单；平衡闭合 |
| `cp_manufacturing_waste` | `component_forming_assembly` | 每项原子边角料废物 | 分类废物箱和外运记录 | 材料身份；箱体质量；污染；去向；期初和期末积存 | 在内部再用或外运前称量每项废物流 | kg | 每批次或每次废物清运 | 与生产数据相同期间 | 所有裁切、成形和修整作业 | 期初积存 + 产生量 - 期末积存；按产品订单或因果驱动量分配 | 地磅校准；废物转移联单；分类检查 |
| `cp_product_and_reject_mass` | `component_forming_assembly`; `product_packaging` | 合格产品和不合格产品 | 秤重、检验和返工记录 | 毛重；皮重；合格净质量；不合格质量；返工回流；制品或零件身份 | 检验后称量合格和不合格产出 | kg | 每批次 | 每个纳入生产批次 | 最终检验和包装 | 合格净质量为分母；排除包装和废品 | 秤具校准；检验放行；返工记录 |
| `cp_direct_emissions` | `component_forming_assembly` | 排放至空气的 NMVOC | 材料安全数据、挥发分、捕集和烟气记录 | 材料投入；挥发分；留存分数；回收质量；实测浓度；流量和时间 | 优先采用实测释放量；否则闭合产品特定物料平衡 | kg | 每次生产活动，适用时每年烟气测试 | 与生产数据相同期间 | 所有胶黏剂、涂层、油墨和清洗剂排放点 | 排放质量 = 挥发性投入 - 留存 - 回收 - 捕集 | 供应商组成；烟气报告；控制装置记录 |
| `cp_refrigerant_balance` | `component_forming_assembly` | 每种化学特定制冷剂排放至空气 | 设备充注和维护记录 | 制冷剂身份；期初充注；补充；回收量；期末充注；设备分配 | 对每种制冷剂分别进行质量平衡 | kg | 每次维护并按年 | 与生产数据相同期间 | 服务于纳入作业的冷却设备 | 损失 = 期初 + 补充 - 回收 - 期末；按因果冷却服务分配 | 维护发票；充注记录；检漏测试 |
| `cp_onsite_fuel` | `onsite_thermal_supply` | 天然气、有效热、化石 CO2 和 NOx | 燃料表、热值、效率、烟气和因子记录 | 燃料体积或质量；热值基准；输送热量；锅炉效率；排放因子；烟气结果 | 核对燃料表和锅炉运行记录 | MJ 和 kg | 每月 | 与生产数据相同期间 | 服务于纳入作业的锅炉或加热器 | 分别计算有效热和每项排放；避免重复计入外购热 | 电表校准；燃料发票；因子来源；烟气测试 |
| `cp_packaging_materials` | `product_packaging` | 每种包装材料和废料 | 包装规格、领用、计数、单件质量和废料记录 | 包装身份；数量；实测单件质量；领用量；废品；废料 | 称量代表性包装单元并核对领用量 | kg | 每项包装规格和批次 | 与生产数据相同期间 | 已声明产品的所有包装工位 | 每种包装材料及其废料分别按产品净质量归一化 | 包装规格；秤重记录；领用和废料记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_input` | 每种材料或组件 | （领用质量 + 分配的库存减少量 - 退回未用质量）/ 合格产品净质量 | 领用、退回、库存和合格产品记录 | kg 投入/kg 参考产品 | `eu-pef-2021-2279` |
| `calc_count_to_mass` | 带扣和包装件 | 合格或领用件数 × 实测代表性单件质量 / 合格产品净质量 | 件数、抽样计划、单件质量、合格产品质量 | kg 投入/kg 参考产品 | `eu-pef-2021-2279` |
| `calc_energy_intensity` | 每项电力、蒸汽、热或燃料行 | 可归因载能体数量 / 合格产品净质量，并保留载能体身份 | 电表或发票、分配驱动量、合格产品质量 | kWh 或 MJ/kg 参考产品 | `eu-pef-2021-2279` |
| `calc_waste_intensity` | 每项废物流 | （期初积存 + 产生或外运质量 - 期末积存）/ 合格产品净质量 | 废物箱、外运、积存和产品记录 | kg 废物/kg 参考产品 | `bhuiyan-2023-apparel-cutting-waste`; `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | 每种制冷剂 | （期初充注 + 补充 - 回收 - 期末充注）× 分配份额 / 合格产品净质量 | 充注和维护记录、分配份额、产品质量 | kg 制冷剂排放至空气/kg 参考产品 | `eu-pef-2021-2279` |
| `calc_fuel_emission` | 每项直接燃烧排放 | 燃料数量 × 有文件依据的源特定排放因子 / 合格产品净质量 | 燃料记录、因子身份与基准、产品质量 | kg 排放/kg 参考产品 | `eu-pef-2021-2279` |
| `calc_mass_balance_closure` | 制造批次 | 接收投入质量 = 合格产品 + 废品 + 每项废物 + 实测或估算排放 + 期末库存增加 - 期初库存增加 | 所有材料、产品、废物、排放和库存记录 | 质量平衡差和闭合百分比 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 产品说明和订单必须证明纳入 CPC 28269，并识别确切制品或零件、组成、尺码或尺寸和路线。 | 产品规格；订单；分类审查 |
| `dq_bom_completeness` | 材料和组件投入 | 产品特定物料清单必须与领料记录核对；每种实际材料和组件均须有独立原子行。 | 批准的 BoM；领料单；库存核对 |
| `dq_route_completeness` | 过程图 | 已声明路线必须说明裁切、成形、连接、胶黏剂使用、蒸汽、外购热、场内燃料、用水、受控冷却和包装是否适用。 | 过程图；作业指导书；设备清单 |
| `dq_temporal_representativeness` | 所有前景数据 | 连续生产优先采用代表性的连续 12 个月；较短生产采用完整生产活动；披露季节性和异常停机。 | 生产日历；计量期间；生产活动记录 |
| `dq_meter_and_scale_control` | 质量、水、能源和排放 | 保留校准或核查状态；无法直接计量时量化分配。 | 校准证书；计量器具台账；分配工作表 |
| `dq_waste_destination` | 每项废物流 | 记录材料身份、污染、质量和实际处理方式或接收方；不得合并纺织品、金属、纸板、塑料、废水或不合格产品。 | 转移联单；回收方收据；废物台账 |
| `dq_range_use` | 所有临时范围 | 宽泛 `reasoned_estimate` 范围仅可用于筛查，不得替代前景值。以经验范围替换时，须有至少两项独立、边界可比的原始来源或经审查的多期前景数据集。 | 范围审查记录；原始来源；前景数据集 |
| `dq_source_traceability` | 因子和上游数据集 | 保留来源身份、版本、地理、技术、时间覆盖和任何代理理由。 | 数据集元数据；因子文件；供应商声明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope_identity` | 产品身份 | 产品不能证明归入 CPC 28269，或属于橡胶/塑料帽类、安全帽类、石棉帽或相邻 CPC 28261/28262 产品时失败。 | `unsd-cpc-3-explanatory-notes-2025` |
| `validate_reference_flow` | 参考流 | 必须恰为 1 kg 净合格产品，并使用已声明 Tiangong 产品流、质量属性、质量单位组和 kg 参考单位。 | `unsd-cpc-3-explanatory-notes-2025` |
| `validate_required_qualifiers` | 数据包元数据 | 任一必需限定信息、产品特定 BoM、路线或包装状态缺失时失败。 | `eu-pef-2021-2279` |
| `validate_atomic_inventory` | 每个清单行 | 任何复数集合、合并载能体、未指明包装组、合并废物组或制冷剂选择器均失败。每个选定流必须是一种材料、载能体、废物或基本流排放。 | `eu-pef-2021-2279` |
| `validate_energy_separation` | 公用工程 | 外购电力、外购蒸汽、外购热、天然气及每种其他实际燃料必须分行；拒绝场内有效热与外购热重复计数。 | `eu-pef-2021-2279` |
| `validate_material_balance` | 制造批次 | 必须有质量平衡计算及残差解释；包装不得计入参考产品质量。 | `eu-pef-2021-2279` |
| `validate_waste_separation` | 废物 | 每项实际边角料、包装废料、废水和不合格产品流须单独识别并链接去向。 | `bhuiyan-2023-apparel-cutting-waste`; `eu-pef-2021-2279` |
| `validate_direct_emissions` | 直接排放 | 每项适用燃烧排放、NMVOC 释放、颗粒物释放和制冷剂必须有化学或物理特定的独立行。零值断言须有设备、材料或监测证据。 | `eu-pef-2021-2279` |
| `validate_allocation` | 共享过程 | 必须有细分证据或因果物理分配驱动量，并完整披露分配期间和分母。 | `eu-pef-2021-2279` |
| `validate_provisional_ranges` | 数量范围 | 拒绝下限等于上限的经验范围，并拒绝由少于两项独立且边界可比原始来源推断的来源支持经验范围。宽泛无来源范围必须保持 `reasoned_estimate` 标签。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 由经审查前景记录形成的产品特定工厂门 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 对已声明 CPC 28269 帽类制品或帽用零件的制造进行建模，并衔接下游配送、装配、使用或寿命终结模型 |
| allowed_use | 用于已声明制品或零件、组成、路线、场址、地理、技术和报告期，并保留包装和分配披露 |
| excluded_use | 不得用于橡胶/塑料帽类、安全帽类、石棉帽、CPC 28261/28262 产品、物料清单或路线有实质差异的产品，或未经额外审查的比较声明 |
| required_metadata | PCR id；CPC 代码；Tiangong 参考流 UUID；确切产品类型；BoM；尺寸或尺码；净质量；路线；场址与地理；期间；公用工程；燃料和制冷剂适用性；包装；分配；上游数据集版本；废物去向 |
| required_quality_disclosure | 计量器具和秤具质量；抽样和换算；质量平衡闭合；数据覆盖；代理数据集；分配份额；外包工序；异常生产；未解决的清单 UUID；临时范围使用 |
| update_trigger | 产品范围、BoM、组件供应商、成形或连接路线、蒸汽/热/燃料系统、制冷剂、包装、场址、分配、废物处理变化，或实测强度发生实质变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-explanatory-notes-2025` | 官方指南（`official_guidance`） | 联合国统计司，*CPC Ver. 3.0 Explanatory Notes*，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-20） | 精确 CPC 28269 类别身份与排除项 |
| `ncci-hat-manufacturing-2014` | 手册（`handbook`） | National Council on Compensation Insurance，Item B-1428，*Revisions to Basic Manual Classifications and Appendix E—Classifications by Hazard Group*，帽类制造说明，2014，https://www.mwcia.org/Media/Default/PDF/NewsFeed/Circulars/15-1672.pdf（检索于 2026-08-20） | 目标特定过程分解：接收材料和零件、裁切、缝制、蒸汽、压帽或压制、修整、检验和包装 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | 欧盟委员会，Commission Recommendation (EU) 2021/2279，Annex I Product Environmental Footprint Method，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索于 2026-08-20） | 产品特定 BoM 和制造数据、清单完整性、企业特定采集、分配层级、包装、数据质量和校验 |
| `bhuiyan-2023-apparel-cutting-waste` | 文献（`literature`） | Bhuiyan, M. A. R. 等，“Recycling of cotton apparel waste and its utilization as a thermal insulation layer in high performance clothing,” *Fashion and Textiles* 10, 22 (2023)，https://doi.org/10.1186/s40691-023-00342-y（全文检索于 2026-08-20） | 分别识别裁剪和缝制废物、不合格织物及其他消费前服装废物；未复制任何定量范围 |
