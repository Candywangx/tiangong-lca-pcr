---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.knotted-netting-of-twine-cordage-or-rope-made-up-nets-of-textile-materials-articles-of-264039fb
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 捻线、绳或索制成的打结网；纺织材料制成的网；未另分类的纱、扁条、捻线、绳、索或缆制品

## 1. 范围与适用性

本 PCR 适用于经确认属于 CPC 27320 产品的门到门前景数据包：捻线、绳或索制成的打结网，纺织材料制成的成品网，以及未另分类的纱、扁条、捻线、绳、索或缆制品。所覆盖路线把外购纱、单丝、扁条、捻线、绳、索、缆或预制网片，通过打结、织网、裁切、剪裁成形、连接、缝合、插接、装配、热定形、洗涤、染色、涂层、后整理和包装制成成品网或其他纺织制品；仅纳入报告设施实际实施的工序。

聚酰胺、聚酯、聚丙烯、聚乙烯和天然纤维路线应分别建模。除非前景证据证明汇总数据仍具有代表性，不得跨聚合物或纤维家族、打结与无结结构、单丝与复丝产品、网制品与非网制品取平均。实际路线使用的每种助剂、涂料、染料、颜料、稳定剂、黏合剂、润滑剂、包装组件、废物和直接排放都必须作为单独的原子交换补充。

接收前的聚合物、纤维、纱、扁条、捻线、绳、索、缆或外购网片生产不属于前景门内，必须使用上游数据集。捕捞或养殖作业、网具使用和维护、用户现场安装、遗失渔具、使用后收集及寿命终结处理不属于本门到门 PCR。服装、普通机织或针织织物、金属丝网以及 CPC 27320 以外的纺织制品均不在范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.knotted-netting-of-twine-cordage-or-rope-made-up-nets-of-textile-materials-articles-of-264039fb |
| classification_refs | CPC 3.0: 27320 - Knotted netting of twine, cordage or rope; made up nets of textile materials; articles of yarn, strip, twine, cordage, rope or cables n.e.c. |
| covered_products | 经确认属于 CPC 27320 的打结纺织网、制成的捕捞网、养殖网、运动网、安全网、货运网、农业网或其他纺织网，以及纱、扁条、捻线、绳、索或缆制成的其他制品 |
| excluded_products | CPC 27310 的未转化捻线、绳、索或缆；普通机织、针织、非织造或花边织物；服装；金属丝网；聚合物树脂、纤维和纱生产；按更具体功能分类到其他类别的产品 |
| representative_product | 制造设施门口的成品纺织网或相关制品，材料家族、结构、尺寸、性能规格和后整理状态均已声明 |
| production_route | 路线特定的打结或成网，和/或通过裁切、剪裁成形、连接、缝合、插接或装配转化外购网片或绳索；只纳入实际发生的湿法、热法、涂层、附件和包装工序 |
| market_state | 工厂门口合格成品，以不含可移除包装的产品净质量报告，并声明含湿或调湿状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 满足已声明 CPC 27320 产品规格的成品纺织网或其他制成品 |
| How much | 1,000 kg 合格成品净质量，不含可移除包装 |
| How well | 满足已声明的材料、结构、网目或制品几何形状、尺寸、干态或湿态强力、后整理、附件和验收试验规格 |
| How long or cycle | 制造设施门口的一个生产批次；本门到门单位不包含使用寿命 |
| reference_flow_link | 功能单位由声明调湿状态下恰好 1,000 kg 净参考产品实现 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 净成品 |
| 参考产品流 | 捻线、绳或索制成的打结鱼网，纺织材料的鱼网制品，未另列明的纱、纱条、捻线、绳、索和缆的制品 `e3759580-0bc6-4410-a0fe-f8b239ba715d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制品形态和预期用途；CPC 27320 范围确认；聚合物或纤维家族及质量分数；原生或再生成分口径；单丝、复丝、加捻、编织或其他纱线结构；线密度或直径；打结或无结结构；结型；网目几何与开口或非网制品尺寸；干态或湿态试验条件；断裂强力要求；颜色；涂层、染色及其他后整理；附件及其材料；产品净质量口径；含湿或调湿状态；生产地域；技术路线；报告期 |

天工参考身份先由 hybrid search 发现，再经 state-code-100 直接读取确认：它是公开的 Product flow，分类为 CPC 27320，定量参考属性为 Mass。参考单位采用已核验 Units of mass 组中的 kg。类别范围和技术限定信息由 `un-cpc-v3-2025`、`fao-fisheries-assessment-2013`、`iso-1107-2017`、`iso-858-1973`、`iso-1805-2006`、`iso-1806-2002` 和 `iso-16663-1-2009` 支持。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告恰好 1,000 kg 合格产品净质量；排除纸箱、薄膜、捆扎带、托盘及其他可移除包装。 |
| `conditioned_mass_basis` | 纺织投入、产品和纺织废物 | Mass | kg | 每个称量的纺织物流均记录调湿或含湿状态；没有实测换算时不得合并干基与收到状态质量。 |
| `material_composition` | 产品和材料投入 | Mass fraction | kg/kg | 每种聚合物、天然纤维、涂层和永久附着附件材料分别记录；声明质量分数须与产品规格核对一致。 |
| `linear_density_or_diameter` | 纱、捻线、单丝和复丝投入 | Linear density or diameter | tex, denier or mm | 保留供应商或试验口径及换算；没有材料特定的书面关系时，不得把 denier、tex 和直径视为可直接互换。 |
| `mesh_dimension` | 网制品 | Length | mm | 声明网目定义和试验方法；按 ISO 16663-1 测量渔网网目开口时，保留量规方法和试验条件。 |
| `breaking_force_condition` | 网线和网片 | Force | N | 声明 ISO 1805 或 ISO 1806 结果的干态或湿态调湿条件，并区分测量的是纱线、打结纱线还是网目断裂强力。 |
| `energy_carrier_separation` | 电力和外购蒸汽 | Energy or delivered mass | kWh, MJ or kg | 电力与蒸汽分开记录；保留电压、地域、蒸汽状态、凝结水回流假设及所有换算因子。 |
| `water_balance` | 湿法后整理 | Volume or Mass | m3 or kg | 在同一声明口径上核对进水、回用、蒸发、产品带出和废水；质量与体积换算时声明密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 收到的纱、单丝、扁条、捻线、绳、索、缆或预制纺织网片，已声明供应商、材料家族、组成、结构、尺寸、后整理、含湿口径和交付形态 |
| starting_condition_role | 外购或设施间产品投入；其上游纤维、聚合物和中间产品制造负荷由路线特定上游数据集表示 |
| product_classification_scope | 仅限 CPC 27320；含义不清的织物、服装、未转化绳索、金属网或功能特定制品，在使用本 PCR 前必须进行分类复核 |
| recursive_input_rule | 外购网片或其他投入自身已属于 CPC 27320 时，将其供应商数据集作为上游产品投入，只清单化报告设施的增量转化；不得重复建立上游数据集已表示的工序 |
| upstream_dataset_requirement | 每个收到的产品投入使用材料、结构、地域和路线特定数据集；不得无条件以 PA、PES、PP、PE、天然纤维、原生、再生、单丝、复丝或预制网片路线的平均值替代 |
| disclosure | 声明投入门、实际单元操作、材料和结构路线、湿法与热法工序、每种化学品与附件、包装处理、产出试验条件、排除工序、上游数据缺口以及任何同类别外购投入 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景设施 | 纳入接收和内部搬运、实际打结或成网、裁切、剪裁成形、连接、缝合、插接、装配、热定形、湿法后整理、涂层、干燥、检验、制造缺陷修补及到工厂门口的包装。 | `un-cpc-v3-2025`; `fao-fisheries-assessment-2013`; `eu-pef-2021` |
| `boundary_route_specificity` | 产品路线 | 只纳入声明产品批次实际实施的工序，并分别建模具有实质差异的聚合物、结构、后整理和产品形态。 | `fao-fisheries-assessment-2013`; `iso-1107-2017`; `eu-pef-2021` |
| `boundary_upstream_inputs` | 收到的产品 | 每种收到的纱、捻线、绳、网片或附件均链接上游数据集；只有材料名称而无供应路线不足以支持从摇篮到工厂门建模。 | `eu-pef-2021` |
| `boundary_inventory_completeness` | 投入和产出 | 每种实际化学品、涂料、染料、颜料、稳定剂、黏合剂、润滑剂、包装组件、废物和直接排放均添加为独立原子交换；禁止合并能源载体、化学品、包装或废物行。 | `eu-pef-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `net_article_manufacture` | 网或纺织制品成形、后整理和包装 | required |  | 只覆盖已声明单元操作的门到门前景过程 | 1,000 kg 净合格 CPC 27320 产品 |

### 过程：网或纺织制品成形、后整理和包装（`net_article_manufacture`）

#### 输入

##### 产品流

###### 聚酰胺网线（`polyamide_netting_yarn`）

仅对消耗该确切聚合物和收到纱线形态的批次记录聚酰胺网线。

- 选定流：Polyamide netting yarn
- 流属性/单位：Mass / kg
- 数量规则：收到量称重、按库存变化调整并归一到参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`fao-fisheries-assessment-2013`

###### 聚酯网线（`polyester_netting_yarn`）

聚酯网线与所有其他聚合物分别记录。

- 选定流：Polyester netting yarn
- 流属性/单位：Mass / kg
- 数量规则：收到量称重、按库存变化调整并归一到参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`fao-fisheries-assessment-2013`

###### 聚丙烯网线（`polypropylene_netting_yarn`）

只有聚丙烯网线实际跨越设施边界时才记录。

- 选定流：Polypropylene netting yarn
- 流属性/单位：Mass / kg
- 数量规则：收到量称重、按库存变化调整并归一到参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`fao-fisheries-assessment-2013`

###### 聚乙烯网线（`polyethylene_netting_yarn`）

聚乙烯网线与聚乙烯绳和外购网片分别记录。

- 选定流：Polyethylene netting yarn
- 流属性/单位：Mass / kg
- 数量规则：收到量称重、按库存变化调整并归一到参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`fao-fisheries-assessment-2013`

###### 棉网捻线（`cotton_netting_twine`）

棉网捻线仅表示棉；其他天然纤维须在生成的数据集中建立自己的卡片。

- 选定流：Cotton netting twine
- 流属性/单位：Mass / kg
- 数量规则：收到量称重、按库存变化调整并归一到参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`un-cpc-v3-2025`

###### 预制聚酰胺网片（`preformed_polyamide_netting`）

制成网转化路线的外购未整理聚酰胺网片单独记录，不与纱线合并。

- 选定流：Preformed polyamide netting
- 流属性/单位：Mass / kg
- 数量规则：收到量称重、按库存变化调整并归一到参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`un-cpc-v3-2025`

###### 预制聚乙烯网片（`preformed_polyethylene_netting`）

外购未整理聚乙烯网片作为独立的收到中间产品记录。

- 选定流：Preformed polyethylene netting
- 流属性/单位：Mass / kg
- 数量规则：收到量称重、按库存变化调整并归一到参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`un-cpc-v3-2025`

###### 聚乙烯绳（`polyethylene_rope`）

聚乙烯绳用作网边、上纲、下纲、装配件或制品组件时记录。

- 选定流：Polyethylene rope
- 流属性/单位：Mass / kg
- 数量规则：生产批次领用称量减去有记录的退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`fao-fisheries-assessment-2013`

###### 聚丙烯绳（`polypropylene_rope`）

聚丙烯绳与聚乙烯绳及聚丙烯纱分别记录。

- 选定流：Polypropylene rope
- 流属性/单位：Mass / kg
- 数量规则：生产批次领用称量减去有记录的退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`fao-fisheries-assessment-2013`

###### 聚酰胺缝合线（`polyamide_sewing_thread`）

拼接网片或连接组件时使用的聚酰胺缝合线或连接线单独记录。

- 选定流：Polyamide sewing thread
- 流属性/单位：Mass / kg
- 数量规则：生产批次称量领用或库存控制领用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`fao-fisheries-assessment-2013`

###### 设施电表处低压电力（`forming_electricity`）

成网机、裁切、缝合、插接、热定形、通风、干燥和包装用电，仅在电压和供应组合一致时作为一个设施供电交换计量。

- 选定流：Electricity, low voltage, facility supply
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或用有记录的设备功率乘运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-pef-2021`

###### 湿法后整理用外供淡水（`process_water`）

发生洗涤、染色、涂层配制或其他湿法后整理时，记录其外供淡水。

- 选定流：Freshwater, supplied process water
- 流属性/单位：Volume / m3
- 数量规则：计量进水并分配到声明产品批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_steam_records`
- 来源：`eu-pef-2021`

###### 外购饱和蒸汽（`purchased_steam`）

只有饱和蒸汽为热定形、洗涤、染色、干燥或涂层跨越设施边界交付时才记录。

- 选定流：Steam, saturated, purchased
- 流属性/单位：Mass / kg
- 数量规则：供应商计量或锅炉房交付记录，并声明压力和凝结水回流条件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_steam_records`
- 来源：`eu-pef-2021`

###### 瓦楞纸箱（`corrugated_board_box`）

随产品供应的瓦楞纸箱按实际领用质量记录，并排除在参考产品质量之外。

- 选定流：Corrugated board box
- 流属性/单位：Mass / kg
- 数量规则：纸箱实测或规格质量乘使用数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格 CPC 27320 参考产品（`reference_product_output`）

最终调湿和检验后称量产出；排除可移除包装。

- 选定流：捻线、绳或索制成的打结鱼网，纺织材料的鱼网制品，未另列明的纱、纱条、捻线、绳、索和缆的制品 `e3759580-0bc6-4410-a0fe-f8b239ba715d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：合格净产出归一为恰好 1,000 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output`
- 来源：`un-cpc-v3-2025`

##### 废物流

###### 聚酰胺网片边角料（`polyamide_offcuts`）

清洁或受污染的聚酰胺边角料分别称量并声明去向。

- 选定流：Polyamide netting offcuts
- 流属性/单位：Mass / kg
- 数量规则：废物容器称量，按库存及经核实的同线回用调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`zlaugotne-fishing-net-waste-2025`

###### 聚酯网片边角料（`polyester_offcuts`）

聚酯边角料不得与聚酰胺或聚烯烃边角料合并。

- 选定流：Polyester netting offcuts
- 流属性/单位：Mass / kg
- 数量规则：废物容器称量，按库存及经核实的同线回用调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`zlaugotne-fishing-net-waste-2025`

###### 聚丙烯网片边角料（`polypropylene_offcuts`）

聚丙烯边角料作为单一聚合物特定废物交换记录。

- 选定流：Polypropylene netting offcuts
- 流属性/单位：Mass / kg
- 数量规则：废物容器称量，按库存及经核实的同线回用调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`zlaugotne-fishing-net-waste-2025`

###### 聚乙烯网片边角料（`polyethylene_offcuts`）

聚乙烯边角料与聚丙烯及混合废物分别记录。

- 选定流：Polyethylene netting offcuts
- 流属性/单位：Mass / kg
- 数量规则：废物容器称量，按库存及经核实的同线回用调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`zlaugotne-fishing-net-waste-2025`

###### 纺织网后整理废水（`finishing_wastewater`）

转移至现场或外部处理的废水与淡水投入及直接水体排放分别记录。

- 选定流：Wastewater from textile-net finishing
- 流属性/单位：Volume / m3
- 数量规则：排放计量或经核对的湿法过程水衡算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-pef-2021`

###### 废弃瓦楞纸箱（`waste_corrugated_board`）

前景边界内废弃的瓦楞纸箱按独立废物流称量。

- 选定流：Waste corrugated board box
- 流属性/单位：Mass / kg
- 数量规则：废弃纸箱称量，扣除有记录的退回或再使用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-pef-2021`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid` | 共用生产线和公用工程 | 优先使用分表、批次记录、时间记录和物理分离来避免分配。 | `eu-pef-2021` |
| `allocation_physical_relation` | 无法避免的共用投入和产出 | 无法分离时，采用有记录的因果物理关系，如机器时间、计量能源、湿法批次负荷或产品净质量；不得默认采用收入。 | `eu-pef-2021` |
| `allocation_multi_output_disclosure` | 可销售边角料或共产品 | 保留总产出和废物记录，声明次生产出仍为废物还是转为共产品，并披露分配口径与敏感性。 | `eu-pef-2021`; `zlaugotne-fishing-net-waste-2025` |
| `allocation_recycling_boundary` | 内部回用和外送回收 | 只有回流量实测且不重复计算上游负荷时，才扣除同线回用；外送回收去向单独报告，没有明确声明的下游模型时，不得在本门到门数据集中主张避免负荷。 | `eu-pef-2021`; `zlaugotne-fishing-net-waste-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `net_article_manufacture` | 纺织和装配材料投入 | 采购、收货、领用和库存记录 | supplier; material identity; grade; construction; lot; opening stock; receipts; issues; returns; closing stock; mass; moisture basis | 按生产记录核对批次领用和库存变化 | kg | 每批并按月核对 | 与产出相同的代表期 | 报告设施及声明的外包工序 | 按确切材料身份和产品批次汇总；不得跨聚合物分组 | 供应商规格、地磅或校准秤记录、库存核对 |
| `cp_energy_records` | `net_article_manufacture` | 电力投入 | 电表和设备运行记录 | meter id; voltage; supply contract; start/end reading; machine power; runtime; lot | 优先分表；否则采用有记录的功率—时间计算 | kWh | 每批、每班或每个计量区间 | 至少一个代表性生产期 | 范围内设备和共用服务 | 采用有记录的因果驱动因子分配共用量 | 电表校准、发票核对、运行日志 |
| `cp_water_steam_records` | `net_article_manufacture` | 淡水和外购蒸汽 | 计量和供应商记录 | water meter; steam meter; pressure; temperature; condensate return; batch; start/end reading | 各载体分别计量并核对水衡算 | m3 or kg | 每批或每个计量区间 | 与湿法/热法生产相同期间 | 范围内湿法和热法工序 | 各载体核对后再归一化 | 校准、供应商发票、水衡算 |
| `cp_packaging_records` | `net_article_manufacture` | 包装投入 | 包装清单和材料规格 | component id; material; unit mass; units used; returns; recycled content | 称量代表性组件或使用经核验的规格 | kg | 每种包装规格和批次 | 报告期内现行包装设计 | 报告设施发出的产品 | 每个原子包装组件分别求和 | 供应商规格和包装记录 |
| `cp_product_output` | `net_article_manufacture` | 参考产品产出 | 批次、称量和质量放行记录 | product id; lot; gross mass; packaging tare; net mass; conditioning state; rejected mass; test result | 声明调湿和质量放行后校准称量 | kg | 每批 | 完整报告期 | 范围内全部合格产出 | 仅汇总合格净产出 | 秤校准、试验报告、放行记录 |
| `cp_waste_records` | `net_article_manufacture` | 聚合物特定边角料、废水和包装废物 | 废物容器、计量、转移和去向记录 | waste identity; polymer; contamination; mass or volume; same-line return; destination; receiver; date | 每种废物流称量或计量废水；核对转移 | kg or m3 | 每个容器、转移或排放区间 | 完整报告期 | 范围内离开设施或内部回流的所有废物 | 保持废物身份和去向分开；仅扣除经核实的同线回流 | 秤或流量计校准、转移单、接收方证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | normalized amount = period row amount / period net conforming output × 1,000 kg | 经核对的行数量；合格净产出 | 每 1,000 kg 参考产品的数量 | `eu-pef-2021` |
| `calc_material_balance` | 纺织材料 | input mass + opening WIP = conforming product + exported waste + verified emissions + closing WIP；解释实测差值 | 材料收到/领用；产品质量；废物；在制品 | 聚合物和批次特定的物料衡算残差 | `eu-pef-2021` |
| `calc_mesh_test_link` | 网制品 | 将报告的网目尺寸和断裂强力链接到声明的试样调湿条件和 ISO 试验方法；任何换算不得抹去干/湿或纱线/网目的区别 | 试验报告；调湿记录；产品批次 | 带限定信息的产品性能记录 | `iso-1805-2006`; `iso-1806-2002`; `iso-16663-1-2009` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和材料 | 保留 CPC 范围判定、产品图样/规格、聚合物或纤维身份、结构、尺寸、后整理及供应商批次链接。 | 分类记录、物料清单、供应商规格、试验报告 |
| `dq_temporal` | 所有前景数据 | 使用共同代表期，并披露停机、换产试制、异常废料以及路线或包装变化。 | 生产日历、计量覆盖、异常日志 |
| `dq_measurement` | 质量、能源、水、蒸汽和试验 | 使用校准仪器或有记录的供应商数据；保留单位、换算、调湿状态及不确定度或分辨率。 | 校准证书、发票核对、实验室记录 |
| `dq_completeness` | 过程清单 | 核对所有材料和能源投入、产品、废物、废水及实测直接排放；记录每项排除及依据。 | 物料衡算、水衡算、能源核对、排除登记 |
| `dq_traceability` | 分配和废物去向 | 保留因果分配驱动因子、同线回用证据、废物接收方和处理路线；不得仅凭收集标签推断已回收。 | 分配工作表、转移单、回收方接收记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_identity` | 数据集身份 | CPC 27320 范围、制品形态、材料家族、结构、产品尺寸或调湿状态缺失或与参考流矛盾时失败。 | `un-cpc-v3-2025`; `fao-fisheries-assessment-2013` |
| `validation_reference_mass` | 定量参考 | 归一化后合格产品净质量不恰好等于 1,000 kg，或未排除可移除包装时失败。 | `eu-pef-2021` |
| `validation_atomic_inventory` | 清单行 | 任一行合并多种聚合物、能源载体、化学品、包装组件、废物流或排放，或 UUID 未经精确 hybrid 与 state-code-100 直接核验即使用时失败。 | `eu-pef-2021` |
| `validation_route_and_tests` | 生产和质量 | 未披露实际单元操作，或网目/断裂结果缺少适用定义、试验方法和干/湿条件时失败。 | `iso-1107-2017`; `iso-1805-2006`; `iso-1806-2002`; `iso-16663-1-2009` |
| `validation_mass_balance` | 纺织材料 | 材料投入、产出、废物和在制品未在声明的实测容差内核对，或以分配隐藏残差时失败。 | `eu-pef-2021` |
| `validation_waste_destination` | 边角料和废水 | 实际产生的聚合物特定制造废料或废水被省略，或未区分回用、回收、处理和处置去向时失败。 | `zlaugotne-fishing-net-waste-2025`; `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 27320 纺织网及相关制成品制造的路线、产品和设施特定前景数据集 |
| downstream_use | `secondary_dataset`; 上游产品投入完整且数据质量充分时可作 `background_dataset` |
| allowed_use | 针对声明材料、结构、后整理、地域和期间的产品特定从摇篮到工厂门模型、供应商比较及热点研究 |
| excluded_use | 无限定的跨聚合物平均；使用阶段捕捞或养殖建模；遗失渔具影响；寿命终结主张；CPC 27320 以外产品；所需试验、分配或数据质量披露存在实质差异时的比较性主张 |
| required_metadata | CPC 范围；制品形态和用途；物料清单；聚合物/纤维及再生成分口径；纱线和网结构；尺寸和网目定义；干/湿试验条件；断裂强力方法；实际过程路线；后整理和附件；净质量和含湿口径；地域；期间；上游数据集；分配；包装；废物去向 |
| required_quality_disclosure | 一手数据比例；电表和秤覆盖；试验方法；物料、水和能源衡算残差；分配驱动因子；供应商数据替代；未解析 UUID；排除项；废物接收方证据；代表性限制 |
| update_trigger | 材料家族或再生成分、纱线/网结构、产品形态、网目或强力规格、过程技术、后整理化学品、供应商路线、包装、分配、废物去向、地域发生变化，或前景绩效出现实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 27320, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 类别范围与排除项 |
| `fao-fisheries-assessment-2013` | official_guidance | FAO, Guidelines for the fisheries and aquaculture sector on damage and needs assessments in emergencies, Appendix A2.2.2, 2013. https://www.fao.org/docrep/019/i3433e/i3433e.pdf | 网材料家族、纱线结构、线密度/直径、网目和规格字段 |
| `iso-1107-2017` | standard | ISO 1107:2017, Fishing nets — Netting — Basic terms and definitions. https://www.iso.org/standard/72227.html | 网片术语和尺寸定义 |
| `iso-858-1973` | standard | ISO 858:1973, Fishing nets — Designation of netting yarns in the Tex System. https://www.iso.org/standard/5237.html | 网线标识和线密度披露 |
| `iso-1805-2006` | standard | ISO 1805:2006, Fishing nets — Determination of breaking force and knot breaking force of netting yarns. https://www.iso.org/standard/30041.html | 纱线和结节断裂强力试验条件 |
| `iso-1806-2002` | standard | ISO 1806:2002, Fishing nets — Determination of mesh breaking force of netting. https://www.iso.org/standard/28360.html | 网目断裂强力试验条件 |
| `iso-16663-1-2009` | standard | ISO 16663-1:2009, Fishing nets — Method of test for the determination of mesh size — Part 1: Opening of mesh. https://www.iso.org/standard/45350.html | 客观网目开口测量 |
| `eu-pef-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 功能单位、边界、前景数据、完整性、分配、包装、废物和数据质量规则 |
| `zlaugotne-fishing-net-waste-2025` | literature | Zlaugotne, B., Pubule, J., and Gusca, J. (2025), Fishing net waste management: quantification and valorization, Frontiers in Marine Science 12:1607436. https://doi.org/10.3389/fmars.2025.1607436 | 制造边角料单独计量，以及回收或处理情景的明确区分 |
