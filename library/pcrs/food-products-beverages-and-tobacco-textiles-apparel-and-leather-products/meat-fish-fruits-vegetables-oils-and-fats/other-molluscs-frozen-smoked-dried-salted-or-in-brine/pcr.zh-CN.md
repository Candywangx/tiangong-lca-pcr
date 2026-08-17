---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-molluscs-frozen-smoked-dried-salted-or-in-brine
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他冷冻、烟熏、干制、盐渍或盐水渍软体动物

## 1. 范围与适用性

本 PCR 用于为 CPC 3.0 子类 21268 中以冷冻、烟熏、烟熏干制、干制、盐渍或盐水渍状态上市的可食用软体动物构建前景数据包。边界从加工厂接收可食用的原料或已预处理软体动物开始，经过一种明确声明的保藏路线，到合格包装产品在工厂门口放行为止。

捕捞或养殖、卸货、外购配料、能源、制冷剂和包装的上游生产、工厂门口之后的配送、零售、烹调、食用和生命末期，应由关联的上下游数据集表示，不得在前景中重复。鱼类、甲壳类、不处于上述保藏状态的仅鲜活软体动物，以及用于非食品用途的软体动物或其衍生材料均不在范围内。不可食或被食品用途拒收的材料保持在可食产品边界之外，并按实际去向记录为废物或明确披露的非食品共产品。

选定的天工参考产品流为 `Cephalopod`。该流虽分类于 CPC 21268，但只是较窄的代表流，并非涵盖全部其他软体动物的通用流。它仅可识别头足类数据集的参考产品。其他软体动物分类单元的数据集必须另选并核验语义适当的产品流，不得复用此 UUID。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-molluscs-frozen-smoked-dried-salted-or-in-brine |
| classification_refs | CPC 3.0 `21268`，Other molluscs, frozen, smoked, dried, salted or in brine |
| covered_products | 处于所述冷冻、烟熏、烟熏干制、干制、盐渍或盐水渍上市状态的可食用软体动物产品 |
| excluded_products | 非食品产品；鱼类和甲壳类；不处于所述保藏状态的仅鲜活软体动物；未声明分类单元或加工路线的产品 |
| representative_product | 使用天工流 `f8506281-c8fe-4960-b1eb-331d5d75811f` 时为已声明的头足类产品；该流的语义范围窄于完整产品类别 |
| production_route | 共同接收与准备后，恰好选择一类路线：冷冻；烟熏/烟熏干制/干制；或盐渍/盐水渍 |
| market_state | 加工厂门口的合格可食产品，并声明保藏状态、质量基准和包装是否计入 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 采用一种已声明 CPC 21268 保藏状态的合格可食用软体动物产品 |
| How much | 按已声明参考质量基准计的 1 kg 合格产品 |
| How well | 符合已声明产品规格和适用的食品安全接收标准；已识别分类单元和路线 |
| How long or cycle | 在工厂门口放行的一个生产批次；纳入贮存时声明贮存时间 |
| reference_flow_link | 参考数量是按下述路线特定质量基准调整后的实测合格产出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 合格产品 |
| 参考产品流 | Cephalopod `f8506281-c8fe-4960-b1eb-331d5d75811f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 学名或商品分类单元；保藏路线和技术；可食/食品级状态；净质量基准；干制或烟熏干制产品的产品水分；盐渍或盐水渍产品的盐含量或盐度基准；冷冻产品的冰衣比例及冰衣是否扣除；盐水渍产品的沥干质量和沥干方法；包装是否计入；设施地域；生产期间 |

构建前景数据包时，所有适用限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。参考质量默认不含包装。冷冻产品按扣除冰衣后的产品净质量报告，并单独记录冰衣比例。盐水渍产品按已声明沥干方法所得沥干产品质量报告；若采用法规要求的净含量基准，则必须同时报告净含量、沥干质量及其换算。干制和烟熏干制产品采用实测水分条件下的销售状态质量；盐渍和盐水渍产品采用实测盐含量或盐度基准下的销售状态或沥干质量。只有明确识别并换算到 1 kg 参考流时才可采用其他基准。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按适用情况，将所有清单结果归一化至采用已声明净质量、沥干质量、扣冰衣质量及水分/盐分基准的 1 kg 合格产品。 |
| `route_mass_basis` | 路线投入和产出质量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录接收质量、准备后质量、合格产出、拒收物、包装、冰衣水和盐水；不得把覆盖液、冰衣或包装计入可食参考产品。 |
| `moisture_salt_conversion` | 干制、烟熏、盐渍或盐水渍产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留实测销售状态水分和盐含量/盐度。任何干物质、无盐或沥干质量换算必须给出实测输入和公式。 |
| `energy_conversion` | 电力、热能和燃料 | 已声明能量或燃料属性 | kWh、MJ 或燃料实物单位 | 保留原始记录并说明换算因子；无可追溯换算时不得合并电力与热能。 |

## 5. 系统边界

前景从加工厂接收可食用软体动物及辅料开始，到合格保藏产品包装并在工厂门口放行为止。纳入实际发生的清洗、去内脏或去壳、分级、路线特定保藏、归属于该批次的冷藏或常温暂存、包装、直接用水和能源、食品拒收物、废水或废盐水、适用时的制冷剂泄漏，以及跨越前景边界的其他直接排放。

外购原料软体动物、配料、公用工程、制冷剂和包装需要关联上游数据集。资本品或少量投入只有在适用研究规则允许时才可排除且必须披露；本 PCR 不设无证据的数值截断。已纳入前景的运输与为该批次单独购买的运输不得重复计算。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工厂门口接收的可食用软体动物，声明分类单元、此前保藏状态、供应商或来源、适用时的温度以及接收质量 |
| starting_condition_role | 前景加工投入；捕捞/养殖及更早处理属于上游 |
| product_classification_scope | 合格成品属于 CPC 3.0 子类 21268；Cephalopod UUID 只是较窄代表 |
| recursive_input_rule | 已属于本 PCR 类别的外购投入只作为一个带状态和质量基准的上游产品数据集记录一次；不得在前景中递归重建其早期保藏路线 |
| upstream_dataset_requirement | 为接收软体动物、所有重要外购物料、能源、包装、制冷剂及研究范围内的进厂运输关联有代表性的数据集 |
| disclosure | 声明起始状态、选定路线、路线排除、贮存、包装、质量基准调整、非食品产出、省略流和上游数据替代 |

- `boundary_route_exclusivity`：纳入 `prepare_molluscs`，并且在 `freeze_product`、`smoke_or_dry_product`、`salt_or_brine_product` 三类成品路线中恰好选择一个。组合商品应归入决定其声明上市状态的路线，并披露附加单元操作，不得激活第二条参考产品路线。
- `boundary_non_food`：未被接受为可食产品的材料必须保持为废物或明确识别的非食品共产品，不得计入参考流或静默建模为食品。
- `boundary_completeness`：纳入所有实质跨越已声明前景边界的物料、能源、水、直接排放、废物和处理流；披露任何依据规则的排除及所用规则。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `prepare_molluscs` | 接收并准备软体动物 | required | 始终纳入；只记录实际发生的准备操作 | 共同前景准备 | kg 准备后可食用软体动物 |
| `freeze_product` | 冷冻并完成产品 | conditional | 仅当声明的路线类别为冷冻时选择 | 互斥成品路线 | kg 扣除冰衣的合格冷冻产品 |
| `smoke_or_dry_product` | 烟熏或干制并完成产品 | conditional | 仅当声明的路线类别为烟熏、烟熏干制或干制时选择；声明具体技术 | 互斥成品路线 | kg 已声明水分的合格销售状态产品 |
| `salt_or_brine_product` | 盐渍或盐水渍并完成产品 | conditional | 仅当声明的路线类别为盐渍或盐水渍时选择；声明干盐或盐水技术 | 互斥成品路线 | kg 按已声明净质量或沥干质量计的合格产品 |

凡标为“暂定筛选估算”的范围均为有条件的 `reasoned_estimate`，不是符合性限值，也不能替代前景数据。仅在暂缺路线特定实测记录时使用。获得代表性批次/生产活动实测值、供应商或公用工程记录、或经评审的有来源证据时立即替换；方法学评审时，三个代表性生产批次或经批准的替代证据基准将触发替换。

### 过程：接收并准备软体动物（`prepare_molluscs`）

#### 输入

##### 产品流

###### 接收的可食用软体动物（`received_molluscs`）

记录进入前景准备的已接收食品级软体动物质量，包括分类单元和此前状态。

- 选定流：设施特定可食用软体动物投入
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测接收投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_quality`
- 数量范围：取决于分类单元和路线的暂定筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：10
  - 单位：kg/kg 合格成品
  - 基准：每 1 kg 合格产品的接收可食质量；宽范围覆盖冷冻至干制路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 准备用水（`preparation_water`）

记录为清洗、解冻、整理或脱盐而跨越设施边界的计量或分配用水。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：分配至批次的实测用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 准备后可食用软体动物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：仅在缺少用水记录时采用的暂定筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 准备后可食用软体动物
  - 基准：取决于路线和设施的准备用水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 准备后可食用软体动物（`prepared_molluscs`）

根据实测接收投入以及单独计量的拒收物或保留非食品部分，计算准备后可食质量。

- 选定流：准备后可食用软体动物，设施特定中间产品
- 流属性/单位：Mass / kg
- 数量规则：与批次记录核对的准备后产出质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个准备批次
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_lot_mass_quality`
- 来源：`codex-cxc-52-2003`

##### 废物流

###### 食品拒收物和非食品部分（`preparation_rejects`）

按去向分别记录被拒绝用于食品的实测材料及其实际废物处理或非食品去向。

- 选定流：有机加工残余物或去向特定非食品共产品
- 流属性/单位：Mass / kg
- 数量规则：按去向实测的拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 接收可食用软体动物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：取决于接收形态和准备强度的暂定筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 接收可食用软体动物
  - 基准：接收质量中的拒收或分离比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 准备废水（`preparation_wastewater`）

记录跨越前景边界的废水；盐度或有机负荷影响处理选择时应表征。

- 选定流：处理方式特定的 Wastewater
- 流属性/单位：Mass / kg
- 数量规则：计量、平衡或分配的废水体积，使用已声明密度换算为质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 准备后可食用软体动物
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_records`
- 数量范围：仅在缺少排放记录时采用的暂定筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：25
  - 单位：kg/kg 准备后可食用软体动物
  - 基准：离开准备过程的废水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：冷冻并完成产品（`freeze_product`）

#### 输入

##### 产品流

###### 准备后软体动物投入（`frozen_route_input`）

记录转入冷冻路线的准备后可食用软体动物，不重复上游准备。

- 选定流：准备后可食用软体动物，设施特定中间产品
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_route_records`

###### 冷冻用电（`freezing_electricity`）

记录冷冻、可归属的冷冻贮存及完成加工的计量电力。

- 选定流：Electricity, delivered
- 流属性/单位：Energy / kWh
- 数量规则：分表计量或工程分配到批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_route_records`
- 数量范围：取决于冷冻技术和贮存时间的暂定筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.05
  - 上限：3
  - 单位：kWh/kg 合格冷冻产品
  - 基准：已声明冷冻路线前景的用电量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冰衣用水（`glazing_water`）

仅在施加冰衣时记录并入冰衣的水；该质量不计入可食参考质量。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：实测冰衣施加量扣除回收水，并与产品冰衣比例核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 扣除冰衣的冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_route_records`
- 数量范围：仅适用于有冰衣产品的暂定筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 扣除冰衣的冷冻产品
  - 基准：每净可食产品质量的冰衣用水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷冻路线包装（`frozen_packaging`）

按材料记录初级、次级及可归属于路线的三级包装；包装不计入参考质量。

- 选定流：材料特定包装材料
- 流属性/单位：Mass / kg
- 数量规则：采购或包装线记录分配到合格产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_route_records`
- 数量范围：取决于包装形式的暂定筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg 合格冷冻产品
  - 基准：按材料分列的包装总质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 制冷剂释放（`refrigerant_release`）

机械制冷处于前景内时，纳入可归属的制冷剂泄漏。

- 选定流：物质特定制冷剂排放
- 流属性/单位：Mass / kg
- 数量规则：维修日志质量平衡按已说明运行驱动因子分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_route_records`
- 数量范围：仅在可归属泄漏时适用的暂定筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.01
  - 单位：kg/kg 合格冷冻产品
  - 基准：物质特定前景制冷剂释放
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 合格冷冻产品（`frozen_product`）

报告扣除包装和冰衣后的实测合格产出，并归一化到参考流。

- 选定流：Cephalopod `f8506281-c8fe-4960-b1eb-331d5d75811f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按已声明扣冰衣净质量基准计的 1 kg 合格产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：来源规则（`source_rule`）
- 来源：`unsd-cpc-3-0-21268`; `eu-pef-recommendation-2021-2279`

##### 废物流

##### 基本流

### 过程：烟熏或干制并完成产品（`smoke_or_dry_product`）

#### 输入

##### 产品流

###### 准备后软体动物投入（`smoke_dry_route_input`）

记录转入已声明烟熏、烟熏干制或干制路线的准备后可食用软体动物。

- 选定流：准备后可食用软体动物，设施特定中间产品
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格销售状态产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_dry_records`
- 来源：`codex-cxc-52-2003`

###### 路线能源（`smoke_dry_energy`）

分别记录烟熏、干燥、冷却和可归属暂存的电力、燃料及外购热力。

- 选定流：能源载体特定的电力、燃料或热力
- 流属性/单位：能量或燃料属性 / kWh、MJ 或燃料实物单位
- 数量规则：分配至批次的计量或核对后能源载体记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格销售状态产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_dry_records`
- 数量范围：取决于技术和最终水分的暂定筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.1
  - 上限：30
  - 单位：MJ-equivalent/kg 合格销售状态产品
  - 基准：仅用于筛选的合计；最终清单必须保留分列能源载体
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 烟熏材料（`smoking_material`）

仅在使用时记录木材、烟熏液或其他烟熏介质；识别材料及其消耗或回收方式。

- 选定流：材料特定烟熏介质
- 流属性/单位：Mass / kg
- 数量规则：采购和批次使用记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_dry_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：仅适用于烟熏操作的暂定筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg 合格产品
  - 基准：已声明路线投入的烟熏介质
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 烟熏/干制路线包装（`smoke_dry_packaging`）

按材料记录包装，并从参考产品质量中扣除。

- 选定流：材料特定包装材料
- 流属性/单位：Mass / kg
- 数量规则：采购或包装线记录分配到合格产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_dry_records`
- 数量范围：取决于包装形式的暂定筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.3
  - 单位：kg/kg 合格产品
  - 基准：按材料分列的包装总质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格烟熏或干制产品（`smoke_dry_product`）

报告已声明路线技术和实测水分的合格销售状态产品。

- 选定流：Cephalopod `f8506281-c8fe-4960-b1eb-331d5d75811f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按已声明销售状态水分基准计的 1 kg 合格产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：来源规则（`source_rule`）
- 来源：`unsd-cpc-3-0-21268`; `codex-cxc-52-2003`; `eu-pef-recommendation-2021-2279`

##### 废物流

###### 烟熏/干制拒收物和残余物（`smoke_dry_residues`）

按去向分别记录不合格食品拒收物、废烟熏材料、灰分及其他处理特定残余物。

- 选定流：路线特定废物
- 流属性/单位：Mass / kg
- 数量规则：按类型和去向实测的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_dry_records`
- 数量范围：取决于技术的暂定筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 合格产品
  - 基准：仅用于筛选的路线残余物合计；最终数据分列废物类型
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：盐渍或盐水渍并完成产品（`salt_or_brine_product`）

#### 输入

##### 产品流

###### 准备后软体动物投入（`salt_brine_route_input`）

记录转入干盐腌制或盐水腌制的准备后可食用软体动物。

- 选定流：准备后可食用软体动物，设施特定中间产品
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 按已声明净质量或沥干质量计的合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_brine_records`
- 来源：`codex-cxc-52-2003`

###### 盐投入（`salt_input`）

分别记录盐和其他腌制配料；未经质量平衡不得由加盐量推断产品盐吸收量。

- 选定流：Salt
- 流属性/单位：Mass / kg
- 数量规则：采购和批次投料记录，并与回收及废盐水平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_brine_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：取决于干盐或盐水技术的暂定筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：2
  - 单位：kg/kg 合格产品
  - 基准：在核对回收或排放盐之前的投盐量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 盐水用水（`brine_water`）

选择盐水渍技术时，记录用于配制覆盖盐水或工艺盐水的水。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：实测批次投料扣除有记录的回用，并记录盐水盐度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格沥干产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_brine_records`
- 数量范围：仅适用于盐水腌制的暂定筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 合格沥干产品
  - 基准：扣除有记录回用后的新鲜盐水用水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 盐渍/盐水渍路线包装（`salt_brine_packaging`）

按材料记录包装和容器；覆盖盐水与包装均不计入沥干参考质量。

- 选定流：材料特定包装材料
- 流属性/单位：Mass / kg
- 数量规则：采购或包装线记录分配到合格产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_brine_records`
- 数量范围：取决于包装形式的暂定筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 合格产品
  - 基准：按材料分列的包装总质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格盐渍或盐水渍产品（`salt_brine_product`）

报告带盐含量或盐度基准的合格产品；盐水渍产品还应报告已声明的沥干质量方法。

- 选定流：Cephalopod `f8506281-c8fe-4960-b1eb-331d5d75811f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按已声明净质量或沥干质量基准计的 1 kg 合格产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：来源规则（`source_rule`）
- 来源：`unsd-cpc-3-0-21268`; `codex-cxc-52-2003`; `eu-pef-recommendation-2021-2279`

##### 废物流

###### 废盐水和含盐废水（`spent_brine`）

将废盐水和含盐废水与普通废水分开记录，包括盐度和处理去向。

- 选定流：Salt-bearing wastewater or spent brine
- 流属性/单位：Mass / kg
- 数量规则：实测排放或批次平衡扣除有记录的回用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_salt_brine_records`
- 数量范围：仅在废盐水跨越边界时适用的暂定筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：12
  - 单位：kg/kg 合格产品
  - 基准：扣除有记录回用后的废盐水或含盐废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

- `allocation_subdivide_first`：在批次或生产线层面保持准备过程与所选保藏路线，并在记录允许时细分共用公用工程。不得把未启用路线平均计入参考产品。
- `allocation_physical_then_economic`：无法细分或系统扩展时，采用反映过程因果关系的物理关系。只有质量能够合理反映因果关系且采用同一已声明质量基准时才可按质量分配。若不存在合理物理关系，则按 PEF 层级采用经济分配，并披露代表性价格、期间、地域和敏感性。
- `allocation_non_food_outputs`：食品拒收物、不可食部分、废盐水和废物均不构成可食参考产品。产出被销售或用作非食品共产品时，应说明其数量、去向、适用时的替代功能、分配处理，以及将其作为废物时的结果影响。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_quality` | `prepare_molluscs` | 接收、准备、拒收和合格质量及质量状态 | 地磅/批次/质量记录 | lot_id; taxon; supplier/source; prior_state; received_mass; prepared_mass; reject_mass; edible_status; temperature; timestamp | 经校准秤具及接收和放行记录 | kg；适用时 °C | 每批 | 代表性生产期间，并披露季节 | 每个纳入设施 | 按批次求和，归一化前核对转移 | 校准、批次追溯、接收/放行记录、差异说明 |
| `cp_preparation_records` | `prepare_molluscs` | 水、废水、拒收物和准备操作 | 仪表/批次/废物记录 | lot_id; operation; water_reading; wastewater_reading_or_balance; reject_type; reject_mass; destination; operating_time | 优先分表；否则书面分配 | kg 或带密度的 m3；kg 废物 | 每批或每计量期间 | 与产品记录相同期间 | 每条纳入生产线/设施 | 只按有记录驱动因子分配并保留原始总量 | 仪表识别、密度/换算、去向凭证、分配检查 |
| `cp_frozen_route_records` | `freeze_product` | 转移、电力、冰衣、包装、制冷剂和冷冻产出 | 仪表/生产线/维修记录 | lot_id; input_mass; output_mass; electricity; storage_time; glaze_added; glaze_percent; packaging_by_material; refrigerant_charge_and_service | 批次仪表、秤具、包装记录和制冷剂维修质量平衡 | kg；kWh；h | 每批；制冷剂按维修事件 | 有代表性的冷冻路线生产活动 | 每条纳入冷冻线 | 按批次求和，共用制冷按有记录运行驱动因子分配，并归一化至扣冰衣产出 | 仪表和秤具校准、维修日志、冰衣试验、分配依据 |
| `cp_smoke_dry_records` | `smoke_or_dry_product` | 转移、能源载体、烟熏介质、包装、水分、残余物和产出 | 批次/仪表/质量记录 | lot_id; technique; input_mass; output_mass; electricity; fuel; heat; smoking_material; packaging_by_material; moisture; residue_mass_and_destination | 仪表、与库存核对的发票、秤具和水分试验 | kg；kWh；MJ；燃料单位；质量分数 | 每批或每计量期间 | 有代表性的技术特定生产活动 | 每条纳入烟熏/干制线 | 保持能源载体分列，共用量按有记录驱动因子分配，并归一化至销售状态产出 | 仪表/秤具校准、燃料核对、水分方法、废物凭证 |
| `cp_salt_brine_records` | `salt_or_brine_product` | 转移、盐、盐水用水、盐度、包装、废盐水、沥干质量和产出 | 批次/质量/排放记录 | lot_id; technique; input_mass; salt_charge; water_charge; reuse; brine_salinity; product_salt_content; net_contents; drained_mass; drainage_method; packaging_by_material; spent_brine_mass; destination | 秤具、批次单、盐度试验、已声明标准化沥干方法和排放记录 | kg；盐度或质量分数 | 每批 | 有代表性的干盐或盐水生产活动 | 每条纳入腌制线 | 可行时闭合盐/水平衡，并归一化至已声明净质量或沥干产出 | 校准、盐度方法、沥干方法、批次核对、去向凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有选定路线清单 | 归一化数量 = 可归属于路线的数量 / 按已声明基准计的实测合格参考产品质量 | 路线数量；按已声明质量基准计的合格产出 | 每 1 kg 参考流的数量 | `eu-pef-recommendation-2021-2279` |
| `calc_preparation_balance` | `prepare_molluscs` | 核对接收质量与准备后转移、拒收、保留材料及有记录质量变化；说明未解决差异，不得强制闭合 | 接收、准备、拒收、保留和废水记录 | 准备得率和核对结果 | `codex-cxc-52-2003` |
| `calc_glaze_exclusion` | `freeze_product` | 合格质量 = 冷冻毛质量 - 实测冰衣质量 - 排除的包装质量 | 毛质量；冰衣试验或冰衣质量；包装质量 | 扣冰衣净产品质量 | `codex-cxc-52-2003` |
| `calc_drained_mass` | `salt_or_brine_product` | 用已声明标准化沥干结果作为参考质量；分别保留净含量和覆盖液质量 | 净含量；沥干质量试验；沥干方法 | 合格沥干产品质量及换算 | `codex-cxc-52-2003` |
| `calc_refrigerant_release` | `freeze_product` | 可归属释放量 = 有记录系统损失 × 基于运行记录并已披露的分配份额 | 充注、补加、回收、库存变化、运行驱动因子 | 物质特定制冷剂释放 | `eu-pef-recommendation-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和投入 | 保留分类单元、产品状态、路线、可食状态、供应商/来源和批次追溯；非头足类产品不得使用 Cephalopod UUID。 | 产品规格、批次和流身份评审；`unsd-cpc-3-0-21268` |
| `dq_measurement` | 质量、水、能源、盐、盐水、水分、冰衣和废物 | 采用经校准或受控的测量，并保留换算、分配、取样、沥干、水分和盐度方法。 | 校准和方法记录；`codex-cxc-52-2003` |
| `dq_representativeness` | 所有前景值 | 覆盖有代表性的路线特定生产，披露季节、技术、地域、产能利用和异常，并将未启用路线排除在平均值之外。 | 生产活动覆盖报告和 PEF 数据质量评审；`eu-pef-recommendation-2021-2279` |
| `dq_completeness` | 所有前景过程 | 核对批次转移并计入物料投入、公用工程、包装、直接排放、废物和处理去向；说明缺失值或零值。 | 物料/能源检查和完整性登记；`eu-pef-recommendation-2021-2279` |
| `dq_estimate_replacement` | 每个 `reasoned_estimate` | 将估算标为暂定，并在获得代表性前景记录或经评审外部定量证据后替换；方法学评审必须解决或明确接受残余估算。 | 替换记录和评审决定 |

## 9. 校验规则

- `validate_scope`：确认产品是在一种已声明覆盖上市状态下的可食用软体动物，不是非食品产品、鱼类、甲壳类或未声明的仅鲜活产品。
- `validate_reference_identity`：使用产品流 `f8506281-c8fe-4960-b1eb-331d5d75811f` 时，确认产品为头足类，并披露该流窄于 CPC 21268；否则要求经核验的分类单元适当流。
- `validate_route`：要求 `prepare_molluscs` 和恰好一类成品路线。无明确组合产品规格和分配模型时，拒绝合并两条路线产出或平均未启用路线的数据集。
- `validate_reference_basis`：要求 1 kg 合格产出以及所有适用净质量、水分、盐含量/盐度、冰衣、沥干质量、包装、地域和期间限定信息；从原始记录复算归一化。
- `validate_inventory`：确认选定过程的投入、公用工程、包装、直接排放、拒收物、废水或废盐水及产出去向已经记录，或明确说明不适用；外购投入必须有可追溯上游数据集。
- `validate_balance_and_allocation`：复核质量与路线转移平衡，并核验细分/分配选择和非食品产出处理；存在未解决差异或无记录分配时，校验结论为不确定。
- `validate_estimates`：识别每个 `reasoned_estimate`；已有替换证据但未采用，或未经明确评审接受便将估算作为强制符合性限值时，不得通过评审用途。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 针对已声明可食用软体动物产品的路线特定前景产品数据集 |
| downstream_use | 评审并发布后可作为 `secondary_dataset` 或 `background_dataset` 使用 |
| allowed_use | 与已声明分类单元、路线、地域、技术、时间和质量基准相匹配的 LCA 过程或生命周期模型构建 |
| excluded_use | 用 Cephalopod UUID 通用表示全部 CPC 21268 产品；非食品产品；未声明混合路线；营养或食品安全认证 |
| required_metadata | PCR id；CPC 参考；产品流 UUID 及语义限制；分类单元；路线/技术；可食状态；净质量/沥干/冰衣/水分/盐分基准；设施地域；技术；生产期间；贮存；包装；上游数据集选择；分配 |
| required_quality_disclosure | 数据覆盖和代表性；计量与换算方法；质量核对；分配；排除；替代；估算与不确定性；非食品产出处理 |
| update_trigger | 产品流身份改变；分类单元、路线、技术、设施、规格、质量基准或分配改变；Codex/CPC/PEF 规则修订；或取得可替换 `reasoned_estimate` 的代表性实测值或经评审证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21268` | official_guidance | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0, subclass 21268, “Other molluscs, frozen, smoked, dried, salted or in brine”, https://unstats.un.org/unsd/classifications/Econ/cpc（检索于 2026-08-11） | 分类范围和官方产品类别措辞；不作为定量证据 |
| `codex-cxc-52-2003` | standard | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/（访问于 2026-08-11） | 相关接收、卫生处理、冷冻、烟熏/干制、盐渍/盐水渍、产品状态和记录过程结构；不提供清单默认量 |
| `eu-pef-recommendation-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj（访问于 2026-08-11） | 参考单位归一化、边界完整性、分配层级、代表性、数据质量和报告规则；不提供产品特定清单默认量 |
