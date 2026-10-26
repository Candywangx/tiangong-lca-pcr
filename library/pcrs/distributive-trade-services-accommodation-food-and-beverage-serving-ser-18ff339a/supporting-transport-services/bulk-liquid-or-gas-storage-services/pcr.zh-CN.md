---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.bulk-liquid-or-gas-storage-services
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 散装液体或气体仓储服务

## 1. 范围与适用性

液体及气体的散装保管储存，包括石油、石油产品、葡萄酒及其他散装物质。每个数据集固定物质/组成、相态、温压状态、容纳类型及保管时段。常压罐、压力容器、冷藏/低温容器及实际地下储气采用条件性作业与实际清单，不是可互换的平均服务。[来源：`un-cpc-bulk-storage`]

纳入所声明储存设施端点的接收/提取、常规储存保障、必要温压维持、实际蒸发/泄漏控制及可归属清洗/维护。区分初始液化、产品精制/调配/发酵、下游再气化、管道或车辆运输及独立销售的装卸服务。仅为维持储存而进行的内部蒸气再冷凝或再压缩属于储存；独立商品转化应单列清单且不得重复计入。所储商品及工作/垫底库存仍属保管存量，不是消耗性投入或新制造输出。明确披露初始垫底气需求、实际损失及合同补偿责任；归属替代生产时另设具体上游投入，不得计入整个所储质量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.bulk-liquid-or-gas-storage-services |
| classification_refs | CPC 3.0 67220; exact |
| covered_products | 明确组成、热力工况及容纳条件的散装液体与气体保管储存 |
| excluded_products | 商品生产/转化；独立运输；储存维持之外的液化/再气化；无关仓储或装卸 |
| representative_product | 所记录工况下、已识别储罐内一种明确石油液体的一吨日储存 |
| production_route | 接收计量保管存量 → 维持规定容纳与储存条件 → 计量提取并核对剩余存量 |
| market_state | 具有可审计保管、存量时间及损失记录的已完成可计量储存服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在所声明组成、相态、容纳及工况限制内维持散装物质保管 |
| How much | 实际保管质量按时间积分的一吨日 |
| How well | 满足实际合同约定的完整性、组成、温度及压力要求，披露损失与偏离 |
| How long or cycle | 实际保管时段；按事件时间戳折算不足整日时段，透明分配所需保管前/后保障 |
| reference_flow_link | `storage_service` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已声明物质及工况的散装储存服务 |
| 参考流属性 | 质量*时间 `b3f0f892-c5a3-4c66-a432-c09e3d1e9bd6` |
| 参考单位组 | 质量*时间 `59f191d6-5dd3-4553-af88-1a32accfe308` |
| 参考单位 | tday |
| 必需限定信息 | 物质及实际组成；液/气相态；保管存量所有权；实际储存质量历史；温度与压力及绝压/表压约定；储罐/容器/洞库编号、容量及建设；保温/罐顶/密封/控制类型；接收/提取端点和时间；储存时长；环境条件；温压维持路线；吞吐量；底量/垫底库存；放空/回收/火炬路线；计量及密度基准；电力供应；资产范围；供应商分工；质量偏离及损失 |

tday是“一公吨乘一天”的显式ASCII显示符号，映射到真实单位组单位t*d，不是该单位组内的命名单元。一天为24小时，一吨为1000千克；保留不足整日的实际时长。参考为质量时间，不是日吞吐量、空罐容量、一批运单、气体标准体积或制冷容量。不同物质、相态及工况须分别建数据集。储存质量是实测库存质量，不是期间累计接收质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| storage_basis | 参考产品 | 质量*时间 `b3f0f892-c5a3-4c66-a432-c09e3d1e9bd6` | tday | 用cp_storage将实际质量按保管时长积分；tday准确映射至t*d。实际可归属交换量归一至一个此参考流。 |
| density_basis | storage_service | 质量 | kg | 从液体体积求质量时，须有所记录温压下实测物质/批次密度；气体体积还须绝对压力、温度、组成及适用压缩因子。不得假定通用油品/葡萄酒/气体密度。 |
| stock_reconciliation | storage_service | 质量*时间 | tday | 核对期初存量、实际接收/提取、期末存量、损失及底量/垫底库存；区分客户存量与场内燃料。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已有散装物质在储存端点交接，容纳设施已安装；仅储存服务不含继承的商品生产，实际公用工程及资产仍含上游负荷 |
| starting_condition_role | foreground_start |
| product_classification_scope | 散装液体与气体储存，按组成/工况分别建数据集 |
| recursive_input_rule | 分包储存以明确存量时间及完整上游范围计入一次；剔除重叠自有公用工程/资产。同一保管边界内的内部转移不产生另一个完整储存输出。 |
| upstream_dataset_requirement | 与所声明情景对应的实际电力/热/燃料、氮气、水、化学品、罐/泵/压缩机/洞库建设及废物处理清单 |
| disclosure | 实际端点、存量时间总体、充空操作、调节、底量/垫底库存、损失、物种、供应商/资产边界、上游遗漏及转化排除项 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| boundary_storage | 纳入实际接收、储存、提取、计量、待机、温压维持、蒸气回收及可归属清洗/维护；区分生产液化及下游再气化。 | un-cpc-bulk-storage |
| boundary_vapors | 筛查储罐加热、实际组成、液位变化、氮封、蒸气控制及清洗。采用化学物质特定数据；美国环保署有机液体指导不提供低温气体损失或通用控制性能。 | epa-tanks-faq |
| boundary_fate | 追踪每种实际组分的产生、捕集、内部返回、产品输出、火炬及大气去向。内部返回的蒸发气不是输出产品或基本流排放；只有实际残余组分排放进入空气行，火炬二氧化碳与未燃甲烷分开。 |  |
| boundary_complete | 筛查实际制冷剂、化学品、燃料、维护废物及储存专用资产。逐项增加实际交换；未知组成、损失或资产分母须作为缺口披露，不得视为零。 |  |

## 6. 过程清单结构

每卡为单一交换，适用性由实际物质及设施确定。其他实际化学物种、制冷剂、废物、燃料及资产类型须另设卡片。总挥发性有机物、气体总量、蒸发气或火炬气是采集观测量，不是合格的原子选定流。按实测组成分解实际混合物并核对组分之和，不得假定蒸气组成等于液体组成。保留并披露泄压事件及异常损失。实际氢、氧、二氧化碳、葡萄酒挥发组分或其他气体，在适用时须设准确物种/介质记录；下列示例不是完整或强制混合组成。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| storage | 接收、维持并提取散装保管存量 | required | 实际液/气容纳情景；逐项落实流条件 | foreground_production | 每参考流 |

### 过程：接收、维持并提取散装保管存量（`storage`）

#### 输入

##### 产品流

###### 储存场址用户端交流电（`electricity`）

按活动分别计量实际泵、压缩机、制冷、控制、照明及待机用电；保留地区、电压及发电覆盖范围。

- 选定流：储存场址用户端交流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流的可归属实测交换量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 外购过程热（`heat`）

仅在外购热用于维持所声明储存温度时纳入；采集实际交付能量及凝结水返回边界，不采用锅炉额定容量。

- 选定流：外购过程热
- 流属性/单位：能量 / MJ
- 数量规则：每参考流的可归属实测交换量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 甲烷燃料（`methane_fuel`）

仅在实际场内储存加热或火炬引燃消耗甲烷时纳入。天然气混合物须按实测组成增设具体组分行；排除外购热已含燃烧。

- 选定流：甲烷燃料
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_fuel。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fuel`
- 来源：

###### 储罐氮封用供应氮气（`nitrogen`）

实际采用氮封或惰化时纳入；计量供应质量及来源。氮封不证明有机物损失为零。

- 选定流：储罐氮封用供应氮气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 自来水（`water`）

实际清洗、冷却补水或卫生保障时纳入；区分消耗与循环流量并记录废水去向。

- 选定流：自来水
- 流属性/单位：体积 / m3
- 数量规则：每参考流的可归属实测交换量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 颗粒活性炭（`activated_carbon`）

实际使用活性炭吸附处理蒸气时纳入；采集新投/更换活性炭及实际再生边界。

- 选定流：颗粒活性炭
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 矿物润滑油（`lubricant`）

实际泵或压缩机润滑时纳入；核对领用、库存、回收油及实际泄漏。

- 选定流：矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 无水氨制冷剂（`ammonia_charge`）

仅用于实际氨制冷回路。其他制冷剂须另设化学物质行，不得把氨身份套用于混合制冷剂。

- 选定流：无水氨制冷剂
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`
- 来源：

###### 已确定配置的散装储罐（`tank_share`）

实际使用储罐或压力容器时纳入；识别材料、保温、容量、压力等级及建设清单；一个数据集固定一种实际储罐配置。

- 选定流：已确定配置的散装储罐
- 流属性/单位：物品数量 / Item(s)
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 已确定配置的液体输送泵（`pump_share`）

实际液体泵送时纳入；压缩机及其他设备类型须另设具体制造流，不得隐藏在本泵行。

- 选定流：已确定配置的液体输送泵
- 流属性/单位：物品数量 / Item(s)
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 已确定配置的储存气体压缩机（`compressor_share`）

实际用于储存压力维持或蒸气回收时纳入；排除上游生产压缩及独立液化。

- 选定流：已确定配置的储存气体压缩机
- 流属性/单位：物品数量 / Item(s)
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 已确定配置的地下储气洞库（`cavern_share`）

实际地下散装储气时纳入；识别有效洞库容积、建设清单、压力循环及寿命服务分配；不得对同一洞库再计储罐。

- 选定流：已确定配置的地下储气洞库
- 流属性/单位：体积 / m3
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

#### 输出

##### 产品流

###### 已声明物质及工况的散装储存服务（`storage_service`）

针对一种明确组成、相态、温度、压力及容纳配置，以实际保管质量对时间积分形成一吨日。

- 选定流：已声明物质及工况的散装储存服务
- 流属性/单位：质量*时间 `b3f0f892-c5a3-4c66-a432-c09e3d1e9bd6` / tday
- 数量规则：1 tday
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_storage`
- 来源：

##### 废物流

###### 废颗粒活性炭（`spent_carbon`）

实际转移废吸附剂时纳入；识别吸附化学物、处理及实际再生份额，不自动赋予回收收益。

- 选定流：废颗粒活性炭
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废矿物润滑油（`used_oil`）

实际分离排出废润滑油时纳入；称重并识别处理，与泄漏油分开。

- 选定流：废矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 受污染储罐清洗废水（`tank_washwater`）

实际清罐时纳入；识别污染物、实测体积及去向；不同不相容废水为独立流，不得用集合标签混并。

- 选定流：受污染储罐清洗废水
- 流属性/单位：体积 / m3
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 甲烷，排入空气（`methane_air`）

仅在无组织泄漏、放空、蒸发或火炬残余尾气中实际存在该物种时纳入。计量物种数量，区分产生、捕集、内部回收、输出及实际排放；不得把总挥发性有机物或蒸发气当作该物种。

- 选定流：甲烷，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_species。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 来源：

###### 乙烷，排入空气（`ethane_air`）

仅在无组织泄漏、放空、蒸发或火炬残余尾气中实际存在该物种时纳入。计量物种数量，区分产生、捕集、内部回收、输出及实际排放；不得把总挥发性有机物或蒸发气当作该物种。

- 选定流：乙烷，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_species。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 来源：

###### 丙烷，排入空气（`propane_air`）

仅在无组织泄漏、放空、蒸发或火炬残余尾气中实际存在该物种时纳入。计量物种数量，区分产生、捕集、内部回收、输出及实际排放；不得把总挥发性有机物或蒸发气当作该物种。

- 选定流：丙烷，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_species。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 来源：

###### 正丁烷，排入空气（`butane_air`）

仅在无组织泄漏、放空、蒸发或火炬残余尾气中实际存在该物种时纳入。计量物种数量，区分产生、捕集、内部回收、输出及实际排放；不得把总挥发性有机物或蒸发气当作该物种。

- 选定流：正丁烷，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_species。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 来源：

###### 乙醇，排入空气（`ethanol_air`）

仅在无组织泄漏、放空、蒸发或火炬残余尾气中实际存在该物种时纳入。计量物种数量，区分产生、捕集、内部回收、输出及实际排放；不得把总挥发性有机物或蒸发气当作该物种。

- 选定流：乙醇，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_species。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 来源：

###### 苯，排入空气（`benzene_air`）

仅在无组织泄漏、放空、蒸发或火炬残余尾气中实际存在该物种时纳入。计量物种数量，区分产生、捕集、内部回收、输出及实际排放；不得把总挥发性有机物或蒸发气当作该物种。

- 选定流：苯，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_species。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 来源：

###### 甲苯，排入空气（`toluene_air`）

仅在无组织泄漏、放空、蒸发或火炬残余尾气中实际存在该物种时纳入。计量物种数量，区分产生、捕集、内部回收、输出及实际排放；不得把总挥发性有机物或蒸发气当作该物种。

- 选定流：甲苯，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_species。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 来源：

###### 正己烷，排入空气（`hexane_air`）

仅在无组织泄漏、放空、蒸发或火炬残余尾气中实际存在该物种时纳入。计量物种数量，区分产生、捕集、内部回收、输出及实际排放；不得把总挥发性有机物或蒸发气当作该物种。

- 选定流：正己烷，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_species。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 来源：

###### 氨，排入空气（`ammonia_air`）

实际氨回路泄漏时纳入；核对期初/末充注量及补充/回收量；其他制冷剂须分别识别并建立实际质量平衡。

- 选定流：氨，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`
- 来源：

###### 化石二氧化碳，排入空气（`fossil_co2`）

实际化石燃料燃烧或火炬转化时纳入；按经核验的组分含碳量与实际氧化率计算，或直接实测；与未燃甲烷分开。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_species。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 来源：

###### 一氧化碳，排入空气（`carbon_monoxide`）

实际燃烧/火炬排放时纳入；采用分物种测量或有证据的设备及工况，不假定销毁效率。

- 选定流：一氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_species。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 来源：

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| allocate_direct | 优先拆分储罐、物质批次及运行工况；接收/提取能耗按实际转移归属，持有能耗按实际工况维持活动归属，共用保障按实测因果利用量归属。在存量时间归一前核对全设施总量。存量时间本身不能代表泵送或蒸气控制工作量。 |  |
| allocate_assets | 为罐、泵、压缩机及洞库维持持续资产账。按有证据的全寿命服务利用量分配建设/制造及实际更新，披露循环与日历限制。期间核算仅分配已归属该期份额；跨客户及期间累计份额不得超过一，也不得每年重置。未知寿命/分母须审查并开展敏感性分析。 |  |
| allocate_losses | 实际损失、捕集及火炬保留在储存路线内。客户商品不是服务共产品。输出回收物料须有实际身份、组成、实测数量及合理分配约定；不默认赋予避免生产收益。内部回收保留负荷，不产生独立产品输出。 |  |
| allocate_provider | 剔除供应商服务清单已含的公用工程、维护或资产。空罐待机、清洗及终端保障在有证据的储存服务总体间透明分配，不设默认价格比例。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_storage | storage | storage_service | 保管及存量时间账 | 物质/批次；组成；质量时间戳；期初/末存量；接收；提取；损失；相态；温度；压力；密度；底量/垫底库存；实际端点时间戳 | 使用经校准的交接质量计、称重或经校准液位/体积及实测批次密度。气体换算还记录绝对压力、温度及适用压缩因子。将实际库存质量按保管时间积分；事件分辨率须足以表征充装与提取，核对物料平衡。 | tday | 每次库存变化及有根据的监测间隔 | 完整保管时段，含不足整日 | 所声明罐/容器/洞库及全部运营方 | 每参考流 | 校准；库存记录；实测密度/组成；事件时间；平衡核对 |
| cp_energy | storage | electricity; heat | 能源计量及操作日志 | 分别记录kWh及MJ；供应；时间戳；泵/压缩机/制冷/加热负荷；待机；实际共用分配 | 逐种实际能源分别计量；按实测因果活动区分转移与持有任务，保留原单位。 | kWh；MJ | 每计量时段及转移 | 全部实际纳入保障及作业 | 所声明储存设施 | 每参考流 | 电热表；负荷日志；供应商范围；设施总量 |
| cp_fuel | storage | methane_fuel | 燃料组分平衡 | 燃料质量；实际气体组成；引燃/加热负荷；从库存取用燃气；计量；库存差 | 计量实际供应/消耗甲烷及各额外燃料组分；区分从库存取作燃料与商业储存存量，核对碳去向。 | kg | 每次燃料领用/运行时段 | 全部实际场内燃料使用 | 实际加热及控制设备 | 每参考流 | 燃料计量；组成分析；库存记录 |
| cp_material | storage | nitrogen; water; activated_carbon; lubricant | 逐项材料账 | 单一物质；供应质量或体积；库存变化；清洗/控制事件；实际返回/回收 | 分别测量各具体材料；记录组成及密度换算，核对再用及库存变化。 | kg；m3 | 每供应/使用及库存时段 | 完整实际服务保障 | 所声明设备及运营方 | 每参考流 | 发票；经校准计量/秤；库存及维护记录 |
| cp_refrigerant | storage | ammonia_charge; ammonia_air | 分制冷剂充注平衡 | 氨期初/末回路充注；补充；回收；处置；维修；实测损失 | 核对各实际回路充注及转移；补充量本身不证明泄漏。将核验损失归属具体化学物质及空气介质；其他制冷剂分别记录。 | kg | 每维护事件及监测期 | 完整代表的制冷运行 | 实际制冷回路 | 每参考流 | 维护记录；充注称重；检漏；质量平衡 |
| cp_assets | storage | tank_share; pump_share; compressor_share; cavern_share | 持续资产账 | 资产编号/配置；实际件数或有效洞库m3；建设清单；实际利用量；有证据的寿命利用量；容量限制；先前累计份额；本期份额；更新 | 关联实际制造/建设清单与有证据的寿命服务分母和持续分配账。仅归属有关观测期份额，守恒寿命份额；报告无证据的寿命估计及敏感性。 | Item(s)；m3 | 每次分配及资产更新 | 有证据的完整寿命并声明观测期 | 已识别实际容纳设施及设备 | 每参考流 | 资产/工程记录；利用量证据；寿命依据；累计份额核对 |
| cp_waste | storage | spent_carbon; used_oil; tank_washwater | 分类废物转移 | 废物流组成；各自kg或m3；事件；储存情景；接收方；处理；实际再生 | 分别称量或计量每项废物流，识别污染与处理；剔除已捕集却再次作为空气排放计入的物质。 | kg；m3 | 每次实际转移 | 全部可归属清洗/维护 | 储存及处理交接点 | 每参考流 | 转移凭证；组成；废物平衡；处理清单 |
| cp_species | storage | methane_air; ethane_air; propane_air; butane_air; ethanol_air; benzene_air; toluene_air; hexane_air; fossil_co2; carbon_monoxide | 分组分去向账 | 实际组成；蒸气/空气采样；温度；压力；充装/提取循环；捕集；返回；放空；火炬；氧化/逃逸；污染物物种；质量；介质；实际方法适用性 | 实测物种排放，或采用对所声明物质、相态及控制有效的经审查方法；按有效观测或有证据的蒸气组成分解，并核对各去向与控制活动。美国环保署液体指导不是通用低温气体模型。 | kg | 每事件及代表监测时段 | 所代表常规、清洗、异常及紧急事件 | 全部实际储存/控制设备 | 每参考流 | 物种分析；经校准流量计；方法范围；去向/碳平衡；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| stock_time | storage_service | 将实际库存公吨质量按经过日数积分，得到实际t*d储存活动量。使用事件分辨或合理插值存量记录，保留不足整日。tday映射至t*d，不设固定占用率或密度。 | cp_storage；实测质量历史；经过时间 | tday活动量 |  |
| service_normalization | 所有清单行 | 将实际交换归属所代表同质储存情景，再除以实测存量时间活动量；保留全部已分配保障与损失；参考输出准确为1 tday。 | cp_storage；可归属交换总量 | 每参考流交换量 |  |
| component_fate | methane_air; ethane_air; propane_air; butane_air; ethanol_air; benzene_air; toluene_air; hexane_air; fossil_co2; carbon_monoxide | 采用分物种实测组成及去向平衡。内部返回不是排放；捕集及销毁不得均作为排放。燃烧产物仅从实际进料碳及有证据的氧化/逃逸推导，记录方法及不确定性。 | cp_species；cp_fuel；实测控制性能 | 每参考流单一化学物排放 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_basis | storage_service | 要求实测存量时间及组成/热力配置；区分吞吐量、容量与实际保管质量，不得从无限定标准体积推断气体质量。 | cp_storage |
| quality_species | 所有清单行 | 识别每项实际损失物种与控制去向；总挥发性有机物/蒸发气在分物种前仍未解决。记录方法适用性及不确定性，不设通用泄漏、火炬或蒸发因子。 | cp_species; epa-tanks-faq |
| quality_assets | tank_share; pump_share; compressor_share; cavern_share | 支持寿命服务分母及守恒分配账；未知资产寿命或上游清单时不得声称完整生命周期。 | cp_assets |
| quality_representative | 所有清单行 | 披露设施、期间、物质/相态、实际保障覆盖、极端事件、遗漏及身份缺口。无独立证据不得把有机液体方法移用于气体/低温或无机物情景。 | cp_storage; cp_energy; cp_species |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| validate_reference | 要求唯一storage_service输出等于1 tday，对应一t*d实测质量时间，明确物质/工况。拒绝名义容量、吞吐量、仅计费时长或无限定体积作为替代分母。 |  |
| validate_balance | 核对保管存量、接收、提取、底量/垫底库存及损失。区分场内燃料、商品生产、液化/再气化、运输与仅储存保障，避免遗漏或重复。 |  |
| validate_species | 按组分身份检查每项实际排放、放空/蒸发气路线及控制去向。拒绝以挥发性有机物、气体及蒸发气集合标签作选定流，不假定零损失或完美火炬。 | epa-tanks-faq |
| validate_lifecycle | 检查资产累计份额不大于一、有依据的寿命服务分母、实际上游范围及供应商重叠。身份/测量/因子缺口须明确保留；方法草稿及计数检查不是发布批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | bulk_storage_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 可追溯供应链中、物质、相态、工况及保管端点兼容的明确散装储存阶段 |
| excluded_use | 完整商品足迹；生产液化/再气化/运输；无限定油品/葡萄酒/气体混合平均；暗示安全或方法批准 |
| required_metadata | 全部参考限定信息；实测存量时间；准确单位映射；实际路线与物种；资产/供应商覆盖；损失/替代责任；上游版本；分配 |
| required_quality_disclosure | 身份及测量缺口；蒸气方法局限；未测物种/控制效率；密度不确定性；资产寿命及缺失上游数据 |
| update_trigger | 物质/组成/相态变化；温压；容纳设施；充装循环；损失/控制路线；公用工程供应；资产寿命或保管范围变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-bulk-storage | official_guidance | 联合国统计司CPC 3.0，67220解释说明。https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67220 | 包括石油/产品/葡萄酒的散装液气储存；仅支持分类范围，不提供质量时间分母或因子 |
| epa-tanks-faq | official_guidance | 美国环保署AP-42第7章TANKS软件常见问题：加热储罐、分物种排放、氮封、控制、清洗及变化液体；2026-10-23阅读的当前网页。https://www.epa.gov/air-emissions-factors-and-quantification/ap-42-chapter-7-tanks-software-frequent-questions | 有机液体蒸气物性/组成及控制须明确条件；未采用定量因子、气体/低温模型或通用零损失声明 |
