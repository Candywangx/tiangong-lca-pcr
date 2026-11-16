---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.transmission-of-electricity-on-own-account
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 电力输送（自营）

## 1. 范围与适用性

本 PCR 覆盖自营交流架空输电网络及其配套变电站，按规定出口计量点每千瓦时已验收电量所对应的输电服务计量。强制规则 service_boundary 确定其较窄范围。本 PCR 不适用于发电或电力商品供应。不规定通用电压门槛：必须声明实际额定电压及输电网络认定依据。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.transmission-of-electricity-on-own-account |
| classification_refs | CPC 3.0 69111；覆盖范围较窄 |
| covered_products | 自营交流架空网络输电服务，包括配套变电站和内嵌调度、保护控制 |
| excluded_products | 直流网络；地下或海底电缆路线；发电或电力商品供应；配电；独立储能或转换服务；单独提供的调频辅助服务；独立的电表安装服务 |
| representative_product | 从规定入口计量点到已验收出口计量点的交流架空网络输电 |
| production_route | 交流线路输送，配套输电变电站、开关、控制和维护 |
| market_state | 规定质量和出口电压下的已验收计量服务；无可销售电力商品参考产出 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一个规定网络边界内的交流电输送服务 |
| How much | 出口节点每 1 千瓦时已验收电量对应的服务 |
| How well | 声明实际入口、出口电压、频率、验收质量及计量配置；不得虚构通用合规限值 |
| How long or cycle | 一个完整且连续的 12 个月运营期，入口、出口及辅助用电记录时间同步 |
| reference_flow_link | service_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 交流电输送服务 |
| 参考流属性 | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` |
| 参考单位组 | 能量 `93a60a57-a3c8-11da-a746-0800200c9a66` |
| 参考单位 | kWh |
| 必需限定信息 | 网络或回路及运营方; 自营责任; 交流及架空路线; 入口、出口计量点清单及电压; 地域; 期间; 质量和验收准则; 反向潮流处理; 输电损耗及站用电责任归属; 供应方边界及完整设备投入范围; 六氟化硫设备; 库存及气体状态; 无独立储能或调频辅助服务产出; 隔离备用辅助/支援供电且无商品网络注入 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| service_basis | 参考产品 | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Q 为同期出口计量点的已验收正电量。服务产出为 1 千瓦时。所有交换量只除以 Q 一次；备查的入口、出口电量不属于交换。本服务采用正式能量属性作为本地电能吞吐量计量约定；不表示燃烧热、电力商品产出或已核实的输电服务身份。 |
| energy_conversion | loss_electricity; aux_electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | 电流互感器、电压互感器倍率只应用一次；1 kWh = 3.6 MJ，1 MWh = 1000 kWh。保留原始和修正后的单位。电力损耗是能量消耗，不能作为电力基本流排放。 |
| gas_mass | sf6_supply; sf6_reusable; sf6_spent; sf6_air | 质量 | kg | 称量净气体流，排除钢瓶。产品和废物交换采用实际气体流总千克数。仅在单独物种台账中，将每次事件或库存总质量乘以实测六氟化硫质量分数一次。大气基本流采用六氟化硫千克数。不得隐含纯度为一；组成或身份未知阻止完成。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 入口电表处已可用电力；明确既有在装网络和运行期间；已交付网络设备按服务份额作为边界投入，不展开供应方内部。 |
| starting_condition_role | transmission_service_entry_gate |
| product_classification_scope | 窄于 CPC 69111：不含独立储能/转换及另供 FCAS 产出。 |
| recursive_input_rule | 邻接输电位于所选电表外；损失/辅助电力供应须排除本段，禁止自我递归。具体设备、材料和明确服务仅在供应/验收 gate 作为输入；不展开其制造、运输或处置。 |
| upstream_dataset_requirement | 匹配损失/辅助电力、实际交付完整网络设备、维护供给和明确服务的背景数据；废物按实际载体/组成/交接 gate 匹配背景处理；逐项记录包含项和缺口，避免重复能源、交付、部件、初装介质和清运。 |
| disclosure | gate、电压、拓扑、不确定性、Q/L/F_fail/E_transfer/A、供电来源、供应边界、原设备服务份额、现场气体银行及废物交接状态；foreground-only 清单不代表无背景负荷或全生命周期已完成。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| service_boundary | 全部清单卡 | 前景包括声明的交流架空网络运行、运行/现场 SF6 操作，以及 gate 内运营方负责的维护/支援。继续排除直流/电缆路线和独立储能/转换/FCAS 产出，不得将其负荷稀释进 Q。商品发电与下游配电仍位于背景/边界外。现场备用发电仅允许供应与商品网络注入电气隔离的站用辅助或现场支援负荷；不得供应 Q、L、F_fail 或 E_transfer。实际向网络注入时，当前配置不适用：须在本服务边界外建立单独计量的发电接口，并在使用前重新判断适用性；不得继续按当前规则组合全量 Q 的商品发电。 | unsd-cpc-69111 |
| commodity_ownership | loss_electricity; aux_electricity; service_output | 商品供应方/下游模型拥有合格 Q 的发电负荷，依 service_boundary，Q 必须全部经外部入口接口供给。本服务拥有外部来源的 L、F_fail 及购入辅助/支援电量，并计入隔离辅助/支援备用发电的实际燃料/排放。任何现场发电部分均不得进入 Q、L、F_fail 或 E_transfer。外部 E_transfer 须记录接收方/交接及独立发电责任。无接收方的拒收/试验网络消耗属于 F_fail；备用辅助/支援消耗保留在各自负荷台账。不得在计全部入口电量后又加 L/F_fail。电力供应数据须排除本网络段及其资产/损失；组合前须调整捆绑数据。 | ghg-td-losses |
| foreground_exchange_gates | network_support | 保留规格明确的完整网络设备/导线及混凝土，作为有分配数量的实际交付前景投入；每卡仅一对象/属性/首选单位。总成不因多材料而拆分。供应方采矿、制造、组装及已含交付留在匹配背景输入数据内。不重建供应材料、燃料、运输、车辆/道路/工具资本或场外处理清单。每种实际规格/配置须具有独立实例数据身份和数量记录，不得合并无关设备或替换其他导线/油/气体技术。完整使用前，其他实际前景投入须增列具体双语卡并记录身份缺口。 |  |
| provider_deduplication | 全部采购投入 | 记录每个供应数据/合同 gate 以及设备部件、初装介质、交付、能源、出行、维护和废物清运包含项。已含负荷只计一次。塔架不含导线/基础；变压器含初装油；断路器含初装气体；独立油/气投入仅为实际额外供给。混凝土不含钢筋；实际有钢筋须另采。校准与机械清障各有明确服务 gate。若供应边界无法无重叠分离，保留明确缺口并停止完整性声明，不得假定为零。 |  |
| waste_handover | 全部废物卡 | 废物按实际表征载体仅计一次，由本期产生、保管至有记录的前景接收交接。该 gate 后场外加工、运输、销毁、回收和处置投入/排放属于待链接背景要求，不展开为前景。不创建假想接收卡，也不把载体成分虚构为最终物种排放。场外背景处理数据须匹配载体、组成、数量和交接，并排除供应方已含运输/清运。待交接披露为库存，不得虚构收据。实际现场处理会改变前景，完整使用前须增加具体投入/产出卡。 |  |
| conditional_gas | gas_handling | 存在 SF6 设备、库存或操作时应用全部气体记录，包括实际现场投运/退役。不存在须有完整设备/库存/工单证据。设备内初装气体是备查气库流入，其背景供给已含于设备投入。后来外供气体使用 sf6_supply。不得把外送废气推定为空气排放，也不得因设备制造属于背景而忽略现场操作。 | epa-sf6-2018 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| operation | 输电网络运行 | required | 声明 gate 内交流架空网络 | 前景服务 | 1 kWh |
| gas_handling | 前景 SF6 操作 | conditional | 存在 SF6 设备、库存或操作 | 关联现场过程 | 同一 Q；无第二服务产出 |
| network_support | 交付网络资产及现场支援 | required | 保留实际交付资本、现场支援和明确外供服务；逐卡按实际发生 | 前景边界交换 | 同一 Q；无第二服务产出 |

### 过程：输电网络运行（`operation`）

#### 输入

##### 产品流

###### 输电网络入口处交流电（`loss_electricity`）

技术损失及无独立商品接收方的拒收/试验网络消耗所需外部入口电量；合格穿越电量 Q 仅为备查量。依 service_boundary，现场备用发电不得供应这些网络电量。

- 选定流：输电网络入口处交流电
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：(L + F_fail) / Q kWh；两项均不得含未解释计量残差。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_energy`

###### 交流电（`aux_electricity`）

在使用点计量控制、保护、冷却及照明电量。排除 support_electricity 和内部发电部分；历史绑定身份仅适用于使用点。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：A_imported / Q kWh；A_imported = A - E_onsite_to_aux，按供电来源对账；E_onsite_to_aux 仅为隔离辅助供电，不得向商品网络注入。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_energy`

#### 输出

##### 产品流

###### 交流电输送服务（`service_output`）

声明出口电表处验收的输电服务；不再输出第二份电力商品。

- 选定流：交流电输送服务
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：1 kWh
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_energy`

### 过程：前景 SF6 操作（`gas_handling`）

#### 输入

##### 产品流

###### 供给的工业级六氟化硫绝缘气体（`sf6_supply`）

用于现场投运、运行及维护的外部钢瓶/散装 SF6 供给。记录纯度及原生/再生状态；其他绝缘气体配方须另设明确卡片。

- 选定流：供给的工业级六氟化硫绝缘气体
- 流属性/单位：质量 / kg
- 数量规则：G_attributed / Q kg 归属实际供给气流；排除随完整设备交付且已含于设备的气体。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_gas`

#### 输出

##### 产品流

###### 经接收确认可再用的回收六氟化硫气体（`sf6_reusable`）

以接收验收及组成证据确认产品状态。内部循环不是交换；不计替代信用。

- 选定流：经接收确认可再用的回收六氟化硫气体
- 流属性/单位：质量 / kg
- 数量规则：R_attributed / Q kg 按原服务批次归属的实际经验收外部再用气体交接量；产生和留存保管另作QA记录。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_gas`

##### 废物流

###### 待销毁的废六氟化硫气体（`sf6_spent`）

废物载体止于有据可查的前景接收交接 gate。场外销毁投入及残余排放不列为前景卡。

- 选定流：待销毁的废六氟化硫气体
- 流属性/单位：质量 / kg
- 数量规则：W_attributed / Q kg 按原服务批次归属的实际经验收外部废气载体交接量；待交接保管是库存，不是已观察交接。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_gas`

##### 基本流

###### 六氟化硫，排放至空气（`sf6_air`）

现场实际首次向空气释放，包括纳入运行前景的安装/退役操作事件。每个事件只用一个估计；全年 QA 平衡不得成为额外排放。资本现场事件与运行事件分开按 foreground_event_attribution 归属。

- 选定流：六氟化硫，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：F_attributed / Q kg SF6 物种，由前景气体平衡对账得出，不是钢瓶总质量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_gas`

### 过程：交付网络资产及现场支援（`network_support`）

#### 输入

##### 产品流

###### 交付的镀锌钢桁架输电塔总成（`tower_assembly`）

规格明确的完整塔结构，含供应方已含钢材、涂层和紧固件；不含基础与导线。

- 选定流：交付的镀锌钢桁架输电塔总成
- 流属性/单位：件数 / Item(s)
- 数量规则：sum_a(f_a * n_a) / Q Item(s)；n_a 为以本卡唯一单位记录的实际交付数量，涵盖初始资产和独立标识的替换资产。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_assets`

###### 交付的钢芯铝绞架空导线（`acsr_conductor`）

按实测导线米数计量的一种明确 ACSR 构造和截面，含钢芯与铝绞线；不含绝缘子和塔架。

- 选定流：交付的钢芯铝绞架空导线
- 流属性/单位：长度 / m
- 数量规则：sum_a(f_a * n_a) / Q m；n_a 为以本卡唯一单位记录的实际交付数量，涵盖初始资产和独立标识的替换资产。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_assets`

###### 交付的瓷悬式绝缘子串（`porcelain_string`）

一种规格明确的完整绝缘子串，含其专用金具；不是未定义的瓷件或金具集合。

- 选定流：交付的瓷悬式绝缘子串
- 流属性/单位：件数 / Item(s)
- 数量规则：sum_a(f_a * n_a) / Q Item(s)；n_a 为以本卡唯一单位记录的实际交付数量，涵盖初始资产和独立标识的替换资产。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_assets`

###### 交付的矿物油浸交流电力变压器（`power_transformer`）

按一种铭牌/额定规格在现场验收，含发票边界内供应方初装矿物油及附件；不含基础和另供开关设备。

- 选定流：交付的矿物油浸交流电力变压器
- 流属性/单位：件数 / Item(s)
- 数量规则：sum_a(f_a * n_a) / Q Item(s)；n_a 为以本卡唯一单位记录的实际交付数量，涵盖初始资产和独立标识的替换资产。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_assets`

###### 交付的 SF6 交流高压断路器（`sf6_breaker`）

一种规格明确、现场验收的完整断路器，含有记录的供应方初装气体。带入气体记录为备查 C_in，不再计入 sf6_supply。

- 选定流：交付的 SF6 交流高压断路器
- 流属性/单位：件数 / Item(s)
- 数量规则：sum_a(f_a * n_a) / Q Item(s)；n_a 为以本卡唯一单位记录的实际交付数量，涵盖初始资产和独立标识的替换资产。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_assets`

###### 交付的数字式输电保护继电器（`protection_relay`）

在屏柜接口验收的一种明确型号和功能配置继电器；不得使用未定义控制系统包。

- 选定流：交付的数字式输电保护继电器
- 流属性/单位：件数 / Item(s)
- 数量规则：sum_a(f_a * n_a) / Q Item(s)；n_a 为以本卡唯一单位记录的实际交付数量，涵盖初始资产和独立标识的替换资产。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_assets`

###### 交付的无钢筋基础混凝土（`foundation_concrete`）

实际交付前景基础作业的明确等级预拌混凝土；不含钢筋。实际配筋设计须另列明确钢筋投入，不得假定不存在。

- 选定流：交付的无钢筋基础混凝土
- 流属性/单位：质量 / kg
- 数量规则：sum_a(f_a * n_a) / Q kg；n_a 为以本卡唯一单位记录的实际交付数量，涵盖初始资产和独立标识的替换资产。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_assets`

###### 供给的矿物变压器绝缘油（`mineral_oil`）

实际另行采购的维护油；排除 power_transformer 已含初装油。

- 选定流：供给的矿物变压器绝缘油
- 流属性/单位：质量 / kg
- 数量规则：X_r / Q kg；每一事件原始总量为采购量 + 可用期初库存 - 可用期末库存 - 退供量，抵销内部转移；X_r 依唯一现场事件归属规则归属。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_support`

###### 配方明确的矿物润滑油（`lubricant`）

一种有记录的维护润滑油配方；排除服务商已含耗材。

- 选定流：配方明确的矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：X_r / Q kg；X_r = 归属采购量 + 可用期初库存 - 可用期末库存 - 退供量，抵销内部转移。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_support`

###### 供给的过程水（`water`）

跨现场 gate 的实际清洁/维护供水；不展开上游水处理。

- 选定流：供给的过程水
- 流属性/单位：质量 / kg
- 数量规则：X_r / Q kg；X_r = 归属采购量 + 可用期初库存 - 可用期末库存 - 退供量，抵销内部转移。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_support`

###### 规格明确的石油柴油（`diesel`）

现场维护发动机及仅供应隔离站用辅助或现场支援负荷的备用发电实际消耗且归前景所有的柴油；排除外供服务燃料及供应 gate 已含车辆运输。

- 选定流：规格明确的石油柴油
- 流属性/单位：质量 / kg
- 数量规则：X_r / Q kg；X_r = 归属采购量 + 可用期初库存 - 可用期末库存 - 退供量，抵销内部转移。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_support`

###### 交流电（`support_electricity`）

A 之外单独计量的前景车间/施工/维护购入电量；隔离备用供电须单独对账并从本卡排除。排除供应制造和场外处理电量。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：E_support_attributed / Q kWh，按唯一现场事件归属规则归属购入支援电量，排除 A 和内部发电。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_support`

###### 现场交流结算电表校准服务（`meter_calibration`）

合同明确仪表/精度程序及现场验收结果；含供应方人员、仪器及其能源/耗材和出行，除非明确分离。已计量站用 A 须在发票/供应数据中扣除，不得重复计入。

- 选定流：现场交流结算电表校准服务
- 流属性/单位：时间 / h
- 数量规则：sum(验收的仪表校准小时 * 因果份额) / Q h；一台仪表在有效校准测试中一小时为一个服务小时。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_services`

###### 输电走廊机械植被清障服务（`vegetation_clearance`）

采用一种机械切割路线，有测绘图斑、切割高度规格及签字验收；不含除草剂路线。含承包方机械、燃料、出行及运至声明接收 gate 的清运。运营方保有的枝材须从供应方清运范围排除，并仅用 waste_wood 一次。

- 选定流：输电走廊机械植被清障服务
- 流属性/单位：面积 / m2
- 数量规则：sum(每次实际清障事件验收处理图斑面积 * 因果份额) / Q m2；实际重复作业另记事件，同一事件重叠图斑只计一次。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_services`

##### 基本流

###### 工业用地占用（`industrial_occupation`）

实际运行站场/线路占地；不含供应方工厂、道路或工具场所。供应资产已含的历史土地转化不按年重复。

- 选定流：工业用地占用
- 流属性/单位：面积×时间 / m2*a
- 数量规则：sum(不重叠前景占用面积 m2 * 实际期间年数 * 因果份额) / Q m2*a。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_land`

#### 输出

##### 废物流

###### 废矿物变压器绝缘油（`waste_mineral_oil`）

实际排出的维护油，表征水分/污染；不另计其含有成分为第二废物。

- 选定流：废矿物变压器绝缘油
- 流属性/单位：质量 / kg
- 数量规则：W_r,attributed / Q kg 按原事件/批次归属的实际经验收外部载体交接量；产生和待交接保管另行对账。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste`

###### 废矿物润滑油（`waste_lubricant`）

一种实际收集的润滑油载体，记录配方/污染。

- 选定流：废矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：W_r,current / Q kg 属于本原服务批次的实际经验收外部载体交接量；产生和待交接保管另列，历史批次不得转嫁当前Q。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste`

###### 经表征的含油清洗废水（`waste_water`）

一种实际交付场外接收方的水性废物载体；交接时不得同时计为水/离子基本排放。

- 选定流：经表征的含油清洗废水
- 流属性/单位：质量 / kg
- 数量规则：W_r,current / Q kg 属于本原服务批次的实际经验收外部载体交接量；产生和待交接保管另列，历史批次不得转嫁当前Q。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste`

###### 未处理木质清障枝材（`waste_wood`）

实际由运营方保管的清障枝材，记录水分、涂层/污染及接收 gate；排除 vegetation_clearance 已含的承包方所有材料。

- 选定流：未处理木质清障枝材
- 流属性/单位：质量 / kg
- 数量规则：W_r,current / Q kg 属于本原服务批次的实际经验收外部载体交接量；产生和待交接保管另列，历史批次不得转嫁当前Q。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste`

##### 基本流

###### 化石源二氧化碳，排放至空气（`co2_fossil`）

前景所有发动机实际向空气排放，含失败作业/怠速/发电；不是供应服务尾气。其他实际污染物须在完整使用前逐物种、逐接收介质设卡，不得视为零。

- 选定流：化石源二氧化碳，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：归属的实测化石 CO2 质量 / Q；或实际柴油活动量乘独立有据、源特定的 kg CO2/kg 燃料因子后 / Q。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_release`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| causal_allocation | 所有清单行 | 先按电表、线路、来源事件和工单细分；已直接归属记录份额为1。同gate/质量的剩余共享运行量采用同一时段本服务合格kWh/全部受益方合格kWh；不同gate须物理细分，不强作等价。共享现场耗材/释放采用同一来源工单本网络经核实人员h/全受益方人员h。具体校准服务按归属仪器h，清障按逐事件不重叠处理面积，用地按land_quantity；已直接归属后不得再乘受益份额。原资产资本现场事件则仅用f_a。记录全部分母且份额合计为1；驱动缺失/非正阻止完整性，不默认等额或收入分配。 |  |
| capital_allocation | cp_assets 涵盖的所有清单行 | 仅对保留的实际交付网络资产使用 capital_service_fraction，数量×唯一服务份额后除 Q 一次。不再展开任何供应资本链。经常现场维护与资本替换互斥；设备已含部件及初装介质不重复。 资本分量的最终结算和来源/原分母修订遵循capital_source_amendment，例行分量不受寿命分配。 |  |
| recovery_no_credit | sf6_reusable; sf6_spent | 内部回收循环是内部转移；外部验收再用气体只记录其物理质量，不分配服务负荷、不计负替代信用。待销毁气体是废物而非空气排放；场外处理留作匹配背景链接。 |  |

## 8. 前景数据采集、计算与质量规则

下列 gate、分配与采集设计为本PCR规定的前景范围下的 PCR 方法规则。外部来源仅支持其注明主题，不表示 EPD 规定了该范围，也不提供未采集的默认寿命、重量或因子。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_energy | operation | 合格服务、损失及辅助能量 | 同步校准电表及结算记录 | 电表/gate ID；间隔；电压；CT/PT；输入/输出；合格/拒收 kWh；F_fail；E_transfer 接收方/责任；A 来源；E_onsite_to_aux；发电机 ID/输出及接收负荷电表；运行/隔离状态；网络注入核查；不确定性 | 在匹配间隔读取全部入口、出口及站用电表；按 energy_balance 每月对账验收、反向流、停运及内部抵销；Q 仅为外部入口供给的合格出口。每个备用运行间隔和接线变更均须核对来源/负荷读数及防倒送/联锁证据：E_onsite 仅等于隔离辅助供电；实际网络注入不满足 service_boundary。保留原始/修正单位并每记录指定一责任方。 | kWh | 每计量间隔；每月对账 | 同一完整连续 12 个月 | 全部声明 gate 和变电站 | 每参考流 | 电表证书；注明日期的接线图；防倒送/联锁检查或测试记录；同步发电机/负荷读数；签字结算；残差调查 |
| cp_gas | gas_handling | 实际前景气体供应、气库、回收、废物及空气 | 称重气体/库存/气库及验收台账 | 事件/来源/阶段/原资产 ID；运营或资本现场事件标记及唯一权重；钢瓶毛重/皮重；状态/纯度；U/V；J/I 期初/末总量和物种；B 气库期初/末；设备 C_in/out 实测气量；R_out/W_out；R_gen/W_gen；原 Q；保管；接收方；不确定性; custody_lot_id; custody_pool_id; O; G; T_in; C; H; T_out; L; epsilon; movement_endpoints; loss_event_ID; loss_time_location; loss_evidence_method; first_medium; release_row_id; propagated_uncertainty | 逐次用校准秤称重；按事件化验组成；在期间两端对账钢瓶及在装气库。区分设备内带气和外供，以及源事件和 QA 平衡。按 gas_balance 与产生/保管规则计算，不推定场外处理。 依 custody_mass_balance 和 custody_loss_link 保留校准事件/库存测量、匹配组成/密度及原批次；在实际位置调查每笔损失或残差，关联排放行及配对移动，每月及期末对账。仅凭有日期的检查/测量覆盖记录未发生；未知不等于零。 | kg | 每次移动；每月及期末对账; 每次损失事件及库存移动 | 同一 12 个月及期初/末气库、待交接保管 | 全部运营方及承包方保管前景库存/设备 | 每参考流 | 秤校准；充气记录；化验；交接收据；签字不确定性平衡 |
| cp_assets | network_support | 规格明确的交付网络资本 | 原始资产交付和服务台账 | 原始资产/部件 ID；现场资本事件原始键及历史记录；具体型式/型号/额定值；gate/验收日期；发票包含项；件数或导线长度或混凝土 kg；实测方法；投运/替换；容量单位；受益者预留容量；服务小时；已观测过去/本期/预测剩余全部用户寿命驱动；历史份额；修订；退役残余；Q；cp_capital_amendment逐来源B/版本及原N字段 | 清点实际验收完整资产、计量导线交付长度、称量混凝土交付。记录配置及部件包含/排除。按 capital_service_fraction 对全部受益者的原资产台账、替换历史对账，保留历史分配；不假定质量/寿命。 终态和来源/分母修订须完成cp_capital_amendment对账。 | Item(s); m; kg | 每次交付/变更；每年服务对账 | 同一运行年，加原资产历史及有据剩余使用 | 仅交付网络设备；不含供应方支援资本 | 每参考流 | 验收/发票；竣工计量/秤记录；原寿命驱动和全部受益者台账；供应边界矩阵 |
| cp_capital_amendment | network_support | 原资产来源及其一次性资本事件分量；不含例行运行分量 | versioned_original_source_and_cohort_ledger | asset_ID；source_ID及原卡row_ID/原单位；原始验收/事件gate；来源实测总量和新旧版本；计量/校准/状态依据；各原受益期间/驱动单位/u_actual；期间b（适用时）；全部历史及未来受益者；F_prev_all和remaining_driver；已接受g/F_booked；原始已记归属量B；旧归一结果/原N及更正N；背景模型版本及范围；实际最终退役证据；A_new、delta_A、替换及去重链接 | 在原资产/供应方验收gate、实际现场事件及接收方交接gate采集相应原记录；按cp_assets既定称量、配置计数/长度、驱动计量和校准方式核验完整来源量。每次来源、寿命、模型或分母修订及最终退役，逐原队列比较新旧记录，执行capital_source_amendment；全受益份额/逐来源总量/每条更正链接对账，由服务数据责任人复核签认。未发生条件用完整事件清册/零活动证据证明，不将缺失记为零；保留未知身份、计量不确定性及未完成原因。 | 来源原单位；固定驱动单位；原参考分母单位 | 每次验收/事件/修订/最终退役；年度对账 | 原资产全历史及各原服务队列；有证剩余寿命 | 仅既有前景gate和资本来源责任 | 按原参考流一次归一 | 原始计量/校准；签认验收/事件/接收；来源及模型版本；全受益者及修订对账账本 |
| cp_support | network_support | 独立前景维护供给、柴油及支援电力 | 采购/库存/工单及现场电表记录 | 卡/事件/原资产 ID；经常或资本现场事件及唯一权重；数量/原单位；配方；密度/温度/浓度；可用期初/末库存；退货；工单；燃料发动机运行/怠速/失败活动；电表/来源及 A 重叠；备用发电机/输出/接收负荷 ID 及隔离支援 kWh；接线/联锁状态及网络注入核查；受益份额；供应包含项；Q 全受益方来源工单人员h及直接归属证明； | 称量供应/库存，用实际密度体积转 kg；读校准独立支援电表；每月对账采购、库存、退回及工单。纳入失败作业和怠速燃料。每个备用运行间隔和接线变更均将隔离支援供电与 E_onsite_to_aux 分别对账；以匹配电表和防倒送/联锁证据证明无商品网络注入。证据缺失为缺口；实际注入不满足 service_boundary。扣除供应已含物料及 A 重叠；因果份额一次、除 Q 一次。 | kg; kWh | 每次供给/使用/间隔；每月对账 | 同一 12 个月及期初/末库存 | 仅运营方负责的现场作业和发动机 | 每参考流 | 发票；库存称重单；校准；密度/化验；电表/工单；注明日期的接线和防倒送/联锁证据；发电机/负荷对账；供应排除项 |
| cp_services | network_support | 明确电表校准和机械清障 | 合同及签字服务验收 | 服务 ID；具体任务和 gate；仪表/配置/程序；有效仪表开始/结束小时；GPS 图斑和清障高度；事件重叠；验收/拒收作业；工具/能源/出行/废物包含项；运营方保有物料；分配份额；Q | 校准计量有效验收仪表小时，不用未定义人员小时。机械清障按事件测绘验收 m2 并消除事件内重叠。逐合同核对能源/废物包含项；供应单位数据应包含其实际失败作业负荷，不虚构成功面积/小时。无验收服务的收费须另有据记录实际任务，不得删除。 | h; m2 | 每次合同事件和验收 | 同一 12 个月 | 声明现场 gate 的明确网络服务任务 | 每参考流 | 签字程序/结果；时间日志；GIS；合同包含矩阵；校准及验收证据 |
| cp_waste | network_support | 实际产生废物载体及保管 | 称重产生、库存和交接台账 | 载体 ID；产生事件/批次/Q；实际状态/组成/水分；毛重/皮重/净重；期初/末保管；发运；退回/重分类；接收方/gate/验收；合同所有权；待办状态；已含清运; custody_lot_id; custody_pool_id; O; G; T_in; C; H; T_out; L; epsilon; movement_endpoints; loss_event_ID; loss_time_location; loss_evidence_method; first_medium; release_row_id; propagated_uncertainty | 每种实际载体在产生、库存变化及交接称量；按 waste_generation_custody 原批次对账。保留实际混合/涂覆状态；BOM 本身不证明物理分离。止于交接 gate，记录背景处理需求，不展开接收方内部。 依 custody_mass_balance 和 custody_loss_link 保留校准事件/库存测量、匹配组成/密度及原批次；在实际位置调查每笔损失或残差，关联排放行及配对移动，每月及期末对账。仅凭有日期的检查/测量覆盖记录未发生；未知不等于零。 | kg | 每事件/移动；每月及年末库存; 每次损失事件及库存移动 | 同一产生年及有记录的后续交接状态 | 前景产生、运营方保管载体至声明交接 | 每参考流 | 秤校准；化验；单据；保管和接收收据；合同排除项 |
| cp_release | network_support | 实际现场物种至首次环境介质 | 测量或源特定因子/活动台账 | 源/事件；燃料 kg；运行/控制状态；因子原件/单位/日期/适用性；组成/碳来源；浓度/流量/质量；物种/接收介质；不确定性；共享归属；Q | 测量代表性实际释放，或将独立有据、匹配来源的因子按其准确基准应用一次。筛查实际其他物种并增具体卡；对账碳/燃料，并将供应方/场外物种排除于前景。 | kg | 每代表运行状态和释放事件 | 同一 12 个月及现场事件 | 前景所有的首次环境接口 | 每参考流 | 采样校准；因子原件；燃料/碳平衡；接收介质图；不确定性 |
| cp_land | network_support | 实际运行工业用地占用 | GIS 面积/日期及受益者台账 | 图斑 ID；地类；实测 m2；占用开始/结束；重叠；实际事件历史；受益者和份额；Q 全受益方预留设备占地及预留日期/小时和布局证据； | 测绘运营方占地、消除重叠、按实际年数积分并分配因果份额一次。核查是否发生实际新土地转化；如有新增明确原/目标地类卡，不得把历史资产转化推定为本期。 | m2; a | 每年及每占地/土地变化 | 同一运行期间；实际变更历史 | 仅运行站场/线路占地 | 每参考流 | GIS/测绘/许可；日期；不重叠和分配台账 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| energy_balance | loss_electricity; aux_electricity; service_output | 在统一定向边界内，E_entry + E_aux_external + E_onsite = Q + E_transfer + A + L + F_fail + residual。E_onsite = E_onsite_to_aux，仅为实测送入隔离站用辅助 A 的备用电量，绝不表示商品网络注入。Q、L、F_fail 和 E_transfer 仅由外部入口供电。该边界外支援负荷消耗的单独计量备用供电在 cp_support 对账，不加入此平衡。E_transfer 有记录的外部接收方/发电责任；F_fail 为无接收方的归属拒收/试验网络消耗。抵销内部电表。反向流对账不得重复计电量。以校准电表和工程评估确定技术 L，将未解释残差及不确定性单列；不得强塞入 L 或 F_fail。等式平衡本身不证明适用性：实际备用发电馈网须按 service_boundary 拒绝适用。 | cp_energy; cp_support | 期间 Q/L/F_fail/E_transfer/A 及 E_onsite_to_aux，kWh |  |
| normalize_exchange | 所有清单行 | 每个归属原始期间总量或资产服务总量仅除以正的合格 Q 一次。service_output 恰为 1 kWh。不得将内部采购/转移固定为 1，不得将供应单位因子再归一化，也不得把失败/拒收电量视为额外合格产出。保留原始量、库存修正、份额与归一化结果。 | Q; cp_energy; cp_support; cp_assets; cp_gas; cp_services; cp_waste; cp_land; cp_release | 每参考流各卡数量 |  |
| gas_balance | sf6_supply; sf6_reusable; sf6_spent; sf6_air | G_total = sum(U_total) - sum(V_total) - (J_end_total-J_start_total)，J 为可用外供库存。I 为全部前景钢瓶/保管气体库存；B 为在装设备气库。每个事件/库存 j 仅用一次 S_j = 实测 x_SF6,j * 实测 q_total,j。F_SF6 = S_I_start - S_I_end + sum(S_U) - sum(S_V) + C_in_SF6 - C_out_SF6 - sum(S_R_out) - sum(S_W_out) - (B_end_SF6-B_start_SF6)。I 包括 J 及全部再用/废气保管库存，不重复记库存。C_in/out 为有记录的带气设备进入/离开运行前景，包括设备已含初装气体；不重复采购/排放。R_out/W_out 为实际外发物种，与本期产生 R_gen_total/W_gen_total 区别。产品/废物采用载体总质量，空气采用 SF6 物种质量。现场运行/投运/退役事件互斥；全年 QA 仅对账这些事件，不增加额外释放。负残差/未知组成或气库项阻止完整性声明，不得钳为零。本平衡不假定场外销毁。上述原始年度平衡仅供物理 QA；归一化前依 foreground_event_attribution 对互斥的运营与资本现场事件归属，使用 G_attributed、R_attributed、W_attributed、F_attributed，不把原始年度释放再加一次。 | cp_gas; Q | 原始 QA 气体/物种平衡；归属 G/R/W/F 各自除 Q | epa-sf6-2018 |
| foreground_event_attribution | 所有前景现场事件 | 对同一真实计量对象，仅在物理量相同且不重复时跨阶段汇总。每个源事件键只出现一次，并固定为经常运营事件或可追溯原资产 a 的现场资本安装/投运/退役事件。运营事件权重为本期实际因果份额 s；资本现场事件权重为 capital_service_fraction 的原资产 f_a，不能再乘一次寿命/父资产份额，也不能全压施工年。X_attributed = sum_j(s_j * X_operating,j) + sum_a(f_a * X_capital_site,a)。sf6_supply/reusable/spent/air 分别用同法归属的 G/R/W/F；各气体阶段各有原始库存和物种平衡，C_in/out 在原始阶段 handover 中抵销。年度未分配 QA 只对照当年实际互斥事件和库存，不与分配后的资本/运营量相加。保留资本现场实际历史事件及原始 Q/资产键；未来未发生事件不得称实测，也不捏造接收处理。未知发生/计量记录标缺口。只分配实际保留前景现场记录，不展开背景资本链。 资本分量的最终结算和来源/原分母修订遵循capital_source_amendment，例行分量不受寿命分配。 | cp_gas; cp_support; cp_assets; cp_waste; cp_release; original_asset/event_key; Q | 单次归属的现场交换总量/Q |  |
| capital_service_fraction | cp_assets 涵盖的所有清单行 | 对每个原始交付资产 a，以卡单位保留实际 n_a；f_a = u_a,current / U_a,all_lifetime，使用固定容量单位的预留额定容量×服务小时，覆盖全部受益者/期间及有据的剩余寿命使用。专用固定容量资产可用运行小时/有据寿命小时。仅分配 n_a*f_a/Q 一次；n_a 不是组成 BOM 或虚构质量。完整总成仅计一次，不再计其已含部件/初装介质。替换资产有新原始键；一条记录只能是资本替换或经常耗材，不得兼是。寿命修订保留历史份额：f_new,current = (1-F_prev_all)*u_current/U_remaining_all，剩余使用含本期。保留全部份额、不确定性及退役残余结清；全部受益者累计份额不得超一。无固定寿命、设备质量或嵌套供应方/工具/车辆/道路分配。 终态结算、来源数量/模型版本更正及原分母更正须执行capital_source_amendment；本行delta份额乘来源量仅在该规则规定的同源量/同模型条件下成立。 | cp_assets; 原始资产台账;Q | 以各卡唯一单位/Q 表示的已分配交付数量 |  |
| capital_source_amendment | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 在本入口声明的适用范围内，按顺序完整执行规则组：capital_source_amendment_history; capital_source_amendment_final_shares; capital_source_amendment_source_revision; capital_source_amendment_normalization; capital_source_amendment_scope。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_capital_amendment; cp_assets; capital_source_amendment_history; capital_source_amendment_final_shares; capital_source_amendment_source_revision; capital_source_amendment_normalization; capital_source_amendment_scope | 原来源单位的归属总量；原队列N_c仅归一一次 |  |
| support_stock_quantity | cp_support rows | 每种耗材 X = 采购 + 可用期初库存 - 可用期末库存 - 退供 - 外部非前景转移；抵销内部移动。体积转燃料/油/水 kg 仅使用实际状态密度与温度；记录油配方/浓度及水分，不得隐含比例。购电是实测能量，仅其 kWh 可按 3.6 MJ/kWh 换算。不同独立供应物质即使同单位也分开。经常现场活动归实际服务期间/受益者，不再作资本年分摊；可明确追溯原资产的现场安装/投运/退役事件使用 foreground_event_attribution，不能全部归施工当年。 | cp_support; Q | 按各卡固定单位为 X/Q kg 或实测购入 kWh/Q |  |
| onsite_generation | aux_electricity; support_electricity; diesel; co2_fossil | 在匹配间隔计量备用发电和每个接收负荷；将站用 E_onsite_to_aux 与支援供电分别对账，并以接线及防倒送/联锁证据证明无商品网络注入路径。A 包含全部站用供给，而 aux_electricity 为 A 减 E_onsite_to_aux。support_electricity 同样排除实测内部发电部分及 A。内部发电为备查并抵销；实际备用柴油和逐项排放仅列一次，包括辅助或支援运行的怠速/失败活动。不得将发电机燃料投入再乘效率后计第二份燃料。缺少负荷/来源/隔离证据阻止完整性声明；实际供应 Q、L、F_fail 或 E_transfer 时须按 service_boundary 拒绝当前配置适用。实际其他燃料/气体发电机须在完整使用前新增燃料/物种卡；不存在须有设备/燃料记录证明。 | cp_energy; cp_support; cp_release | 互斥的购电、隔离现场燃料和排放 |  |
| waste_generation_custody | 所有废物及回收气体清单行 | 依 custody_mass_balance 和 custody_loss_link 核对原批次未分配产生量、库存、交接、其他移动、已证损失及未解释残差；产生及待交接库存仍仅作核查。保留原 Q 及保管/发运记录；历史库存外发不是本期产生。不虚构未来接收处理，也不设场外接收投入卡。再用产品状态须有验收证据；拒收退回废物保管但不产生第二次废物。后续交接匹配原记录。待交接或接收方未知是明确完成缺口；背景处理链接另披露。载体成分/所含排放不得另加第二废物。实际跨此前景的完整退役设备须用明确表征完整载体卡，不得由 BOM 假定为纯分离金属。 交换卡数量为每个原批次实际经验收外部交接量；R_attributed/W_attributed及W_r,*依foreground_event_attribution按原来源事件加权。产生和期末保管是物理QA/库存，不是额外外部输出。后续实际交接更新原批次及原分母，既不成为新当年产生，也不虚构未来交接。 | cp_waste; cp_gas; 原始 Q | 原批次实际交接量；分列产生/保管QA |  |
| custody_mass_balance | 原批次废物保管及实际损失 | O + G + T_in = C + H + T_out + L + epsilon，按同一原始产生批次、明确保管池和一致期间的未分配完整载体 kg 核算。O/C 为期初/期末实物库存；G 为首次进入保管的产生量，仅计一次；H 为依现有 gate 实际接受的外部交接毛量；T_in/T_out 为其他有证据的实物移动（包括退回或重分类），必须有起止位置及配对台账，不得同时计入 H 或新的 G。汇总保管池时内部移动抵消。实物退回保留原批次，记入 T_in 并与原始交接毛量 H 配对；此实物台账保留历史 H。后续验收/归属更正另账记录，不得在本式同时冲减 H。对实际未发生的错误交接直接更正，不得虚构退回。没有实际跨保管池移动的重分类仅改变状态标签，不得记为 T_in/T_out。L 为进入该保管池后有证据的实物损失，不得作为配平项；epsilon 为带符号的未解释计量残差。计算 epsilon = O + G + T_in - C - H - T_out - L，按传播后的计量不确定性调查，保留证据及未解决余差。未知量不得补零或转为 L。每次事件及盘点称量实际完整载体，或采用校准体积乘以状态/温度/组成匹配的密度；区分完整载体、干物质和所含物种质量。水分损失属于需证明的实物移动，不得以无依据的基准换算替代。只有具备检查/测量覆盖及不确定性证据时，才能记录零损失。此实物核查式不得分配或归一化。 保留每张清单行声明的属性/单位：体积型交接行使用实际交接体积；以匹配密度换算的 kg 仅用于此实物核查，不得另造一笔输出。例：期初/期末/其他移动均为零且无未解释残差时，G=10 kg、H=9 kg、L=1 kg；输出 H 仍为 9 kg。示例值不是默认值。 | O; G; T_in; C; H; T_out; L; epsilon; cp_waste; cp_gas | 原始完整载体 kg 闭合；交接仅用实际 H |  |
| custody_loss_link | 原批次废物保管及实际损失 | 依 actual_species 将每笔保管损失关联至事件、来源批次、实测组成/状态、首次接收介质及精确匹配的已有排放行。气体依 gas_balance 按事件组成仅换算一次，将完整载体 L 与 SF6 物种核对；该气体平衡中已计入的排放属于同一事件，不得另加一次 L 排放。不得仅按废物总质量推定物种排放。实际排放依 foreground_event_attribution 和原始 Q 仅归属一次；实物库存和核查残差不是额外清单交换。缺少对应物种/介质行或损失身份未明时，完成前必须明确匹配流卡并审查身份，不得套用相近行或虚构 UUID。 | custody_mass_balance; cp_waste; cp_gas | 实际排放事件按原归属及分母仅计一次 |  |
| actual_species | co2_fossil; 实际新增释放卡 | 使用实测物种排放，或在相同实际活动基准、运行状态、控制和接收介质下独立有据的因子。保留因子原件/版本/单位/适用性、燃料密度/组成/碳来源、源状态、不确定性及碳平衡。已按每 kg 燃料表达的物种因子不得再乘碳分数或去向比例。不得由废物载体质量推定油成分排放。筛查实际现场燃烧、电晕及维护：其他实测/有据物种、互斥粒径区间及首次接收介质须在完整使用前设具体卡。缺失物种/因子是缺口，不是零或默认值。供应/服务/场外排放仅留在背景数据内。 | cp_release; cp_support; Q | 按实际首次环境接收介质的物种 kg/Q |  |
| land_quantity | industrial_occupation | 测绘前景用地图斑和日期；不重叠面积×实际占用年数×因果份额，再除 Q 一次。已为本期占地时不得再乘资产寿命份额。存在本期实际土地转化时须以 m2 另设原/目标地类卡并有事件证据；既有在装网络历史不意味每年新转化。设备/服务背景数据已含的供应用地不复制。 物理图斑细分后专用面积份额为1。真正共享占地采用同期间本服务预留设备占地面积时间/对应全受益方面积时间，由布局/预留和设备记录证明；证据缺失是缺口，不留待后续选择驱动。 | cp_land; Q | m2*a/Q |  |
| capital_source_amendment_history | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。本规则补全既有冻结历史/剩余寿命政策，不要求每次寿命修订都追溯更换历史寿命份额。保留原资产key、每项原单位来源s及版本、确切产品/事件gate、全部受益者—期间队列c、不可覆盖的实测原始记录和已接受记账。实际最终退役前，寿命/使用修订冻结历史份额，仅按既有有据剩余驱动分配剩余份额；要求0<=F_prev_all<=1，有据正的剩余分母包含当前期间及全部未来受益者。晚到证据的首次资本来源使用各历史已接受份额及同一剩余账本，不全部归事件年。使用既有固定容量单位的预留额定容量乘服务小时驱动，包含全部受益者；专属恒定容量资产可按既有规则简化为运行小时。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_final_shares | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。实际最终退役时，w_c=u_actual_c/U_final，U_final=sum_all_original_beneficiaries(u_actual)>0；最终全部份额和为一，包含原驱动已规定的非研究、失败和待机责任。转交继续使用不是最终退役。寿命活动为零或未知、历史份额无依据或缺少原队列时，最终分配未完成；保留实物总量和缺口，不等分、不虚构使用。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_source_revision | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。退役前来源更正使用各原队列已接受份额g_c，最终退役时使用g_c=w_c。Q_s,new为原卡单位下有据的寿命分配前完整来源实物量，不是未摊余额或已加权量。B_s,c为该来源/队列实际已记账的归属原始量，附当时数量/模型版本和原归一结果。计算A_s,c,new=Q_s,new*g_c，delta_A_s,c=A_s,c,new-B_s,c。首次观测的来源在未记账处B=0；对既有来源更正须替换同一来源ID，不增加采购或处置事件。仅当来源量及链接模型版本不变且B=F_booked*Q_s时，才可使用(g_new-F_booked)*Q_s简式；否则必须采用A_new-B。实物毛收货、库存、转移、交接另行对账；有正负号的更正是模型修订，绝不是负实物交换或替代信用。链接供应/处理模型发生变化时，即使delta_A=0也须替换受影响原队列清单/结果，移除旧模型贡献并保留新旧版本及范围。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_normalization | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。完整修订归属量仅除以该原队列当前已核实参考分母N_c一次（本地分别记为Q、D或A）。若N_c本身更正，替换完整旧归一结果，不将delta_A/new_N加到按old_N计算的旧结果。零产出事件仍归既定因果父队列；父队列无正N_c时保留归属实物总量及未完成的归一结果，不转移给无关正产出期间。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_scope | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。对既有gate内各实际资本来源执行本规则，包括适用时独立初装、验收后资本现场事件和实际退役载体；不创建新来源、不扩大背景边界、不重复已含供应阶段、不对例行运行乘寿命份额。这些是明确的候选核算规则，不声称所引分类或技术来源规定了这些数值方法。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |


### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| period_and_acceptance | 所有清单行 | 采用同步完整连续 12 个月；Q 不含拒收/试验/范围外及重复内部转移。停运不虚构服务；停运维护、失败作业及 F_fail 的实际负荷仍归合格 Q。声明质量、缺测及反向流方法。 | cp_energy; cp_support |
| backup_configuration | loss_electricity; aux_electricity; support_electricity; diesel; co2_fossil; service_output | 保留发电机台账、注明日期的接线和防倒送/联锁核验，以及覆盖全部备用运行与配置变更的匹配发电机/接收负荷电表。由完整设备/工单记录证明备用发电不存在，或证明其仅供隔离辅助/支援。去向未知或证据缺失阻止完整性声明，不得假定为零。实际商品网络注入按 service_boundary 拒绝当前适用性，即使能量平衡闭合。 | cp_energy; cp_support; 设备台账；接线/联锁及电表证据 |
| no_zero_substitution | 所有清单行 | 逐卡区分实测零、由完整配置/合同/工单/库存证明不适用、估计、缺失和未知身份。台账量化缺口覆盖及不确定性；未知残差、气体项、供应边界、分配分母或接收方阻止完整性声明。不得把示例、暂估范围或法规值当默认；本 PCR 不给默认数值。 | 完整性登记表；不确定性 |
| foreground_inventory_completeness | 所有清单行 | 核对每项真实跨前景 gate 的对象、方向、类型、唯一属性/单位与责任。不得为背景制造/运输/处理预列原料或物种；也不得遗漏真实额外现场物料、钢筋、燃料、完整退役载体或释放，实际存在时须先增明确双语卡及协议。按供应 gate 矩阵证明无总成/部件、服务/能源和清运/废物重复。 | cp_assets; cp_services; cp_support; cp_waste; cp_release |
| identities_and_language | 所有清单行 | 未绑定具体候选不等于数据库身份已核实。完整 active 使用前，逐卡直读 UUID、正式中英文名、类型、状态、属性、单位及 compartment 并保留哈希证据。历史交流电仅绑定使用点角色；不可继承为入口电量或输电服务。完整语义翻译审查与有中文/正式名称检查分别记录，marker 不是科学或发布批准。 | 逐行身份登记表；双语语义审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_custody_balance | 原批次废物保管及实际损失 | 按 custody_mass_balance 和 custody_loss_link 核验带日期的原批次库存、实际交接凭证、配对移动、校准损失证据及传播后的不确定性。区分已证 L 与未解释 epsilon；数量、身份或去向未解决时不得无保留宣称完成。验证其他项为零时 G=10、H=9、L=1 闭合且 H 仍为 9，每笔排放仅在首次介质计一次，分配/归一化不得改变原始实物闭合。 |  |
| validate_reference | service_output; cp_energy | 要求 Q 正值、明确 gate/实际电压、全部限定及唯一 service_output。参考、卡、协议和公式同为每 1 kWh 验收服务。穿越电力仅备查。 |  |
| validate_reconciliation | 所有清单行 | 核对能量平衡、反向流/辅助来源、SF6 载体/物种库存、设备初装介质排重、服务份额/资产历史和原批次废物交接。必须有匹配的发电机/负荷电表、接线及防倒送/联锁证据；备用发电供应 Q、L、F_fail 或 E_transfer 时，即使平衡闭合也须拒绝当前适用性。隔离/来源证据缺失或未解释残差阻止完整性声明；不重复分配/因子/归一化。采购背景链接有明确 gate，现场与背景不混算。 |  |
| validate_capital_amendment | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 验证capital_source_amendment中原驱动、freeze/remaining账本、实际最终w、逐来源完整Q_s/B/版本、原N及整个归一结果替换。重算同量份额更正、来源量变化而份额不变、模型变而物理delta=0、原N变化及零产出反例；核对资本/例行分量互斥及全部受益者。缺乏可追溯旧记账或正分母时保留未完成，不允许处置年兜底、负实物流、重复归一或第二次份额。 |  |
| validate_semantics | 所有清单行 | 逐项比对 EN/ZH 与生成 guidance 的边界、row_id、方向、类型、唯一属性/单位、条件、协议、公式及强制程度。所有强制义务须位于支持的源规则表并投影；不手补 structured。aligned、schema 或 marker 不代表方法批准；候选身份和背景链接缺口在完整使用前须解决。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 每验收 kWh 输电服务的前景边界清单；含已交付完整网络资本服务份额 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 仅在证明全部 Q 经外部入口接口供给、备用发电仅供应隔离辅助/支援负荷，且 gate、电压、供应包含项与背景链接核对通过后，才可与另属责任的合格商品 Q 发电组合。实际备用发电馈网须先设独立发电接口并重新评估适用性，再组合。 |
| excluded_use | 发电因子；当前配置下向商品网络供电的备用发电机；交付电力商品；配电；直流/电缆；独立储能/FCAS；自动整 leaf 覆盖；无背景链接却宣称完整全生命周期 |
| required_metadata | 全部限定；Q/L/F_fail/E_transfer/A；E_onsite_to_aux 及单列备用支援供电；发电机/负荷电表和注明日期的隔离/防倒送证据；电表图；期间；供应和服务 gate/包含项；原资产实测数量/服务份额历史；SF6 物种库存；废物保管/交接及背景链接 |
| required_quality_disclosure | 计量/气体不确定性；背景链接覆盖及缺口；来源年代；资产分配敏感性；逐卡身份状态；实际现场/条件活动覆盖；语义翻译及真实审查状态 |
| update_trigger | 网络/gate/电压变化；供应边界变化；资产寿命/服务份额修订；维护合同或气体技术变化；现场处理/发电；新释放/土地转化；计量实质错误 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc-69111 | official_guidance | UNSD CPC 3.0 subclass 69111, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/69111 | 分类范围及发电/配电区别；本 PCR 有意更窄。 |
| ghg-td-losses | official_guidance | GHG Protocol Calculation Tools FAQ, T&D loss question, https://ghgprotocol.org/calculation-tools-faq | 区分网络损失耗电与穿越电量；不声称企业 scope 分类就是完整 LCA。 |
| epa-sf6-2018 | official_guidance | US EPA, Overview of SF6 Emissions Sources and Reduction Options in Electric Power Systems, August 2018, pp. 6–9 and p. 6 footnote 11, https://www.epa.gov/sites/default/files/2018-08/documents/12183_sf6_partnership_overview_v20_release_508.pdf | SF6 设备/操作与物种质量平衡结构；不采用数值默认值。 |
| hitachi-transformer-2022 | literature | Hitachi Energy Italy, EPDITALY0319, Mineral and vegetable oil immersed transformers (40 MVA), 15 March 2022, pp. 5–8, 10–12, 24, https://www.epditaly.it/wp-content/uploads/2016/12/EPD_40MVA_Hitachi_rev3-11.03.2022-29.04.2022bis.pdf | 仅定性认识交付完整变压器及阶段边界。案例不是默认规格/质量/组成/寿命/回收率；不要求在前景拆其内部材料。 |
| epa-electricity-delivery | official_guidance | US EPA, Electricity Delivery and its Environmental Impacts, https://www.epa.gov/energy/electricity-delivery-and-its-environmental-impacts | 定性筛查变电设备、现场维护、植被及 SF6；具体前景范围和采集/分配为 PCR 方法选择。 |
| nexans-overhead | literature | Nexans, Bare Overhead Conductors (AAAC, AAC, ACSR, ACSR-II), https://www.nexans.us/en/Product-Datasheets/Utility-Transmission-Distribution/Bare-Overhead-Conductors.html | 支持导线技术须明确区分；ACSR 按完整规定导线米数输入，不用通用组成/重量，也不把 AAAC/AAC 当作相同对象。 |
