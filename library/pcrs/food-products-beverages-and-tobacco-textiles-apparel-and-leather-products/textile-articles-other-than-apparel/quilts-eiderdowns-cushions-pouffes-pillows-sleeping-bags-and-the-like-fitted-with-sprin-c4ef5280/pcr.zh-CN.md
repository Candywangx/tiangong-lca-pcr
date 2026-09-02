---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.quilts-eiderdowns-cushions-pouffes-pillows-sleeping-bags-and-the-like-fitted-with-sprin-c4ef5280
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 装有弹簧、填充或内部装有任何材料，或由泡沫橡胶或塑料制成的被子、羽绒被、坐垫、软墩、枕头、睡袋及类似制品

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 27180 制品的工厂门前景生产，包括被子、羽绒被、坐垫、软墩、枕头、睡袋及装有弹簧、填充、内部装有材料或由泡沫橡胶或塑料制成的类似制品。数据必须对应已声明的产品族和物料清单，不得以未披露的方式将所有制品类型平均。

前景边界从生产场址接收外购且可直接投产的面料、填充物、泡沫或弹簧芯、缝纫部件、工艺化学品和包装开始，纳入裁剪、缝制、填充或芯体装配、绗缝或封口、条件适用时的场内湿整理与干燥、检验、返工、贴标和包装。外购物料的上游制造由相连的上游数据集表示。默认工厂门边界不含配送、使用期洗涤和终端处置。

床垫、软体家具、无填充床上用品、服装、原始纺织纤维、作为产品出售的散装填充物、面料和独立包装不在范围内。研究若扩展到工厂门以外，必须单独声明并建模新增阶段。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.quilts-eiderdowns-cushions-pouffes-pillows-sleeping-bags-and-the-like-fitted-with-sprin-c4ef5280 |
| classification_refs | CPC 3.0:27180 |
| covered_products | 被子；羽绒被；坐垫；软墩；枕头；睡袋；CPC 27180 内其他装有弹簧、填充、内部装有材料或泡沫橡胶/塑料制品 |
| excluded_products | 床垫；软体家具；无填充床上用品；服装；原始纤维；散装填充物；面料；独立包装；CPC 27180 以外产品 |
| representative_product | 声明产品族、尺寸、净质量、面层结构、填充物或芯体结构及包装状态的 CPC 27180 成品 |
| production_route | 接收可直接投产的材料；裁剪与缝制；填充、芯体装配、绗缝和封口；条件适用时的湿整理与干燥；检验、返工、贴标和包装 |
| market_state | 工厂门已制造成品；包装质量与 1 kg 产品净质量参考流分开报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂门提供声明 CPC 27180 制品族的缓冲、保温、支撑或睡眠功能 |
| How much | 1 kg 合格成品净质量，不含包装 |
| How well | 声明产品族、尺寸、面层材料与结构、填充物或芯体材料与含量、相关性能等级、随附部件和质量检验状态 |
| How long or cycle | 一个制造批次和一次工厂门交付；仅在增加下游使用阶段模型时声明使用寿命 |
| reference_flow_link | 参考流是实现所述功能及限定信息所需的合格成品精确质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 装有弹簧或内填各种材料或由泡沫橡胶或塑料制成的被、鸭绒被、垫子、大靠垫、枕头、睡袋及类似用品 `f646f2c3-aead-4a65-8904-8894b67221f8` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | product_family; intended_function; dimensions; net_product_mass; shell_material_and_construction; filling_or_core_material; filling_or_core_content; spring_construction_if_present; closure_and_accessory_configuration; finish_or_treatment; performance_grade; recycled_or_biogenic_content_claim; production_site; production_geography; production_period; packaging_inclusion; factory_gate_boundary |

构建前景数据包时，`必需限定信息` 中的每项信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少任何适用限定信息的数据集，其参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及所有带质量的材料流和废物流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将清单归一化为恰好 1 kg 合格成品净质量；包装不计入产品质量，并保留归一化前的报告期总量。 |
| `bom_mass_basis` | 面层、填充物、泡沫、弹簧、缝纫部件和胶黏剂投入 | Mass | kg | 记录声明批次的领用量与退库量，并由前景记录计算净耗用量；不得由 AI 估计材料占比。 |
| `packaging_separation` | 包装投入和废物 | Mass | kg | 分别测量每个包装组件，并在产品净质量之外报告。 |
| `electricity_record` | 裁剪、缝制、填充、整理、干燥、检验和包装用电 | Energy | kWh | 归一化前保留电表或发票值以及电力供应身份。 |
| `fuel_record` | 场内天然气使用 | Net calorific value | MJ | 保留计量或发票数量、换算基准及所用供应商/场址低位热值。 |
| `water_record` | 场内湿整理和漂洗 | Volume | m3 | 使用进水计量值，并单独保留实测回用或循环水量。 |
| `wastewater_record` | 纺织整理废水 | Volume | m3 | 使用实测排放体积，并保留采样位置、排放路线和处理边界。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_direct_operations` | 前景制造 | 纳入声明产品所使用的全部场内材料接收、裁剪、缝制、填充或芯体装配、绗缝或封口、条件适用时的湿整理和干燥、检验、返工、贴标及包装作业。 | `epa-textile-sector-notebook-1997`; `uk-resource-efficiency-textiles-2024` |
| `sb_purchased_inputs` | 外购物料和公用工程 | 将每种外购物料和公用工程保持为单独产品投入，并关联地域与技术适宜的上游数据集。 | `eu-pef-2021`; `iso-14044-2006` |
| `sb_direct_outputs` | 前景废物和排放 | 分别记录场内产生的每种边角料、填充损失、泡沫废料、金属废料、废水、污泥及相关直接大气排放；场外处理去向关联为下游数据集。 | `eu-textiles-bat-2022` |
| `sb_recursive_category` | 同类别产品投入 | 将作为投入的外购 CPC 27180 制品保留为单独产品投入并要求其上游数据集；不得在本前景数据包内递归重建其制造。 | `eu-pef-2021` |
| `sb_default_exclusions` | 配送、使用和终端处置 | 默认工厂门数据包不含配送、消费者或机构使用、使用期洗涤及终端处置；扩展研究必须将其识别并建模为新增阶段。 | `iso-14040-2006`; `eu-pef-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在制造场址接收外购且可直接投产的面层材料、填充物或芯材、缝纫部件、工艺化学品和包装 |
| starting_condition_role | 前景工厂门起点；上游原料开采和外购物料制造由上游数据集表示 |
| product_classification_scope | CPC 3.0 子类 27180 内一个已声明产品族 |
| recursive_input_rule | 外购 CPC 27180 制品保持为具有独立上游数据集的显式原子产品投入，不在本数据包中递归展开 |
| upstream_dataset_requirement | 发布前，每个外购产品和公用工程投入都必须有身份匹配的上游数据集，或有已披露且合理说明的代理 |
| disclosure | 声明产品族、BOM、材料等级、生产路线、场址、地域、期间、所含场内处理、包装边界、排除项、代理、截断和分配决策 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `article_fabrication` | 制品制作与装配 | `required` | 声明产品路线始终纳入 | 前景裁剪、缝制、填充或芯体装配、绗缝和封口 | 离开制作工序的未包装合格制品净质量（kg） |
| `wet_finishing_drying` | 湿整理与干燥 | `conditional` | 仅在场内实施洗涤、漂洗、化学湿整理或干燥时纳入 | 前景湿处理及相关水、能源、废水和直接排放 | 离开湿处理路线的制品净质量（kg） |
| `inspection_packaging` | 检验与包装 | `required` | 始终纳入；仅有文件证明无包装交付时包装量可为零 | 前景检验、返工、贴标和包装 | 工厂门 1 kg 合格成品净质量 |

### 过程：制品制作与装配（`article_fabrication`）

#### 输入

##### 产品流

###### 棉面层织物（`cotton_shell_fabric_in`）

当机织棉布被裁剪或缝制为声明制品面层时记录本行。

- 选定流：Woven cotton fabric
- 流属性/单位：Mass / kg
- 数量规则：批次称量领用量减去有记录的退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`
- 来源：`epa-textile-sector-notebook-1997`; `uk-resource-efficiency-textiles-2024`

###### 聚酯面层织物（`polyester_shell_fabric_in`）

当机织聚酯布被裁剪或缝制为声明制品面层时记录本行。

- 选定流：Woven polyester fabric
- 流属性/单位：Mass / kg
- 数量规则：批次称量领用量减去有记录的退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`
- 来源：`epa-textile-sector-notebook-1997`; `uk-resource-efficiency-textiles-2024`

###### 聚酰胺 6 面层织物（`nylon_shell_fabric_in`）

当机织聚酰胺 6 布作为声明制品面层时记录本行。

- 选定流：Woven polyamide 6 fabric
- 流属性/单位：Mass / kg
- 数量规则：批次称量领用量减去有记录的退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`
- 来源：`uk-resource-efficiency-textiles-2024`

###### 聚酯填充物（`polyester_fill_in`）

记录计量或称量加入声明制品的聚酯短纤维填充物。

- 选定流：Polyester staple fibre filling
- 流属性/单位：Mass / kg
- 数量规则：加入批次的称量填充量减去回收的洁净退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`
- 来源：`uk-resource-efficiency-textiles-2024`

###### 鸭绒羽混合填充物（`duck_down_fill_in`）

当清洁鸭绒羽混合填充物加入声明制品时记录本行。

- 选定流：Cleaned duck down-and-feather filling
- 流属性/单位：Mass / kg
- 数量规则：加入批次的称量填充量减去回收的洁净退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`
- 来源：`un-cpc-3-27180`

###### 软质聚氨酯泡沫芯（`pu_foam_core_in`）

记录作为芯体或填充物裁切或装入的软质泡沫聚氨酯。

- 选定流：Flexible cellular polyurethane foam
- 流属性/单位：Mass / kg
- 数量规则：批次泡沫称量领用量减去可用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`
- 来源：`un-cpc-3-27180`

###### 泡沫天然橡胶芯（`natural_rubber_foam_core_in`）

记录作为芯体或填充物裁切或装入的泡沫天然橡胶。

- 选定流：Cellular natural rubber foam
- 流属性/单位：Mass / kg
- 数量规则：批次泡沫称量领用量减去可用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`
- 来源：`un-cpc-3-27180`

###### 钢制弹簧单元（`steel_spring_unit_in`）

记录装入声明制品的已组装钢制弹簧单元。

- 选定流：Assembled steel spring unit
- 流属性/单位：Mass / kg
- 数量规则：合格批次耗用弹簧单元的称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`
- 来源：`un-cpc-3-27180`

###### 聚酯缝纫线（`polyester_thread_in`）

记录用于面层构造、绗缝和封口的聚酯缝纫线。

- 选定流：聚酯缝纫线
- 流属性/单位：Mass / kg
- 数量规则：由线轴领用和退料记录得到的批次净用线量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`
- 来源：`epa-textile-sector-notebook-1997`

###### 聚酯盘牙拉链（`polyester_zipper_in`）

当完整聚酯盘牙拉链保留在成品中时记录本行。

- 选定流：Polyester-coil zipper
- 流属性/单位：Mass / kg
- 数量规则：批次耗用合格拉链的称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`
- 来源：`uk-resource-efficiency-textiles-2024`

###### 水性聚氨酯胶黏剂（`waterborne_pu_adhesive_in`）

仅当路线使用该胶黏剂粘接泡沫、面层或内部部件时，记录配制的水性聚氨酯胶黏剂。

- 选定流：Waterborne polyurethane adhesive
- 流属性/单位：Mass / kg
- 数量规则：批次胶黏剂的称量或采购核销量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`
- 来源：`eu-textiles-bat-2022`

###### 制作工序用电（`electricity_fabrication_in`）

记录裁剪、缝制、填充、绗缝、封口和局部抽风设备使用的低压电力。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：批次专用电表读数，或按合格产出归一化的报告期分表值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_energy`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未包装制品（`unpackaged_article_out`）

记录转入湿整理或终检的合格未包装制品。

- 选定流：Stuffed bedding article, unpackaged
- 流属性/单位：Mass / kg
- 数量规则：合格未包装产出的称量净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_output_waste`
- 来源：`un-cpc-3-27180`

##### 废物流

###### 棉布裁剪边角料（`cotton_offcut_out`）

记录作为废物离开制作过程的棉布边角料。

- 选定流：Cotton fabric cutting offcut
- 流属性/单位：Mass / kg
- 数量规则：按批次单独称量棉布边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_output_waste`
- 来源：`uk-resource-efficiency-textiles-2024`

###### 聚酯布裁剪边角料（`polyester_offcut_out`）

记录作为废物离开制作过程的聚酯布边角料。

- 选定流：Polyester fabric cutting offcut
- 流属性/单位：Mass / kg
- 数量规则：按批次单独称量聚酯布边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_output_waste`
- 来源：`uk-resource-efficiency-textiles-2024`

###### 聚酰胺 6 布裁剪边角料（`nylon_offcut_out`）

记录作为废物离开制作过程的聚酰胺 6 布边角料。

- 选定流：Polyamide 6 fabric cutting offcut
- 流属性/单位：Mass / kg
- 数量规则：按批次单独称量聚酰胺 6 布边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_output_waste`
- 来源：`uk-resource-efficiency-textiles-2024`

###### 聚酯填充废物（`polyester_fill_waste_out`）

记录收集为不可再用废物的聚酯填充物。

- 选定流：Polyester staple fibre filling waste
- 流属性/单位：Mass / kg
- 数量规则：按批次单独称量不可再用填充损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_output_waste`
- 来源：`uk-resource-efficiency-textiles-2024`

###### 鸭绒羽填充废物（`down_fill_waste_out`）

记录收集为不可再用废物的清洁鸭绒羽混合填充物。

- 选定流：Cleaned duck down-and-feather filling waste
- 流属性/单位：Mass / kg
- 数量规则：按批次单独称量不可再用填充损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_output_waste`
- 来源：`uk-resource-efficiency-textiles-2024`

###### 聚氨酯泡沫边角料（`pu_foam_offcut_out`）

记录作为废物离开制作过程的软质聚氨酯泡沫边角料。

- 选定流：Flexible polyurethane foam offcut
- 流属性/单位：Mass / kg
- 数量规则：按批次单独称量不可再用泡沫边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_output_waste`
- 来源：`uk-resource-efficiency-textiles-2024`

###### 钢制弹簧废料（`steel_scrap_out`）

记录作为废物离开制作过程的不合格或修剪钢制弹簧材料。

- 选定流：Steel spring scrap
- 流属性/单位：Mass / kg
- 数量规则：按批次单独称量钢制弹簧废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_output_waste`
- 来源：`eu-textiles-bat-2022`

###### 聚酯缝纫线废物（`thread_waste_out`）

记录作为废物离开制作过程的聚酯缝纫线头和不合格线。

- 选定流：Polyester sewing thread waste
- 流属性/单位：Mass / kg
- 数量规则：按批次单独称量或质量平衡得到缝纫线废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_output_waste`
- 来源：`uk-resource-efficiency-textiles-2024`

##### 基本流

###### 纤维颗粒物排放至空气（`pm10_air_out`）

当填充处理、裁剪或抽风监测识别该基本流为相关排放时，记录粒径小于 10 微米的颗粒物。

- 选定流：Particulate matter, less than 10 micrometres, to air
- 流属性/单位：Mass / kg
- 数量规则：场址测量，或使用已记录方法由采集的治理和活动记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fabrication_air`
- 来源：`eu-textiles-bat-2022`

### 过程：湿整理与干燥（`wet_finishing_drying`）

#### 输入

##### 产品流

###### 进入湿整理的未包装制品（`unpackaged_article_wet_in`）

记录进入场内湿处理路线的未包装制品。

- 选定流：Stuffed bedding article, unpackaged
- 流属性/单位：Mass / kg
- 数量规则：湿整理批次接收制品的称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_materials_output`
- 来源：`eu-textiles-bat-2022`

###### 湿处理用水（`process_water_wet_in`）

记录洗涤、漂洗或湿整理使用的供给工艺水。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：计量进水减去已在水量平衡内单独计量并抵扣的回用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_water_energy`
- 来源：`eu-textiles-bat-2022`

###### 湿处理用电（`electricity_wet_in`）

记录洗涤、加料、脱水、干燥和空气处理设备使用的低压电力。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：湿处理批次专用电表读数，或按合格产出归一化的报告期分表值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_water_energy`
- 来源：`eu-textiles-bat-2022`

###### 湿处理供热天然气（`natural_gas_wet_in`）

记录场内燃烧并为湿处理路线直接或间接供热的天然气。

- 选定流：天然气
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量或发票天然气量按所记录供应商或场址低位热值换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_water_energy`
- 来源：`eu-textiles-bat-2022`

###### 过氧化氢（`hydrogen_peroxide_wet_in`）

仅在声明湿处理路线使用过氧化氢时记录本行。

- 选定流：过氧化氢
- 流属性/单位：Mass / kg
- 数量规则：由批次加料记录和记录浓度得到的活性化学品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_materials_output`
- 来源：`eu-textiles-bat-2022`

###### 碳酸钠（`sodium_carbonate_wet_in`）

仅在声明湿处理路线使用碳酸钠时记录本行。

- 选定流：碳酸钠
- 流属性/单位：Mass / kg
- 数量规则：由批次加料记录和记录浓度得到的活性化学品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_materials_output`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 湿整理后的未包装制品（`wet_finished_article_out`）

记录离开湿处理路线的合格未包装制品。

- 选定流：Wet-finished stuffed bedding article, unpackaged
- 流属性/单位：Mass / kg
- 数量规则：湿整理和干燥后接收的制品称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_materials_output`
- 来源：`eu-textiles-bat-2022`

##### 废物流

###### 纺织整理废水（`wet_process_wastewater_out`）

记录洗涤、漂洗或湿整理产生并在本单元过程边界外进入场内或场外处理前的废水。

- 选定流：Textile finishing wastewater
- 流属性/单位：Volume / m3
- 数量规则：在声明过程边界计量的排放体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_waste_emissions`
- 来源：`eu-textiles-bat-2022`; `epa-textile-sector-notebook-1997`

###### 纺织废水处理污泥（`wet_treatment_sludge_out`）

当废水处理位于声明前景场址边界内时，记录其产生的污泥。

- 选定流：Textile wastewater-treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：称量湿污泥并单独记录固含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_waste_emissions`
- 来源：`eu-textiles-bat-2022`

##### 基本流

###### 化石二氧化碳排放至空气（`fossil_co2_air_out`）

当场内天然气燃烧位于前景边界内时，记录该燃烧产生的化石二氧化碳。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：由采集的燃料消耗量和有文件依据的供应商或场址碳因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wet_waste_emissions`
- 来源：`eu-textiles-bat-2022`

### 过程：检验与包装（`inspection_packaging`）

#### 输入

##### 产品流

###### 进入检验的未包装制品（`unpackaged_article_pack_in`）

记录进入终检与包装的未包装合格制品或待返工制品。

- 选定流：Stuffed bedding article, unpackaged
- 流属性/单位：Mass / kg
- 数量规则：进入终检的称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_inputs_output`
- 来源：`un-cpc-3-27180`

###### 包装工序用电（`electricity_pack_in`）

记录检验、压缩、封装、贴标和装箱所用低压电力。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：专用电表读数，或按合格产出归一化的报告期分表值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_inputs_output`
- 来源：`eu-textiles-bat-2022`

###### 低密度聚乙烯包装膜（`ldpe_film_in`）

记录随成品离开场址的 LDPE 薄膜。

- 选定流：低密度聚乙烯包装膜
- 流属性/单位：Mass / kg
- 数量规则：合格批次耗用 LDPE 薄膜的称量或采购核销质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量，在产品净质量之外报告
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_inputs_output`
- 来源：`eu-pef-2021`

###### 瓦楞纸箱（`corrugated_box_in`）

记录随成品离开场址的瓦楞纸箱。

- 选定流：瓦楞纸箱
- 流属性/单位：Mass / kg
- 数量规则：合格批次耗用纸箱的称量或采购核销质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量，在产品净质量之外报告
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_inputs_output`
- 来源：`eu-pef-2021`

###### 未涂布纸标签（`paper_label_in`）

记录随成品离开场址的未涂布纸标签。

- 选定流：Uncoated paper label
- 流属性/单位：Mass / kg
- 数量规则：合格批次耗用标签的称量或采购核销质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量，在产品净质量之外报告
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_inputs_output`
- 来源：`eu-pef-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### CPC 27180 成品（`finished_product_out`）

本行是参考产品输出，产品质量不含包装。

- 选定流：装有弹簧或内填各种材料或由泡沫橡胶或塑料制成的被、鸭绒被、垫子、大靠垫、枕头、睡袋及类似用品 `f646f2c3-aead-4a65-8904-8894b67221f8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后恰好 1 kg 合格成品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-27180`

##### 废物流

###### 不合格制品废物（`off_spec_article_waste_out`）

记录返工机会用尽后送往废物处理的不合格成品。

- 选定流：Off-spec stuffed bedding article
- 流属性/单位：Mass / kg
- 数量规则：按批次单独称量不合格产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_waste`
- 来源：`uk-resource-efficiency-textiles-2024`

###### LDPE 薄膜废物（`ldpe_film_waste_out`）

记录包装过程中产生的 LDPE 薄膜修边料和不合格薄膜。

- 选定流：Low-density polyethylene film waste
- 流属性/单位：Mass / kg
- 数量规则：按批次单独称量 LDPE 薄膜废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_waste`
- 来源：`eu-textiles-bat-2022`

###### 瓦楞纸板废物（`corrugated_board_waste_out`）

记录包装过程中产生的不合格或修剪瓦楞纸板。

- 选定流：Corrugated fibreboard waste
- 流属性/单位：Mass / kg
- 数量规则：按批次单独称量瓦楞纸板废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_waste`
- 来源：`eu-textiles-bat-2022`

###### 纸标签废物（`paper_label_waste_out`）

记录包装过程中产生的不合格未涂布纸标签。

- 选定流：Uncoated paper label waste
- 流属性/单位：Mass / kg
- 数量规则：按批次单独称量或采购核销纸标签废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_waste`
- 来源：`eu-textiles-bat-2022`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivision_first` | 多产品生产线和共用作业 | 优先按批次、生产线或过程细分并直接计量，使声明产品在使用任何分配前承担其实测前景投入和产出。 | `iso-14044-2006`; `eu-pef-2021` |
| `alloc_shared_utilities` | 无法避免的共用电力、热、水和共同废物 | 使用计量机器时间、处理质量或实测产量等有文件依据的物理因果驱动，保留总量、驱动和计算；存在物理关系时不得使用收入分配。 | `iso-14044-2006`; `eu-pef-2021` |
| `alloc_multi_output_fallback` | 细分后仍存在的可售共产品 | 因果关系适宜时采用有文件依据的物理关系；仅在不存在可辩护物理关系时采用经济分配，并披露方法和敏感性。 | `iso-14044-2006`; `eu-pef-2021` |
| `alloc_rework_and_scrap` | 内部返工和生产废料 | 将内部返工返回原批次且不作为共产品；分别报告材料净耗用量和每种输出废料或废物，不得给予未经评审的避免负担信用。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_materials` | `article_fabrication` | BOM 材料投入 | 称量、ERP 领用/退库及批准的 BOM 记录 | product_family; batch_id; material_name; material_grade; supplier; lot_id; mass_issued; mass_returned; unit; timestamp | 校准称量并与 ERP 领用/退库核对 | kg | 每批 | 有代表性的生产期，通常至少连续 12 个月 | 每个制造场址及声明生产线 | 按精确材料身份汇总净耗用量，再除以合格产品净质量 | 秤校准；ERP 交易导出；批准的 BOM 版本；供应商规格 |
| `cp_fabrication_energy` | `article_fabrication` | 电力投入 | 分表或专用设备电表 | meter_id; opening_reading; closing_reading; kWh; batch_id; production_time; net_output_mass | 直接读取电表 | kWh | 每批或每班 | 与产品产出相同期间 | 每个场址和生产线 | 期末读数减期初读数，与产出质量匹配后归一化 | 电表校准；发票核对；停机日志 |
| `cp_fabrication_output_waste` | `article_fabrication` | 未包装产出及材料特定废物 | 产出和分类废物称量 | batch_id; output_mass; waste_material_identity; waste_mass; destination; timestamp | 校准的产出秤和废物秤 | kg | 每批 | 与材料投入相同期间 | 每个场址和生产线 | 各废物身份分别汇总，不得合并材料 | 秤校准；废物票据；批次收率报告 |
| `cp_fabrication_air` | `article_fabrication` | PM10 排放 | 排口或工作场所抽风测量及活动记录 | sampling_point; method; concentration; gas_flow; abatement_state; operating_time; output_mass | 适用标准测量，或由采集数据按有文件依据的方法计算 | kg | 频率依据相关性和运行变化确定 | 有代表性的正常运行及重大变化 | 每个相关排放点 | 计算测量期排放质量并按匹配产出归一化 | 实验室报告；仪器校准；治理设施运行日志 |
| `cp_wet_materials_output` | `wet_finishing_drying` | 制品和化学品投入及整理后产出 | 批次称量和加料记录 | batch_id; input_article_mass; chemical_identity; concentration; dosed_mass; output_article_mass; timestamp | 校准称量和自动或手工加料日志 | kg | 每个湿处理批次 | 与湿处理能源和用水相同期间 | 每条湿处理线 | 保留每种化学品身份，并由记录浓度计算活性质量 | 秤校准；加料系统记录；配方版本；批次放行记录 |
| `cp_wet_water_energy` | `wet_finishing_drying` | 水、电力和天然气投入 | 水、电和燃气表 | meter_id; opening_reading; closing_reading; reused_water; energy_unit; calorific_value; batch_id; output_mass | 直接读表和供应商记录 | m3; kWh; MJ | 每批或每班 | 与湿处理产出相同期间 | 每个场址和湿处理线 | 分别计算供给净水量和实测能源，再按匹配产出归一化 | 仪表校准；公用工程发票；热值记录；水量平衡核对 |
| `cp_wet_waste_emissions` | `wet_finishing_drying` | 废水、污泥和化石 CO2 | 排水表、污泥秤、燃料记录及排放计算 | discharge_volume; sampling_point; treatment_boundary; sludge_wet_mass; sludge_solids; fuel_quantity; carbon_factor; factor_source; output_mass | 直接测量；CO2 仅由采集燃料和有文件依据的碳数据计算 | m3; kg | 每批或每次排放；排放与报告期匹配 | 与湿处理投入相同期间 | 每个场址和湿处理线 | 分开保留废水、污泥和化石 CO2，并按匹配产出归一化 | 仪表/秤校准；实验室记录；废物转移单；因子文件 |
| `cp_pack_inputs_output` | `inspection_packaging` | 未包装制品、包装、电力和成品 | 称量、包装领退、计量和检验记录 | batch_id; input_mass; packaging_identity; packaging_mass_issued; packaging_mass_returned; electricity; accepted_output_mass; packaging_status | 校准称量、ERP 核对和直接计量 | kg; kWh | 每批 | 与合格产品产出相同期间 | 每个场址和包装线 | 分别计算每个包装组件，并从产品净质量排除 | 秤/电表校准；包装规格；检验放行；ERP 导出 |
| `cp_pack_waste` | `inspection_packaging` | 不合格制品和包装废物 | 分类废物称量 | batch_id; waste_identity; waste_mass; destination; rework_status; timestamp | 校准废物秤和废物转移记录 | kg | 每批 | 与包装投入相同期间 | 每个场址和包装线 | 分别汇总每种废物，并排除成功返工产品 | 秤校准；返工日志；废物转移单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material` | 每种制作或包装材料 | 材料净耗用量 = 领用质量 − 退库质量；退库材料必须保持相同身份和可用状态 | mass_issued; mass_returned | 按原子身份得到的材料净耗用量 | `uk-resource-efficiency-textiles-2024` |
| `calc_reference_normalization` | 所有清单行 | 归一化量 = 报告期或批次数量 / 合格成品净质量（kg）；分母不含包装 | collected row amount; net conforming finished-product mass | 每 1 kg 参考产品的数量 | `iso-14044-2006`; `eu-pef-2021` |
| `calc_wet_water_balance` | 湿处理用水和废水 | 核对供水、回用水、产品含水变化、实测废水和有记录蒸发量，并披露任何未解决差额 | inlet water; reused water; input/output article mass; wastewater; evaporation record | 经核对的工艺水量平衡 | `eu-textiles-bat-2022` |
| `calc_fossil_co2` | 场内天然气燃烧 | 化石 CO2 = 记录能源基准上的采集燃料量 × 有文件依据的供应商或场址碳因子；保留因子来源和基准 | natural-gas quantity; calorific value; carbon factor | kg fossil CO2 | `eu-textiles-bat-2022` |
| `calc_mass_balance` | 制作与包装 | 在测量不确定度内，投入 = 合格产品 + 每种单独识别的废物/产出 + 有记录的库存变化 | atomic material inputs; product output; atomic waste outputs; stock change | 材料特定的质量平衡残差 | `eu-textiles-bat-2022`; `uk-resource-efficiency-textiles-2024` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_reference_identity` | 参考流 | 确认公开 state-100 Product flow、CPC 27180 叶节点、Mass 属性、Units of mass 和 kg 参考；拒绝语义更宽、更窄或不同的制品流。 | Tiangong 直接读回和 `un-cpc-3-27180` |
| `dq_product_stratification` | 所有前景记录 | 明确保留产品族、尺寸、面层、填充物/芯体、结构、整理和包装状态；不得以未披露平均合并实质不同路线。 | 批准的产品规格和 BOM |
| `dq_uuid_gate` | 每个带 UUID 的清单行 | 仅在 flow-hybrid-search 发现且 state-100 直接读回确认精确原子语义、流类型、参考属性和单位后赋予 Tiangong UUID；否则留空并保留逐行审查项。 | Tiangong 身份证据 |
| `dq_completeness` | BOM、公用工程、废物和排放 | 核对全部材料 BOM 行，并将每项相关场址公用工程、材料特定废物、废水、污泥和直接排放作为原子交换纳入。 | ERP 导出；计量记录；废物台账；投入产出清单 |
| `dq_temporal_geography` | 前景和上游数据 | 使用代表声明生产期、场址、地域和技术的数据；披露数据年龄、代理和供应商覆盖。 | 数据集元数据和源记录 |
| `dq_measurement` | 采集的前景数量 | 保留仪表/秤身份、校准状态、原始单位、批次或期间关联、汇总规则及缺失数据处理。 | 校准记录和采集协议输出 |
| `dq_no_ai_quantity` | 所有定量清单行 | 不得使用 AI 生成范围或默认数量；使用声明协议下采集的前景值或由采集记录计算的值。 | 行数值模式和采集链接 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 若参考 UUID、Product flow 类型、CPC 27180 分类、Mass 属性 UUID、Units of mass UUID、kg 单位或 1 kg 产品净质量与第 3 节不同，则失败。 | `un-cpc-3-27180` |
| `val_required_qualifiers` | 数据集元数据 | 缺少任何适用必需限定信息，或未明确包装是否计入和工厂门边界时失败。 | `eu-pef-2021` |
| `val_atomic_rows` | 过程清单 | 选定流合并材料、公用工程、燃料、废物或排放，或双语 process_id、row_id、方向、流类型、顺序或 UUID 不一致时失败。 | `eu-textiles-bat-2022` |
| `val_uuid_evidence` | 带 UUID 的行 | UUID 缺少混合检索发现证据和 state-100 直接读回对精确语义、流类型、参考属性及单位的确认时失败。 | `un-cpc-3-27180` |
| `val_foreground_records` | 定量行 | 非参考数量属于 AI 估计、无支持默认值，或缺少相连采集协议和可追溯前景记录时失败。 | `iso-14044-2006`; `eu-pef-2021` |
| `val_mass_balance` | 制作与包装 | 产品族材料投入、产品净质量、原子废物和库存变化未核对，或残差未披露时失败。 | `eu-textiles-bat-2022`; `uk-resource-efficiency-textiles-2024` |
| `val_wet_route` | 条件适用的湿整理 | 声明场内湿处理但遗漏用水、电力、使用时的燃料、每种工艺化学品、废水、产生时的污泥或相关直接排放时失败。 | `eu-textiles-bat-2022`; `epa-textile-sector-notebook-1997` |
| `val_allocation` | 共用过程和多产出生产线 | 使用分配但未先检验细分、记录因果驱动、保留总量并披露方法和敏感性时失败。 | `iso-14044-2006`; `eu-pef-2021` |
| `val_scope` | 系统边界 | 缺少外购物料上游数据集，或在声明工厂门数据包中静默纳入或排除配送、使用或终端处置时失败。 | `iso-14040-2006`; `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个声明 CPC 27180 产品族及生产路线的前景单元过程数据包 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 在保留必需限定信息、前景证据、上游链接和评审状态时，用于制品特定的工厂门过程、产品系统和 lifecyclemodel 构建 |
| excluded_use | 未披露的类别整体平均；在实质不同的面层、填充物、芯体、结构或湿处理路线间替代；无新增阶段模型的消费者使用或终端处置声明；存在未解决 UUID 阻断项时发布 |
| required_metadata | PCR id 和版本；CPC 引用；产品族；预期功能；尺寸；净质量；面层及结构；填充物/芯体身份与含量；弹簧和封口配置；整理；性能等级；场址；地域；期间；BOM 版本；技术；湿处理状态；包装状态；边界；分配；上游数据集；采集协议 |
| required_quality_disclosure | 前景覆盖；供应商覆盖；仪表和秤校准；质量平衡残差；缺失数据处理；代理使用；数据年龄；分配驱动；截断；未解决 UUID；废水和排放监测适用性 |
| update_trigger | 产品族、BOM、填充物/芯体、结构、化学整理、制造技术、湿处理路线、场址、能源供应、包装系统、生产期、分配基准或 Tiangong 身份发生任何实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-27180` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0, subclass 27180, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/27180（检索日期 2026-08-13） | 产品类别范围、分类身份和精确参考流门禁 |
| `iso-14040-2006` | `standard` | ISO 14040:2006, Environmental management — Life cycle assessment — Principles and framework, https://www.iso.org/standard/37456.html（确认日期 2026-08-13） | LCA 原则、功能单位、范围和生命周期框架 |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html（确认日期 2026-08-13） | 清单、分配、数据质量、报告和评审规则 |
| `eu-pef-2021` | `official_guidance` | Commission Recommendation (EU) 2021/2279, Product Environmental Footprint Method, https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索日期 2026-08-13） | 功能单位与参考流、系统边界、分配层级、数据需求和披露 |
| `eu-textiles-bat-2022` | `official_guidance` | Commission Implementing Decision (EU) 2022/2508, BAT conclusions for the textiles industry, https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj（检索日期 2026-08-13） | 过程投入产出清单；水、能源、材料、化学品、废水、废物和排放监测 |
| `epa-textile-sector-notebook-1997` | `extension_guidance` | US EPA, Profile of the Textile Industry, Sector Notebook Project, https://archive.epa.gov/compliance/resources/publications/assistance/sectors/web/pdf/textilsn.pdf（检索日期 2026-08-13） | 铺布、裁剪、缝制及湿处理废物和废水过程分解 |
| `uk-resource-efficiency-textiles-2024` | `official_guidance` | UK Department for Environment, Food & Rural Affairs, Unlocking Resource Efficiency: Phase 2 Textiles, https://assets.publishing.service.gov.uk/media/6620f19f651136bd0b757d85/unlocking-resource-efficiency-phase-2-textiles-report.pdf（检索日期 2026-08-13） | 裁剪、缝制、寝具填充、包装部件装配和制造废物测量 |
