---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.wire-of-aluminium
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 铝线

## 1. 范围与适用性

本 PCR 适用于生产厂门交付的无绝缘铝线或铝合金线的前景数据包。产品交付时仍为单根线材的通用工程、电工、焊接、紧固及类似用途的拉制或其他成形线材均在范围内。本规则不限定合金、状态、直径、截面、涂层或工艺路线；这些特征是必填产品限定信息，不能作为选择窄规格参考流的理由。

本 PCR 不包括：尚未转化为成品线材的拉丝坯或线杆；棒、杆、型材、带、箔、粉、管；绝缘绕组线；成品绝缘电缆；绞线、电缆、编带；线材制成品；以及施工现场交付或安装。上游原生或再生铝生产、重熔、铸造和线杆生产应由相连的上游数据集表示；只有当这些工序与前景设施物理一体化并由前景记录支持时，才纳入前景。下游绞合、绝缘、电缆装配、使用、安装和寿命终止不属于本厂门前景边界。

ASTM B211/B211M-19 为轧制或冷加工铝及铝合金线提供产品属性背景；ASTM B230/B230M-22 证明电工铝线是本类别中需要明确限定的合法子类。EPD International 的基础铝产品和特种合金 PCR 覆盖上位 UN CPC 4153 类别。欧盟铁金属加工 BREF 仅用于拉丝工序序列的通用技术类比；其铁金属适用范围不得当作铝工艺运行证据。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.wire-of-aluminium |
| classification_refs | CPC 3.0：41533，铝线，精确范围参考 |
| covered_products | 交付时仍为线材的无绝缘单根铝线或铝合金线，包括通用工程、电工、焊接级、铆钉/冷镦及类似线材 |
| excluded_products | 尚未转化为成品线材的拉丝坯或线杆；棒、杆、型材、带、箔、粉、管；绝缘线；绞合导体、电缆、编带；线材制成品；已安装或施工现场交付系统 |
| representative_product | 可销售的无绝缘铝线或铝合金线，并声明合金、状态、截面和尺寸 |
| production_route | 接收或一体化生产铝拉丝坯；可选预处理；一道或多道拉制/成形；可选热处理；精整、检验和放行 |
| market_state | 生产厂门的成品线材净质量，位于下游绝缘、绞合、电缆装配、安装或使用之前 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在生产厂门生产符合声明要求的无绝缘铝线或铝合金线 |
| How much | 1,000 kg 可销售成品线材净质量 |
| How well | 满足声明的合金、状态、截面形状、尺寸和公差、表面状态或涂层，以及用途对应的力学或电气要求 |
| How long or cycle | 一个声明的生产批次或报告期生产组合，并对全部前景记录一致应用 |
| reference_flow_link | `aluminium_wire_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 铝线 `89db8507-09bd-45f8-ba96-4e459058412c` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 铝或合金牌号；状态；圆形或其他截面形状；名义直径或截面尺寸及公差；裸线或声明的涂层/表面处理；预期等级/用途类别；拉制/成形路线；热处理路线；生产地域；报告期；原生铝和再生铝占比；厂门市场状态 |

构建前景数据包时，每项必需限定信息都必须出现在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中。所选 Tiangong 记录为 state_code 100，并带有完整 CPC 41533 分类路径；不得在规范参考身份中加入直径、电缆、安装或窄用途限定。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及全部质量归一化清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 归一化到 1,000 kg 可销售成品线材净质量。托盘、卷轴、可回收载具及单独建模的包装不得计入参考产品质量。 |
| `intermediate_mass` | 拉丝坯和厂内线材中间品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用一致的干基/净质量计量转移，防止同一厂内中间品被计作外部输入或输出。 |
| `length_mass_conversion` | 以长度提供的记录 | 声明的质量和长度支撑 | kg 和 m | 仅可依据实测批次质量，或依据声明的截面尺寸和合金密度将长度换算为质量；保留尺寸、密度依据、公式和不确定性。 |
| `energy_units` | 电力和燃料 | 能量或燃料特定属性 | kWh 或 MJ | 保留计量源单位。仅按 1 kWh = 3.6 MJ 在 kWh 与 MJ 之间换算；没有记录燃料属性时，不得用热值换算替代燃料质量。 |
| `solution_mass` | 润滑剂、清洗剂、酸洗剂和涂层 | 供货产品质量，并在相关时记录活性含量 | kg | 当活性物质或干固体决定清单时，分别记录供货产品质量和浓度。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景铝线生产 | 纳入直接控制的坯料准备、拉制/成形、在线或批次热处理、精整、检验、场内物料搬运、废物至首次场外转移的处理，以及生产厂门放行。 | `eu-fmp-bref-2022`; `astm-b211-b211m-19`; `astm-b230-b230m-22` |
| `boundary_upstream_link` | 采购或单独生产的铝输入 | 将原生铝、再生铝、合金化、重熔、铸造和线杆/拉丝坯生产连接到可追溯上游数据集；只有工序物理一体化且有设施记录时才纳入前景。 | `environdec-basic-aluminium-pcr-1-0-2` |
| `boundary_direct_flows` | 全部前景过程 | 当电力、燃料、水、润滑剂、处理化学品、涂层材料、包装、工艺废料、废耗材、废水、固体废物和直接基本流跨越前景边界时予以记录；披露每项省略或不可得的物料流。 | `iai-aluminium-scrap-carbon-footprint-2025` |
| `boundary_downstream_exclusion` | 厂门放行后的产品使用 | 从本厂门数据包排除绝缘、绞合、电缆或导体装配、安装、使用、维护和寿命终止；只有另行声明的下游模型可加入这些阶段。 |  |
| `boundary_analogue_limit` | 过程图解释 | 欧盟 FMP BREF 仅用于预处理、拉制、可选热处理和精整的通用拉丝序列；实际铝工艺路线、化学品和排放点必须由前景记录确认。 | `eu-fmp-bref-2022` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 铝或铝合金拉丝坯/线杆进入前景边界时，已声明合金、状态、质量、供应商、再生成分声明和上游数据集；一体化设施则声明首个纳入的熔炼、铸造或轧制工序。 |
| starting_condition_role | 防止上游铝生产和拉丝坯制备被静默省略或重复计算。 |
| product_classification_scope | CPC 3.0 子类 41533，仅限成品无绝缘单根铝线，并与拉丝坯、绝缘线、绞合导体和电缆明确区分。 |
| recursive_input_rule | 如果输入本身是本 PCR 范围内的成品铝线，应将其记录为具有独立上游数据集的显式产品输入，不得在同一前景数据包内递归展开同一 PCR。 |
| upstream_dataset_requirement | 每项外部含铝输入、合金材料、电力/燃料供应、处理化学品、包装输入和场外处理服务均需要地域和时间适当的上游数据集，或记录明确的数据缺口。 |
| disclosure | 声明起始材料形态、合金和状态；原生/再生成分占比及产销监管链依据；拉制和热处理路线；表面处理/涂层；地域和报告期；废料去向和分配方法；与熔炼/铸造/轧制的一体化关系；以及排除的下游工序。 |

## 6. 过程清单结构

过程序列采用欧盟 FMP BREF 记录的通用拉丝拓扑，但每项铝特定工序和流仍须由前景确认。保留厂内中间转移用于质量平衡检查，但不把它们作为外部技术流交换。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `stock_pretreatment` | 拉丝坯接收与预处理 | conditional | 当接收或一体化坯料在拉制前进行机械清理、脱脂、酸洗、漂洗、载体涂覆或其他准备时纳入；否则记录旁路。 | 前景准备 | 转移至拉丝的备料质量（kg） |
| `wire_drawing` | 线材拉制与成形 | required | 始终纳入建立交付线材截面的拉制/成形道次。 | 前景生产 | 向后续转移的拉制线材质量（kg） |
| `heat_treatment` | 中间或最终热处理 | conditional | 当为达到声明状态或性能而采用退火或其他热处理时纳入。 | 前景调质 | 向后续转移的热处理线材质量（kg） |
| `finishing_and_release` | 精整、检验、包装和厂门放行 | required | 始终纳入实际发生的最终清洗/矫直/切割或收卷、检验、次品处理、一次性包装和放行。 | 前景精整与放行 | 1,000 kg 可销售成品线材净质量 |

### 过程：拉丝坯接收与预处理（`stock_pretreatment`）

#### 输入

##### 产品流

###### 接收铝或铝合金拉丝坯（`drawing_stock_input`）

按合金、状态、供应商或内部来源及上游数据集，记录每批接收或一体化生产的铝线杆/拉丝坯。不得默认使用金属种类未指定或建筑型材候选作为铝输入。

- 选定流：场址特定的铝或铝合金线杆/拉丝坯；构建前景数据包时必须选择 Tiangong UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入前景路线的实测坯料净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售成品线材净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`astm-b211-b211m-19`; `astm-b230-b230m-22`
- 数量范围：暂定拉丝坯质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1150
  - 单位：kg
  - 基准：每 1,000 kg 可销售成品线材净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的预处理水和工艺溶液（`pretreatment_consumables`）

在前景数据包中将水、清洗剂、酸洗剂、漂洗液、载体涂层及其他准备品记录为独立设施流；本流卡仅定义共同采集规则，不允许在最终清单中聚合。

- 选定流：各项场址特定水和处理产品流；构建前景数据包时必须选择 Tiangong UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量用水，以及每项供应产品的发票、批次单或储罐补加记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售成品线材净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumables`
- 来源：`eu-fmp-bref-2022`
- 数量范围：暂定预处理耗材合计筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20100
  - 单位：kg
  - 基准：每 1,000 kg 可销售成品线材净质量的水和供应处理产品合计；发布前必须拆分
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 厂内转移的已准备拉丝坯（`prepared_stock_output`）

记录预处理后的实测中间品质量。该厂内转移用于闭合预处理质量平衡，不是外部共产品。

- 选定流：已准备铝拉丝坯，厂内中间品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量，或输入质量减去实测预处理移除物后计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售成品线材净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass`
- 来源：`mass-balance-identity`
- 数量范围：暂定备料质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1150
  - 单位：kg
  - 基准：每 1,000 kg 可销售成品线材净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 预处理废水和移除残渣（`pretreatment_waste_output`）

根据实际去向和组成，将废水、废槽液、氧化皮、污泥及捕集残渣分别表示为废物流或基本流。

- 选定流：场址特定预处理废水、废槽液和残渣流；构建前景数据包时必须选择 Tiangong UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放/处理记录加已收集残渣质量，并按废物去向拆分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售成品线材净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`eu-fmp-bref-2022`
- 数量范围：暂定预处理废物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20200
  - 单位：kg
  - 基准：每 1,000 kg 可销售成品线材净质量的水相与固相预处理输出合计；发布前必须拆分
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：线材拉制与成形（`wire_drawing`）

#### 输入

##### 产品流

###### 向拉丝供应已准备或旁路的坯料（`drawing_feedstock_input`）

纳入预处理时使用备料转移；否则使用实测接收拉丝坯。同一质量的两条路径互斥。

- 选定流：已准备铝拉丝坯（厂内中间品），或有旁路记录的接收坯料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入第一道拉制的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售成品线材净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`eu-fmp-bref-2022`; `mass-balance-identity`
- 数量范围：暂定拉丝进料质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1150
  - 单位：kg
  - 基准：每 1,000 kg 可销售成品线材净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 向拉丝设备供应电力（`drawing_electricity_input`）

使用仪表或从设施总表向拉丝线分配的记录。构建数据包时选择地域和电压适当的 Tiangong 供应流。

- 选定流：场址特定电力供应；构建前景数据包时必须选择 Tiangong UUID
- 流属性/单位：Energy / kWh
- 数量规则：拉丝线实测电力，或有记录的设施电力分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售成品线材净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：暂定拉丝电力筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2500
  - 单位：kWh
  - 基准：每 1,000 kg 可销售成品线材净质量的宽泛编制筛查范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应拉丝润滑剂和模具处理产品（`drawing_lubricant_input`）

分别记录每种润滑剂、皂剂、乳液和模具处理产品，包括补加和有记录的循环使用。

- 选定流：场址特定拉丝润滑剂或模具处理产品；构建前景数据包时必须选择 Tiangong UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采购量加期初库存减期末库存，并扣除回收产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售成品线材净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_consumables`
- 来源：`eu-fmp-bref-2022`
- 数量范围：暂定润滑剂用量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1,000 kg 可销售成品线材净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 向下一纳入工序转移拉制线材（`drawn_wire_intermediate`）

记录末道拉制后、任何单独计量热处理或精整之前的质量。

- 选定流：拉制铝线，厂内中间品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量，或进料质量减去实测拉丝废料和留样后计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售成品线材净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass`
- 来源：`mass-balance-identity`
- 数量范围：暂定拉制中间品质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1100
  - 单位：kg
  - 基准：每 1,000 kg 可销售成品线材净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 拉丝废料、线头和不合格线材（`drawing_scrap_output`）

按去向、厂内回用、外部回收、出售、处置和实测质量，分别记录清洁及受污染铝废料。

- 选定流：场址特定铝拉丝废料；构建前景数据包时必须选择 Tiangong 废物流 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程或返回一体化重熔工序的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售成品线材净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`iai-aluminium-scrap-carbon-footprint-2025`
- 数量范围：暂定拉丝废料筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg
  - 基准：每 1,000 kg 可销售成品线材净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 废拉丝润滑剂和污染残渣（`spent_lubricant_output`）

按处理路线分别记录废润滑剂、滤饼和污染残渣，防止回收润滑剂同时被计作避免输入和废物输出。

- 选定流：场址特定废润滑剂和污染残渣废物流；构建前景数据包时必须选择 Tiangong UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测收集和处理转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售成品线材净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 数量范围：暂定废润滑剂筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1,000 kg 可销售成品线材净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：中间或最终热处理（`heat_treatment`）

#### 输入

##### 产品流

###### 向热处理供应拉制线材（`heat_treatment_wire_input`）

只记录进入退火或其他热处理的质量；旁路线材直接转移至精整。

- 选定流：拉制铝线，厂内中间品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按合金、目标状态、炉号和批次实测的热处理路线质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售成品线材净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`eu-fmp-bref-2022`
- 数量范围：暂定热处理路线质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1100
  - 单位：kg
  - 基准：每 1,000 kg 可销售成品线材净质量的热处理路线质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应热处理电力和燃料（`heat_treatment_energy_input`）

为每种实测电力或燃料供应建立独立清单流。本采集卡不得作为聚合的混合能源流发布。

- 选定流：各项场址特定电力和燃料供应；构建前景数据包时必须选择 Tiangong UUID
- 流属性/单位：Energy / MJ，并在适用时保留 kWh 仪表记录
- 数量规则：炉或批次实测能量，或有记录的设施能量向处理质量分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售成品线材净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`eu-fmp-bref-2022`
- 数量范围：暂定热处理能耗筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1,000 kg 可销售成品线材净质量的热处理供应能量合计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 厂内转移的热处理线材（`heat_treated_wire_output`）

记录热处理后实测合格线材，并单独记录热处理不合格品。

- 选定流：热处理铝线，厂内中间品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测合格转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售成品线材净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`mass-balance-identity`
- 数量范围：暂定热处理输出筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1050
  - 单位：kg
  - 基准：每 1,000 kg 可销售成品线材净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：精整、检验、包装和厂门放行（`finishing_and_release`）

#### 输入

##### 产品流

###### 向精整供应拉制或热处理线材（`finishing_wire_input`）

每批只记录一条中间路线：采用热处理时记录热处理线材，否则记录有旁路说明的拉制线材。

- 选定流：拉制或热处理铝线，厂内中间品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：带互斥路线标记的精整线实测输入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售成品线材净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`mass-balance-identity`
- 数量范围：暂定精整输入质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1050
  - 单位：kg
  - 基准：每 1,000 kg 可销售成品线材净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应精整耗材和一次性包装（`finishing_consumables_input`）

分别记录每种涂层、清洗剂、标识材料、卷盘、线轴、包材及其他一次性包装流。可回收载具不计入产品质量，并按研究约定建模。

- 选定流：各项场址特定精整和包装产品流；构建前景数据包时必须选择 Tiangong UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次记录和包装领用记录，扣除有记录的退回
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售成品线材净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumables`
- 数量范围：暂定精整与包装筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg
  - 基准：每 1,000 kg 可销售成品线材净质量的精整耗材和一次性包装合计；发布前必须拆分
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售铝线或铝合金线（`aluminium_wire_output`）

这是唯一参考产品输出。它代表完整类别，不固定直径、合金、状态或最终用途；这些特征均为必需限定信息。

- 选定流：铝线 `89db8507-09bd-45f8-ba96-4e459058412c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰好 1,000 kg 可销售成品线材净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`mass-balance-identity`; `astm-b211-b211m-19`; `astm-b230-b230m-22`
- 数量范围：必需参考数量
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：PCR 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 精整次品、留样和包装废物（`finishing_waste_output`）

将铝次品与包装及处理废物分开记录，包含质量、去向和任何返回厂内重熔的信息。

- 选定流：各项场址特定铝废料和非金属废物流；构建前景数据包时必须选择 Tiangong UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按去向实测的次品、留样和废物转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售成品线材净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`iai-aluminium-scrap-carbon-footprint-2025`
- 数量范围：暂定精整废物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1,000 kg 可销售成品线材净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 单独计量的生产线、批次和可选工序 | 在分配共享设施负荷前，先细分过程或使用直接仪表/批次记录；旁路的预处理和热处理不得承担相应工序负荷。 |  |
| `allocation_shared_operations` | 共享工序生产多种可销售线材等级或尺寸 | 无法细分且因果关系相当时，按可销售线材实测净质量分配共享转化负荷；披露并说明任何不同的因果分配依据。 | `environdec-basic-aluminium-pcr-1-0-2` |
| `allocation_process_scrap` | 拉丝和精整铝废料 | 记录废料质量、合金/污染状态、去向以及选用的截断、替代或共产品方法。本库默认将转化负荷保留在线材数据集中且不计避免负荷收益；项目规则要求的其他方法必须单独报告，且不得重复计算同一回收收益。 | `iai-aluminium-scrap-carbon-footprint-2025`; `environdec-basic-aluminium-pcr-1-0-2` |
| `allocation_internal_recycling` | 返回一体化重熔工序的废料 | 在设施质量平衡中显式保留内部废料回路；一体化时纳入重熔投入和排放；不得同时将同一废料表示为外部废物输出。 | `iai-aluminium-scrap-carbon-footprint-2025`; `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `stock_pretreatment`; `wire_drawing`; `heat_treatment`; `finishing_and_release` | 外部坯料、内部转移、可销售产品 | 地磅/秤单、生产订单、卷/批质量、库存移动 | timestamp; lot_id; alloy; temper/state; source/destination process; gross_mass; tare_mass; net_mass; route_flag; meter/scale_id | 经过校准的秤，并与生产和库存记录核对 | kg | 每批或每次转移 | 完整声明报告期 | 每条纳入的生产线和受运营控制的外包工序 | 按批次和过程汇总净质量；核对期初/期末在制品 | 校准记录；批次追溯；库存核对；不合格批次日志 |
| `cp_consumables` | `stock_pretreatment`; `wire_drawing`; `finishing_and_release` | 水、化学品、润滑剂、涂层、包装 | 仪表、发票、储罐液位、批次单、领退料记录 | product_id; supplier; quantity; unit; concentration; opening_stock; purchases; closing_stock; recovered_quantity; process_id | 优先直接计量；否则由可审计库存记录进行质量平衡计算 | kg，并保留以 m3 计量的原始记录 | 每批或每月 | 完整声明报告期 | 每条纳入的生产线和共享公用系统分配 | 产品数量 = 期初 + 采购 - 期末 - 有记录的回收；按实测因果驱动量分配共享用量 | 仪表校准；发票；批次单；库存核对；浓度证书 |
| `cp_energy` | `wire_drawing`; `heat_treatment`; `finishing_and_release` | 电力和燃料 | 分表、公用事业账单、燃料领用、炉批日志 | meter_id; timestamp; energy_carrier; reading_start; reading_end; unit; line/furnace; treated_mass; allocation_driver | 优先直接分表；否则记录设施向生产线分配方法 | kWh 或 MJ，并保留源单位 | 连续、每批或每月 | 完整声明报告期 | 每条纳入生产线、炉及共享服务 | 扣除已核实的非生产用能，并按因果仪表、运行时间或处理质量分配共享能量 | 仪表校准；账单；运行小时日志；分配工作表 |
| `cp_waste_outputs` | `stock_pretreatment`; `wire_drawing`; `finishing_and_release` | 废料、废槽液、润滑剂、废水、污泥、包装废物 | 秤、联单、回收商收据、排放仪表、实验室记录 | waste_id; composition; alloy; contamination; mass/volume; destination; internal_return; recycler/treatment; date | 在产生或转移时计量并与联单核对 | kg，并保留废水原始 m3 | 每次转移或每批 | 完整声明报告期 | 所有纳入生产线和场内处理 | 按废物身份和去向汇总；单独核对内部铝返回 | 校准秤/仪表；签字联单；回收商收据；分析结果 |
| `cp_product_qualification` | `finishing_and_release` | 参考产品身份和符合性 | 材质证明、尺寸检验、拉伸/电气试验、放行记录 | lot_id; alloy; temper; shape; dimensions; tolerance; coating; application_grade; test_method; result; disposition | 按声明产品规范进行有记录的检验和放行 | 声明的试验单位 | 每个放行批次 | 完整声明报告期 | 每个参考产品批次 | 仅接受放行质量；将次品和留样保留在废物或在制品记录中 | 签字证书；仪器校准；放行授权；不合格日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 每项前景清单量 | 归一化量 = 报告期流量 / 报告期可销售成品线材净质量 × 1,000 kg | 采集流量；可销售线材净质量 | 每 1,000 kg 参考产品的数量 | `mass-balance-identity` |
| `calc_route_weighting` | 生产组合数据集 | 生产组合量 = sum(路线数量 × 路线可销售质量) / 可销售质量总计；当合金、状态、热处理、涂层或技术导致清单实质差异时保留独立路线 | 路线特定归一化量；路线可销售质量 | 声明的生产组合清单 | `mass-balance-identity` |
| `calc_metal_yield` | 铝质量平衡 | 成材率 = 可销售线材净质量 / 外部含铝拉丝坯总质量；内部返回单独报告，不得再次加入外部输入 | 外部铝输入；可销售线材；内部返回；废料和次品 | 成材率和核对表 | `mass-balance-identity` |
| `calc_mass_balance` | 每个过程和完整前景 | 残差 = 输入 + 期初在制品 - 输出 - 期末在制品；调查并披露残差的正负、大小和原因，不得强制归零 | 实测质量流；在制品库存 | 过程和设施质量平衡残差 | `mass-balance-identity`; `iai-aluminium-scrap-carbon-footprint-2025` |
| `calc_recycled_share` | 铝输入披露 | 再生铝占比 = 外部铝输入中经核实的再生铝质量 / 这些输入中的铝总质量；不得根据废料输出反推再生成分 | 供应商声明；铝输入质量；产销监管链证据 | 原生铝和再生铝占比 | `iai-aluminium-scrap-carbon-footprint-2025` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 每个放行产品批次 | 保留合金、状态、截面、尺寸/公差、表面/涂层、用途等级和符合性依据；不得将实质不同产品合并为无说明的通用平均。 | 材质证明；检验/试验记录；产品规范；`astm-b211-b211m-19`; `astm-b230-b230m-22` |
| `dq_temporal` | 全部前景记录 | 使用覆盖正常运行的一致声明报告期；识别停机、试验、异常批次以及任何较短或不具代表性的覆盖。 | 时间戳；生产日历；仪表/账单期间；例外日志 |
| `dq_completeness` | 全部纳入过程 | 核算全部铝输入和输出、全部直接计量能源，以及所有已知处理、废物和直接排放流；列出未计量或排除的流及其预期影响。 | 质量平衡；能量核对；废物联单；省略项登记 |
| `dq_geography_technology` | 上游链接和前景路线 | 使上游数据集匹配供应商地域、原生/再生路线、合金化和拉丝坯形态；披露代理及技术不匹配。 | 供应商声明；上游数据集元数据；路线记录 |
| `dq_allocation` | 共享工序和废料 | 保留分配驱动量、废料分类、去向和方法，使评审者可复算结果并发现重复计算。 | 分配工作表；废料台账；回收商收据；`iai-aluminium-scrap-carbon-footprint-2025` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求产品 UUID `89db8507-09bd-45f8-ba96-4e459058412c`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg，以及恰好 1,000 kg 可销售净输出。 | `mass-balance-identity` |
| `validate_required_qualifiers` | 产品元数据 | 数据包缺少合金、状态、截面形状/尺寸、表面/涂层、预期等级/用途、路线、地域、报告期、再生成分依据或厂门状态时，应拒绝。 | `astm-b211-b211m-19`; `astm-b230-b230m-22` |
| `validate_scope_exclusions` | 产品和边界 | 拉丝坯、棒/杆/型材、绝缘线、绞合导体、电缆、线材制成品、施工现场交付或已安装系统不得作为本 PCR 参考产品。 | `environdec-basic-aluminium-pcr-1-0-2` |
| `validate_route_logic` | 过程图 | 必须纳入拉制和精整/放行；预处理与热处理必须明确纳入或旁路；防止在旁路上重复中间品输入。 | `eu-fmp-bref-2022` |
| `validate_inventory_evidence` | 清单行 | 发布前要求采集或计算的前景数量、关联采集协议、源单位、参考流归一化和独立 Tiangong 身份；推理估算范围可用于筛查，但不得替代记录。 |  |
| `validate_mass_scrap_allocation` | 设施质量平衡和回收 | 要求核对铝输入、产品、在制品、内部返回、废料和次品；要求声明一种废料分配方法并禁止重复计入回收收益。 | `mass-balance-identity`; `iai-aluminium-scrap-carbon-footprint-2025`; `environdec-basic-aluminium-pcr-1-0-2` |
| `validate_source_status` | 方法学评审 | 在启用或发布前重新检查当前 EPD International 铝 PCR，并替换或确认全部暂定推理估算筛查范围。 | `environdec-basic-aluminium-pcr-1-0-2` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` |
| downstream_use | 需要厂门无绝缘线材的前景铝线生产数据包及下游 process 或 lifecyclemodel 投影 |
| allowed_use | 产品位于声明的无绝缘单根线材范围内，且限定信息、路线、上游链接和分配方法完整的产品特定数据集或透明加权生产组合数据集 |
| excluded_use | 通用铝金属、拉丝坯、棒/杆/型材、绝缘绕组线、绞合导体、电缆、线材制成品、施工现场交付、安装、使用或寿命终止；除非另有下游模型 |
| required_metadata | 规范 PCR id；产品和支撑 UUID；合金；状态；形状/尺寸/公差；表面/涂层；用途等级；生产路线和旁路决策；地域；报告期；原生/再生占比及证据；上游数据集身份；废料去向和分配方法；前景来源和采集协议链接 |
| required_quality_disclosure | 时间和场址覆盖；仪表和秤质量；质量/能量核对；缺失流身份；代理数据集；仅用于 QA 的暂定范围；分配驱动量；废料污染和去向；排除项和质量平衡残差原因 |
| update_trigger | 合金/产品组合、拉制或热处理技术、能源供应、铝来源或再生占比、涂层/精整、废料路线或分配方法发生实质变化；出现新版控制性 PCR/标准；或证据表明暂定范围或 UUID 不再适当 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `environdec-basic-aluminium-pcr-1-0-2` | standard | EPD International，Basic aluminium products and special alloys，version 1.0.2（being updated），https://www.environdec.com/pcr-library/pcr_040ae46d-0894-4dca-831b-91aa8d2b93b8（检索于 2026-08-09） | 上位 CPC 4153 适用范围、厂门 PCR 背景以及必须披露所选废料分配方法；更新状态作为评审标记 |
| `astm-b211-b211m-19` | standard | ASTM B211/B211M-19，Standard Specification for Aluminum and Aluminum-Alloy Rolled or Cold Finished Bar, Rod, and Wire，https://store.astm.org/b0211_b0211m-19.html（检索于 2026-08-09） | 通用工程铝线范围以及合金/状态/产品属性限定信息 |
| `astm-b230-b230m-22` | standard | ASTM B230/B230M-22，Standard Specification for Aluminum 1350-H19 Wire for Electrical Purposes，https://store.astm.org/b0230_b0230m-22.html（检索于 2026-08-09） | 电工线材纳入及用途特定的合金、状态、形状和符合性限定信息 |
| `eu-fmp-bref-2022` | official_guidance | European Commission JRC，Best Available Techniques Reference Document for the Ferrous Metals Processing Industry，2022，https://eippcb.jrc.ec.europa.eu/sites/default/files/2022-12/FMP_BREF_2022.pdf（检索于 2026-08-09） | 线杆预处理、干/湿拉制、可选热处理和精整的通用技术类比；不作为铝工艺定量证据 |
| `iai-aluminium-scrap-carbon-footprint-2025` | official_guidance | International Aluminium Institute，Aluminium Scrap in Carbon Footprint Calculations，2025，https://international-aluminium.org/wp-content/uploads/2025/10/Carbon-Footprint-of-Recycled-Aluminium-IAI-Document-Final.pdf（检索于 2026-08-09） | 铝废料质量平衡、截断/替代/共产品方法披露，以及防止重复计算回收收益 |
| `mass-balance-identity` | method_factor | 质量守恒与参考流归一化恒等式 | 固定参考数量、成材率、路线加权以及过程/设施质量平衡计算 |
