---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.sheet-piling-of-iron-or-steel-and-welded-angles-shapes-and-sections-of-iron-or-steel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 钢铁板桩及焊接钢铁角材、型材和异型材

## 1. 范围与适用性

本候选规则覆盖钢铁板桩出厂产品，包括热轧与冷弯锁口板桩及工厂钻孔、冲孔或组装变体，以及焊接组合角材、型材和异型材。板桩纳入范围由产品形状及用途确定：冷弯工艺不会将板桩变成一般冷加工型材。两个产品族共享钢材追溯、合格净质量、精整及损失核算，但成形及连接负担由各自路线确定。

排除已安装挡土墙/围堰、打拔桩服务、项目设计、使用及报废；普通未焊接热/冷加工型材、空心型材、管材、钢轨及无关装配结构须采用各自方法。钢铁、非合金、合金及不锈钢仅作为明确声明钢级/成分/交付状态的产品纳入，并须采用实际供应商来料、合格焊接工艺及条件性热/表面处理。不同钢级不得套用通用路线、酸洗配方或腐蚀性能。不宣称挡土能力、设计寿命、固定成分或行业收得率。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.sheet-piling-of-iron-or-steel-and-welded-angles-shapes-and-sections-of-iron-or-steel |
| classification_refs | CPC 3.0:41252 |
| covered_products | 热轧/冷弯钢铁板桩；工厂组件；焊接钢角材/型材/异型材 |
| excluded_products | 已安装挡土结构；无关普通型材、空心型材、管材、钢轨 |
| representative_product | 合格锁口钢板桩或焊接组合钢型材 |
| production_route | 板桩热轧或热轧带钢冷弯；条件性焊接制造/组装；实际精整及表面体系 |
| market_state | 声明制造出厂边界的净合格固体产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 钢铁板桩及焊接钢铁角材、型材和异型材 |
| How much | 1 kg |
| How well | 产品族及锁口/截面几何；热轧或冷弯板桩路线；焊接组合型材路线；规范及版本；钢级及炉次成分；厚度及长度；交付净单位质量；焊接工艺、填充材料及保护体系；验收试验；涂层体系及涂层质量；供应商来料形态及已完成上游工序；场址、时期、电力接口及地域 |
| How long or cycle | 一次合格制造出厂交付；不声明已安装功能寿命 |
| reference_flow_link | `final_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 钢铁板桩及焊接钢铁角材、型材和异型材 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品族及锁口/截面几何；热轧或冷弯板桩路线；焊接组合型材路线；规范及版本；钢级及炉次成分；厚度及长度；交付净单位质量；焊接工艺、填充材料及保护体系；验收试验；涂层体系及涂层质量；供应商来料形态及已完成上游工序；场址、时期、电力接口及地域 |

在数据集元数据中声明全部限定信息。未焊接板桩的焊接工艺、填充材料及保护体系应结合路线证据声明为`not_applicable`。裸材的涂层/密封剂配方声明为`not_applicable`，并通过验收记录确认留存涂层/密封剂质量为零；未知表面状态不等于裸材。D为匹配报告期内正的合格产品净质量，包括留存焊缝金属及仅在该边界随合同交付的涂层/密封剂。钢体、涂层及密封剂质量分开记录；排除包装、废品及游离水。结构设计比较须另行开展功能性研究。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | final_product | 质量 | kg | cp_final_product计量D；各报告期归属交换除以D。 |
| conversion | 全部交换 | 流特定属性 | kg; m3; kWh; MJ | 保留原始单位及转换证据；1 kWh = 3.6 MJ。气体体积须有温压、纯度及密度或低位热值；湿残余物须测含水率及元素含量。 |
| balances | 钢材、焊接、涂层、水及化学品 | 质量 | kg | 禁止将钢材总kg与所含Fe kg相加。对每个实际元素e，各来料、焊材、钢体、废钢、氧化皮、焊渣、污泥、出水、释放及期初/期末库存均以其自身实测总质量乘同一元素含量定义；存在非钢贡献亦须纳入，每种元素分别闭合。碳/合金元素氧化、氧吸收及水/化学反应须单独实测反应平衡；禁止纯铁或固定合金转换。内部返工抵消，但重复能耗及耗材保留。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收钢异型坯/钢坯/方坯、热轧卷材、钢板或单一型材；声明供应商已完成工序、温度及涂层 |
| starting_condition_role | 供应商中间产品 |
| product_classification_scope | 钢铁板桩及焊接钢铁角材、型材和异型材 |
| recursive_input_rule | 外购板桩或焊接型材保留独立供应商负担；内部转移抵消，不得作为新生产或回收抵扣 |
| upstream_dataset_requirement | 按实际来料路线、钢级、供应商及地域限定炼钢/连铸/轧制；公用工程、化学品、运输及废物去向；缺失连接明确列缺口，不得视为零 |
| disclosure | 产品族及锁口/截面几何；热轧或冷弯板桩路线；焊接组合型材路线；规范及版本；钢级及炉次成分；厚度及长度；交付净单位质量；焊接工艺、填充材料及保护体系；验收试验；涂层体系及涂层质量；供应商来料形态及已完成上游工序；场址、时期、电力接口及地域 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_route | all processes | 纳入截至出厂实际选定路线、准备、连接、精整、检查、归属搬运及控制；区分上游卷材热轧与本场址冷弯。 | `ec-fmp-bref-2022`; `arcelormittal-cold-piles-2025` |
| boundary_surface | surface_gate | 纳入出厂前合同表面处理及外包，分别计量化学品、能源、留存涂层及废物；后续安装/工地施用不纳入。 | `epa-fabricated-metal-2021` |
| boundary_completeness | all exchanges | 审计场址：实际燃料、保护混合气、化学品、运输服务、包装材料、废物及排放逐项增加原子交换。记录并说明资本/基础设施处理。候选卡片有适用条件，未知不等于不存在。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receipt | 钢材接收及路线准备 | required | 追溯炉次/卷材/钢板身份及实际起始状态；仅纳入本场址实施的切头或分条。 | 前景制造 | per 1 kg reference flow |
| hot_pile | 板桩热轧 | conditional | 仅适用于钢坯/方坯/异型坯生产热轧板桩：加热、除鳞、粗轧、锁口截面精轧及冷却。 | 前景制造 | per 1 kg reference flow |
| cold_pile | 板桩冷弯成形 | conditional | 仅适用于冷弯板桩：开卷热轧带钢、必要时分条、辊弯或折弯形成所声明板桩/锁口形状及切断；卷材热轧保留在上游。 | 前景制造 | per 1 kg reference flow |
| welding | 焊接型材制造及板桩组装 | conditional | 切割/准备钢板、带钢或型材、装配定位、焊接组合角材/型材/异型材或实际板桩组件；记录埋弧焊、MAG、药芯焊或实际工艺、预热及焊缝返修。 | 前景制造 | per 1 kg reference flow |
| heat_treatment | 条件性交付热处理 | conditional | 仅纳入声明钢级/订单要求的实际退火、正火、淬回火或固溶处理；记录每次炉次、气氛、冷却介质及库存状态；不设通用处理周期。 | 前景制造 | per 1 kg reference flow |
| acceptance | 矫直、机加工及验收 | required | 矫直、定尺切割、按订单钻孔/冲孔、检查尺寸及锁口、实施指定力学及焊缝试验、隔离废品并标识合格批次。 | 前景制造 | per 1 kg reference flow |
| surface_gate | 声明表面体系及出厂 | required | 记录裸材状态或声明出厂边界前实际喷砂/涂漆/镀锌/密封处理，包括外包及运输；合格产品与包装分别称重。 | 前景制造 | per 1 kg reference flow |
| controls | 水循环及污染控制 | required | 记录补水、循环水、排污、处理、捕集固体及实际直接排放；共享水泵及抽风负担仅分配一次。 | 前景制造 | per 1 kg reference flow |

### 过程：钢材接收及路线准备 (`receipt`)

#### 输入

##### 产品流

###### 板桩轧制用钢异型坯 (`steel_blank`)

仅用于实际热轧路线固体原料；存在替代钢坯或方坯时另设卡片。连接炼钢/连铸及供应商运输。

- 选定流：板桩轧制用钢异型坯
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_steel_blank的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_steel_blank`
- 来源：`ec-fmp-bref-2022`

###### 冷弯板桩用热轧带钢卷 (`steel_coil`)

冷弯路线来料，声明宽度、厚度、钢级及供应商热轧负担；同一物料路径不得再计作异型坯。

- 选定流：冷弯板桩用热轧带钢卷
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_steel_coil的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_steel_coil`
- 来源：`arcelormittal-cold-piles-2025`

###### 焊接组合型材用钢板 (`steel_plate`)

记录实际钢板钢级/厚度及供应商路线；使用外购带钢或单一型材来料时分别建卡。

- 选定流：焊接组合型材用钢板
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_steel_plate的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_steel_plate`
- 来源：

###### 焊接组装用钢工字型材 (`steel_profile`)

仅在该具体型材投入时记录；其他型材须分别建原子卡片。外购板桩亦须另设已限定输入并披露已完成路线。

- 选定流：焊接组装用钢工字型材
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_steel_profile的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_steel_profile`
- 来源：

###### 外购工厂电力 (`receipt_electricity`)

计量实际交付电压、供应商、地域及损耗边界；来源特定发电机产出不能作为通用工厂供电。

- 选定流：外购工厂电力
- 流属性/单位：能量 / kWh
- 数量规则：库存及分配核对后，cp_receipt_electricity的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_receipt_electricity`
- 来源：

### 过程：板桩热轧 (`hot_pile`)

#### 输入

##### 产品流

###### 外购工厂电力 (`hot_pile_electricity`)

计量实际交付电压、供应商、地域及损耗边界；来源特定发电机产出不能作为通用工厂供电。

- 选定流：外购工厂电力
- 流属性/单位：能量 / kWh
- 数量规则：库存及分配核对后，cp_hot_pile_electricity的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hot_pile_electricity`
- 来源：

###### 燃烧用天然气 (`hot_pile_natural_gas`)

仅用于实际加热、预热或固化/锌浴供热；采用实测低位热值及所声明体积条件。其他燃料另设卡片。

- 选定流：燃烧用天然气
- 流属性/单位：净热值 / MJ
- 数量规则：库存及分配核对后，cp_hot_pile_natural_gas的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hot_pile_natural_gas`
- 来源：

###### 轧制润滑油 (`rolling_oil`)

按实际场址消耗及库存变动记录；不设通用系数。

- 选定流：轧制润滑油
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_rolling_oil的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_rolling_oil`
- 来源：`ec-fmp-bref-2022`

#### 输出

##### 废物流

###### 钢氧化皮 (`mill_scale`)

仅记录实际对外转移；须记录质量、湿/干状态、元素含量、污染物、去向及期初/期末库存。内部返工不是对外废物。

- 选定流：钢氧化皮
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_mill_scale的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_mill_scale`
- 来源：`ec-fmp-bref-2022`

###### 钢切头废料 (`hot_scrap`)

仅记录实际对外转移；须记录质量、湿/干状态、元素含量、污染物、去向及期初/期末库存。内部返工不是对外废物。

- 选定流：钢切头废料
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_hot_scrap的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hot_scrap`
- 来源：`ec-fmp-bref-2022`

##### 基本流

###### 化石二氧化碳，排入空气 (`combustion_co2`)

仅计直接燃烧；采用实测燃料碳平衡、未燃碳及氧化依据；供应商燃料排放保留在上游。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_combustion_co2的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_combustion_co2`
- 来源：

###### 氮氧化物，排入空气 (`nitrogen_oxides`)

实测炉窑排放及实际烟气流量；禁止默认板桩排放因子。

- 选定流：氮氧化物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_nitrogen_oxides的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_nitrogen_oxides`
- 来源：

### 过程：板桩冷弯成形 (`cold_pile`)

#### 输入

##### 产品流

###### 外购工厂电力 (`cold_pile_electricity`)

计量实际交付电压、供应商、地域及损耗边界；来源特定发电机产出不能作为通用工厂供电。

- 选定流：外购工厂电力
- 流属性/单位：能量 / kWh
- 数量规则：库存及分配核对后，cp_cold_pile_electricity的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cold_pile_electricity`
- 来源：

###### 冷弯成形润滑乳液 (`forming_lubricant`)

声明配方及供货浓度；乳液中水分单独平衡且不得重复计量。

- 选定流：冷弯成形润滑乳液
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_forming_lubricant的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_forming_lubricant`
- 来源：

#### 输出

##### 废物流

###### 钢带边角废料 (`cold_scrap`)

仅记录实际对外转移；须记录质量、湿/干状态、元素含量、污染物、去向及期初/期末库存。内部返工不是对外废物。

- 选定流：钢带边角废料
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_cold_scrap的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cold_scrap`
- 来源：`epa-fabricated-metal-2021`

### 过程：焊接型材制造及板桩组装 (`welding`)

#### 输入

##### 产品流

###### 外购工厂电力 (`welding_electricity`)

计量实际交付电压、供应商、地域及损耗边界；来源特定发电机产出不能作为通用工厂供电。

- 选定流：外购工厂电力
- 流属性/单位：能量 / kWh
- 数量规则：库存及分配核对后，cp_welding_electricity的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_welding_electricity`
- 来源：

###### 燃烧用天然气 (`welding_natural_gas`)

仅用于实际加热、预热或固化/锌浴供热；采用实测低位热值及所声明体积条件。其他燃料另设卡片。

- 选定流：燃烧用天然气
- 流属性/单位：净热值 / MJ
- 数量规则：库存及分配核对后，cp_welding_natural_gas的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_welding_natural_gas`
- 来源：

###### 实心钢焊丝 (`solid_wire`)

用于实际埋弧焊/MAG工艺；记录分类、批次、购入及退回卷盘质量、熔敷金属及损失，禁止固定焊材系数。

- 选定流：实心钢焊丝
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_solid_wire的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_solid_wire`
- 来源：`twi-saw`

###### 药芯钢焊丝 (`flux_cored_wire`)

仅用于药芯焊路线；声明气保护或自保护变体。不得采用含糊地将所有药芯焊丝视为无气体保护的通用记录。

- 选定流：药芯钢焊丝
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_flux_cored_wire的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_flux_cored_wire`
- 来源：`twi-mag`

###### 颗粒埋弧焊剂 (`saw_flux`)

仅用于埋弧焊：新补充量及期初/期末库存、回收未用焊剂、熔融焊渣及洒落；内部焊剂循环不能作为新投入。埋弧焊不需要外部保护气体。

- 选定流：颗粒埋弧焊剂
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_saw_flux的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_saw_flux`
- 来源：`twi-saw`

###### 交付的氩焊接保护气体 (`argon`)

仅在气保护路线单独交付氩气时使用；记录纯度、压力、气瓶退回及参考体积条件。

- 选定流：交付的氩焊接保护气体
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_argon的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_argon`
- 来源：`twi-mag`

###### 交付的二氧化碳焊接保护气体 (`carbon_dioxide_gas`)

仅用于实际单独供应二氧化碳；外购预混保护气体须单设配方限定卡片，不得同时计入混合物及其组分。

- 选定流：交付的二氧化碳焊接保护气体
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_carbon_dioxide_gas的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_carbon_dioxide_gas`
- 来源：`twi-mag`

#### 输出

##### 废物流

###### 废焊渣 (`weld_slag`)

仅记录实际对外转移；须记录质量、湿/干状态、元素含量、污染物、去向及期初/期末库存。内部返工不是对外废物。

- 选定流：废焊渣
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_weld_slag的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_weld_slag`
- 来源：`epa-fabricated-metal-2021`

###### 钢加工边角废料 (`weld_scrap`)

仅记录实际对外转移；须记录质量、湿/干状态、元素含量、污染物、去向及期初/期末库存。内部返工不是对外废物。

- 选定流：钢加工边角废料
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_weld_scrap的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_weld_scrap`
- 来源：`epa-fabricated-metal-2021`

##### 基本流

###### 焊接颗粒物，排入空气 (`welding_dust`)

实际未捕集空气排放，与滤尘分开；元素成分需另设限定排放且不得与总量重复计量。

- 选定流：焊接颗粒物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_welding_dust的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_welding_dust`
- 来源：

### 过程：条件性交付热处理 (`heat_treatment`)

#### 输入

##### 产品流

###### 外购工厂电力 (`heat_electricity`)

仅计实际热处理电力，须限定供电接口及计量；重复炉次仍须纳入。

- 选定流：外购工厂电力
- 流属性/单位：能量 / kWh
- 数量规则：库存及分配核对后，cp_heat_electricity的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_heat_electricity`
- 来源：`ec-fmp-bref-2022`

###### 燃烧用天然气 (`heat_natural_gas`)

仅计实际炉窑燃烧；记录实测低位热值、钢级/订单及交付状态。

- 选定流：燃烧用天然气
- 流属性/单位：净热值 / MJ
- 数量规则：库存及分配核对后，cp_heat_natural_gas的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_heat_natural_gas`
- 来源：`ec-fmp-bref-2022`

### 过程：矫直、机加工及验收 (`acceptance`)

#### 输入

##### 产品流

###### 外购工厂电力 (`acceptance_electricity`)

计量实际交付电压、供应商、地域及损耗边界；来源特定发电机产出不能作为通用工厂供电。

- 选定流：外购工厂电力
- 流属性/单位：能量 / kWh
- 数量规则：库存及分配核对后，cp_acceptance_electricity的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance_electricity`
- 来源：

###### 水基切削液 (`machining_fluid`)

仅用于实际钻孔/切割液；分别跟踪浓度、补充及废液。

- 选定流：水基切削液
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_machining_fluid的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_machining_fluid`
- 来源：`epa-fabricated-metal-2021`

###### 超声检测耦合凝胶 (`ndt_couplant`)

仅在指定检测使用该凝胶时记录；实际渗透剂/显像剂分别另设卡片。

- 选定流：超声检测耦合凝胶
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_ndt_couplant的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ndt_couplant`
- 来源：

#### 输出

##### 废物流

###### 不合格钢型材 (`rejects`)

仅记录实际对外转移；须记录质量、湿/干状态、元素含量、污染物、去向及期初/期末库存。内部返工不是对外废物。

- 选定流：不合格钢型材
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_rejects的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_rejects`
- 来源：`epa-fabricated-metal-2021`

### 过程：声明表面体系及出厂 (`surface_gate`)

#### 输入

##### 产品流

###### 外购工厂电力 (`surface_gate_electricity`)

计量实际交付电压、供应商、地域及损耗边界；来源特定发电机产出不能作为通用工厂供电。

- 选定流：外购工厂电力
- 流属性/单位：能量 / kWh
- 数量规则：库存及分配核对后，cp_surface_gate_electricity的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_gate_electricity`
- 来源：

###### 燃烧用天然气 (`surface_gate_natural_gas`)

仅用于实际加热、预热或固化/锌浴供热；采用实测低位热值及所声明体积条件。其他燃料另设卡片。

- 选定流：燃烧用天然气
- 流属性/单位：净热值 / MJ
- 数量规则：库存及分配核对后，cp_surface_gate_natural_gas的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_gate_natural_gas`
- 来源：

###### 钢喷砂磨料 (`blast_grit`)

实际喷砂路线；新磨料、循环、磨损及废磨料分别记录。

- 选定流：钢喷砂磨料
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_blast_grit的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_blast_grit`
- 来源：`epa-fabricated-metal-2021`

###### 环氧防护涂料配方 (`epoxy_coating`)

仅在该具体配方随产品交付时记录；声明固含量、固化组分及附着干涂层。其他涂层及单独购入固化剂/稀释剂分别建卡。

- 选定流：环氧防护涂料配方
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_epoxy_coating的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_epoxy_coating`
- 来源：`epa-fabricated-metal-2021`

###### 热浸镀锌用锌锭 (`zinc`)

仅用于实际热浸镀锌；锌浴库存、附着锌、浮渣及锌灰须分别计量；外包镀锌采用供应商加工负担且不得重复场址投入。

- 选定流：热浸镀锌用锌锭
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_zinc的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_zinc`
- 来源：`epa-fabricated-metal-2021`

###### 盐酸溶液 (`hydrochloric_acid`)

仅用于镀锌前实际酸洗；声明溶液及有效HCl质量、槽液库存及废酸。其他预处理化学品须另设卡片。

- 选定流：盐酸溶液
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_hydrochloric_acid的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hydrochloric_acid`
- 来源：`epa-fabricated-metal-2021`

###### 沥青类板桩锁口密封剂 (`sealant`)

仅在出厂前施用时记录；披露配方及留存密封剂质量，与钢材分开。后续工地施用不纳入。

- 选定流：沥青类板桩锁口密封剂
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_sealant的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_sealant`
- 来源：

###### 钢包装带 (`packing_band`)

外部包装不计入合格产品D；其他包装材料分别建卡。

- 选定流：钢包装带
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_packing_band的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packing_band`
- 来源：

###### 硝酸溶液 (`nitric_acid`)

仅用于实际钢级特定酸洗/钝化，须记录浓度及有效酸平衡。若外购HNO3/HF预混液，应作为一个限定配方记录，不得重复计组分投入。

- 选定流：硝酸溶液
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_nitric_acid的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_nitric_acid`
- 来源：`ec-fmp-bref-2022`

###### 氢氟酸溶液 (`hydrofluoric_acid`)

仅计声明合金/不锈钢处理中的实际单独HF供应，不作为普遍配方；须测库存、反应及处理去向。

- 选定流：氢氟酸溶液
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_hydrofluoric_acid的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hydrofluoric_acid`
- 来源：`ec-fmp-bref-2022`

#### 输出

##### 产品流

###### 钢铁板桩及焊接钢铁角材、型材和异型材 (`final_product`)

仅出厂净合格产品计入D；钢体包括留存焊缝金属；合同留存涂层及密封剂分别称重。废品、包装及游离水不纳入。

- 选定流：钢铁板桩及焊接钢铁角材、型材和异型材
- 流属性/单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_final_product`
- 来源：

##### 废物流

###### 废钢喷砂磨料 (`spent_grit`)

仅记录实际对外转移；须记录质量、湿/干状态、元素含量、污染物、去向及期初/期末库存。内部返工不是对外废物。

- 选定流：废钢喷砂磨料
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_spent_grit的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_spent_grit`
- 来源：`epa-fabricated-metal-2021`

###### 环氧涂漆残渣 (`paint_residue`)

仅记录实际对外转移；须记录质量、湿/干状态、元素含量、污染物、去向及期初/期末库存。内部返工不是对外废物。

- 选定流：环氧涂漆残渣
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_paint_residue的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_paint_residue`
- 来源：`epa-fabricated-metal-2021`

###### 锌浴浮渣 (`zinc_dross`)

仅记录实际对外转移；须记录质量、湿/干状态、元素含量、污染物、去向及期初/期末库存。内部返工不是对外废物。

- 选定流：锌浴浮渣
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_zinc_dross的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_zinc_dross`
- 来源：`epa-fabricated-metal-2021`

###### 废盐酸酸洗液 (`spent_acid`)

仅记录实际对外转移；须记录质量、湿/干状态、元素含量、污染物、去向及期初/期末库存。内部返工不是对外废物。

- 选定流：废盐酸酸洗液
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_spent_acid的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_spent_acid`
- 来源：`epa-fabricated-metal-2021`

###### 废硝酸-氢氟酸钢材酸洗液 (`mixed_spent_acid`)

仅计实际混酸槽液转移；记录水、酸及每种溶解金属含量和实际处理；不得将酸液总kg作为金属kg。

- 选定流：废硝酸-氢氟酸钢材酸洗液
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_mixed_spent_acid的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_mixed_spent_acid`
- 来源：`ec-fmp-bref-2022`

##### 基本流

###### 甲苯，排入空气 (`toluene_air`)

仅在实际涂料含甲苯时记录；计量溶剂留存、回收及排放；其他实际溶剂分别新增。

- 选定流：甲苯，排入空气
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_toluene_air的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_toluene_air`
- 来源：

###### 氟化氢，排入空气 (`hf_air`)

仅计实际含氟处理实测未捕集释放，须与洗涤捕集及转移废物分开。

- 选定流：氟化氢，排入空气
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_hf_air的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hf_air`
- 来源：`ec-fmp-bref-2022`

###### 氮氧化物，排入空气 (`acid_nox`)

仅计实际硝酸处理释放；与炉窑排放分开，采用场址监测，不套用通用合金因子。

- 选定流：氮氧化物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_acid_nox的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acid_nox`
- 来源：`ec-fmp-bref-2022`

### 过程：水循环及污染控制 (`controls`)

#### 输入

##### 产品流

###### 外购工厂电力 (`controls_electricity`)

计量实际交付电压、供应商、地域及损耗边界；来源特定发电机产出不能作为通用工厂供电。

- 选定流：外购工厂电力
- 流属性/单位：能量 / kWh
- 数量规则：库存及分配核对后，cp_controls_electricity的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_controls_electricity`
- 来源：

###### 外购工业过程水 (`process_water`)

仅计外购补水；原水抽取须另设基本资源卡片。内部冷却/除鳞循环作为循环量，不得反复计作新投入。

- 选定流：外购工业过程水
- 流属性/单位：体积 / m3
- 数量规则：库存及分配核对后，cp_process_water的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_process_water`
- 来源：`ec-fmp-bref-2022`

###### 氢氧化钠溶液 (`sodium_hydroxide`)

仅用于实际废水中和；记录交付浓度、有效碱、反应及污泥/出水去向。

- 选定流：氢氧化钠溶液
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_sodium_hydroxide的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_sodium_hydroxide`
- 来源：

#### 输出

##### 废物流

###### 含油轧钢水处理污泥 (`oily_sludge`)

仅记录实际对外转移；须记录质量、湿/干状态、元素含量、污染物、去向及期初/期末库存。内部返工不是对外废物。

- 选定流：含油轧钢水处理污泥
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_oily_sludge的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_oily_sludge`
- 来源：`ec-fmp-bref-2022`

###### 交付处理的工业废水 (`wastewater`)

仅记录实际对外转移；须记录质量、湿/干状态、元素含量、污染物、去向及期初/期末库存。内部返工不是对外废物。

- 选定流：交付处理的工业废水
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_wastewater的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastewater`
- 来源：`ec-fmp-bref-2022`

##### 基本流

###### 铁，排入淡水 (`iron_water`)

仅计直接许可排放：实测出水浓度乘排放体积，溶解态/总量口径一致；异地处理废水不得再计为场址直接排放。

- 选定流：铁，排入淡水
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_iron_water的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_iron_water`
- 来源：

###### 铬，排入淡水 (`chromium_water`)

仅计含铬钢级的实际直接释放；记录实测形态及总/溶解口径。实测六价铬须另行按形态记录，避免与总铬重复计量。

- 选定流：铬，排入淡水
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_chromium_water的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_chromium_water`
- 来源：

###### 镍，排入淡水 (`nickel_water`)

仅计含镍钢级实际直接释放，采用匹配浓度及出水体积；异地处理转移须区分。

- 选定流：镍，排入淡水
- 流属性/单位：质量 / kg
- 数量规则：库存及分配核对后，cp_nickel_water的匹配报告期归属数量 / D。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_nickel_water`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | shared processes | 优先用批次计量/细分隔离产品及路线；无法避免时依据经证明物理因果关系（机时、焊接工作、加热载荷或处理面积）分配。其他关系须说明并做敏感性分析；不同路线不可自动采用质量分配。 | `ec-pef-2021` |
| scrap_and_rework | metal residues | 区分废品、内部返工、对外废钢及实际可售共产品。保留废物处理/运输；本前景数据包不得自动抵扣替代钢材。完整LCA另行声明回收方法及废物终止边界。 | `ec-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_steel_blank | receipt | steel_blank | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_steel_coil | receipt | steel_coil | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_steel_plate | receipt | steel_plate | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_steel_profile | receipt | steel_profile | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_receipt_electricity | receipt | receipt_electricity | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kWh | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_hot_pile_electricity | hot_pile | hot_pile_electricity | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kWh | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_cold_pile_electricity | cold_pile | cold_pile_electricity | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kWh | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_welding_electricity | welding | welding_electricity | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kWh | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_acceptance_electricity | acceptance | acceptance_electricity | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kWh | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_surface_gate_electricity | surface_gate | surface_gate_electricity | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kWh | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_controls_electricity | controls | controls_electricity | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kWh | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_hot_pile_natural_gas | hot_pile | hot_pile_natural_gas | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | MJ | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_welding_natural_gas | welding | welding_natural_gas | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | MJ | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_surface_gate_natural_gas | surface_gate | surface_gate_natural_gas | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | MJ | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_rolling_oil | hot_pile | rolling_oil | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_forming_lubricant | cold_pile | forming_lubricant | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_solid_wire | welding | solid_wire | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_flux_cored_wire | welding | flux_cored_wire | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_saw_flux | welding | saw_flux | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_argon | welding | argon | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_carbon_dioxide_gas | welding | carbon_dioxide_gas | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_machining_fluid | acceptance | machining_fluid | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_ndt_couplant | acceptance | ndt_couplant | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_blast_grit | surface_gate | blast_grit | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_epoxy_coating | surface_gate | epoxy_coating | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_zinc | surface_gate | zinc | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_hydrochloric_acid | surface_gate | hydrochloric_acid | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_sealant | surface_gate | sealant | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_packing_band | surface_gate | packing_band | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_final_product | surface_gate | final_product | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 地磅/批次秤及库存台账，附炉次成分并分开留存涂层 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_mill_scale | hot_pile | mill_scale | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_hot_scrap | hot_pile | hot_scrap | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_cold_scrap | cold_pile | cold_scrap | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_weld_slag | welding | weld_slag | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_weld_scrap | welding | weld_scrap | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_rejects | acceptance | rejects | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_spent_grit | surface_gate | spent_grit | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_paint_residue | surface_gate | paint_residue | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_zinc_dross | surface_gate | zinc_dross | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_spent_acid | surface_gate | spent_acid | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_oily_sludge | controls | oily_sludge | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_wastewater | controls | wastewater | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_process_water | controls | process_water | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | m3 | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_sodium_hydroxide | controls | sodium_hydroxide | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_combustion_co2 | hot_pile | combustion_co2 | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_nitrogen_oxides | hot_pile | nitrogen_oxides | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_welding_dust | welding | welding_dust | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_toluene_air | surface_gate | toluene_air | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_iron_water | controls | iron_water | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_heat_electricity | heat_treatment | heat_electricity | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kWh | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_heat_natural_gas | heat_treatment | heat_natural_gas | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | MJ | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_nitric_acid | surface_gate | nitric_acid | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_hydrofluoric_acid | surface_gate | hydrofluoric_acid | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_mixed_spent_acid | surface_gate | mixed_spent_acid | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_hf_air | surface_gate | hf_air | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_acid_nox | surface_gate | acid_nox | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_chromium_water | controls | chromium_water | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |
| cp_nickel_water | controls | nickel_water | measurement_record | lot_id; route; date; amount; unit; opening_stock; closing_stock; returns; internal_transfers; destination; meter_id; uncertainty | 校准仪表/秤及供应商或废物记录；按适用性采集元素含量、含水率/浓度及接口 | kg | 逐批及月度核对 | 匹配的代表性报告期，包括启动、返修及废品 | 仅声明场址/路线及外部边界 | 每 1 kg 参考流 | 校准、发票、化验报告、质量核对及不存在证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all inventory | q_i = 归属的报告期外部数量_i / D；先分配后归一化。D排除重复返工产出。 | cp_final_product; each cp_i | amount per 1 kg reference flow |  |
| element_balance | steel and coating | 对每种实测元素e：外部投入总质量_i * 实测元素e含量_i之和 + 期初元素库存 = 合格钢体元素 + 涂层元素 + 对外残余物元素 + 实测释放元素 + 期末库存。各项均采用同一元素的各自化验；溶解出水采用匹配浓度 * 体积。按传播测量不确定度报告残差；禁止设定共同Fe/合金比例。 | mass; assays; stocks; release records | 分别元素闭合 |  |
| water_balance | controls | 补水 + 期初水库存 + 反应生成水 = 排水 + 蒸发 + 产品/废物夹带水 + 期末库存 + 反应消耗水。内部循环抵消；溶液携水核对且不得重复计量。 | meters; stock; moisture; reaction records | 水平衡闭合 |  |
| chemical_balance | welding and surface | 对各有效化学品/焊剂/涂层组分，以实测投入、库存、反应/留存质量、回收及残余物闭合。区分碳及合金氧化、氧吸收及气态反应产物；保护气CO2释放与燃烧CO2分开。 | formulation; consumption; stock; composition; reaction records | 组分及反应闭合 |  |
| coating_conversion | surface_gate | 按面积或长度采集时，采用实测面积/长度及实际合格涂覆质量；留存干质量单独测量。不规定涂层密度、厚度、传递效率或焊缝熔敷收得率。 | area; length; mass; coating records | 按D实测转换 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all flows | 分配UUID前匹配产品/废物/基本流类型、属性、供应接口、路线、配方、地域及状态；分类代码或名称不能单独证明身份。 | 限定直读记录及供应商文件 |
| coverage | all data | 同一代表性时期、路线及场址；追溯仪表、批次谱系、异地加工及库存。报告缺失数据及不确定度；不存在须有证据。 | 审计及校准记录 |
| ranges | all quantities | 采集实际前景用量。禁止通用收得率、能耗、焊材消耗、合金比例或涂层系数。数值默认值/校验范围须有路线/边界/单位条件匹配的独立原文；未解决证据保留缺口。 | 原始观察及来源适用性审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | 要求D > 0、有限kg及全部限定信息；区分合格钢体、焊缝金属、涂层/密封剂及包装。 |  |
| validate_route | all processes | 依据记录核实热/冷板桩及焊接型材模块；仅对有负担连接的供应商已完成工序予以绕过。拒绝已安装服务或未限定钢级替代。 |  |
| validate_balance | all exchanges | 分别核查总质量及每种实测同元素平衡、水/化学品/焊剂/涂层闭合、库存匹配、内部转移及返工能耗；超出实测不确定度的残差须调查。禁止强制纯Fe或固定合金比例。 |  |
| validate_exchange | inventory | 要求原子交换、量纲支持单位、匹配报告期及明确供应商/处理连接；缺失UUID或数量保持未解决，不得置零或猜测。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 路线/钢级/表面状态限定产品供应清单及下游process/lifecyclemodel投影 |
| excluded_use | 已安装墙体性能或寿命比较；其他型材或未限定钢级；通用电力或未限定钢材替代 |
| required_metadata | 产品族及锁口/截面几何；热轧或冷弯板桩路线；焊接组合型材路线；规范及版本；钢级及炉次成分；厚度及长度；交付净单位质量；焊接工艺、填充材料及保护体系；验收试验；涂层体系及涂层质量；供应商来料形态及已完成上游工序；场址、时期、电力接口及地域 |
| required_quality_disclosure | 场址/时期/路线、测量、分配、平衡、上游连接、不确定度及未解决身份/范围 |
| update_trigger | 钢级、几何、路线、焊接/涂层体系、供应接口或代表性时期改变 |

## 11. 数据源

| 来源id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `ec-fmp-bref-2022` | official_guidance | European Commission JRC. Ferrous Metals Processing BREF, 2022, DOI 10.2760/196475. https://doi.org/10.2760/196475 | 2.2.1.5节印刷页47–50及图2.10/2.13：型材及板桩轧制；2.2.17–18节：水循环及残余物。仅一般轧厂事实，无产品特定数值因子。 |
| `arcelormittal-cold-piles-2025` | literature | ArcelorMittal. Manufacturing cold formed sheet piles, 20 January 2025. https://constructalia.arcelormittal.com/en/news_center/2025/01/cold-formed-steel-sheet-piles | 生产商说明确认热轧卷材为冷弯板桩来料；宣传性效率表述不能提供收得率范围。 |
| `twi-saw` | handbook | TWI. What is Submerged-arc Welding? https://www.twi-global.com/technical-knowledge/faqs/faq-what-is-submerged-arc-welding | 埋弧焊焊丝/焊剂/焊渣及不需外部保护气体；不规定焊接用量。 |
| `twi-mag` | handbook | TWI. What is Gas Metal Arc Welding? https://www.twi-global.com/technical-knowledge/faqs/faq-what-is-mig-mag-welding | 气保护焊丝焊接区别；气体身份/用量由具体工艺决定。 |
| `epa-fabricated-metal-2021` | official_guidance | US EPA. Sector AA: Fabricated Metal Products Manufacturing Facilities, EPA 833-F-06-042, February 2021, Table 1 p.2. https://www.epa.gov/sites/default/files/2015-10/documents/sector_aa_fabmetal.pdf | 用于准备、涂漆、镀锌及废物遗漏的独立定性交叉核对；为广泛雨水行业范围，不能证明每种产品均实施所有工序。 |
| `ec-pef-2021` | official_guidance | Commission Recommendation (EU) 2021/2279, consolidated 30 December 2021, section 4.5 pp.87–88. https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230 | 分配层级；研究特定应用及明确回收边界。 |
