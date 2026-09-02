---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-aquatic-invertebrates-frozen-smoked-dried-salted-or-in-brine
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他冷冻、熏制、干制、盐渍或盐水渍水生无脊椎动物

## 1. 范围与适用性

本 PCR 适用于将申明为其他水生无脊椎动物的生物加工成 CPC 3.0 代码 21269 所代表的冷冻、熏制、干制、盐渍或盐水渍产品的前景保存过程。天工参考产品流是 CPC 21269 的精确通用产品流；它不表示前景数据包尚未申明的物种、来源、可食用状态、配方或保存路线。

前景边界从保存设施接收原料或预冷水生无脊椎动物开始，到合格散装或包装产品离开该设施结束。上游捕捞、养殖、登陆、适用时的初次宰杀和进厂运输由关联的上游数据集表示，不在前景过程中重复建立。配送、零售、用户制备、消费和生命末期处理不在默认边界内。

鱼类、甲壳类、软体动物、水生哺乳动物、陆生无脊椎动物以及采用其他方法保存的产品不在范围内。申明用于食品的产品在适用时执行 Codex 控制。申明为不可食用、饲料、饵料、研究或工业级的产品必须保持非食品边界；如无单独记录的合格化过程和食品产品身份，不得继承食品安全性能声明或转为食品产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-aquatic-invertebrates-frozen-smoked-dried-salted-or-in-brine` |
| classification_refs | CPC 3.0 `21269`，精确范围 |
| covered_products | 以冷冻、熏制、干制、盐渍或盐水渍状态供应，并申明生物身份、预期用途和保存状态的其他水生无脊椎动物 |
| excluded_products | 鱼类；甲壳类；软体动物；水生哺乳动物；陆生无脊椎动物；其他加工或保存产品；无法证明 CPC 身份的未申明混合物 |
| representative_product | 以天工 CPC 21269 精确通用产品流表示的一批已申明其他水生无脊椎动物保存产品 |
| production_route | 共同接收与准备后只进入一条终端路线：`frozen`、`smoked`、`dried`、`salted` 或 `in_brine`；对于一个参考流，各路线互斥 |
| market_state | 保存设施门口的散装或包装产品；申明温度、包装纳入情况、可食用或非食品状态以及路线特定质量基准 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在保存设施门口供应已申明的冷冻、熏制、干制、盐渍或盐水渍其他水生无脊椎动物产品 |
| How much | 按下述路线特定净质量基准计 1 kg 合格产品 |
| How well | 产品满足已申明的生物身份、预期用途类别、保存路线、适用的水分或盐分条件、适用温度和验收规范 |
| How long or cycle | 设施门口的一个生产批次；除非另行申明，不包括储存服务期 |
| reference_flow_link | 与天工 CPC 21269 精确通用产品流及选定的互斥终端路线一一对应 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 合格产品，不含包装 |
| 参考产品流 | 其他水生无脊椎动物，冷冻、熏制、干燥、腌制或盐渍 `026ea2a8-cdc9-469d-9eb5-10a7d33efab6` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 生物或分类学身份；保存路线；可食用、饲料、饵料、研究或工业预期用途；产品验收规范；净质量方法；适用的水分含量或干物质基准；适用的盐含量或盐水盐度；适用时冷冻产品的冰衣比例和去冰衣质量；盐水渍产品的沥干质量和留存盐水处理；适用时的出厂温度；包装纳入情况 |

冷冻产品的 1 kg 参考数量为去冰衣净产品质量，冰衣水单独计入清单。熏制或干制产品采用已申明水分的销售状态净质量。盐渍产品采用已申明水分和盐含量的销售状态净质量。盐水渍产品采用沥干产品质量，供应盐水单独报告。只有在提供实测换算到本参考基准的情况下，才能使用其他商业质量约定。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及所有质量归一化清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将清单归一化到 1 kg 合格参考产品；参考数量不含包装质量，包装作为投入报告。 |
| `net_mass_basis` | 所有路线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录每批次实测毛质量、扣减项及所得产品净质量，使参考数量可审计。 |
| `moisture_salt_basis` | 熏制、干制、盐渍和盐水渍路线 | 质量与质量分数 | kg；kg/kg | 报告产品水分；盐渍或盐水渍产品还应按已申明湿基或干基报告盐含量或盐水盐度；不同基准的数值未经换算不得比较。 |
| `glaze_drain_basis` | 冷冻或盐水渍路线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 冷冻产品采用去冰衣质量并单独计量冰衣；盐水渍产品采用沥干质量并单独记录留存、回收或排放的盐水。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_facility_gate` | foreground_system_boundary | 纳入从原料接收到保存设施门口产品的接收、准备、恰好一条终端保存路线、路线内包装、现场公用工程、直接排放、废物和废水。 | `eu-pef-2021-2279`; `codex-cxc-52-2003` |
| `boundary_upstream_inputs` | upstream_product_inputs | 原水生无脊椎动物物料、电力、燃料、水、盐、发烟材料、制冷剂和包装应采用最具代表性的上游数据集；不得在前景过程中重复建立其生产。 | `eu-pef-2021-2279` |
| `boundary_route_condition` | route_selection | 只纳入已申明终端路线及其实际设备和耗材；对于一个参考流，`frozen`、`smoked`、`dried`、`salted` 和 `in_brine` 路线互斥。 | `unsd-cpc-3-0-21269`; `codex-cxc-52-2003` |
| `boundary_intended_use` | intended_use | 仅对食品用途产品应用相关 Codex 操作控制。饲料、饵料、研究或工业产品应保持已申明的非食品边界，任何后续合格化转化应单独披露。 | `codex-cxc-52-2003` |
| `boundary_downstream_exclusion` | downstream_stages | 除非研究目标明确增加并与默认前景结果分开报告，否则排除配送、零售、用户制备、消费和生命末期处理。 | `eu-pef-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 保存设施接收的原料或预冷其他水生无脊椎动物，申明生物身份、来源批次、温度或保存条件、可食用或非食品状态以及上游数据集引用 |
| starting_condition_role | 共同接收与准备过程的上游产品投入 |
| product_classification_scope | 精确 CPC 3.0 `21269` 输出范围；投入物料可能处于另一 CPC 状态，且应保留其自身身份 |
| recursive_input_rule | 如果投入已使用精确 CPC 21269 产品流，则将其视为带上游数据集的外购保存中间品，不递归重建其先前保存过程；披露其质量和路线状态 |
| upstream_dataset_requirement | 原料及全部物料或能源投入采用具有地理、技术、时间和预期用途兼容性的代表性数据集 |
| disclosure | 申明起始物料状态、上游边界、选定路线、排除阶段、预期用途类别、质量基准和任何缺失的上游数据集 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receiving_preparation` | 接收与准备 | `required` | 所有数据集 | 核验身份和预期用途；按实际操作分选、清洗、修整和准备物料 | kg 准备后物料 |
| `freezing_route` | 冷冻与加冰衣路线 | `conditional` | 仅当路线为 `frozen` 时纳入 | 冷冻、按需加冰衣并包装产品 | 1 kg 去冰衣冷冻参考产品 |
| `smoking_drying_route` | 熏制或干制路线 | `conditional` | 仅当路线为 `smoked` 或 `dried` 时纳入；恰好选择一种模式 | 熏制或干制、均衡、冷却并包装产品 | 1 kg 已申明水分的销售状态产品 |
| `salting_brining_route` | 盐渍或盐水渍路线 | `conditional` | 仅当路线为 `salted` 或 `in_brine` 时纳入；恰好选择一种模式 | 使用干盐或盐水、均衡、按需沥干并包装产品 | 1 kg 盐渍净产品或沥干盐水渍产品 |

### 过程：接收与准备（`receiving_preparation`）

#### 输入

##### 产品流

###### 原水生无脊椎动物物料（`raw_material_input`）

按其自身产品身份记录实际接收物料；除非它已经是外购保存中间品，否则不得将其标记为 CPC 21269 参考流。

- 选定流：可获得的最具体原料或预冷其他水生无脊椎动物产品流
- 流属性/单位：质量 / kg
- 数量规则：批次接收并验收的称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 准备后物料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_preparation`
- 来源：`unsd-cpc-3-0-21269`

###### 准备用水（`preparation_water`）

仅在清洗、解冻或准备中实际使用时，记录跨越设施边界的水。

- 选定流：符合已申明质量的过程用水
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：水表、批次罐记录或按发票分配的用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备后物料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_preparation`
- 来源：`codex-cxc-52-2003`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 准备后水生无脊椎动物中间品（`prepared_intermediate`）

根据批次计量计算进入选定终端路线前的验收准备后物料。

- 选定流：准备后其他水生无脊椎动物中间品
- 流属性/单位：质量 / kg
- 数量规则：由批次质量平衡得到的验收准备后质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 准备后物料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_preparation`
- 来源：`codex-cxc-52-2003`

##### 废物流

###### 拒收物料与准备残余（`preparation_residues`）

按实际管理去向记录分选拒收物、修整残余和其他残余；不得假定其为食品共产品。

- 选定流：可获得的最具体残余或废物流
- 流属性/单位：质量 / kg
- 数量规则：按去向称量或由质量平衡得到的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备后物料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_preparation`

##### 基本流

### 过程：冷冻与加冰衣路线（`freezing_route`）

#### 输入

##### 产品流

###### 冷冻用准备后中间品（`freezing_material_input`）

准备后中间品进入选定冷冻批次，并作为路线收率的物料基准。

- 选定流：准备后其他水生无脊椎动物中间品
- 流属性/单位：质量 / kg
- 数量规则：投入冷冻批次的准备后称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 去冰衣冷冻产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_route`

###### 冷冻用电（`freezing_electricity`）

记录纳入的冷冻路线设备和路线内操作所消耗的电力。

- 选定流：场址电力供应
- 流属性/单位：能量 / kWh
- 数量规则：分配到批次的冷冻机、冷库、加冰衣和路线内包装实测用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 去冰衣冷冻产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_route`
- 数量范围：仅在缺少电表或发票数据时使用的暂定筛选值；取得代表性前景数据或经审查的路线证据后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：5
  - 单位：kWh/kg 去冰衣冷冻产品
  - 基准：每 kg 路线输出的宽泛筛选范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 加冰衣用水（`glazing_water`）

冰衣用水与去冰衣参考产品质量分开记录。

- 选定流：符合已申明质量的水
- 流属性/单位：质量 / kg
- 数量规则：实测施加的冰衣水，仅在加冰衣时纳入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 去冰衣冷冻产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_route`
- 来源：`codex-cxc-52-2003`

###### 冷冻路线包装（`freezing_packaging`）

记录随冷冻产品跨越设施边界的包装，不将其加入参考质量。

- 选定流：按材料类型记录实际初级和次级包装材料
- 流属性/单位：质量 / kg
- 数量规则：归属于批次的采购或领用包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 去冰衣冷冻产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_route`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格冷冻参考产品（`frozen_reference_product`）

此输出仅在已申明 `frozen` 路线和去冰衣质量约定下实现参考流。

- 选定流：其他水生无脊椎动物，冷冻、熏制、干燥、腌制或盐渍 `026ea2a8-cdc9-469d-9eb5-10a7d33efab6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由实测毛质量和冰衣质量换算得到 1 kg 去冰衣合格冷冻产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_route`
- 来源：`unsd-cpc-3-0-21269`; `codex-cxc-52-2003`

##### 废物流

###### 冷冻路线废水和拒收物（`freezing_route_waste`）

按实际处理去向记录离开冷冻路线的废水和拒收物料。

- 选定流：按实际处理去向记录废水和拒收产品流
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：按去向实测或由质量平衡得到的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 去冰衣冷冻产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_route`

##### 基本流

###### 制冷剂向空气损失（`freezing_refrigerant_loss`）

当证实发生损失时，记录纳入设备释放的物质特定制冷剂。

- 选定流：与充注物质相匹配的制冷剂基本流
- 流属性/单位：质量 / kg
- 数量规则：实测补充量减去有记录的回收量后分配到批次；仅纳入边界内设备
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 去冰衣冷冻产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_route`

### 过程：熏制或干制路线（`smoking_drying_route`）

#### 输入

##### 产品流

###### 熏制或干制用准备后中间品（`smoke_dry_material_input`）

准备后中间品恰好进入一种选定熏制或干制模式，并作为路线收率基准。

- 选定流：准备后其他水生无脊椎动物中间品
- 流属性/单位：质量 / kg
- 数量规则：投入选定路线模式的准备后称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 销售状态熏制或干制产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoking_drying_route`

###### 熏制或干制能源（`smoke_dry_energy`）

分别记录选定熏制或干制设备和路线内操作消耗的各能源载体。

- 选定流：分别记录实际电力、燃料或热能供应
- 流属性/单位：能量或质量 / kWh、MJ 或 kg
- 数量规则：选定 `smoked` 或 `dried` 模式的实测或按发票分配能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 销售状态熏制或干制产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoking_drying_route`
- 数量范围：仅在缺少路线特定记录时使用的暂定筛选能源；取得实测记录或经审查的技术证据后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.1
  - 上限：30
  - 单位：kWh 当量/kg 销售状态输出
  - 基准：涵盖熏制和干制技术的宽泛筛选范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 发烟材料（`smoking_material`）

仅对边界内直接发烟的 `smoked` 路线记录发烟材料。

- 选定流：实际木材或其他发烟材料
- 流属性/单位：质量 / kg
- 数量规则：实测消耗量；仅在路线模式为 `smoked` 且现场直接发烟时纳入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 熏制产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoking_drying_route`
- 来源：`codex-cxc-52-2003`

###### 熏制或干制路线包装（`smoke_dry_packaging`）

记录随熏制或干制产品离开的包装，不将其加入参考质量。

- 选定流：按材料类型记录实际初级和次级包装材料
- 流属性/单位：质量 / kg
- 数量规则：归属于批次的采购或领用包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 销售状态熏制或干制产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoking_drying_route`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格熏制或干制参考产品（`smoke_dry_reference_product`）

此输出仅在已申明 `smoked` 或 `dried` 模式及水分基准下实现参考流。

- 选定流：其他水生无脊椎动物，冷冻、熏制、干燥、腌制或盐渍 `026ea2a8-cdc9-469d-9eb5-10a7d33efab6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 合格销售状态产品，申明路线模式和实测水分
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_smoking_drying_route`
- 来源：`unsd-cpc-3-0-21269`; `codex-cxc-52-2003`

##### 废物流

###### 熏制或干制残余（`smoke_dry_waste`）

在可行时按组成和去向分别记录路线特定固体与液体残余。

- 选定流：按实际路线和去向记录产品拒收物、灰分、冷凝物和废水流
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：按去向实测或由质量平衡得到的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 销售状态熏制或干制产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoking_drying_route`

##### 基本流

###### 熏制或干制直接排放（`smoke_dry_direct_emissions`）

记录纳入的燃烧或发烟过程直接释放的物质特定排放。

- 选定流：现场燃烧或发烟产生的物质特定空气排放
- 流属性/单位：质量 / kg
- 数量规则：实测排放或由燃料特定因子计算的排放；仅在边界内不存在直接排放源时才省略
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 销售状态熏制或干制产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_smoking_drying_route`

### 过程：盐渍或盐水渍路线（`salting_brining_route`）

#### 输入

##### 产品流

###### 盐渍或盐水渍用准备后中间品（`salt_brine_material_input`）

准备后中间品恰好进入一种选定干盐渍或盐水渍模式，并作为路线收率基准。

- 选定流：准备后其他水生无脊椎动物中间品
- 流属性/单位：质量 / kg
- 数量规则：投入选定路线模式的准备后称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 盐渍净产品或沥干盐水渍产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salting_brining_route`

###### 盐投入（`salt_input`）

记录直接加入或通过配制盐水加入的全部盐，以核对产品和废盐水中的盐。

- 选定流：符合预期用途的食品级或已申明非食品级盐
- 流属性/单位：质量 / kg
- 数量规则：称量直接加入或配制盐水所含的盐
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 盐渍净产品或沥干盐水渍产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salting_brining_route`
- 来源：`codex-cxc-52-2003`
- 数量范围：仅在缺少配方和采购记录时使用的暂定筛选盐投入；取得批次配方记录或经审查的产品特定证据后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.005
  - 上限：1.5
  - 单位：kg 盐/kg 路线输出
  - 基准：涵盖干盐渍和盐水渍的宽泛筛选范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 盐水用水（`brine_water`）

将配制或补充盐水的用水与沥干参考产品质量分开记录。

- 选定流：符合已申明质量的水
- 流属性/单位：质量 / kg
- 数量规则：配制或补充盐水的实测加水量；仅在 `in_brine` 模式纳入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 沥干盐水渍产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salting_brining_route`
- 来源：`codex-cxc-52-2003`

###### 盐渍或盐水渍能源（`salt_brine_energy`）

分别记录选定盐渍或盐水渍设备和路线内操作消耗的各能源载体。

- 选定流：分别记录实际电力、燃料或热能供应
- 流属性/单位：能量或质量 / kWh、MJ 或 kg
- 数量规则：混合、泵送、均衡、冷却和路线内包装的实测或按发票分配能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 盐渍净产品或沥干盐水渍产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salting_brining_route`

###### 盐渍或盐水渍路线包装（`salt_brine_packaging`）

记录随盐渍或盐水渍产品离开的包装，不将其加入参考质量。

- 选定流：按材料类型记录实际初级和次级包装材料
- 流属性/单位：质量 / kg
- 数量规则：归属于批次的采购或领用包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 盐渍净产品或沥干盐水渍产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salting_brining_route`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格盐渍或盐水渍参考产品（`salt_brine_reference_product`）

此输出仅在已申明 `salted` 或 `in_brine` 模式及适用质量约定下实现参考流。

- 选定流：其他水生无脊椎动物，冷冻、熏制、干燥、腌制或盐渍 `026ea2a8-cdc9-469d-9eb5-10a7d33efab6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 合格盐渍净产品或沥干盐水渍产品，申明水分、盐分条件和留存盐水处理
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_salting_brining_route`
- 来源：`unsd-cpc-3-0-21269`; `codex-cxc-52-2003`

##### 废物流

###### 废盐水、废水和拒收物（`salt_brine_waste`）

按组成和实际处理去向分别记录废盐水、废水和拒收物料。

- 选定流：按实际处理去向记录废盐水、废水和拒收产品流
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：按去向实测排放量或由质量平衡得到的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 盐渍净产品或沥干盐水渍产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salting_brining_route`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid` | shared_processes | 通过划分路线、批次、计量表和单元操作，或采用有记录的物理因果关系来避免分配。 | `eu-pef-2021-2279` |
| `allocation_residual_products` | co_products_and_residues | 根据实际去向和适用研究规则，将每个次级输出分类为产品、共产品、可回收材料或废物；除非单独申明替代模型，不得赋予避免负荷。 | `eu-pef-2021-2279` |
| `allocation_fallback` | inseparable_multioutput_process | 若不能划分且无可用物理因果关系，则使用代表性数值采用经济或其他符合 PEF 且有理由的分配基准，披露公式和数据期，并在选择可能实质影响结果时报告敏感性。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_preparation` | `receiving_preparation` | 接收质量、准备用水、验收中间品和残余 | 批次记录与测量 | lot_id; organism_identity; intended_use; input_mass; water_use; prepared_mass; residue_mass; destination | 经校准秤、水表或罐记录及批次核算 | kg; m3 | 每批次，公用工程至少按月核算 | 包括季节性生产活动的已申明代表性生产期 | 所有纳入的接收和准备操作 | 按批次汇总、核对质量后除以准备后输出 | 校准记录；发票或仪表日志；批次单；残余转移记录 |
| `cp_freezing_route` | `freezing_route` | 物料、能源、冰衣、包装、输出、废物和制冷剂 | 批次、仪表、发票和维护记录 | lot_id; prepared_mass; electricity; glaze_water; packaging_mass; gross_frozen_mass; glaze_mass; deglazed_mass; waste; refrigerant_charge; refrigerant_recovery | 批次称量、分表计量或分配、包装领用记录、去冰衣试验和制冷剂维护平衡 | kg; kWh; m3 | 每批次；公用工程和制冷剂按申明期核算 | 已申明代表性冷冻期 | 所有纳入的冷冻、加冰衣、冷藏和路线内包装设备 | 将输出换算为去冰衣质量，按有记录的因果驱动因素分配共用公用工程，并归一化到 1 kg 输出 | 秤和仪表校准；去冰衣试验；发票；维护记录；批次核算 |
| `cp_smoking_drying_route` | `smoking_drying_route` | 物料、能源、发烟材料、包装、输出、残余和直接排放 | 批次、仪表、配方、燃料和排放记录 | lot_id; route_mode; prepared_mass; energy_by_carrier; smoke_material; packaging_mass; product_mass; moisture; waste_by_destination; emission_factor_or_measurement | 批次称量、仪表或发票、配方记录、水分试验及实测或因子法排放 | kg; kWh; MJ | 每批次，公用工程按申明期核算 | 已申明代表性熏制或干制期 | 仅选定的熏制或干制设备及路线内包装 | 能源载体分开记录，适用时计算直接排放，并归一化到 1 kg 销售状态输出 | 校准；发票；配方与水分试验；排放方法记录；批次核算 |
| `cp_salting_brining_route` | `salting_brining_route` | 物料、盐、盐水用水、能源、包装、输出、废盐水和拒收物 | 批次、配方、仪表、发票和产品试验记录 | lot_id; route_mode; prepared_mass; salt_mass; brine_water; brine_salinity; energy_by_carrier; packaging_mass; gross_product_mass; drained_mass; moisture; product_salt; spent_brine; waste | 批次称量、配方单、盐度和水分试验、仪表、发票及沥干规程 | kg; kWh; MJ | 每批次，公用工程按申明期核算 | 已申明代表性盐渍或盐水渍期 | 仅选定的干盐渍或盐水渍设备及路线内包装 | 核对盐和水，对盐水渍输出计算沥干产品质量，并归一化到 1 kg 路线输出 | 秤和仪表校准；配方单；盐度/水分试验；沥干记录；批次核算 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | 参考输出 | 冷冻净质量 = 冷冻毛质量减实测冰衣质量；盐水渍净质量 = 实测沥干产品质量；其他路线采用不含包装的销售状态产品质量，并申明水分和盐分基准。 | gross_product_mass; glaze_mass; drained_mass; packaging_mass; moisture; product_salt | conforming_reference_mass_kg | `codex-cxc-52-2003` |
| `calc_normalization` | 所有清单行 | 归一化数量 = 周期或批次数量除以合格参考产品质量（kg）。 | inventory_quantity; conforming_reference_mass_kg | quantity_per_kg_reference_product | `eu-pef-2021-2279` |
| `calc_mass_balance` | 每个纳入过程 | 核对实测物料投入与产品、共产品、废物、留存盐水或冰衣，以及定量质量转移或损失；调查并披露实质质量不平衡。 | input_masses; product_masses; waste_masses; retained_or_removed_water; measured_losses | process_mass_balance | `eu-pef-2021-2279` |
| `calc_route_selection` | 过程图 | 对每个参考流将恰好一个终端路线标志设为真，并排除所有未选路线过程的清单。 | preservation_route; route_mode | selected_route_inventory | `unsd-cpc-3-0-21269` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 产品和起始物料 | 在可行分类层级保留生物身份、批次、来源、预期用途类别、保存路线和验收规范；记录通用 CPC 21269 身份适用的理由。 | 供应商规范、接收记录、批号、产品规范和 CPC 范围核查 |
| `dq_measurement` | 质量、能源、水、盐、盐水、冰衣、水分和排放 | 使用经校准测量或可追溯业务记录；说明换算因子、分配驱动因素、试验方法以及不确定性或已知缺口。 | 校准证书、仪表和发票记录、实验室或生产试验及计算工作簿 |
| `dq_temporal_coverage` | 前景数据集 | 覆盖已申明的代表性运行期，在重要时包括季节或生产活动变化，并披露停机、异常批次和排除项。 | 生产日历、批次覆盖摘要和代表性评价 |
| `dq_completeness` | 纳入过程 | 对共同过程及选定终端路线的物料和能源投入、包装、参考产品、次级输出、废物、废水和直接排放进行核算。 | 流清单、质量平衡、公用工程核算和废物记录 |
| `dq_estimate_replacement` | `reasoned_estimate` 范围 | 暂定范围仅作为筛选默认值。进入 active 审查前以代表性前景记录或经审查的来源证据替换；否则记录保留估算的理由、不确定性和敏感性检验。 | 估算登记、替换证据或有记录的敏感性分析 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_identity` | product_identity | 核验 canonical PCR id、CPC 3.0 代码 `21269`、精确通用产品流 UUID `026ea2a8-cdc9-469d-9eb5-10a7d33efab6`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg 单位。 | `unsd-cpc-3-0-21269` |
| `validation_qualifiers` | reference_flow | 若缺失保存路线、生物身份、预期用途类别、净质量方法、适用的水分或盐分条件、适用的冰衣或沥干质量处理、适用温度或包装纳入情况，则判定参考流不完整。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `validation_route_exclusivity` | process_inventory | 必须纳入 `receiving_preparation` 且恰好纳入一条终端路线。对于 `smoking_drying_route`，在 `smoked` 与 `dried` 中选一；对于 `salting_brining_route`，在 `salted` 与 `in_brine` 中选一。 | `unsd-cpc-3-0-21269` |
| `validation_mass_and_inventory` | foreground_dataset | 必须提供路线特定参考质量计算、过程质量平衡、采集或计算清单行的采集协议链接、产品投入的上游数据集，以及缺失流或数据的披露。 | `eu-pef-2021-2279` |
| `validation_nonfood_boundary` | intended_use | 若数据集将不可食用、饲料、饵料、研究或工业产品视为食品，或在没有有记录的合格化过程和食品产品身份时声明符合 Codex 食品要求，则判定不合格。 | `codex-cxc-52-2003` |
| `validation_reasoned_estimates` | provisional_ranges | 标记每个 `reasoned_estimate`；进入 active 审查前，必须以代表性记录或经审查的来源证据替换，或提供有记录的理由、不确定性说明和敏感性分析。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个保存设施、已申明产品和互斥终端路线的前景生产数据包 |
| downstream_use | 经审查后可作为 `secondary_dataset` 或 `background_dataset` 发布，并投影为 `process` 或 `lifecyclemodel` 实体 |
| allowed_use | 在已申明 CPC 范围、路线、地理、时间、技术、预期用途类别和参考质量约定内进行比较型或归因型建模 |
| excluded_use | 数据集不支持的物种特定、营养、食品安全、货架期、非食品转食品或替代路线声明；没有记录的映射决定时不得用于 CPC 21269 以外范围 |
| required_metadata | canonical PCR id；CPC 代码；生物身份；预期用途；路线和路线模式；设施地理；时间期；技术；净质量方法；水分和盐分基准；冰衣或沥干质量处理；包装边界；上游数据集；分配；估算状态 |
| required_quality_disclosure | 数据源和采集覆盖；代表性；质量与公用工程核算；缺失 UUID 或流；推理估算；分配敏感性；排除项；不确定性 |
| update_trigger | 生物组成、预期用途类别、保存路线、技术、配方、能源供应、产品质量约定、来源规则、上游数据集或替换暂定范围的证据发生实质变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21269` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类》（CPC）3.0 版，子类 21269，“Other aquatic invertebrates, frozen, smoked, dried, salted or in brine”。 | 产品类别身份、精确分类范围和互斥保存状态申明 |
| `codex-cxc-52-2003` | 标准（`standard`） | Codex Alimentarius，CXC 52-2003，Code of Practice for Fish and Fishery Products，采用适用于已申明生物和过程的现行版本。 | 食品用途条件下的操作、准备、冷冻、熏制、干制、盐渍、盐水渍、过程控制和路线特定产品计量 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | European Commission Recommendation (EU) 2021/2279，Annex I，Product Environmental Footprint Method；ELI `http://data.europa.eu/eli/reco/2021/2279/oj`。 | 功能和参考流框架、系统边界、清单完整性、分配层级、归一化、数据质量和披露 |
