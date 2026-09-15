---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.oysters-frozen-smoked-dried-salted-or-in-brine
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 牡蛎，冷冻、烟熏、干制、盐渍或盐水浸泡

## 1. 范围与适用性

本 PCR 适用于带壳或去壳的食品级牡蛎，其申报的终端保藏路线必须且只能是 `frozen`、`smoked`、`dried`、`salted` 或 `brine` 之一。食品级牡蛎粉、粗粉或颗粒仅在 `dried` 路线下适用。每个前景数据包应选择一条路线；下述路线过程互为替代，不得叠加。刻意组合两种或更多终端保藏路线的产品需要单独评审，不在本候选规则范围内。

前景边界始于加工厂接收牡蛎，止于加工厂门口的合格可销售产品。牡蛎养殖、捕捞、采收和来料运输由上游数据集表示。分销、零售、消费者制备和报废阶段不在本加工数据集范围内。不包括活、鲜或仅冷藏牡蛎、以其他方式加工或保藏的牡蛎、不可食用牡蛎粉/粗粉以及不适合人类食用的产品。

所有标记为 `reasoned_estimate` 的范围均为暂定筛选校验范围，不是合规限值，也不能替代前景值。仅在缺少路线和场址特定记录时适用。当经评审的证据或至少三个代表性生产批次的测量支持更窄区间时，应予替换；超出范围的实测值应调查并披露，不得截断。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.oysters-frozen-smoked-dried-salted-or-in-brine |
| classification_refs | CPC 3.0：21262（精确分类语境） |
| covered_products | 带壳或去壳的食品级冷冻、烟熏、干制、盐渍或盐水浸泡牡蛎；食品级牡蛎粉、粗粉或颗粒仅限干制路线 |
| excluded_products | 活、鲜或冷藏牡蛎；以其他方式加工或保藏的牡蛎；不可食用粉、粗粉或颗粒；死亡或不适合食用的产品；等待单独评审的多终端路线产品 |
| representative_product | 加工厂门口的合格可销售牡蛎产品，已申报路线和呈现形态 |
| production_route | 冷冻、烟熏、干制、盐渍或盐水浸泡之一；路线特定加工为条件过程且相互排斥 |
| market_state | 加工厂门口的包装或散装食品级产品；包装质量和游离包装介质不计入 1 kg 参考产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供所申报商业食品的合格可销售保藏牡蛎产品 |
| How much | 按申报呈现形态和路线计量基准计的 1 kg 产品净重 |
| How well | 符合适用产品规格和食品安全放行要求，并按适用情况申报路线、呈现形态、含水率/含盐量/冰衣/沥干质量条件 |
| How long or cycle | 加工厂门口的一个生产批次；不包含储存时长服务 |
| reference_flow_link | 下述天工 CPC 21262 通用产品流的 1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 合格可销售产品，不含包装和游离包装介质 |
| 参考产品流 | 牡蛎，冷冻、烟熏、干制、盐渍或盐水浸泡 `73760e72-9a22-4226-a17f-a591a61d5170` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 保藏路线；物种或商品名称；带壳、半壳、去壳或适用时的干制颗粒形态；整产品或可食肉质量基准；包装排除；适用时冷冻冰衣是否计入及去冰衣方法；盐水产品的沥干质量方法和游离盐水排除；烟熏或干制产品含水率；盐渍或盐水产品含盐量；带壳或半壳产品可食肉比例；批次和放行规格 |

构建前景数据包时，每项必需限定信息均应在元数据、过程说明、参考流备注、产品说明或等效字段中申报。未取得批次特定实测出肉率时，不得将带壳质量换算为可食肉质量。除非已统一并记录冰衣、含水率、含盐量和沥干质量基准，不得跨路线比较冷冻、干制和盐水产品的参考质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告 1 kg 合格可销售产品净重。排除包装和游离包装液。盐水产品采用申报的沥干质量；冷冻产品申报冰衣处理；带壳产品保留整壳质量基准并披露可食肉比例。 |
| `route_condition` | 所有产品和清单数量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 只归一化所选的互斥保藏路线。不得加入未选路线的清单。 |
| `moisture_salt_condition` | 烟熏、干制、盐渍或盐水产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 当烟熏/干制产品用于质量得率或跨批次比较时，按申报的湿基或干基记录含水率；盐渍/盐水产品按申报基准记录含盐量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 保藏工厂接收的牡蛎，已申报来源、采收/养殖路线、呈现形态、温度和验收状态 |
| starting_condition_role | 前景预处理与保藏系统的上游产品投入 |
| product_classification_scope | CPC 3.0 21262 终端产品；上游活/鲜/冷藏牡蛎为单独产品投入 |
| recursive_input_rule | 若来料已经是 CPC 21262 保藏牡蛎产品，应作为上游产品流记录，不得重复构建其先前保藏清单；披露递归及供应商数据集 |
| upstream_dataset_requirement | 牡蛎生产/采收及所有其他购入投入应使用地理、技术和时间上具有代表性的数据集 |
| disclosure | 申报所选路线、起始产品状态、物种、呈现形态、来源生产系统、净质量基准、得率、储存条件、包装、废物、废水去向以及任何排除操作 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_processing_gate` | 前景加工数据集 | 纳入接收、分级/清洗或适用时的去壳、且仅一条终端保藏路线、路线相关储存、包装、剔除物、废水和加工厂门口前的直接排放。养殖/采收和购入投入用上游数据集表示；排除下游分销、使用和报废。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `boundary_route_exclusivity` | 路线选择 | 只纳入冷冻、烟熏、干制、盐渍或盐水浸泡之一。组合终端处理在单独评审前不属于本候选规则。 | `unsd-cpc-3-0-21262`; `codex-cxs-311-2013` |
| `boundary_food_safety_records` | 接收、加工、储存和放行 | 保留适用于加工双壳贝类的批次追溯、时间-温度、水质、卫生、危害控制和产品放行证据。 | `codex-cxc-52-2003` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `prepare_oysters` | 接收、分级、清洗和预处理牡蛎 | required | 始终纳入；仅按申报呈现形态进行去壳或壳处理 | 前景预处理 | 转移至所选保藏路线的预处理牡蛎质量 |
| `freeze_and_pack` | 冷冻和包装 | conditional | 仅当路线为 `frozen` 时纳入 | 前景保藏与包装 | 1 kg 冷冻合格可销售产品 |
| `smoke_or_dry_and_pack` | 烟熏或干制并包装 | conditional | 仅当路线为 `smoked` 或 `dried` 时纳入；只能选择一个子路线 | 前景保藏与包装 | 1 kg 烟熏或干制合格可销售产品 |
| `salt_or_brine_and_pack` | 盐渍或盐水浸泡并包装 | conditional | 仅当路线为 `salted` 或 `brine` 时纳入；只能选择一个子路线 | 前景保藏与包装 | 1 kg 盐渍或沥干盐水浸泡合格可销售产品 |

### 过程：接收、分级、清洗和预处理牡蛎（`prepare_oysters`）

#### 输入

##### 产品流

###### 接收牡蛎（`received_oysters`）

按申报的壳/呈现形态基准记录验收和拒收的来料牡蛎质量。

- 选定流：保藏工厂接收的牡蛎
- 流属性/单位：Mass / kg
- 数量规则：实测批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 转移至保藏的预处理牡蛎
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_batch`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定的呈现形态相关筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：8
  - 单位：kg 接收牡蛎/kg 预处理牡蛎
  - 基准：涵盖从去壳到带壳来料及剔除物的宽泛变化
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理用水（`preparation_water`）

记录用于清洗、洁净处理或辅助去壳且跨越过程边界的饮用水或其他适用水。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：计量用量，或批次体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理牡蛎
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_batch`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定用水筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg 水/kg 预处理牡蛎
  - 基准：跨越预处理边界的设施用水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预处理牡蛎（`prepared_oysters`）

记录转移至所选唯一保藏路线的中间产品实测质量。

- 选定流：用于保藏的预处理牡蛎
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个预处理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_batch`
- 来源：`codex-cxc-52-2003`

##### 废物流

###### 壳、剔除组织及其他预处理残余物（`preparation_residues`）

当不同残余物具有不同处理去向或共产品状态时，应按去向分别记录。

- 选定流：牡蛎预处理残余物
- 流属性/单位：Mass / kg
- 数量规则：实测或按质量平衡计算的残余物质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 预处理牡蛎
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_batch`
- 来源：
- 数量范围：暂定的呈现形态相关残余物估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：7
  - 单位：kg 残余物/kg 预处理牡蛎
  - 基准：涵盖去壳和带壳呈现形态的宽泛筛选
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：冷冻和包装（`freeze_and_pack`）

#### 输入

##### 产品流

###### 用于冷冻的预处理牡蛎（`freezing_oyster_input`）

记录进入冷冻路线的预处理牡蛎质量。

- 选定流：用于冷冻的预处理牡蛎
- 流属性/单位：Mass / kg
- 数量规则：实测投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷冻可销售产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_batch`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定冷冻得率筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg 预处理牡蛎/kg 冷冻产品
  - 基准：参考产品质量不含申报的冰衣
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷冻与冻藏用电（`freezing_electricity`）

记录分配给该批次的冷冻及场内冻藏计量电力。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：电表差值，或设备功率乘以运行时间和分配份额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷冻可销售产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_batch`
- 来源：
- 数量范围：暂定制冷能耗筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：5
  - 单位：kWh/kg 冷冻产品
  - 基准：冷冻及加工厂门口前的场内冻藏
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷冻产品包装（`frozen_packaging`）

按材料记录初级、次级及路线特定防护包装；包装是清单投入，不是参考产品质量。

- 选定流：Packaging materials
- 流属性/单位：Mass / kg
- 数量规则：分配给合格输出的采购或领用包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷冻可销售产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_batch`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定包装筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：0.5
  - 单位：kg 包装/kg 冷冻产品
  - 基准：加工厂门口随产品投放的全部包装
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷冻可销售牡蛎（`frozen_product`）

仅在选择冷冻路线时，该输出才是参考产品。

- 选定流：牡蛎，冷冻、烟熏、干制、盐渍或盐水浸泡 `73760e72-9a22-4226-a17f-a591a61d5170`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 合格产品，不含包装并采用申报的冰衣基准
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`unsd-cpc-3-0-21262`

##### 废物流

##### 基本流

### 过程：烟熏或干制并包装（`smoke_or_dry_and_pack`）

#### 输入

##### 产品流

###### 用于烟熏或干制的预处理牡蛎（`smoke_dry_oyster_input`）

记录进入烟熏或干制两个子路线之一的预处理牡蛎质量。

- 选定流：用于烟熏或干制的预处理牡蛎
- 流属性/单位：Mass / kg
- 数量规则：实测投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 烟熏或干制可销售产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_dry_batch`
- 来源：`codex-cxc-52-2003`; `codex-cxs-311-2013`
- 数量范围：暂定水分损失筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：8
  - 单位：kg 预处理牡蛎/kg 烟熏或干制产品
  - 基准：必须申报路线和目标含水率
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 烟熏或干制能源（`smoke_dry_energy`）

数据包应分别记录燃料和电力；本卡片规定二者共同的能源归一化规则。

- 选定流：路线特定燃料和电力
- 流属性/单位：Energy / 按记录采用 MJ 和 kWh
- 数量规则：计量燃料/电力，或根据运行记录计算设备负荷
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 烟熏或干制可销售产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_smoke_dry_batch`
- 来源：`codex-cxs-311-2013`
- 数量范围：暂定热能筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：50
  - 单位：MJ/kg 烟熏或干制产品
  - 基准：总热能；电力仍以 kWh 单独报告
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 烟熏或干制产品包装（`smoke_dry_packaging`）

按材料记录包装，并从参考产品质量中排除。

- 选定流：Packaging materials
- 流属性/单位：Mass / kg
- 数量规则：分配给合格输出的采购或领用包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 烟熏或干制可销售产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_dry_batch`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定包装筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：0.5
  - 单位：kg 包装/kg 烟熏或干制产品
  - 基准：加工厂门口随产品投放的全部包装
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 烟熏或干制可销售牡蛎（`smoke_dry_product`）

仅对所选烟熏或干制子路线，该输出才是参考产品；必须申报含水率基准。

- 选定流：牡蛎，冷冻、烟熏、干制、盐渍或盐水浸泡 `73760e72-9a22-4226-a17f-a591a61d5170`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按申报含水率计的 1 kg 合格产品，不含包装
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`unsd-cpc-3-0-21262`; `codex-cxs-311-2013`

##### 废物流

##### 基本流

### 过程：盐渍或盐水浸泡并包装（`salt_or_brine_and_pack`）

#### 输入

##### 产品流

###### 用于盐渍或盐水浸泡的预处理牡蛎（`salt_brine_oyster_input`）

记录进入盐渍或盐水浸泡两个子路线之一的预处理牡蛎质量。

- 选定流：用于盐渍或盐水浸泡的预处理牡蛎
- 流属性/单位：Mass / kg
- 数量规则：实测投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 盐渍或沥干盐水浸泡可销售产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_brine_batch`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定盐渍/盐水浸泡得率筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：4
  - 单位：kg 预处理牡蛎/kg 盐渍或沥干盐水浸泡产品
  - 基准：必须申报路线、盐吸收和沥干质量方法
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 食盐和制盐水用水（`salt_brine_inputs`）

数据包应将食盐和水作为单独投入流记录，并保留盐水配方及复用记录。

- 选定流：食品级食盐和工艺用水
- 流属性/单位：Mass / kg
- 数量规则：实测食盐领用量加实测制盐水用水量；不得将游离包装盐水作为参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 盐渍或沥干盐水浸泡可销售产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_brine_batch`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定食盐和用水合计筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：10
  - 单位：kg 投入/kg 盐渍或沥干盐水浸泡产品
  - 基准：扣除有记录复用信用前的食盐加制盐水用水总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 盐渍或盐水产品包装（`salt_brine_packaging`）

按材料记录容器和其他包装，并从参考产品质量中排除。

- 选定流：Packaging materials
- 流属性/单位：Mass / kg
- 数量规则：分配给合格输出的采购或领用包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 盐渍或沥干盐水浸泡可销售产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_brine_batch`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定包装筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：1
  - 单位：kg 包装/kg 盐渍或沥干盐水浸泡产品
  - 基准：包括使用的液体保持容器
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 盐渍或盐水浸泡可销售牡蛎（`salt_brine_product`）

仅对所选盐渍或盐水浸泡子路线，该输出才是参考产品；盐水产品采用沥干质量。

- 选定流：牡蛎，冷冻、烟熏、干制、盐渍或盐水浸泡 `73760e72-9a22-4226-a17f-a591a61d5170`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 合格产品，不含包装和游离盐水，并申报含盐量及沥干质量方法
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`unsd-cpc-3-0-21262`

##### 废物流

###### 废盐水和盐渍残余物（`spent_brine`）

记录排放或处理的废盐水和固体；除非在批次平衡中实测复用，否则不得扣减复用盐水。

- 选定流：废盐水和盐渍残余物
- 流属性/单位：Mass / kg
- 数量规则：实测排放量或投入-产出质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 盐渍或沥干盐水浸泡可销售产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_salt_brine_batch`
- 来源：
- 数量范围：暂定废盐水筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg 废物/kg 盐渍或沥干盐水浸泡产品
  - 基准：离开前景处理的废盐水和盐渍残余物净量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_route_subdivision` | 所有路线清单 | 只要批次、仪表和物料领用记录允许，应细分预处理及各保藏路线。不得将未选保藏路线平均并入一个前景清单。 | `eu-pef-2021-2279` |
| `allocation_residue_outputs` | 壳、可食用边角料、回收食盐/盐水或其他有价值输出 | 优先采用细分或直接测得的物理关系。若仍需分配，应记录所选物理或经济驱动因素、分配因子、数据期间和敏感性；无经济产品地位的废物不承担产品分配。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_preparation_batch` | `prepare_oysters` | 接收、用水、预处理质量、残余物 | 批次生产和公用工程记录 | 接收质量；呈现形态；验收质量；预处理转移质量；水表/体积；壳和剔除物质量；批次时间-温度 | 经校准秤、水表或有记录批次体积，以及残余物称量或闭合质量平衡 | kg | 每个生产批次 | 代表性生产期间，并披露季节 | 每个设施和预处理线 | 汇总批次投入/产出；按实测预处理转移质量归一化；带壳/呈现形态分层不合并 | 校准、批次追溯、用水适用性、验收和卫生记录 |
| `cp_freezing_batch` | `freeze_and_pack` | 物料、能源、包装、输出 | 批次、仪表、设备和包装领用记录 | 预处理质量；合格冷冻输出；冰衣质量/方法；电力；储存时长；各材料包装；剔除物 | 经校准秤、分表或功率-时间记录、库存领用记录和有记录去冰衣测试 | kg; kWh; h | 每批次，并有连续或批次时间-温度记录 | 适用时覆盖代表性冷季和暖季运行 | 每台冷冻机、冷库和设施 | 共用电力按实测负荷或合理运行驱动因素分配；按合格冷冻净质量归一化 | 校准、仪表覆盖、时间-温度日志、冰衣方法、包装规格 |
| `cp_smoke_dry_batch` | `smoke_or_dry_and_pack` | 物料、燃料/电力、水分、包装、输出 | 批次、燃料、仪表、实验室和包装记录 | 所选子路线；预处理质量；输出质量；燃料；电力；过程时间/温度；含水率基准/数值；包装；剔除物 | 经校准秤/仪表、燃料采购和领用核对、过程日志及代表性水分测试 | kg; MJ; kWh; % | 每批次；按申报方案采样水分 | 代表性运行期间和技术 | 每台窑、烟熏机、干燥机和设施 | 烟熏和干制批次分别记录；透明换算燃料能量；按实测含水率下的合格输出归一化 | 校准、燃料换算记录、过程日志、水分测试、放行记录 |
| `cp_salt_brine_batch` | `salt_or_brine_and_pack` | 物料、食盐/水、盐水复用/排放、包装、输出 | 批次配方、称量、实验室、包装和废物记录 | 所选子路线；预处理质量；食盐；水；复用盐水；输出质量；含盐量；沥干质量/方法；包装；废盐水/残余物 | 经校准秤、配方/领用记录、适用时盐水体积-密度换算、盐度测试及有记录沥干程序 | kg; % | 每批次 | 代表性运行期间和配方 | 每个槽、生产线和设施 | 盐渍和盐水批次分别记录；仅扣除实测内部复用；按盐渍净质量或盐水产品沥干质量归一化 | 校准、配方、盐度测试、沥干方法、复用/排放日志、放行记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | 路线输出 | 参考产品净质量 = 灌装单元毛质量减包装质量再减游离包装介质；盐水产品采用申报的沥干质量结果，冷冻产品采用申报的冰衣处理 | 毛质量；包装质量；游离介质质量；适用时的沥干或去冰衣质量 | kg 合格参考产品 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `calc_route_yield` | 每条所选路线 | 路线得率 = 合格可销售输出质量除以预处理牡蛎投入质量；不同呈现形态、含水率、含盐量、冰衣或沥干质量基准不得合并 | 合格输出质量；预处理牡蛎投入质量；限定信息 | kg/kg 及其倒数投入需求 | |
| `calc_normalized_inventory` | 每个清单流 | 归一化数量 = 批次流数量除以合格参考产品质量；共用公用工程需采用披露的实测负荷或运行时间分配驱动因素 | 批次流数量；参考产品质量；共用时的分配驱动因素 | 每 kg 参考产品的流单位 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_route` | 产品和过程身份 | 物种/商品名称、保藏路线、呈现形态、来源生产系统、设施、技术、批次和产品规格应可追溯；路线必须且只能匹配一个过程图替代项。 | 供应商和接收记录；批次和放行记录 |
| `dq_mass_condition` | 参考流和得率 | 应按适用情况记录包装/游离介质排除、壳或可食肉基准、冰衣方法、沥干质量方法、含水率基准/数值和含盐量基准/数值；不兼容基准不得合并。 | 称量记录；方法记录；实验室结果；产品规格 |
| `dq_temporal_coverage` | 前景活动数据 | 覆盖代表性运行期间，并披露季节性、储存时长、停机、异常批次和任何代理期间。 | 生产日历；仪表覆盖；批次台账 |
| `dq_completeness` | 质量、能源、包装、废物和直接排放 | 核对主要质量投入与产出，计入水、燃料/电力、包装、剔除物、废水/盐水和处理去向；披露排除项和数据缺口。 | 质量平衡；发票/仪表；包装领用；废物联单；废水记录 |
| `dq_provisional_ranges` | 所有推理估算范围 | 范围仅用于筛选。保留实际前景值；当取得经评审路线特定证据或至少三个代表性批次时，替换暂定边界。 | 评审记录和替换证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 确认恰为 1 kg 合格可销售产品，已排除包装和游离介质，UUID 和 Mass/kg 身份齐全，且所有路线特定质量限定信息完整。 | `unsd-cpc-3-0-21262`; `eu-pef-2021-2279` |
| `validate_route_exclusivity` | 过程图和清单 | 确认恰好选择一条终端保藏路线，且只实例化其条件清单；烟熏与干制、盐渍与盐水浸泡保持为不同子路线。 | `unsd-cpc-3-0-21262`; `codex-cxs-311-2013` |
| `validate_mass_balance` | 每个预处理和保藏批次 | 在兼容质量基准上核对实测投入、合格输出、残余物、废水或盐水、水分/冰衣/游离介质变化及库存变化；记录未解释差异。 | `codex-cxc-52-2003` |
| `validate_data_quality` | 拟发布数据集 | 确认采集协议链接、校准和追溯证据、代表性时间覆盖、包装和公用工程完整性、废物去向、分配披露以及暂定范围状态已明确。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 带上游产品链接的门到门保藏牡蛎加工前景数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当地理、技术、生产系统、呈现形态、质量基准和时间具有代表性时，用于路线特定产品系统和生命周期模型 |
| excluded_use | 未统一壳/可食部分、含水率、含盐量、冰衣或沥干质量基准时直接跨保藏路线比较；组合终端路线产品；替代缺失的养殖/采收数据 |
| required_metadata | PCR id；CPC 语境；产品流 UUID；路线；物种/商品名称；呈现形态；来源生产系统；地理；设施/技术；时间期间；壳/可食部分基准；冰衣/沥干质量/含水率/含盐量条件；包装；得率；分配；上游数据集 |
| required_quality_disclosure | 前景覆盖；仪表和秤质量；质量平衡结果；时间-温度和放行控制；代理；排除项；废物/废水去向；不确定性；尚未替换的推理估算范围 |
| update_trigger | 新的经评审路线特定证据；至少三个代表性批次支持范围替换；技术、配方、包装、来源生产系统、产品规格或计量方法变化；未解决的质量基准或食品安全控制问题 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21262` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类》3.0 版，代码 21262，官方结构文件：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-08-11） | 产品类别身份、覆盖的保藏路线标签和精确 CPC 语境 |
| `codex-cxc-52-2003` | 标准（`standard`） | 食品法典委员会，CXC 52-2003，《鱼和渔业产品操作规范》：https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/（检索日期 2026-08-11） | 双壳贝类接收、用水、卫生、加工、储存、追溯、时间-温度和质量控制记录 |
| `codex-cxs-311-2013` | 标准（`standard`） | 食品法典委员会，CXS 311-2013，《烟熏鱼、烟味鱼和烟干鱼标准》：https://www.fao.org/fao-who-codexalimentarius/codex-texts/list-standards/en/（检索日期 2026-08-11） | 仅用于烟熏与烟干加工路线的术语和区分；该标准针对鱼类，本 PCR 不采用其中任何牡蛎定量限值 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | 欧盟委员会建议 (EU) 2021/2279，附件 I《产品环境足迹方法》：https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索日期 2026-08-11） | 功能单位与参考流、系统边界、清单完整性、包装、分配层级、初级数据和数据质量披露 |
