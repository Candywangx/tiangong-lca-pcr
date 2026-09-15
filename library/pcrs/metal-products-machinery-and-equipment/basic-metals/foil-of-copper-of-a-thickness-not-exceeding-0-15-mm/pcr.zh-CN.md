---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.foil-of-copper-of-a-thickness-not-exceeding-0-15-mm
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 厚度不超过0.15毫米的铜箔

## 1. 范围与适用性

本 PCR 适用于厚度声明值不超过 0.15 mm、在生产商厂门以卷、卷材、片材或分切宽度形态交付的无支撑铜或铜合金箔。它将电解（电沉积，ED）铜箔与加工（压延，RA）铜箔作为不同生产路线覆盖。只有当表面处理、粗化、钝化、退火或涂层属于交付铜箔的一部分，且其材料与过程负荷均已纳入时，才可覆盖相应铜箔。

目标前景数据集代表铜箔制造，而非下游应用。锂离子电池集流体级、印制电路级、柔性电路级或其他应用专用牌号仅可依据其自身已声明规格实例化本 PCR；任何单一牌号均不代表整个类别。

以非铜材料作为结构芯层的复合铜箔、覆铜板、柔性覆铜板、印制电路板、层压板、电极层压件，以及铜箔已经与基材或活性材料层粘结的任何产品均不在范围内。厚度超过 0.15 mm 的铜板、铜片或铜带也不在范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.basic-metals.foil-of-copper-of-a-thickness-not-exceeding-0-15-mm` |
| classification_refs | CPC 3.0 `41515`，厚度不超过 0.15 mm 的铜箔 |
| covered_products | 厚度 ≤0.15 mm 的无支撑铜或铜合金箔，包括 ED 与压延路线，以及已声明的一体化表面处理或涂层 |
| excluded_products | 带结构芯层的复合铜箔；覆铜板或柔性覆铜板；印制电路板；电极层压件；已与基材或活性材料层粘结的铜箔；厚度 >0.15 mm 的铜板、铜片或铜带 |
| representative_product | 不设代表整个类别的单一应用牌号；具体数据集必须识别路线与交付铜箔规格 |
| production_route | `electrodeposited`、`rolled` 或另行论证的路线；混合路线平均值必须披露路线份额，且不得掩盖技术、能源、良率与材料差异 |
| market_state | 生产商厂门的净合格铜箔，采用已声明的交付形态与包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 满足已声明规格及 CPC 3.0 `41515` 边界的净合格铜箔 |
| How much | 1,000 kg 净交付铜箔产品，不含包装与任何可拆卸载体 |
| How well | 已声明路线、厚度、面密度、铜牌号或纯度、表面状态、退火或硬态、涂层状态与交付卷材状态 |
| How long or cycle | 一个完整生产报告期；不赋予使用寿命功能 |
| reference_flow_link | `slitting_inspection_packaging` 的生产商厂门输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 铜箔 `e41f89ae-d52b-49e7-a9ad-5977e2b1314f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 生产路线；名义与实测厚度；厚度范围或公差；实测面密度；铜牌号或纯度；适用时的合金牌号；ED 铜箔的毛面/光面或等效侧面标识；表面处理与粗糙度/轮廓状态；退火或硬态；有涂层时的涂层化学组成与涂层质量，否则为 `uncoated`；卷/卷材/片材形态、宽度、长度或净面积、接头状态、卷芯或可拆卸载体状态及包装排除；地理位置；报告期；能源组合；净良率；内部及外部废料去向 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部清单结果归一化至最终检验后离开的 1,000 kg 合格铜箔；排除包装与可拆卸载体质量，并单独披露计入交付产品的附着型非铜表面处理或涂层质量。 |
| `foil_thickness` | 参考产品 | Length | µm | 报告按批次或产品加权的实测厚度与声明公差；所有被代表产品均须 ≤150 µm。不得从名义电池级或电路板级牌号推断厚度。 |
| `foil_areal_mass` | 参考产品 | Mass per area | kg/m2 | 以所代表生产的实测净铜箔质量除以实测交付铜箔面积计算；除非数据集记录了产品特定的实测密度与组成依据，不得仅由厚度计算面密度。 |
| `copper_composition` | 参考产品与含铜输入 | Mass fraction | kg/kg | 报告铜纯度或合金牌号及分析或证书依据；不得把单一高纯度或电池级规格作为类别默认值。 |
| `surface_and_coating` | 参考产品 | Mass per area 及适用时声明的轮廓指标 | kg/m2 及声明的粗糙度/轮廓单位 | 识别每一侧的处理或粗化状态及测量约定。分别报告涂层化学组成与实测涂层质量；仅在无涂层时使用 `uncoated`。 |
| `production_yield` | 各路线及最终转换 | Mass ratio | kg/kg | 采用一致的干质量基准报告合格输出、边料、不合格箔、样品、在制品变化与其他含铜损失；净良率按合格产品质量除以应核算含铜输入质量计算。 |

## 5. 系统边界

当为购入精炼铜、铜废料、铜化学品、能源、水、处理化学品、包装及其他供应投入链接上游数据集时，数据集为从摇篮到生产商厂门。前景边界始于已声明含铜原料在工厂接收，终于合格铜箔的分切、检验与包装之后。当相应作业由报告组织实施时，纳入路线特定的成箔、热处理、表面处理或粗化、存在时的涂布、公用工程、排放控制、废水处理、废料处理与厂内回收。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告场址接收门处各含铜原料的物理与商业状态，包括精炼铜、铜废料、阳极或溶液输入、坯料、铜带或其他中间体 |
| starting_condition_role | 前景制造始于接收；更早的开采、冶炼、精炼、废料准备与运输负荷均链接为上游数据集，除非实际在报告边界内实施 |
| product_classification_scope | CPC 3.0 `41515`；ED 与压延箔是路线特定成员，不是可互换的默认技术 |
| recursive_input_rule | 购入的 CPC 3.0 `41515` 铜箔作为输入记录，并附其自身上游数据集与声明用途；不得在同一过程清单内再次创建其制造 |
| upstream_dataset_requirement | 为所有材料与能源输入链接技术、地理与时期适配的上游数据集；识别再生含量声明与铜废料准备边界 |
| disclosure | 声明路线、场址地理位置、报告期、原料状态、已纳入上游阶段、电力与燃料供应、厂内公用工程、处理/涂层范围、内部回收闭环、外部废料去向与排除作业 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_separation` | 路线特定前景模型 | 至少选择一种成箔路线。除非声明产品为按销量加权的平均值，且路线份额、能源、良率与材料差异仍保持透明，否则应将 `ed_foil_formation` 与 `rolled_foil_formation` 分开。 | `fukuda-ed-foil-production`; `jx-rolled-copper-foil-technology` |
| `boundary_treatment_inclusion` | 表面处理、粗化、退火或涂层铜箔 | 纳入产品出厂前实施的全部处理、粗化、退火、钝化、涂布、清洗、干燥及相关公用工程与排放；两侧状态不同时分别声明。 | `ipc-4562b-toc`; `fukuda-ed-foil-production`; `jx-rolled-copper-foil-technology` |
| `boundary_excluded_products` | 产品识别 | 不得把数据集用于复合铜箔、覆铜板、柔性覆铜板、印制电路板、电极层压件，或已经与结构基材或活性材料层粘结的铜箔。 | `unsd-cpc-3-0-explanatory-notes`; `ipc-4562b-toc` |
| `boundary_resource_and_release_coverage` | 所有已纳入过程 | 核算含铜材料、过程化学品、水、电力、燃料、直接大气排放、废水污染物、废物与含铜残余物。在记录允许时使用物质特定流，而非未量化的聚合流。 | `eu-jrc-nfm-bref` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `ed_foil_formation` | 电解成箔 | conditional | 所代表铜箔中有任何部分采用电沉积制造时必需 | 前景生产 | 实测未完成 ED 铜箔输出与应核算铜输入 |
| `rolled_foil_formation` | 压延成箔 | conditional | 所代表铜箔中有任何部分采用轧制或其他加工减薄制造时必需 | 前景生产 | 实测未完成压延铜箔输出与应核算铜输入 |
| `surface_thermal_finishing` | 表面与热处理 | conditional | 产品边界内实施退火、硬态调整、粗化、钝化、增粘处理或涂层时必需 | 前景调质 | 转入最终转换的实测完成铜箔 |
| `slitting_inspection_packaging` | 分切、检验与包装 | required | 生产商厂门净合格铜箔始终纳入 | 前景最终转换 | 1,000 kg 合格铜箔输出 |

### 过程：电解成箔（`ed_foil_formation`）

#### 输入

##### 产品流

###### ED 含铜原料（`ed_copper_feed`）

记录跨越过程边界的每一种含铜原料，例如精炼铜、已准备铜废料、阳极、铜盐或购入电解液，不得把不同原料状态视为可互换。

- 选定流：为每种实际含铜原料状态选择一个 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：进入 ED 成箔的计量、称量或库存核算干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每实测未完成 ED 铜箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ed_materials`
- 来源：

###### 电沉积及辅助设备用电（`ed_electricity`）

记录整流、循环、过滤、剥箔、通风及直接支持设备的计量电力；共享电表用量仅依第 7 节分配。

- 选定流：选择地理与时期适配的电力供应流
- 流属性/单位：Energy / kWh
- 数量规则：可归属于 ED 成箔的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每实测未完成 ED 铜箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ed_energy`
- 来源：

###### 电解液补加、工艺水与 ED 辅料（`ed_consumables`）

对每一种已消耗酸、铜盐、添加剂、工艺水供应、过滤介质或其他材料，在数据包中建立独立产品流行；本卡片只定义共同采集规则，不允许聚合不同物质。

- 选定流：为每种已消耗材料选择物质与供应特定的 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：采购量加期初库存减期末库存，并校正转移与退回
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每实测未完成 ED 铜箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_ed_materials`
- 来源：

#### 输出

##### 产品流

###### 未完成 ED 铜箔（`ed_unfinished_foil`）

记录转入后处理或最终转换的实测 ED 铜箔，在此阶段不得计为合格参考产品。

- 选定流：铜箔 `e41f89ae-d52b-49e7-a9ad-5977e2b1314f`
- 流属性/单位：Mass / kg
- 数量规则：称量或经质量平衡核对的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：ED 成箔过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ed_output`
- 来源：

##### 废物流

###### ED 含铜残余物与不合格箔（`ed_copper_residues`）

按实测质量与去向记录各含铜残余物，并区分内部返回电解液、内部重熔、外部回收与处置。

- 选定流：选择与已记录残余物状态和去向匹配的废物流或产品流
- 流属性/单位：Mass / kg
- 数量规则：按残余物类别与去向测量质量；不得用内部或外部回收抵减能源使用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每实测未完成 ED 铜箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ed_output`
- 来源：

##### 基本流

###### ED 直接排放（`ed_direct_releases`）

对厂内处理后实测或许可的直接大气与水排放建立物质特定基本流行；送往外部处理厂的废水不得表示为基本流。

- 选定流：为每种已识别排放物质及接收环境选择一个 Tiangong 基本流
- 流属性/单位：Mass / kg
- 数量规则：报告期经核实的监测结果、排放记录或工程计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每实测未完成 ED 铜箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_site_releases`
- 来源：

### 过程：压延成箔（`rolled_foil_formation`）

#### 输入

##### 产品流

###### 压延用铜原料（`rolled_copper_feed`）

记录进入前景路线的实际精炼铜、铜合金、铸锭、坯料、板坯或铜带状态；除非在场址实施，此状态之前的生产均链接到上游。

- 选定流：选择与实际铜原料状态和牌号匹配的 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：进入压延的称量或库存核算干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每实测未完成压延铜箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolled_materials`
- 来源：

###### 压延用电力与热能（`rolled_energy`）

对用于压延、中间退火、清洗及直接支持设备的电力和每种燃料或购入热载体，在数据包中建立独立行。

- 选定流：为每种载体选择地理、技术与时期适配的能源供应流
- 流属性/单位：Energy / kWh、MJ 或载体特定物理单位
- 数量规则：可归属于压延成箔的计量用量，或经核对的燃料与购入热记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每实测未完成压延铜箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolled_energy`
- 来源：

###### 轧制润滑剂与工艺辅料（`rolled_consumables`）

对每种已消耗润滑剂、清洗剂、工艺水供应、轧辊处理材料或其他材料建立独立产品流行。

- 选定流：为每种已消耗材料选择物质与供应特定的 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：采购量加期初库存减期末库存，并校正回收与退回材料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每实测未完成压延铜箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_rolled_materials`
- 来源：

#### 输出

##### 产品流

###### 未完成压延铜箔（`rolled_unfinished_foil`）

记录从压延路线转入后处理或最终转换的铜箔，并声明转移时的退火或硬态。

- 选定流：铜箔 `e41f89ae-d52b-49e7-a9ad-5977e2b1314f`
- 流属性/单位：Mass / kg
- 数量规则：称量或经质量平衡核对的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：压延成箔过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolled_output`
- 来源：

##### 废物流

###### 压延路线铜废料与工艺废物（`rolled_wastes`）

为铜边料与不合格箔、废润滑剂、处理污泥及其他废物建立独立行；识别实测质量、物理状态与去向。

- 选定流：选择与各已记录废物状态及去向匹配的废物流或产品流
- 流属性/单位：Mass / kg
- 数量规则：按废物类别与去向测量质量；不得用回收收益抵减过程消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每实测未完成压延铜箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolled_output`
- 来源：

##### 基本流

###### 压延路线直接排放（`rolled_direct_releases`）

使用正确接收环境，为厂内控制后的直接燃烧及工艺大气或水排放建立物质特定行。

- 选定流：为每种已识别排放物质及接收环境选择一个 Tiangong 基本流
- 流属性/单位：Mass / kg
- 数量规则：报告期经核实的监测结果、基于燃料的计算、排放记录或工程计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每实测未完成压延铜箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_site_releases`
- 来源：

### 过程：表面与热处理（`surface_thermal_finishing`）

#### 输入

##### 产品流

###### 进入后处理的未完成铜箔（`finishing_foil_input`）

记录进入退火、硬态调整、粗化、钝化、增粘处理、涂布、清洗或干燥的路线特定未完成铜箔。

- 选定流：铜箔 `e41f89ae-d52b-49e7-a9ad-5977e2b1314f`
- 流属性/单位：Mass / kg
- 数量规则：称量或经质量平衡核对的转移质量，按 ED 与压延路线区分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每实测完成铜箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：

###### 后处理能源、处理化学品与涂层材料（`finishing_inputs`）

对电力、燃料或热、水、每种表面处理化学品及每种涂层组分，在数据包中建立独立行。只有经核实的无涂层产品方可记录零涂层输入。

- 选定流：为每种实际能源或材料输入选择供应特定的 Tiangong 产品流
- 流属性/单位：Energy 或 Mass / 载体适用单位
- 数量规则：各后处理作业的计量能源及材料领用量或库存核算消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每实测完成铜箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：

#### 输出

##### 产品流

###### 转入最终转换的完成铜箔（`finished_foil_transfer`）

记录后处理后的铜箔质量与产品规格，包括两侧表面状态、退火或硬态及涂层状态。

- 选定流：铜箔 `e41f89ae-d52b-49e7-a9ad-5977e2b1314f`
- 流属性/单位：Mass / kg
- 数量规则：以处理与涂层加入量及后处理损失核对的实测转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：后处理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_records`
- 来源：

##### 废物流

###### 后处理废物与废槽液（`finishing_wastes`）

为废槽液、送外部处理的废水、污泥、过滤材料及含铜后处理残余物建立独立行，记录去向与任何内部回收。

- 选定流：选择与各已记录废物状态及去向匹配的废物流
- 流属性/单位：Mass / kg
- 数量规则：按废物类别与去向测量或库存核算质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每实测完成铜箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：

### 过程：分切、检验与包装（`slitting_inspection_packaging`）

#### 输入

##### 产品流

###### 进入最终转换的铜箔（`final_conversion_foil_input`）

记录转入分切与最终检验的路线和产品特定铜箔。

- 选定流：铜箔 `e41f89ae-d52b-49e7-a9ad-5977e2b1314f`
- 流属性/单位：Mass / kg
- 数量规则：分切与最终检验前的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每合格铜箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_conversion`
- 来源：

###### 最终转换能源与包装（`final_conversion_inputs`）

为电力与每种包装材料建立独立行。包装计入清单，但从参考产品质量中排除。

- 选定流：为每种实际能源或包装输入选择供应特定的 Tiangong 产品流
- 流属性/单位：Energy 或 Mass / 载体适用单位
- 数量规则：可归属于合格产品的计量电力，以及实测或采购包装消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格铜箔输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_conversion`
- 来源：

#### 输出

##### 产品流

###### 净合格铜箔（`reference_copper_foil`）

这是检验后的参考产品，其质量不含包装与可拆卸载体。

- 选定流：铜箔 `e41f89ae-d52b-49e7-a9ad-5977e2b1314f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定归一化至 1,000 kg 合格产品；根据实测合格质量缩放已采集清单
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1,000 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 分切边料、不合格箔与样品（`final_copper_scrap`）

按实测质量与实际内部返回、外部回收或处置去向，记录含铜边料、不合格卷材或片材及破坏性样品。

- 选定流：选择与各已记录铜废料状态及去向匹配的废物流或产品流
- 流属性/单位：Mass / kg
- 数量规则：按废料类别与去向测量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格铜箔输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_conversion`
- 来源：

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 路线、产品牌号与后处理作业 | 通过分别计量 ED 与压延路线、具有实质不同表面或涂层系统的产品，以及能源或良率不同的作业来避免分配。 | `ec-pef-method-2021` |
| `allocation_shared_utilities` | 共享公用工程与处理系统 | 无法细分时，按照计量用量、经负荷校正的运行时间、处理体积和污染负荷或其他经核实工程关系等有因果依据的驱动量分配共享能源、水与处理。仅在无法获得更具因果性的关系时才允许质量分配。 | `ec-pef-method-2021` |
| `allocation_internal_scrap` | 报告边界内返回的铜 | 将内部废料返回建模为内部闭环：纳入收集、准备、重熔或溶解、处理与能源，但不得产生替代原生铜信用，也不得把返回质量重复计为第二产品。 | `ec-pef-method-2021` |
| `allocation_external_recycling` | 离开边界供外部回收的含铜材料 | 报告废料或残余物的物理输出与去向。基础生产商厂门清单不得采用避免负荷信用；任何再生含量或寿命终结分配方法均须作为显式下游情景，列出全部参数且不得重复计算。 | `ec-pef-method-2021` |
| `allocation_multiple_saleable_foils` | 联合生产多种可售铜箔牌号 | 优先使用产品级记录。若仍有真正不可分割的负荷，则采用物理质量分配并披露；经济分配仅在理由有记录并提供敏感性结果时使用，因为价格差异可能反映应用牌号而非制造因果性。 | `ec-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_ed_materials` | `ed_foil_formation` | 铜原料、电解液、水与辅料 | 采购、领用、库存、退回与转移记录 | 材料身份；牌号；期初库存；采购；期末库存；退回；转移质量；水分基准 | 将企业记录与 ED 生产核对，并保留物质级行 | kg 或材料特定单位 | 批次或每月，并在报告期核对 | 与 ED 输出相同的代表期 | 每个 ED 生产场址 | 按材料汇总净消耗并归一化至未完成 ED 输出 | 发票、库存核对、批次单与材料证书 |
| `cp_ed_energy` | `ed_foil_formation` | ED 电力 | 电表与生产日志 | 电表起止值；分表用量；运行小时；生产质量；电力供应商与组合时期 | 使用专用电表；否则应用已披露共享公用工程规则 | kWh | 连续或班次记录，每月核对 | 与 ED 输出相同的代表期 | 每个 ED 生产场址 | 汇总可归属电力并归一化至未完成 ED 输出 | 校准电表记录与核对结果 |
| `cp_ed_output` | `ed_foil_formation` | 未完成铜箔与含铜残余物 | 称量、批次、转移与处置记录 | 毛重；皮重；净重；批次；路线；合格转移；残余物类别；去向 | 核对输入、转移、库存变化与残余物 | kg | 每批，每月核对 | 与 ED 输入相同的代表期 | 每个 ED 生产场址 | 按输出及去向汇总干燥净质量 | 秤具校准、批次记录与质量平衡签核 |
| `cp_rolled_materials` | `rolled_foil_formation` | 铜原料、润滑剂、水与辅料 | 采购、领用、库存、退回与转移记录 | 材料身份；牌号；期初库存；采购；期末库存；回收量；退回；转移质量 | 将材料记录与压延生产核对 | kg 或材料特定单位 | 批次或每月，并在报告期核对 | 与压延输出相同的代表期 | 每个压延场址 | 按材料汇总净消耗并归一化至未完成压延输出 | 发票、库存核对、批次单与材料证书 |
| `cp_rolled_energy` | `rolled_foil_formation` | 压延电力、燃料与购入热 | 电表、燃料发票、储罐与生产日志 | 能源载体；电表起止值；采购量；库存变化；使用时的低位热值；运行小时；输出质量 | 计量每种载体；核对燃料库存与发票；区分厂内燃烧与购入能源 | kWh、MJ 或载体特定单位 | 连续或班次记录，每月核对 | 与压延输出相同的代表期 | 每个压延场址 | 汇总可归属载体用量并归一化至未完成压延输出 | 仪表校准、发票、储罐核对与计算表 |
| `cp_rolled_output` | `rolled_foil_formation` | 未完成铜箔、铜废料与其他废物 | 称量、批次、转移与处置记录 | 毛重；皮重；净重；批次；硬态；合格转移；废物类别；去向 | 核对输入、输出、在制品变化与废物 | kg | 每批，每月核对 | 与压延输入相同的代表期 | 每个压延场址 | 按输出及去向汇总干燥净质量 | 秤具校准、批次记录与质量平衡签核 |
| `cp_finishing_records` | `surface_thermal_finishing` | 铜箔、能源、处理和涂层输入、完成转移及废物 | 仪表、批次配方、领用、库存、称量与处置记录 | 路线；批次；输入/输出质量；能源载体；材料身份；涂层领用与回收；槽液补加；废物类别；去向 | 核对每条后处理线与产品族，不得平均有涂层与无涂层产品 | kg、kWh、MJ 或载体特定单位 | 每批或每卷，每月核对 | 与完成输出相同的代表期 | 每个后处理场址与生产线 | 仅聚合具有相同声明处理/涂层系统的产品；归一化至完成转移 | 批次配方、仪表和秤具校准、化学分析与库存核对 |
| `cp_final_conversion` | `slitting_inspection_packaging` | 输入铜箔、能源、包装、合格铜箔、边料、不合格品与样品 | 仪表、分切计划、称量、检验、包装与处置记录 | 路线；批次；输入质量；合格质量；宽度；长度/面积；厚度；面密度；边料；不合格品；样品；包装质量；去向 | 核对每个产品批次的最终检验与包装 | kg、m2、µm、kWh 及材料特定单位 | 每批，每月核对 | 与产品输出相同的代表期 | 每个最终转换场址 | 按声明产品与路线汇总合格质量；分别汇总废料与包装 | 秤具与测厚仪校准、检验证书与处置记录 |
| `cp_site_releases` | 所有适用过程 | 直接大气与水排放 | 连续监测、定期采样、许可报告、燃料分析与排放记录 | 物质；环境介质；浓度；流量或体积；持续时间；燃料量；排放因子来源；处理阶段 | 由经核实测量或有记录的工程方法计算物质质量 | kg 或测量特定单位 | 按监测或采样频率，并在报告期核对 | 与生产相同的代表期 | 每个报告场址与排放口 | 按物质与接收环境汇总，再按因果驱动量分配 | 实验室资质、仪器校准、许可报表与签字计算 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 报告期数量 × 1,000 kg / 报告期合格参考产品质量 | 报告期数量；合格铜箔质量 | 每 1,000 kg 合格铜箔的数量 | `ec-pef-method-2021` |
| `calc_areal_mass` | 参考产品 | 面密度 = 铜箔净质量 / 实测交付铜箔面积；报告面积与质量测量基准，不得以名义厚度替代 | 铜箔净质量；交付铜箔面积 | kg/m2 | `ipc-4562b-toc` |
| `calc_net_yield` | 各成箔路线与最终转换 | 净良率 = 合格输出质量 / 应核算含铜输入质量；同时报告各含铜损失与库存变化，以便审计该比值 | 合格输出；含铜输入；在制品变化；废料；残余物 | kg/kg 与质量平衡表 | `eu-jrc-nfm-bref` |
| `calc_coating_mass` | 涂层铜箔 | 单位面积涂层质量 = 产品上保留的涂层材料净质量 / 涂层交付面积；区分输入、回收材料与废物 | 涂层输入；回收材料；废物；涂层面积 | 按涂层组分的 kg/m2 | `ipc-4562b-toc` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_temporal` | 所有前景数据 | 使用近期且连续、能代表正常运行的时期；连续生产通常至少覆盖 12 个月，较短生产活动必须覆盖全部运行状态并说明理由。 | 报告期定义、月度趋势、停机与异常运行日志 |
| `dq_technology` | 成箔路线 | 分别记录 ED 与压延生产，包括实际设备与后处理路线；不得以任何电池级或印制电路级数据集代替整个类别。 | 路线图、设备清单、生产记录与产品族核对 |
| `dq_geography_energy` | 能源与上游供应 | 使用场址地理位置和报告期的电力与燃料供应；合同工具与物理清单组合应分别披露。 | 仪表、发票、供应商数据与能源组合文件 |
| `dq_mass_balance` | 含铜输入与输出 | 对各路线与场址核对含铜输入、合格铜箔、在制品变化、内部返回、外部废料、残余物、样品与无法解释的差额。 | 已签字质量平衡表与库存核对 |
| `dq_product_specification` | 参考产品 | 保留按批次加权的厚度、面密度、纯度或合金、两侧表面状态、退火或硬态、涂层及交付状态证据。 | 分析或合格证书、检验记录与校准测量 |
| `dq_completeness` | 所有已纳入过程 | 覆盖所有可能实质影响结果的材料与能源输入及物质特定排放；披露排除项并量化其筛选依据。 | 流检查表、仪表与采购核对、许可记录及排除日志 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考产品 | 确认 CPC 3.0 `41515`、实测厚度 ≤150 µm、无支撑铜箔状态，并排除复合铜箔、覆铜板、层压板、电路板与电极层压件。 | `unsd-cpc-3-0-explanatory-notes` |
| `validate_route_scope` | 过程图与数据集元数据 | 确认 ED 与压延路线已识别并分别编制清单，或已声明的混合路线产品报告路线份额，并保留路线特定能源、良率与处理数据。 | `fukuda-ed-foil-production`; `jx-rolled-copper-foil-technology` |
| `validate_reference_flow` | 参考流 | 确认恰为 1,000 kg 净合格铜箔，不含包装与可拆卸载体，并验证所有必需限定信息均已填写。 | `ipc-4562b-toc` |
| `validate_mass_balance` | 各路线与最终转换 | 归一化前验证含铜质量平衡、在制品变化、合格输出、全部废料与残余物去向及任何无法解释的差额。 | `eu-jrc-nfm-bref` |
| `validate_energy_yield` | 各已纳入过程 | 确认电力与各热能载体均为与输出同期的前景记录，并报告路线良率与最终分切良率，且未净扣废料回收信用。 | `eu-jrc-nfm-bref`; `ec-pef-method-2021` |
| `validate_surface_state` | 处理、退火或涂层铜箔 | 确认两侧处理/粗糙度、退火或硬态、涂层化学组成与保留质量；无涂层时确认明确的 `uncoated`。 | `ipc-4562b-toc`; `fukuda-ed-foil-production`; `jx-rolled-copper-foil-technology` |
| `validate_release_coverage` | 场址清单 | 确认物质特定直接大气与水排放、送外部处理的废物及含铜残余物被分配至正确流类型与去向。 | `eu-jrc-nfm-bref` |
| `validate_no_category_extrapolation` | 发布声明与下游使用 | 拒绝在缺乏有依据生产权重聚合时，将单一电池级、印制电路级、仅 ED、仅压延、有涂层或无涂层数据集外推至完整铜箔类别的任何声明。 | `ipc-4562b-toc`; `ec-pef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 生产商厂门铜箔的路线与产品特定前景制造数据集 |
| downstream_use | 当声明铜箔规格匹配时，用于电池、印制电路、电子制造或其他产品铜箔供应的 LCA 过程或生命周期模型 |
| allowed_use | 用于所代表的场址、时期、路线组合、厚度、牌号或纯度、表面处理、退火或硬态、涂层与交付状态；仅允许在披露生产权重且保留路线差异时聚合 |
| excluded_use | 复合铜箔、覆铜板、柔性覆铜板、印制电路板、电极层压件、下游电极涂布或层压，以及基于单一窄牌号的类别整体声明 |
| required_metadata | CPC 代码；Tiangong 参考流 UUID；场址与地理位置；报告期；ED/压延路线及份额；厚度与面密度；纯度/合金；两侧表面状态与粗糙度约定；退火/硬态；涂层状态与质量；卷/卷材/片材交付状态；能源供应；良率；废料与残余物去向；分配与上游边界选择 |
| required_quality_disclosure | 仪表覆盖；测量与分析方法；时间覆盖；路线与产品代表性；铜质量平衡闭合；分配；排除流；数据缺口；二手数据使用；不确定性或敏感性结果 |
| update_trigger | 路线或路线份额、场址、电力或燃料供应、铜原料状态、厚度系列、表面处理、退火、涂层系统、良率、废料回收、分配、上游数据集或报告期发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-explanatory-notes` | official_guidance | 联合国统计司，*Central Product Classification (CPC) Version 3.0 Explanatory Notes*，2025-06-30，子类 41515。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（访问于 2026-08-08） | 官方产品类别边界，以及与厚度超过 0.15 mm 的铜板、铜片和铜带的区分 |
| `ipc-4562b-toc` | standard | IPC，*IPC-4562B: Metal Foil for Printed Board Applications*，目录，2023-10。https://www.ipc.org/TOC/IPC-4562B-TOC.pdf（访问于 2026-08-08） | 电解箔与加工箔的路线区分，以及厚度、面质量、轮廓、处理、纯度与交付等声明/检验维度；不作为类别整体性能阈值 |
| `eu-jrc-nfm-bref` | official_guidance | 欧盟委员会联合研究中心，*Best Available Techniques Reference Document for the Non-Ferrous Metals Industries*，2016-06 通过，2017 年发布。https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/non-ferrous-metals-industries-0（访问于 2026-08-08） | 铜过程资源、能源、废物、大气排放与水排放清单覆盖及质量平衡关注项 |
| `ec-pef-method-2021` | official_guidance | 欧盟委员会 2021-12-15 关于使用环境足迹方法的建议 (EU) 2021/2279，附件 I 产品环境足迹方法。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（访问于 2026-08-08） | 功能单位归一化、企业特定数据、多功能性、回收分配透明度、数据质量与验证 |
| `fukuda-ed-foil-production` | handbook | 福田金属箔粉工业株式会社，*How Electrodeposited Copper Foil Is Produced*。https://www.fukuda-kyoto.co.jp/en/technology/making/foil_electrolytic.html（访问于 2026-08-08） | ED 路线顺序：电镀成箔、随产品变化的双面处理、分切/裁切、检验以及卷材或片材交付 |
| `jx-rolled-copper-foil-technology` | handbook | JX Advanced Metals Corporation，*Our Core Technologies Contributing to Societal Growth and Innovation*，轧制、退火与铜箔表面处理章节。https://www.jx-nmm.com/english/rd_sp/core_tech/（访问于 2026-08-08） | 压延路线反复轧制与退火、多道次厚度控制、粗化/电镀、抗氧化处理，以及铜箔与粘结复合材料的区分 |
