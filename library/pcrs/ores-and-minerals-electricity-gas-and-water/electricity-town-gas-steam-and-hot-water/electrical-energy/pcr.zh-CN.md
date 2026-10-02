---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.electrical-energy
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 电能

## 1. 范围与适用性

在一个声明净发电外送出口、储能放电出口或输配用户交付计量点供应电能，含实际化石生物燃料或废物燃烧、核电、水电抽蓄、风电、海洋波浪潮汐、太阳能光伏光热、地热、环境废热转换及电化学燃料电池；纳入有实测来源权重的国家地区供应组合。选一种实际技术或明确组合、地域年份交流直流电压频率计量接口，各替代路线不是同时必需操作。仅发电止于净外送，交付电力纳入出口前实际变压输配损失基础设施。储能非一次发电，保留充电厂用实测损失库存变化寿命吞吐量实际回送电，无避免电网抵扣。记录上游燃料材料实际建设更换退役开发土地水废物直接排放停机待机厂用控制，不因无运行燃料而遗漏设施。电力供应区别于单独销售输配服务、以燃料热为参考产品、单卖证书和消费设备制造。可有热电联产热联产品，但参考仍为电力。中国高压交流生产组合代表身份不缩窄全部类别，其他电压直流地域单技术交付状态须相容身份。公开 EPD 页仅支持技术清单，不采未取得全文阈值其他规则；下列路线采集为需真实场址证据的前景方法。 `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.electrical-energy |
| classification_refs | CPC 3.0:17100 |
| covered_products | 实际各发电技术组合储能放电或网络交付的声明单一出口电能 |
| excluded_products | 以燃料有用热证书为参考产品；单独网络服务；电气设备制造；假设避免电力 |
| representative_product | 相容中国高压交流工厂净生产组合 |
| production_route | 建设更换退役; 热能及燃料电池转换; 核能发电; 可再生资源转换; 冷却及资源水管理; 排放废物控制; 组合变压网络交付; 电储能运行; 计量电及有用热产出 |
| market_state | 一种实测净交流或直流电产品及声明电压发电储能交付出口 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在特定计量接口供应1 MJ验收净电能，非1 MJ燃料热或1 kg设备 |
| How much | 1 MJ |
| How well | 场址地域年份实际技术或来源组合供方；交流直流电压频率计量位置校准；毛净发电厂用来源匹配净外送；交付损失变压或充放电储能库存；验收期间正 D；实际燃料牌号水分低位热值化石生物比例；联产热焓回流状态；冷却取回耗水流域；直接物种介质废物去向；实测建设更换退役寿命验收吞吐量；分配不确定性；物理组合与合同属性声明注销残余披露。代表 ad12cfb1 为中国全国工厂端35–330千伏交流生产组合，非通用购电或用户交付电，精确权重年份由供方规定。 |
| How long or cycle | 声明生产期内的一次出口供应 |
| reference_flow_link | `final_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 交流电 `ad12cfb1-61f3-45d1-a12c-5903a2fc7202` |
| 参考流属性 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` |
| 参考单位组 | 能量单位 `93a60a57-a3c8-11da-a746-0800200c9a66` |
| 参考单位 | MJ |
| 必需限定信息 | 场址地域年份实际技术或来源组合供方；交流直流电压频率计量位置校准；毛净发电厂用来源匹配净外送；交付损失变压或充放电储能库存；验收期间正 D；实际燃料牌号水分低位热值化石生物比例；联产热焓回流状态；冷却取回耗水流域；直接物种介质废物去向；实测建设更换退役寿命验收吞吐量；分配不确定性；物理组合与合同属性声明注销残余披露。代表 ad12cfb1 为中国全国工厂端35–330千伏交流生产组合，非通用购电或用户交付电，精确权重年份由供方规定。 |

全部限定信息须在数据集元数据或参考流备注中声明。代表流身份仅适用于已确认的产品状态、地域和属性；不相容变体须解析独立流，不以代表身份设定默认产品组成。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Net calorific value | MJ | D 为正的、验收净出口产品总量，单位为 MJ。排除包装及抵消的内部转移。cp_output 记录 D，每张卡按同一参考流归一化。 |
| conversion | utility and material rows | 声明行属性 | kg; m3; MJ | 保留原始读数。电力按 1 kWh = 3.6 MJ 换算。质量与体积转换需实测密度、温度及适用压力，保留水分及化学品有效含量。 |
| category_balance | production | Net calorific value | MJ | D 为选定出口独立校准计量且核对库存后的验收净电能 MJ，必须为正；1 kWh =3.6 MJ。每数据集只用一个发电储能交付产出基准，不合计充电毛发电净外送交付为产出。发电 D 等于实测净外送，毛减厂用仅在计量边界期间匹配时复核，购入厂用另列投入且不重复扣除。调入转售和内部转移独立识别。组合各来源同一净出口基准权重和为1，记录损失供方，不以毛发电因子乘净份额。交付核对网络进量验收产出其他外送技术损失窃电计量缺口库存，仅有独立匹配损失率0<=l<1且无遗漏外送时输入=D/(1-l)。储能同边界实测充电=放电其他有用外送+电损失+实际库存增加，不编往返效率寿命避免发电。燃料能量按实际耗质量乘匹配收到基低位热值或实测体积密度热值状态，区分电 MJ 与燃料热 MJ；气体质量标准体积转换须实测密度温压非假定组成。直接气体按实测物种负荷或明确相容活动因子，不把购电因子代现场燃烧。化石生物 CO2、CH4、N2O和捕集碳分开，不默认生物质废物 CO2 为零。有用蒸汽热=匹配质量乘供汽减回流焓，热水按真实质量实测焓差，非以总水质量作能量。联产有用热电先分联产品再声明分配。寿命材料设施量按实测或论证预期验收电吞吐量一次分摊并敏感性，不编机器质量产量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 发电实际能源资源上游燃料材料；储能购入充电；组合网络交付逐项识别净来源电力 |
| starting_condition_role | 资源或供给进料，须声明具体情形 |
| product_classification_scope | 实际各发电技术组合储能放电或网络交付的声明单一出口电能 |
| recursive_input_rule | 购入同类物料须关联独立供应数据集；内部回用仅作为平衡记录，不新增外部投入或抵扣。 |
| upstream_dataset_requirement | 关联进料、电力、燃料、化学品、基础设施及废物管理负荷，披露缺失覆盖。 |
| disclosure | 场址地域年份实际技术或来源组合供方；交流直流电压频率计量位置校准；毛净发电厂用来源匹配净外送；交付损失变压或充放电储能库存；验收期间正 D；实际燃料牌号水分低位热值化石生物比例；联产热焓回流状态；冷却取回耗水流域；直接物种介质废物去向；实测建设更换退役寿命验收吞吐量；分配不确定性；物理组合与合同属性声明注销残余披露。代表 ad12cfb1 为中国全国工厂端35–330千伏交流生产组合，非通用购电或用户交付电，精确权重年份由供方规定。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | 在一个声明净发电外送出口、储能放电出口或输配用户交付计量点供应电能，含实际化石生物燃料或废物燃烧、核电、水电抽蓄、风电、海洋波浪潮汐、太阳能光伏光热、地热、环境废热转换及电化学燃料电池；纳入有实测来源权重的国家地区供应组合。选一种实际技术或明确组合、地域年份交流直流电压频率计量接口，各替代路线不是同时必需操作。仅发电止于净外送，交付电力纳入出口前实际变压输配损失基础设施。储能非一次发电，保留充电厂用实测损失库存变化寿命吞吐量实际回送电，无避免电网抵扣。记录上游燃料材料实际建设更换退役开发土地水废物直接排放停机待机厂用控制，不因无运行燃料而遗漏设施。电力供应区别于单独销售输配服务、以燃料热为参考产品、单卖证书和消费设备制造。可有热电联产热联产品，但参考仍为电力。中国高压交流生产组合代表身份不缩窄全部类别，其他电压直流地域单技术交付状态须相容身份。公开 EPD 页仅支持技术清单，不采未取得全文阈值其他规则；下列路线采集为需真实场址证据的前景方法。 | `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output` |
| boundary_partition | all exchanges | 纳入截至声明出口的实际调质、储存、装运及污染控制。按披露的寿命产量计入可归属建设及关闭负荷，或论证排除并进行敏感性分析。区分购入燃料供应与前景燃烧、购入处理与场址排放。 |  |
| boundary_completeness | inventory | 卡片规定逐项可能交换及路线条件，不能替代完整场址审计。实际发生但未列出的每种化学品、废物、资源、土地转变及污染物须分别补行。区分不发生、实测零与未知。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| infrastructure | 建设更换退役 | conditional | 实际可归属寿命设施 | 前景生产 | per 1 MJ reference flow |
| thermal | 热能及燃料电池转换 | conditional | 仅实际燃料废物燃烧或燃料电池 | 前景生产 | per 1 MJ reference flow |
| nuclear | 核能发电 | conditional | 仅实际核电 | 前景生产 | per 1 MJ reference flow |
| renewable | 可再生资源转换 | conditional | 逐项识别实际水风日海洋地热机组 | 前景生产 | per 1 MJ reference flow |
| water | 冷却及资源水管理 | conditional | 实际取回处理耗水 | 前景生产 | per 1 MJ reference flow |
| control | 排放废物控制 | conditional | 实际直接物种和管理残余 | 前景生产 | per 1 MJ reference flow |
| network | 组合变压网络交付 | conditional | 实际组合网络出口，纯发电除真实升压外不强加 | 前景生产 | per 1 MJ reference flow |
| storage | 电储能运行 | conditional | 实际储能放电出口或明确纳入储能 | 前景生产 | per 1 MJ reference flow |
| dispatch | 计量电及有用热产出 | required | 全部选定电出口，热仅实际联产 | 前景生产 | per 1 MJ reference flow |

### 过程：建设更换退役 (`infrastructure`)

#### 输入

##### 产品流

###### 结构混凝土 (`concrete`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 结构混凝土
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_concrete 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_concrete`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 钢筋 (`steel`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 钢筋
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_steel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_steel`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 风机总成 (`wind_turbine`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 风机总成
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_wind_turbine 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wind_turbine`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 单晶硅光伏组件 (`pv_module`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 单晶硅光伏组件
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_pv_module 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pv_module`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 锂离子储能电池组 (`battery`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 锂离子储能电池组
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_battery 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_battery`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 建设关闭柴油 (`construction_diesel`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_construction_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_construction_diesel`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

### 过程：热能及燃料电池转换 (`thermal`)

#### 输入

##### 产品流

###### 耗用硬煤 (`coal`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 耗用硬煤
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_coal 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_coal`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 耗用褐煤 (`lignite`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 耗用褐煤
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_lignite 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_lignite`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 耗用天然气 (`gas`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 耗用天然气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_gas 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_gas`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 耗用重燃料油 (`fuel_oil`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 耗用重燃料油
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_fuel_oil 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_fuel_oil`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 耗用木片 (`wood`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 耗用木片
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_wood 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wood`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 燃料电池耗用氢气 (`hydrogen`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 燃料电池耗用氢气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_hydrogen 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hydrogen`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

##### 废物流

###### 送焚烧残余生活垃圾 (`residual_waste`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 送焚烧残余生活垃圾
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_residual_waste 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_residual_waste`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

### 过程：核能发电 (`nuclear`)

#### 输入

##### 产品流

###### 二氧化铀核燃料组件 (`uo2_fuel`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 二氧化铀核燃料组件
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_uo2_fuel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_uo2_fuel`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

#### 输出

##### 废物流

###### 乏核燃料组件 (`spent_fuel`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 乏核燃料组件
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_spent_fuel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_spent_fuel`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 放射性废离子交换树脂 (`radioactive_resin`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 放射性废离子交换树脂
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_radioactive_resin 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_radioactive_resin`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

### 过程：可再生资源转换 (`renewable`)

#### 输入

##### 基本流

###### 入射太阳辐射能 (`solar`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 入射太阳辐射能
- 流属性 / 单位: Energy / MJ
- 数量规则: 按 cp_solar 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_solar`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 入射风动能 (`wind`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 入射风动能
- 流属性 / 单位: Energy / MJ
- 数量规则: 按 cp_wind 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wind`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 截获海洋波浪能 (`wave`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 截获海洋波浪能
- 流属性 / 单位: Energy / MJ
- 数量规则: 按 cp_wave 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wave`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 截获潮汐机械能 (`tidal`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 截获潮汐机械能
- 流属性 / 单位: Energy / MJ
- 数量规则: 按 cp_tidal 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_tidal`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 提取地热热量 (`geothermal`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 提取地热热量
- 流属性 / 单位: Energy / MJ
- 数量规则: 按 cp_geothermal 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_geothermal`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

### 过程：冷却及资源水管理 (`water`)

#### 输入

##### 产品流

###### 购入工艺用水 (`purchased_water`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_purchased_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_purchased_water`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

##### 基本流

###### 河流取水 (`river_water`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 河流取水
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_river_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_river_water`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

#### 输出

##### 废物流

###### 转处理冷却系统废水 (`wastewater`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 转处理冷却系统废水
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_wastewater 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wastewater`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

##### 基本流

###### 回排河流水 (`river_return`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 回排河流水
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_river_return 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_river_return`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 蒸发至空气水 (`evaporated_water`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 蒸发至空气水
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_evaporated_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_evaporated_water`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

### 过程：排放废物控制 (`control`)

#### 输入

##### 产品流

###### 烟气控制尿素 (`urea`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 烟气控制尿素
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_urea 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_urea`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 烟气脱硫石灰石 (`limestone`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 烟气脱硫石灰石
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_limestone 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_limestone`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

#### 输出

##### 产品流

###### 作为产品转移捕集二氧化碳 (`captured_co2`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 作为产品转移捕集二氧化碳
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_captured_co2 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_captured_co2`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

##### 废物流

###### 收集燃烧飞灰 (`fly_ash`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 收集燃烧飞灰
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_fly_ash 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_fly_ash`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 燃烧底灰 (`bottom_ash`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 燃烧底灰
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_bottom_ash 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_bottom_ash`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 烟气脱硫污泥 (`fgd_sludge`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 烟气脱硫污泥
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_fgd_sludge 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_fgd_sludge`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

##### 基本流

###### 释放外环境空气化石二氧化碳 (`fossil_co2`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_fossil_co2 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_fossil_co2`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 释放外环境空气生物二氧化碳 (`biogenic_co2`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 释放外环境空气生物二氧化碳
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_biogenic_co2 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_biogenic_co2`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 释放外环境空气甲烷 (`ch4`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 释放外环境空气甲烷
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_ch4 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_ch4`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 释放外环境空气氧化亚氮 (`n2o`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 释放外环境空气氧化亚氮
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_n2o 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_n2o`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 释放外环境空气二氧化硫 (`so2`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 释放外环境空气二氧化硫
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_so2 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_so2`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 释放外环境空气二氧化氮 (`no2`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 释放外环境空气二氧化氮
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_no2 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_no2`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 释放外环境空气PM10 (`pm10`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 释放外环境空气PM10
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_pm10 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pm10`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 释放外环境空气六氟化硫 (`sf6`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 释放外环境空气六氟化硫
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_sf6 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sf6`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 释放外环境空气硫化氢 (`h2s`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 释放外环境空气硫化氢
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_h2s 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_h2s`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

### 过程：组合变压网络交付 (`network`)

#### 输入

##### 产品流

###### 购入交流来源电力 (`source_power`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 购入交流来源电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_source_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_source_power`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 开关设备充装六氟化硫 (`sf6_charge`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 开关设备充装六氟化硫
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_sf6_charge 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sf6_charge`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 矿物绝缘变压器油 (`transformer_oil`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 矿物绝缘变压器油
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_transformer_oil 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_transformer_oil`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

### 过程：电储能运行 (`storage`)

#### 输入

##### 产品流

###### 购入交流充电电力 (`charging_power`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 购入交流充电电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_charging_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_charging_power`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

### 过程：计量电及有用热产出 (`dispatch`)

#### 输出

##### 产品流

###### 作为联产品供应有用蒸汽热 (`steam_heat`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 作为联产品供应有用蒸汽热
- 流属性 / 单位: Energy / MJ
- 数量规则: 按 cp_steam_heat 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_steam_heat`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 作为联产品供应有用热水热 (`hot_water_heat`)

仅选定路线实际发生本独立交换时，确认状态供方去向匹配期间，其他实际交换分别增行。

- 选定流: 作为联产品供应有用热水热
- 流属性 / 单位: Energy / MJ
- 数量规则: 按 cp_hot_water_heat 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hot_water_heat`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### 相容中国高压交流工厂净生产组合 (`final_product`)

代表仅独立确认相容中国全国工厂端35–330千伏交流生产组合及实际约定净计量接口，供方规定权重年份净基准；其他技术电压直流储能交付产品须完成数据集使用前独立确切身份，PCR全范围不变。

- 选定流: 交流电 `ad12cfb1-61f3-45d1-a12c-5903a2fc7202`
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 1 MJ
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 MJ reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_output`
- 来源: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | 优先过程细分或可辩护的系统扩展；否则采用已证明的物理因果关系。物理关系不可得时，经济分配必须匹配期间、价格及货币并做敏感性分析，保留未分配清单。 | `ef-allocation-2021` |
| allocation_product | reference and co-products | 优先细分实际发电网络变压储能有用热供应。保留未分配联产废物处理清单，论证因果分配或必要匹配经济敏感性。电热仅按论证规则分配，不自动等值 MJ。废物处理服务与发电须真实上游废物状态负荷，供废非自动免费燃料。证书不物理替代电网产出或消除设施燃料周期排放，无自动避免电网热处置储能抵扣，实际有用热另保留。 |  |
| allocation_waste | waste and recycling | 按物理状态及实际去向判定每项输出。出售不会自动将残渣变为联产品，内部回用不获得避免产品抵扣，处理负荷只计一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | 原始字段 | 采集方法 | 单位 | 频次 | 时间覆盖 | 场址范围 | aggregation_rule | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_concrete | infrastructure | `concrete` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 保留真实供应规格独立实测安装更换净产品质量、寿命更换次数拆卸退役去向寿命验收电吞吐量，可归属量一次分摊至 D 并敏感性；总成测真实配置质量，不编单机重，供应总成含内部组件制造不重复加入。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_steel | infrastructure | `steel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 保留真实供应规格独立实测安装更换净产品质量、寿命更换次数拆卸退役去向寿命验收电吞吐量，可归属量一次分摊至 D 并敏感性；总成测真实配置质量，不编单机重，供应总成含内部组件制造不重复加入。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_wind_turbine | infrastructure | `wind_turbine` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 保留真实供应规格独立实测安装更换净产品质量、寿命更换次数拆卸退役去向寿命验收电吞吐量，可归属量一次分摊至 D 并敏感性；总成测真实配置质量，不编单机重，供应总成含内部组件制造不重复加入。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_pv_module | infrastructure | `pv_module` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 保留真实供应规格独立实测安装更换净产品质量、寿命更换次数拆卸退役去向寿命验收电吞吐量，可归属量一次分摊至 D 并敏感性；总成测真实配置质量，不编单机重，供应总成含内部组件制造不重复加入。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_battery | infrastructure | `battery` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 保留真实供应规格独立实测安装更换净产品质量、寿命更换次数拆卸退役去向寿命验收电吞吐量，可归属量一次分摊至 D 并敏感性；总成测真实配置质量，不编单机重，供应总成含内部组件制造不重复加入。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_construction_diesel | infrastructure | `construction_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按本确切交换校准称量计量或可追溯实物流转记录，记录实际组成状态期初末库存期间来源供方或环境介质不确定性适用分配，可归属数量除同一独立计量正电 D MJ，不合并物种或缺测作零。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_coal | thermal | `coal` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 分燃料计量真实耗质量库存，测水分匹配收到基低位热值碳灰化石生物比例；气体体积转质量用声明温压组成实测密度，热值转换相容状态单位；燃料热与电 D分开，不定混合热值效率因子。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_lignite | thermal | `lignite` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 分燃料计量真实耗质量库存，测水分匹配收到基低位热值碳灰化石生物比例；气体体积转质量用声明温压组成实测密度，热值转换相容状态单位；燃料热与电 D分开，不定混合热值效率因子。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_gas | thermal | `gas` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 分燃料计量真实耗质量库存，测水分匹配收到基低位热值碳灰化石生物比例；气体体积转质量用声明温压组成实测密度，热值转换相容状态单位；燃料热与电 D分开，不定混合热值效率因子。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_fuel_oil | thermal | `fuel_oil` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 分燃料计量真实耗质量库存，测水分匹配收到基低位热值碳灰化石生物比例；气体体积转质量用声明温压组成实测密度，热值转换相容状态单位；燃料热与电 D分开，不定混合热值效率因子。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_wood | thermal | `wood` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 分燃料计量真实耗质量库存，测水分匹配收到基低位热值碳灰化石生物比例；气体体积转质量用声明温压组成实测密度，热值转换相容状态单位；燃料热与电 D分开，不定混合热值效率因子。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_hydrogen | thermal | `hydrogen` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 分燃料计量真实耗质量库存，测水分匹配收到基低位热值碳灰化石生物比例；气体体积转质量用声明温压组成实测密度，热值转换相容状态单位；燃料热与电 D分开，不定混合热值效率因子。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_residual_waste | thermal | `residual_waste` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按本确切交换校准称量计量或可追溯实物流转记录，记录实际组成状态期初末库存期间来源供方或环境介质不确定性适用分配，可归属数量除同一独立计量正电 D MJ，不合并物种或缺测作零。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_urea | control | `urea` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按本确切交换校准称量计量或可追溯实物流转记录，记录实际组成状态期初末库存期间来源供方或环境介质不确定性适用分配，可归属数量除同一独立计量正电 D MJ，不合并物种或缺测作零。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_limestone | control | `limestone` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按本确切交换校准称量计量或可追溯实物流转记录，记录实际组成状态期初末库存期间来源供方或环境介质不确定性适用分配，可归属数量除同一独立计量正电 D MJ，不合并物种或缺测作零。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_uo2_fuel | nuclear | `uo2_fuel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 计量接收装载更换组件质量库存铀质量同位素化验燃耗运行记录及真实燃料周期供方，明确组件与二氧化铀铀基准且供方组件一次计入，不编富集利用率效率。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_spent_fuel | nuclear | `spent_fuel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按本确切交换校准称量计量或可追溯实物流转记录，记录实际组成状态期初末库存期间来源供方或环境介质不确定性适用分配，可归属数量除同一独立计量正电 D MJ，不合并物种或缺测作零。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_radioactive_resin | nuclear | `radioactive_resin` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按本确切交换校准称量计量或可追溯实物流转记录，记录实际组成状态期初末库存期间来源供方或环境介质不确定性适用分配，可归属数量除同一独立计量正电 D MJ，不合并物种或缺测作零。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_solar | renewable | `solar` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 仅实际建模资源能交换时记录校准场址时间资源测量声明截获提取接口面积流量焓或论证机械能积分不确定性，区分入射提取与电产出损失，不以电 D代自然资源能、不强加效率或编资源身份；仅作场址元数据不造交换。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_wind | renewable | `wind` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 仅实际建模资源能交换时记录校准场址时间资源测量声明截获提取接口面积流量焓或论证机械能积分不确定性，区分入射提取与电产出损失，不以电 D代自然资源能、不强加效率或编资源身份；仅作场址元数据不造交换。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_wave | renewable | `wave` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 仅实际建模资源能交换时记录校准场址时间资源测量声明截获提取接口面积流量焓或论证机械能积分不确定性，区分入射提取与电产出损失，不以电 D代自然资源能、不强加效率或编资源身份；仅作场址元数据不造交换。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_tidal | renewable | `tidal` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 仅实际建模资源能交换时记录校准场址时间资源测量声明截获提取接口面积流量焓或论证机械能积分不确定性，区分入射提取与电产出损失，不以电 D代自然资源能、不强加效率或编资源身份；仅作场址元数据不造交换。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_geothermal | renewable | `geothermal` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 仅实际建模资源能交换时记录校准场址时间资源测量声明截获提取接口面积流量焓或论证机械能积分不确定性，区分入射提取与电产出损失，不以电 D代自然资源能、不强加效率或编资源身份；仅作场址元数据不造交换。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_river_water | water | `river_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按本确切交换校准称量计量或可追溯实物流转记录，记录实际组成状态期初末库存期间来源供方或环境介质不确定性适用分配，可归属数量除同一独立计量正电 D MJ，不合并物种或缺测作零。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_purchased_water | water | `purchased_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按本确切交换校准称量计量或可追溯实物流转记录，记录实际组成状态期初末库存期间来源供方或环境介质不确定性适用分配，可归属数量除同一独立计量正电 D MJ，不合并物种或缺测作零。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_river_return | water | `river_return` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按本确切交换校准称量计量或可追溯实物流转记录，记录实际组成状态期初末库存期间来源供方或环境介质不确定性适用分配，可归属数量除同一独立计量正电 D MJ，不合并物种或缺测作零。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_evaporated_water | water | `evaporated_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按本确切交换校准称量计量或可追溯实物流转记录，记录实际组成状态期初末库存期间来源供方或环境介质不确定性适用分配，可归属数量除同一独立计量正电 D MJ，不合并物种或缺测作零。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_wastewater | water | `wastewater` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按本确切交换校准称量计量或可追溯实物流转记录，记录实际组成状态期初末库存期间来源供方或环境介质不确定性适用分配，可归属数量除同一独立计量正电 D MJ，不合并物种或缺测作零。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_fossil_co2 | control | `fossil_co2` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按精确气体颗粒身份介质期间，用校准物种浓度真实排气量或气体库存损失；或采用有独立原文支持的相容燃料物种技术活动因子单位不确定性；浓度乘匹配体积以正确单位转 kg，区分 NO2物种和以NO2计NOx当量颗粒粒径化石生物CO2，捕集背景另核对，不默认因子零排放；实际核素另逐项物种活度单位。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_biogenic_co2 | control | `biogenic_co2` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按精确气体颗粒身份介质期间，用校准物种浓度真实排气量或气体库存损失；或采用有独立原文支持的相容燃料物种技术活动因子单位不确定性；浓度乘匹配体积以正确单位转 kg，区分 NO2物种和以NO2计NOx当量颗粒粒径化石生物CO2，捕集背景另核对，不默认因子零排放；实际核素另逐项物种活度单位。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_ch4 | control | `ch4` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按精确气体颗粒身份介质期间，用校准物种浓度真实排气量或气体库存损失；或采用有独立原文支持的相容燃料物种技术活动因子单位不确定性；浓度乘匹配体积以正确单位转 kg，区分 NO2物种和以NO2计NOx当量颗粒粒径化石生物CO2，捕集背景另核对，不默认因子零排放；实际核素另逐项物种活度单位。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_n2o | control | `n2o` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按精确气体颗粒身份介质期间，用校准物种浓度真实排气量或气体库存损失；或采用有独立原文支持的相容燃料物种技术活动因子单位不确定性；浓度乘匹配体积以正确单位转 kg，区分 NO2物种和以NO2计NOx当量颗粒粒径化石生物CO2，捕集背景另核对，不默认因子零排放；实际核素另逐项物种活度单位。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_so2 | control | `so2` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按精确气体颗粒身份介质期间，用校准物种浓度真实排气量或气体库存损失；或采用有独立原文支持的相容燃料物种技术活动因子单位不确定性；浓度乘匹配体积以正确单位转 kg，区分 NO2物种和以NO2计NOx当量颗粒粒径化石生物CO2，捕集背景另核对，不默认因子零排放；实际核素另逐项物种活度单位。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_no2 | control | `no2` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按精确气体颗粒身份介质期间，用校准物种浓度真实排气量或气体库存损失；或采用有独立原文支持的相容燃料物种技术活动因子单位不确定性；浓度乘匹配体积以正确单位转 kg，区分 NO2物种和以NO2计NOx当量颗粒粒径化石生物CO2，捕集背景另核对，不默认因子零排放；实际核素另逐项物种活度单位。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_pm10 | control | `pm10` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按精确气体颗粒身份介质期间，用校准物种浓度真实排气量或气体库存损失；或采用有独立原文支持的相容燃料物种技术活动因子单位不确定性；浓度乘匹配体积以正确单位转 kg，区分 NO2物种和以NO2计NOx当量颗粒粒径化石生物CO2，捕集背景另核对，不默认因子零排放；实际核素另逐项物种活度单位。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_sf6 | control | `sf6` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按精确气体颗粒身份介质期间，用校准物种浓度真实排气量或气体库存损失；或采用有独立原文支持的相容燃料物种技术活动因子单位不确定性；浓度乘匹配体积以正确单位转 kg，区分 NO2物种和以NO2计NOx当量颗粒粒径化石生物CO2，捕集背景另核对，不默认因子零排放；实际核素另逐项物种活度单位。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_h2s | control | `h2s` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按精确气体颗粒身份介质期间，用校准物种浓度真实排气量或气体库存损失；或采用有独立原文支持的相容燃料物种技术活动因子单位不确定性；浓度乘匹配体积以正确单位转 kg，区分 NO2物种和以NO2计NOx当量颗粒粒径化石生物CO2，捕集背景另核对，不默认因子零排放；实际核素另逐项物种活度单位。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_fly_ash | control | `fly_ash` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按本确切交换校准称量计量或可追溯实物流转记录，记录实际组成状态期初末库存期间来源供方或环境介质不确定性适用分配，可归属数量除同一独立计量正电 D MJ，不合并物种或缺测作零。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_bottom_ash | control | `bottom_ash` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按本确切交换校准称量计量或可追溯实物流转记录，记录实际组成状态期初末库存期间来源供方或环境介质不确定性适用分配，可归属数量除同一独立计量正电 D MJ，不合并物种或缺测作零。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_fgd_sludge | control | `fgd_sludge` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按本确切交换校准称量计量或可追溯实物流转记录，记录实际组成状态期初末库存期间来源供方或环境介质不确定性适用分配，可归属数量除同一独立计量正电 D MJ，不合并物种或缺测作零。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_captured_co2 | control | `captured_co2` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按本确切交换校准称量计量或可追溯实物流转记录，记录实际组成状态期初末库存期间来源供方或环境介质不确定性适用分配，可归属数量除同一独立计量正电 D MJ，不合并物种或缺测作零。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_source_power | network | `source_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 各实际供方另列，原校准验收调入计量 kWh乘3.6转 MJ，记录确切来源状态电压地域净基准供方年度权重变压网络损失其他外送核对，不能以垃圾焚烧UUID代通用电网电；合同属性不替代物理交付清单，声明须唯一注销时间市场残余披露；各直流其他供方独立行。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_sf6_charge | network | `sf6_charge` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按本确切交换校准称量计量或可追溯实物流转记录，记录实际组成状态期初末库存期间来源供方或环境介质不确定性适用分配，可归属数量除同一独立计量正电 D MJ，不合并物种或缺测作零。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_transformer_oil | network | `transformer_oil` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按本确切交换校准称量计量或可追溯实物流转记录，记录实际组成状态期初末库存期间来源供方或环境介质不确定性适用分配，可归属数量除同一独立计量正电 D MJ，不合并物种或缺测作零。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_charging_power | storage | `charging_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 校准充电验收放电计量 kWh乘3.6转MJ，保留供方状态厂用期初末储能同边界期间各阶段损失，不编效率避免电网抵扣；供应寿命量匹配真实储能吞吐。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_steam_heat | dispatch | `steam_heat` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 计量真实净供蒸汽 kg和实测交付温压焓回凝质量状态，有用热 MJ用匹配供回焓差明确基态，不默认蒸汽焓或按电 D推热；保留热回凝分配边界期间，不以内部回收作外部产出。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_hot_water_heat | dispatch | `hot_water_heat` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 计量实际供回水质量匹配实测进出热力状态，同期间积分质量乘焓差 MJ保留回流网络损失；不把水质量作热或假定温度比热效率联产份额。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_output | dispatch | `final_product` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 独立校准验收净电计量 D MJ，适用时原 kWh乘3.6；匹配出口交流直流电压频率地域供方年份厂用调入外送库存能期间，D须正不假定转换效率。参考属性为数据库核验标作净热值的能量链，不是燃料热值或电燃烧。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种实测净交流或直流电产品及声明电压发电储能交付出口 | per 1 MJ reference flow | 校准；原始记录；化验；平衡残差；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | 交换量 = 可归属期间数量 / D，汇总前核对库存并抵消内部转移。 | cp_output; row-specific cp records | per 1 MJ reference flow |  |
| physical_balance | production | D 为选定出口独立校准计量且核对库存后的验收净电能 MJ，必须为正；1 kWh =3.6 MJ。每数据集只用一个发电储能交付产出基准，不合计充电毛发电净外送交付为产出。发电 D 等于实测净外送，毛减厂用仅在计量边界期间匹配时复核，购入厂用另列投入且不重复扣除。调入转售和内部转移独立识别。组合各来源同一净出口基准权重和为1，记录损失供方，不以毛发电因子乘净份额。交付核对网络进量验收产出其他外送技术损失窃电计量缺口库存，仅有独立匹配损失率0<=l<1且无遗漏外送时输入=D/(1-l)。储能同边界实测充电=放电其他有用外送+电损失+实际库存增加，不编往返效率寿命避免发电。燃料能量按实际耗质量乘匹配收到基低位热值或实测体积密度热值状态，区分电 MJ 与燃料热 MJ；气体质量标准体积转换须实测密度温压非假定组成。直接气体按实测物种负荷或明确相容活动因子，不把购电因子代现场燃烧。化石生物 CO2、CH4、N2O和捕集碳分开，不默认生物质废物 CO2 为零。有用蒸汽热=匹配质量乘供汽减回流焓，热水按真实质量实测焓差，非以总水质量作能量。联产有用热电先分联产品再声明分配。寿命材料设施量按实测或论证预期验收电吞吐量一次分摊并敏感性，不编机器质量产量。 | 匹配的质量、体积、组成及库存测量 | 平衡残差及不确定性 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| representativeness | dataset | 匹配生产及交换期间、实际技术、地域及供应状态；记录启停、季节变化及替代。 | collection records |
| identity_and_ranges | all cards | 保留未解决身份及缺失独立范围证据，不以猜测行业区间替代测量，不将缺测视为零。 | manifest review metadata |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | 核对 1 MJ、正 D、产品状态、属性单位及全部限定信息；每个数据集固定一种产品及路线。 |  |
| validate_balance | site | D 为选定出口独立校准计量且核对库存后的验收净电能 MJ，必须为正；1 kWh =3.6 MJ。每数据集只用一个发电储能交付产出基准，不合计充电毛发电净外送交付为产出。发电 D 等于实测净外送，毛减厂用仅在计量边界期间匹配时复核，购入厂用另列投入且不重复扣除。调入转售和内部转移独立识别。组合各来源同一净出口基准权重和为1，记录损失供方，不以毛发电因子乘净份额。交付核对网络进量验收产出其他外送技术损失窃电计量缺口库存，仅有独立匹配损失率0<=l<1且无遗漏外送时输入=D/(1-l)。储能同边界实测充电=放电其他有用外送+电损失+实际库存增加，不编往返效率寿命避免发电。燃料能量按实际耗质量乘匹配收到基低位热值或实测体积密度热值状态，区分电 MJ 与燃料热 MJ；气体质量标准体积转换须实测密度温压非假定组成。直接气体按实测物种负荷或明确相容活动因子，不把购电因子代现场燃烧。化石生物 CO2、CH4、N2O和捕集碳分开，不默认生物质废物 CO2 为零。有用蒸汽热=匹配质量乘供汽减回流焓，热水按真实质量实测焓差，非以总水质量作能量。联产有用热电先分联产品再声明分配。寿命材料设施量按实测或论证预期验收电吞吐量一次分摊并敏感性，不编机器质量产量。 |  |
| validate_coverage | handoff | 核对每项适用交换、供应方或环境介质及最终废物去向；标识跳过检查、未解决身份、缺失测量及上游缺口。有错误或未评估必需覆盖不得标为完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在特定计量接口供应1 MJ验收净电能，非1 MJ燃料热或1 kg设备 |
| excluded_use | 以燃料有用热证书为参考产品；单独网络服务；电气设备制造；假设避免电力 |
| required_metadata | 场址地域年份实际技术或来源组合供方；交流直流电压频率计量位置校准；毛净发电厂用来源匹配净外送；交付损失变压或充放电储能库存；验收期间正 D；实际燃料牌号水分低位热值化石生物比例；联产热焓回流状态；冷却取回耗水流域；直接物种介质废物去向；实测建设更换退役寿命验收吞吐量；分配不确定性；物理组合与合同属性声明注销残余披露。代表 ad12cfb1 为中国全国工厂端35–330千伏交流生产组合，非通用购电或用户交付电，精确权重年份由供方规定。 |
| required_quality_disclosure | 身份及测量缺口；边界覆盖；不确定性；分配；时间及地域代表性 |
| update_trigger | 产品、路线、产率、供应、废物去向、场址或代表期间变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| epd-electricity-scope | official_guidance | EPD International, PCR2007:08 public category description, listed version5.0.2, snapshot1 October2026. https://www.environdec.com/pcr-library/pcr2007-08 | 仅公开技术类别范围；未取得门户全文 PDF，不采用该 PCR 截断阈值分配公式或宣称完全符合。 |
| ipcc-stationary-2006 | official_guidance | IPCC, 2006 Guidelines Volume2 Chapter2 Stationary Combustion, corrected April2007, original PDF p.11/printed2.11, section2.3.1 and Equation2.1. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf | 分燃料活动量和相容气体因子核算；国家清单方法不提供场址默认因子氧化率或完整生命周期评价。 |
| ghg-scope2-2015 | official_guidance | GHG Protocol, Scope2 Guidance2015, original PDF p.62/printed60, Table7.1. https://ghgprotocol.org/sites/default/files/2023-03/Scope%202%20Guidance.pdf | 电力属性唯一声明注销时间市场匹配及残余组合披露；企业直接温室气体声明不等于生命周期零负荷，不采用修订征求意见稿为定稿。 |
| epa-chp-output | official_guidance | US EPA, Methods for Calculating CHP Efficiency, snapshot1 October2026, Total System Efficiency and net useful outputs. https://www.epa.gov/chp/methods-calculating-chp-efficiency | 净有用电热产出与寄生损失；不采用效率基准示例或自动热分配。 |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于分类范围，不提供过程数量。 |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | 多功能过程处理层级；不宣称完全符合 PEF。 |
