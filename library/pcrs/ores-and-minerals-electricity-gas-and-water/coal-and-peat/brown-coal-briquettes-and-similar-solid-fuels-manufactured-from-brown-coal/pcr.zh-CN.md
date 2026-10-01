---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.brown-coal-briquettes-and-similar-solid-fuels-manufactured-from-brown-coal
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 褐煤压块和用褐煤制造的类似固体燃料

## 1. 范围与适用性

本规则适用于以褐煤或次烟煤制造的未炭化固体燃料，包括有或无粘结剂的压块及干燥细粒和粉末。硬煤制燃料、泥炭压块、生物质压块及炭化焦炭不在范围内。原煤开采属于上游；成品水分、成型与包装状态决定可比性。官方产品边界见 `un-cpc3-brown-coal-fuels`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.brown-coal-briquettes-and-similar-solid-fuels-manufactured-from-brown-coal |
| classification_refs | CPC 3.0:11040 |
| covered_products | 褐煤压块；类似未炭化褐煤固体燃料；干燥细粒和粉末 |
| excluded_products | 未经制造的原煤；硬煤制燃料；泥炭及生物质压块；焦炭 |
| representative_product | 无粘结剂褐煤压块 |
| production_route | 原料制备、必要的干燥、压制或研磨、冷却、放行及适用的包装 |
| market_state | 工厂大门处可销售成品燃料，按实收水分计量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供用于后续燃烧的固体燃料；不代表已经交付的有用热量 |
| How much | 1 千克可销售成品燃料 |
| How well | 声明实收水分、灰分、低位热值、原料煤阶、粘结剂配方及产品形态 |
| How long or cycle | 一个声明的生产统计期，覆盖正常运行及停启损耗；使用阶段另行建模 |
| reference_flow_link | `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 褐煤压块和用褐煤制造的类似固体燃料 `5a782c79-14b1-4a0a-9e61-09693c97db53` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 原料煤阶及来源；水分与灰分及分析基准；低位热值及分析基准；粘结剂种类与含量；粒度与形状；热源及载热介质；包装；地域；技术；统计期 |

必需限定信息必须在数据包元数据中声明，缺失时参考流定义不完整。1 千克为含实测水分的燃料净质量，不含包装。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference_product | 质量 | kg | 用经校准的秤和放行记录获得同一统计期的成品燃料净质量；采用 cp_mass。不得将包装毛质量或干基质量用作分母。 |
| `energy_units` | prep_electricity; drying_electricity; finish_electricity; pack_electricity; drying_heat | 能量 | MJ | 电量记录为千瓦时，按 1 kWh = 3.6 MJ 转换；热量按净交付 MJ 计。不得用成品热值代替干燥热耗。 |

电量换算及声明热值基准依据 `un-ires-energy` 第 4.23 和 4.33–4.37 节。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已开采褐煤或次烟煤进入精制厂；声明原料含水率及预处理状态 |
| starting_condition_role | 前景输入交接点，非无负担资源 |
| product_classification_scope | 制造的褐煤固体燃料；不含原煤开采、炭化、泥炭和硬煤燃料 |
| recursive_input_rule | 外购同类别成品按独立投入记录并连接其上游数据集；厂内回用细粒仅在内部物料台账中记录，不重复计作外部原料 |
| upstream_dataset_requirement | 连接采煤及原料运输、热电供应、粘结剂和包装生产及废物处理数据集；厂内热电站必须有独立上游子模型，不得无负担处理 |
| disclosure | 声明交接点、回用、上游覆盖、热电损耗、包装、排放及所有排除项 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | foreground | 纳入原料接收、制备、干燥、机械成型或研磨、冷却、放行及适用包装。 | `leag-refining-route` |
| `boundary_upstream` | utility_supply | 将热电生产作为连接的供应子模型，无论其位于厂内或厂外。记录燃料、燃烧排放、灰渣、辅助用水和损耗在该子模型中；避免与热电输入重复。 |  |
| `boundary_complete` | all exchanges | 清单是常见交换的起点。实际使用的每种额外粘结剂、冷却补水、润滑剂、包装材料、外购回用料及每项冷凝水废物流或直接排放均须另设原子交换及采集协议；不可因不在表中而省略。 |  |
| `boundary_use` | downstream | 出厂运输、终端燃烧和终端灰渣处理不属于本前景制造包；连接下游模型时按成品组成和燃烧技术计入。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| preparation | 原料制备 | `required` |  | 前景制造 | 1 千克参考流 |
| drying | 干燥及排放控制 | `conditional` | 需要脱水或运行相应排放控制设施时 | 前景制造 | 1 千克参考流 |
| finishing | 成型、冷却及放行 | `required` |  | 前景制造 | 1 千克参考流 |
| packaging | 包装 | `conditional` | 交付包装产品时 | 前景制造 | 1 千克参考流 |

### 过程：原料制备（`preparation`）

#### 输入

##### 产品流

###### 褐煤（`lignite_feed`）

采用褐煤原料时。

- 选定流：褐煤 `db766ffc-c44d-4ecf-b906-98d90565dc01`
- 流属性/单位：质量 / kg
- 数量规则：采集本统计期的可归属交换量，按同一期成品净质量归一化；采用 cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`un-cpc3-brown-coal-fuels`

###### 次烟煤（`subbit_feed`）

采用次烟煤原料时；与褐煤分开记录。

- 选定流：次烟煤 `a3573912-328b-402e-8f64-f39e34a6a00c`
- 流属性/单位：质量 / kg
- 数量规则：采集本统计期的可归属交换量，按同一期成品净质量归一化；采用 cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`un-cpc3-brown-coal-fuels`

###### 工业交流电（`prep_electricity`）

计量原料制备和输送电量；记录供电电压、国家及供应商。

- 选定流：工业交流电
- 流属性/单位：能量 / MJ
- 数量规则：采集本统计期的可归属交换量，按同一期成品净质量归一化；采用 cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

### 过程：干燥及排放控制（`drying`）

#### 输入

##### 产品流

###### 热能（`drying_heat`）

进行热干燥时纳入。计量净交付热量；记录载热介质，适用时记录蒸汽工况和冷凝水返回。

- 选定流：热能 `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：净热值 / MJ
- 数量规则：采集本统计期的可归属交换量，按同一期成品净质量归一化；采用 cp_heat。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_heat`
- 来源：

###### 工业交流电（`drying_electricity`）

干燥运行时纳入干燥设备、风机及除尘用电。

- 选定流：工业交流电
- 流属性/单位：能量 / MJ
- 数量规则：采集本统计期的可归属交换量，按同一期成品净质量归一化；采用 cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

#### 输出

##### 基本流

###### 水蒸气（`dryer_vapor`）

仅纳入排至空气的蒸发水；回收冷凝水不属于空气排放。核对原料及产品水分和实际排气记录。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：采集本统计期的可归属交换量，按同一期成品净质量归一化；采用 cp_emissions。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emissions`
- 来源：

###### 颗粒物，粒径未特指（`plant_dust`）

记录控制设施后的精制生产线颗粒物排放总量，包括装卸和压制环节；在此仅记录一次。仅在未指定粒径分级时使用本流身份。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 / kg
- 数量规则：采集本统计期的可归属交换量，按同一期成品净质量归一化；采用 cp_emissions。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emissions`
- 来源：

### 过程：成型、冷却及放行（`finishing`）

#### 输入

##### 产品流

###### 煤焦油沥青粘结剂（`pitch_binder`）

仅在配方含煤焦油沥青时纳入。本项为条件交换，不是默认配方。

- 选定流：煤焦油沥青粘结剂
- 流属性/单位：质量 / kg
- 数量规则：采集本统计期的可归属交换量，按同一期成品净质量归一化；采用 cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`un-cpc3-brown-coal-fuels`

###### 工业交流电（`finish_electricity`）

计量压制或研磨、冷却及成品放行搬运用电；排除已记录的原料制备与干燥用电。

- 选定流：工业交流电
- 流属性/单位：能量 / MJ
- 数量规则：采集本统计期的可归属交换量，按同一期成品净质量归一化；采用 cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

#### 输出

##### 产品流

###### 褐煤压块和用褐煤制造的类似固体燃料（`reference_product`）

工厂大门处可销售成品燃料净质量，明确水分及市场形态。每个数据集仅对应一种声明的配方及实体市场形态；不得在同一交换中合并不同成品燃料。

- 选定流：褐煤压块和用褐煤制造的类似固体燃料 `5a782c79-14b1-4a0a-9e61-09693c97db53`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass`
- 来源：`un-cpc3-brown-coal-fuels`

##### 废物流

###### 废弃褐煤压块碎片（`lignite_reject`）

仅纳入离厂处理的褐煤压块废弃碎片。厂内回用细粒不是外部废物；如有次烟煤废弃物，须另设具体交换。

- 选定流：废弃褐煤压块碎片
- 流属性/单位：质量 / kg
- 数量规则：采集本统计期的可归属交换量，按同一期成品净质量归一化；采用 cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

### 过程：包装（`packaging`）

#### 输入

##### 产品流

###### 聚乙烯包装薄膜（`pe_film`）

随燃料交付聚乙烯薄膜包装时纳入；散装产品不计薄膜投入。

- 选定流：聚乙烯包装薄膜
- 流属性/单位：质量 / kg
- 数量规则：采集本统计期的可归属交换量，按同一期成品净质量归一化；采用 cp_packaging。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging`
- 来源：

###### 工业交流电（`pack_electricity`）

仅在进行包装时纳入包装生产线用电。

- 选定流：工业交流电
- 流属性/单位：能量 / MJ
- 数量规则：采集本统计期的可归属交换量，按同一期成品净质量归一化；采用 cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared_operations | 先按独立工段、生产线或批次计量分离负荷，回用不作为共产品。 | `ghg-product-standard` |
| `allocation_shared` | shared_operations | 通过 cp_allocation 获取可归属负荷及物理驱动记录；未能说明物理因果关系的共用负荷不得任意按产品质量分配，必须披露替代分配及敏感性，提交方法审查。 | `ghg-product-standard` |
| `allocation_waste` | lignite_reject | 连接实际废物处理，不给内部回用或废物自动替代收益。按已放行成品分母保留不合格品与停启损耗负荷。 |  |

## 8. 前景数据采集、计算与质量规则

原始数据采集和质量评价依据 `ghg-product-standard` 第 8 章，过程细分及基于物理关系的分配依据第 9 章。这些通用温室气体清单原则用于支持本前景生命周期评价数据包，不代表符合该标准的全部要求。下列称量、计量、水分台账及取样协议为这些原则的现场实施，须按实际设备记录。能量单位和燃料特定热值基准依据 `un-ires-energy` 第 IV 章；不采用默认燃料热值或过程强度。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | finishing | reference_product | 前景生产记录 | 批次；包装皮重；成品净质量；水分；灰分；低位热值；形态；放行记录 | 经校准称重；同批次代表性取样并记录分析方法及基准；核对放行和库存 | kg | 每批次及月度核对 | 完整声明统计期 | 同一精制厂及产品配方 | 每 1 kg 参考流 | 校准证书；原始台账；边界核对；缺口与不确定性披露 |
| cp_material | preparation; finishing | lignite_feed; subbit_feed; pitch_binder | 前景生产记录 | 批次；原料名称；煤阶；供货量；含水率；库存变动；配方 | 用称重、供货及配料记录核算外部净投入；厂内回用单独核对 | kg | 每批次及月度核对 | 完整声明统计期 | 同一精制厂及产品配方 | 每 1 kg 参考流 | 校准证书；原始台账；边界核对；缺口与不确定性披露 |
| cp_energy | preparation; drying; finishing; packaging | electricity | 前景生产记录 | 电表读数；计量边界；电压；供应商；国家；归属工段；统计期 | 读取分项电表并与总表和账单核对；避免共用负荷重复计量；保留停启用电 | kWh | 每批次及月度核对 | 完整声明统计期 | 同一精制厂及产品配方 | 每 1 kg 参考流 | 校准证书；原始台账；边界核对；缺口与不确定性披露 |
| cp_heat | drying | drying_heat | 前景生产记录 | 热表；蒸汽及返回冷凝水流量；温度；压力；焓；供热损耗及来源 | 采用校准热表；蒸汽供热按进出焓差及实测流量核算，附物性方法；不采用默认效率 | MJ | 每批次及月度核对 | 完整声明统计期 | 同一精制厂及产品配方 | 每 1 kg 参考流 | 校准证书；原始台账；边界核对；缺口与不确定性披露 |
| cp_emissions | drying | dryer_vapor; plant_dust | 前景生产记录 | 排气流量；颗粒物浓度；运行小时；水分平衡；冷凝水去向；控制装置 | 以排放监测与运行记录积分；蒸发水以闭合水分台账核对，分别记录回收和排气；缺测披露估算与不确定性 | kg | 每批次及月度核对 | 完整声明统计期 | 同一精制厂及产品配方 | 每 1 kg 参考流 | 校准证书；原始台账；边界核对；缺口与不确定性披露 |
| cp_waste | finishing | lignite_reject | 前景生产记录 | 废物组成；净质量；去向；回用量；转移单；煤阶 | 称量外部处置的褐煤碎片并核对废物转移和内部回用；不将灰渣混入该流 | kg | 每批次及月度核对 | 完整声明统计期 | 同一精制厂及产品配方 | 每 1 kg 参考流 | 校准证书；原始台账；边界核对；缺口与不确定性披露 |
| cp_packaging | packaging | pe_film | 前景生产记录 | 薄膜树脂；净用量；损耗；产品批次；包装规格 | 按采购、领用和库存台账核算聚乙烯薄膜；记录随燃料交付的质量及裁切废膜另行交换 | kg | 每批次及月度核对 | 完整声明统计期 | 同一精制厂及产品配方 | 每 1 kg 参考流 | 校准证书；原始台账；边界核对；缺口与不确定性披露 |
| cp_allocation | all processes | shared_operations | 前景生产记录 | 共用负荷；计量点；批次；物理驱动；已分配比例；共产品；敏感性 | 先分项计量；保留工程因果关系及所有份额核对；对缺乏依据的分配提交方法审查 | 记录原单位 | 每批次及月度核对 | 完整声明统计期 | 同一精制厂及产品配方 | 每 1 kg 参考流 | 校准证书；原始台账；边界核对；缺口与不确定性披露 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_records` | all inventory rows | 将同一统计期的可归属交换量除以放行燃料净质量，保留交换分子单位。参考产品本身为 1 千克。 | cp_mass; cp_material; cp_energy; cp_heat; cp_emissions; cp_waste; cp_packaging; cp_allocation | 每 1 kg 参考流的交换量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_state` | reference_product | 水分、配方、煤阶及热值须与清单批次一致；不能把干基和实收基混用。 | cp_mass; cp_material |
| `quality_complete` | all inventory rows | 记录统计期、仪表校准、启动停机、库存和回用；实际存在的额外交换均需补充；无记录不是零值。 | 采集协议及原始台账 |
| `quality_range` | all inventory rows | 外部经验范围需至少两个独立、原文已核实且边界相容的来源；当前以实测采集代替默认范围。 | 来源适用性及独立性记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference_product | 校验参考数量为 1 千克燃料净质量、所有必需限定信息齐全，且与放行批次和分析基准一致。 |  |
| `validate_denominator` | all inventory rows | 所有交换必须使用相同成品分母；核对完整统计期、电量转换和热量交接点，不重复计入回用或热电生产负荷。 |  |
| `validate_balance` | material_and_water | 核对干物质和水分平衡，保留包装、废物、排放、库存及回用台账；调查超出声明测量不确定性的偏差，不使用未经验证的默认容差。 |  |
| `validate_identity` | all inventory rows | 未解决 UUID 不得用代理替代；数据集发布前按实际地域、电压、介质、产品状态及排放环境确认身份。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景制造数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 匹配产品形态、水分和路线的燃料供应建模，并连接上游及下游 |
| excluded_use | 终端有用热功能的直接替代；硬煤、泥炭、生物质或焦炭的代理；全生命周期无条件比较 |
| required_metadata | 必需限定信息；计量边界；统计期；回用；共产品；上游及下游链接 |
| required_quality_disclosure | UUID 及范围缺口；仪表及化验不确定性；分配；缺测；覆盖范围 |
| update_trigger | 原料、配方、水分、热电源、技术或包装改变时更新 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-brown-coal-fuels` | `official_guidance` | [联合国统计司：《CPC 3.0 解释性注释》，2025-06-30，PDF 第 56 页](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf); 核实日期 2026-10-01 | 产品边界、煤阶及有无粘结剂的变体 |
| `leag-refining-route` | `literature` | [LEAG：褐煤精制，Schwarze Pumpe；网页](https://www.leag.de/de/standorte-technologien/veredlung/); 获取日期 2026-10-01 | 原料制备、干燥、成型或研磨及散装/包装形态；德国生产商案例，不支持默认耗用量 |
| `ghg-product-standard` | `official_guidance` | [Product Life Cycle Accounting and Reporting Standard](https://docs.wbcsd.org/2011/09/Product_Life_Cycle_Accounting_Reporting_Standard.pdf); WRI/WBCSD, 2011, chapters 8–9, printed pp.47–48 and 63; verified 2026-10-01 | 原始数据、质量指标、过程细分与物理分配；仅采用通用原则，无默认因子 |
| `un-ires-energy` | `official_guidance` | [International Recommendations for Energy Statistics](https://unstats.un.org/unsd/energystats/methodology/documents/IRES-web.pdf); United Nations, 2018, chapter IV, printed pp.44 and 46; verified 2026-10-01 | 电量换算、高低位热值基准及燃料特定计量；无制造过程范围 |
