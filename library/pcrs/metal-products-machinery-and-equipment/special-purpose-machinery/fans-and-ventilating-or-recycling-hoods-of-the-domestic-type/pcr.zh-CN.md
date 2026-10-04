---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.fans-and-ventilating-or-recycling-hoods-of-the-domestic-type
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 家用风扇及通风罩或循环排气罩

## 1. 范围与适用性

覆盖完整家用空气循环风扇（吊扇、台扇、落地扇、壁扇、塔扇及家用排风类型）以及家用通风或循环式抽油烟罩从摇篮到工厂门的生产。纳入实际金属或塑料叶片、隐藏叶轮及交付安装件；根据主要家用功能及技术设计界定，不采用武断功率、风量或营销尺寸阈值。工业工艺风机、整套暖通系统、主要净化空气设备、加热或制冷设备及单售备件需另行审查。抽油烟罩不因过滤厨房蒸气而排除。厂商示例体现可选架构，不是通用材料配方。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.fans-and-ventilating-or-recycling-hoods-of-the-domestic-type |
| classification_refs | CPC3.0:44815 |
| covered_products | 作为完整交付设备的家用风扇及排风或循环式排气罩 |
| excluded_products | 工业工艺风机、整套暖通、主要净化或加热制冷设备及单独零件待另行范围审查 |
| representative_product | 声明的单一配置；不得以代表型号替代整个类别 |
| production_route | 外购组件装配或实际金属、塑料、电机制造、涂装、集成及测试 |
| market_state | 制造门处验收完整成品设备；披露实际随货可选附件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造一种验收家用风扇或排气罩配置 |
| How much | 1 kg验收净成品设备 |
| How well | 同一声明BOM、完整交付状态及配置特定电气机械验收；风量、噪声、过滤性能属于限定信息，不是生产参考 |
| How long or cycle | 一次制造交付；不假定使用寿命 |
| reference_flow_link | finished_appliance |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 家用风扇及通风罩或循环排气罩 `d241cf7b-4dd0-49d5-89d1-2cf1905189ce` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 主要家用功能；风扇安装或隐藏叶轮、排气罩排风或循环模式；型号/BOM/图样版本；交付净内容；安装油脂滤件、炭滤件及照明；电机交流或直流及控制技术；材料牌号及ABS-GF纤维比例；电压、额定运行及验收试验；自制外购；场址、年份、供应商及工厂门 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| physical_basis | 实物材料及物种记录 | Mass | kg | 每项实物平衡使用自身牌号、检测、水分及湿干基；配混料总质量不是所含铜、铬、碳或溶剂。检测不适用于电力或运输。液体体积仅用记录条件下实测密度换算。 |
| energy_basis | 外购及自发能源 | Energy | MJ | 保留电力能量参考：1 kWh=3.6 MJ；蒸汽能量独立按kg乘比焓核算，使用共同零点并明确供应商回流总量或净量接口，不使用无依据质量能量比。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收原料或树脂及供应商已完成组件；清单覆盖实际场内工序 |
| starting_condition_role | 声明供应商至前景接口 |
| product_classification_scope | 完整家用风扇及通风或循环排气罩 |
| recursive_input_rule | 同类别外购设备或组件上游仅计一次；厂内配对转移抵消但不消除返工 |
| upstream_dataset_requirement | 每项外购件、处理、运输及公用工程链接实际供应商、状态、地域、年份及已完成工序；未知链接为缺口 |
| disclosure | 主要家用功能；风扇安装或隐藏叶轮、排气罩排风或循环模式；型号/BOM/图样版本；交付净内容；安装油脂滤件、炭滤件及照明；电机交流或直流及控制技术；材料牌号及ABS-GF纤维比例；电压、额定运行及验收试验；自制外购；场址、年份、供应商及工厂门 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_make_buy | all processes | 按配置建立自制外购矩阵：外购完整电机、已装配控制器、滤件或照明模块通过供应商仅计一次内含铜、钢、树脂、化学品及生产。自制加工记录各原料及工序；外购半成品电机明确已完成绕组或叠片。不得重复加内含输入。外包工序及运输仅计一次。 | `bosch-hood`; `panasonic-abs-gf` |
| boundary_routes | all processes | 根据实际工艺选择，不缩窄类别：塑料或金属叶片、冲压罩体、轴流或离心叶轮、防护安装件、自制或外购交流直流电机、摇头控制、装配试验及实际工厂治理。空气倍增式仍有实体叶轮；无叶宣传不能删除该BOM。排气罩需实际油脂过滤技术；炭滤件仅实际交付时纳入生产。每项实际牌号、添加剂、化学品、燃料、废物及物种各建原子行。 | `bosch-hood`; `panasonic-abs-gf`; `dyson-cf1` |
| boundary_downstream | all processes | 工厂验收电耗及风量试验属于此边界；额定瓦数、家庭风量、厨房蒸气或油脂及消费者清洗换滤件属于后续使用。消费者捕集残渣不是默认工厂废物。交付BOM之外安装风管、运行及终寿命在工厂门外；披露资本维护政策。 | `bosch-hood` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receipt | 配置及外购组件接收 | required | 所有验收风扇及排气罩配置；实际供应商接口。 | 前景生产 | 每 1 kg 参考流 |
| metal | 金属叶片、防护罩及排气罩加工 | conditional | 实际厂内金属切割、冲压、折弯、连接或机加工；供应商已完成工序保留上游。 | 前景生产 | 每 1 kg 参考流 |
| plastic | 塑料叶片、外壳及环形风道成型 | conditional | 实际厂内成型及树脂配混；外购成品件属于不同接口。 | 前景生产 | 每 1 kg 参考流 |
| motor | 电机绕组及机电装配 | conditional | 仅实际自制电机；外购完整电机不得拆成重复原料输入。 | 前景生产 | 每 1 kg 参考流 |
| finish | 表面预处理及涂装 | conditional | 实际清洗、溶剂清洁、粉末涂装、固化或外包表面处理；记录确切化学组成。 | 前景生产 | 每 1 kg 参考流 |
| assembly | 风扇或排气罩集成及验收 | required | 实际风扇叶轮、防护及安装件、接线控制；排气罩风机、油脂滤件、排风或循环配置、实际随货可选炭滤件及照明。 | 前景生产 | 每 1 kg 参考流 |
| dispatch | 包装及工厂门交付 | required | 验收净设备、交付附件及单独核算包装。 | 前景生产 | 每 1 kg 参考流 |
| services | 剩余公用工程及工厂治理 | required | 仅工序计量后未分配的应归属负荷，以及实际治理交换。 | 前景生产 | 每 1 kg 参考流 |

### 过程：配置及外购组件接收（`receipt`）

#### 输入

##### 产品流

###### 完整家用风扇电动机 (`purchased_motor`)

外购交流或直流电机，明确实际绕组、转子及控制器边界。

- 选定流: 完整家用风扇电动机
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_purchased_motor
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_purchased_motor`
- 来源:

###### 已装配家用风扇控制电路板 (`purchased_controller`)

外购已装配板；本前景BOM不重复计入其内含组件。

- 选定流: 已装配家用风扇控制电路板
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_purchased_controller
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_purchased_controller`
- 来源:

###### 成品家用风扇叶轮 (`purchased_impeller`)

外购图样指定叶片或隐藏叶轮；取得确切材料及状态。

- 选定流: 成品家用风扇叶轮
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_purchased_impeller
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_purchased_impeller`
- 来源:

###### 完整金属网油脂过滤器 (`purchased_grease_filter`)

仅实际配备该滤件的排气罩配置；取得合金、框架及供应商。

- 选定流: 完整金属网油脂过滤器
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_purchased_grease_filter
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_purchased_grease_filter`
- 来源: `bosch-hood`

###### 完整活性炭排气罩过滤器 (`purchased_carbon_filter`)

仅循环配置且实际随货滤件；零售附件不自动属于工厂门BOM。

- 选定流: 完整活性炭排气罩过滤器
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_purchased_carbon_filter
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_purchased_carbon_filter`
- 来源: `bosch-hood`

###### 成品家用风扇塑料外壳 (`purchased_housing`)

仅外购成型外壳；内含树脂及成型上游仅计一次，披露实际树脂牌号。

- 选定流: 成品家用风扇塑料外壳
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_purchased_housing
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_purchased_housing`
- 来源:

###### 成品家用抽油烟罩罩体 (`purchased_hood_body`)

仅外购明确材料及表面状态的罩体；供应商成型及涂装不在装配重复。

- 选定流: 成品家用抽油烟罩罩体
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_purchased_hood_body
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_purchased_hood_body`
- 来源:

###### 成品家用风扇防护网罩 (`purchased_guard`)

仅实际风扇配置外购网罩；披露材料牌号及上游工序。

- 选定流: 成品家用风扇防护网罩
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_purchased_guard
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_purchased_guard`
- 来源:

###### 完整吊扇安装支架 (`purchased_mount`)

仅交付吊扇支架；其他安装设计各自建立原子项。

- 选定流: 完整吊扇安装支架
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_purchased_mount
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_purchased_mount`
- 来源:

###### 完整纤维油脂过滤器 (`purchased_fleece_filter`)

实际排气罩可选油脂过滤技术；取得真实纤维规格，不自动等于金属网滤件。

- 选定流: 完整纤维油脂过滤器
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_purchased_fleece_filter
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_purchased_fleece_filter`
- 来源: `bosch-hood`

###### 完整排气罩照明模块 (`purchased_light`)

仅实际安装或交付的灯模块；明确LED或其他实际技术。

- 选定流: 完整排气罩照明模块
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_purchased_light
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_purchased_light`
- 来源: `bosch-hood`

### 过程：金属叶片、防护罩及排气罩加工（`metal`）

#### 输入

##### 产品流

###### 304不锈钢板 (`steel_sheet`)

仅实际材质证书指定304时采用此条件示例；其他牌号另建清单行。

- 选定流: 304不锈钢板
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_steel_sheet
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_steel_sheet`
- 来源: `jrc-metalworking`

###### 5052铝板 (`aluminium_sheet`)

仅BOM指定5052的金属叶片或外壳；非所有风扇配方。

- 选定流: 5052铝板
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_aluminium_sheet
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_aluminium_sheet`
- 来源: `jrc-metalworking`

###### 矿物油基非水溶性切削液 (`cutting_oil`)

仅实际油基机加工；明确供应商配方及油含量。

- 选定流: 矿物油基非水溶性切削液
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_cutting_oil
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_cutting_oil`
- 来源: `jrc-metalworking`

###### 交流电 (`metal_electricity`)

仅实际中国1–35千伏用户供电采用该UUID；匹配供应商、地域及年份。其他情况取得具体供电标识。公用工程行仅为剩余负荷。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 能量 / MJ
- 数量规则: 归属期间采集量除以D；cp_energy
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源:

#### 输出

##### 废物流

###### 304不锈钢加工废料 (`steel_scrap`)

实际分选304废料；测定质量及附着液；不假定通用牌号。

- 选定流: 304不锈钢加工废料
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_steel_scrap
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_steel_scrap`
- 来源:

### 过程：塑料叶片、外壳及环形风道成型（`plastic`）

#### 输入

##### 产品流

###### 玻璃纤维增强ABS粒料 (`abs_gf`)

实际ABS-GF叶片或外壳成型；取得牌号、纤维比例及水分证书。外购配混料仅计一次玻纤。

- 选定流: 玻璃纤维增强ABS粒料
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_abs_gf
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_abs_gf`
- 来源: `panasonic-abs-gf`

###### 聚丙烯粒料 (`pp_resin`)

仅实际PP部件；不替代ABS-GF。厂内配混时添加剂单列。

- 选定流: 聚丙烯粒料
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_pp_resin
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_pp_resin`
- 来源: `panasonic-abs-gf`

###### 交流电 (`plastic_electricity`)

仅实际中国1–35千伏用户供电采用该UUID；匹配供应商、地域及年份。其他情况取得具体供电标识。公用工程行仅为剩余负荷。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 能量 / MJ
- 数量规则: 归属期间采集量除以D；cp_energy
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源:

#### 输出

##### 废物流

###### 玻璃纤维增强ABS成型废件 (`abs_scrap`)

仅外送ABS-GF废件；厂内回料配对抵消，实际重复成型能耗保留。

- 选定流: 玻璃纤维增强ABS成型废件
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_abs_scrap
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_abs_scrap`
- 来源:

### 过程：电机绕组及机电装配（`motor`）

#### 输入

##### 产品流

###### 漆包铜绕组线 (`copper_wire`)

仅实际自制绕组；明确导体纯度、漆膜体系及线材证书。

- 选定流: 漆包铜绕组线
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_copper_wire
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_copper_wire`
- 来源:

###### 成品电工钢电机叠片 (`lamination`)

仅外购冲压叠片的自制电机；不重复钢片冲压负荷。

- 选定流: 成品电工钢电机叠片
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_lamination
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_lamination`
- 来源:

###### 成品滚珠轴承 (`bearing`)

仅单独安装轴承；不得作为外购完整电机的额外输入。

- 选定流: 成品滚珠轴承
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_bearing
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_bearing`
- 来源:

###### 聚酯绕组浸渍漆 (`varnish`)

仅实际自制绕组浸渍；记录配方、树脂固体及每种溶剂。

- 选定流: 聚酯绕组浸渍漆
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_varnish
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_varnish`
- 来源:

###### 交流电 (`motor_electricity`)

仅实际中国1–35千伏用户供电采用该UUID；匹配供应商、地域及年份。其他情况取得具体供电标识。公用工程行仅为剩余负荷。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 能量 / MJ
- 数量规则: 归属期间采集量除以D；cp_energy
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源:

### 过程：表面预处理及涂装（`finish`）

#### 输入

##### 产品流

###### 聚酯粉末涂料 (`powder`)

仅实际聚酯粉末工艺；记录确切配方及厂内过喷回用。

- 选定流: 聚酯粉末涂料
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_powder
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_powder`
- 来源:

###### 异丙醇清洁溶剂 (`ipa`)

仅实际异丙醇清洁；所有平衡项测定浓度及湿干基。

- 选定流: 异丙醇清洁溶剂
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_ipa
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_ipa`
- 来源:

###### 供清洗使用的工艺水 (`water`)

仅实际清洗；记录供应品质及来源；循环水不重复作为外购。

- 选定流: 供清洗使用的工艺水
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_water
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源:

###### 交流电 (`finish_electricity`)

仅实际中国1–35千伏用户供电采用该UUID；匹配供应商、地域及年份。其他情况取得具体供电标识。公用工程行仅为剩余负荷。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 能量 / MJ
- 数量规则: 归属期间采集量除以D；cp_energy
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源:

#### 输出

##### 废物流

###### 废异丙醇清洁液 (`solvent_waste`)

实际外送废液，测定浓度及水分；区别于可回用回收溶剂。

- 选定流: 废异丙醇清洁液
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_solvent_waste
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_solvent_waste`
- 来源:

###### 表面清洗废水 (`wastewater`)

实际排放或处理接口；溶解物种分别量化，不自动设为基本流水排放。

- 选定流: 表面清洗废水
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_wastewater
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_wastewater`
- 来源:

##### 基本流

###### 排入空气的异丙醇 (`ipa_air`)

仅物种特定监测或经验证溶剂平衡的实际释放；不明残差不是空气排放。

- 选定流: 排入空气的异丙醇
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_ipa_air
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_ipa_air`
- 来源:

### 过程：风扇或排气罩集成及验收（`assembly`）

#### 输入

##### 产品流

###### 完整绝缘铜电源线 (`cord`)

实际交付电源线；其内含铜及绝缘通过供应商仅计一次。

- 选定流: 完整绝缘铜电源线
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_cord
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_cord`
- 来源:

###### 钢制紧固螺钉 (`screw`)

实际单独安装且明确涂层及规格的螺钉。

- 选定流: 钢制紧固螺钉
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_screw
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_screw`
- 来源:

###### 交流电 (`assembly_electricity`)

仅实际中国1–35千伏用户供电采用该UUID；匹配供应商、地域及年份。其他情况取得具体供电标识。公用工程行仅为剩余负荷。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 能量 / MJ
- 数量规则: 归属期间采集量除以D；cp_energy
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源:

### 过程：包装及工厂门交付（`dispatch`）

#### 输入

##### 产品流

###### 瓦楞纸板纸箱 (`carton`)

实际交付纸箱；与验收设备净质量分开。

- 选定流: 瓦楞纸板纸箱
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_carton
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_carton`
- 来源:

###### 聚乙烯包装薄膜 (`film`)

实际包装薄膜牌号及质量。

- 选定流: 聚乙烯包装薄膜
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_film
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_film`
- 来源:

###### 交流电 (`dispatch_electricity`)

仅实际中国1–35千伏用户供电采用该UUID；匹配供应商、地域及年份。其他情况取得具体供电标识。公用工程行仅为剩余负荷。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 能量 / MJ
- 数量规则: 归属期间采集量除以D；cp_energy
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源:

#### 输出

##### 产品流

###### 家用风扇及通风罩或循环排气罩 (`finished_appliance`)

同配置验收完整设备，含交付附件；分母不含包装及不合格产品。

- 选定流: 家用风扇及通风罩或循环排气罩 `d241cf7b-4dd0-49d5-89d1-2cf1905189ce`
- 流属性/单位: 质量 / kg
- 数量规则: 1 千克
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_mass`
- 来源:

### 过程：剩余公用工程及工厂治理（`services`）

#### 输入

##### 产品流

###### 交流电 (`services_electricity`)

仅实际中国1–35千伏用户供电采用该UUID；匹配供应商、地域及年份。其他情况取得具体供电标识。公用工程行仅为剩余负荷。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 能量 / MJ
- 数量规则: 归属期间采集量除以D；cp_energy
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源:

###### 外购饱和蒸汽 (`steam`)

仅实际外购蒸汽；记录压力、温度、干度、供应商及焓的总量或净量接口。

- 选定流: 外购饱和蒸汽
- 流属性/单位: 能量 / MJ
- 数量规则: 归属期间采集量除以D；cp_steam
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_steam`
- 来源:

###### 供固化炉使用的天然气 (`natural_gas`)

仅实际场内燃烧；测定组成、干基标准体积条件及低位热值。

- 选定流: 供固化炉使用的天然气
- 流属性/单位: 能量 / MJ
- 数量规则: 归属期间采集量除以D；cp_gas
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_gas`
- 来源:

#### 输出

##### 废物流

###### 表面清洗处理污泥 (`sludge`)

实际污泥，使用自身水分及物种检测以及处理供应商。

- 选定流: 表面清洗处理污泥
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_sludge
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_sludge`
- 来源:

##### 基本流

###### 排入空气的化石二氧化碳 (`co2_air`)

实际场内化石燃烧，使用燃料碳检测及其他实测碳去向。

- 选定流: 排入空气的化石二氧化碳
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_co2_air
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_co2_air`
- 来源:

###### 排入空气的一氧化碳 (`co_air`)

仅实际燃烧物种特定浓度及干气流证据；仅碳平衡不足。

- 选定流: 排入空气的一氧化碳
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_co_air
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_co_air`
- 来源:

###### 排入空气的二氧化氮 (`no2_air`)

仅物种分辨证据；以NO2计NOx不证明实际分子NO2。

- 选定流: 排入空气的二氧化氮
- 流属性/单位: 质量 / kg
- 数量规则: 归属期间采集量除以D；cp_no2_air
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_no2_air`
- 来源:

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_causal | all processes | 先分离配置及实际工序。直接BOM、工单及工序表计直接归属；仅实测共享剩余负荷按有记录因果驱动（如工序时间负载）分配。验收质量归一化固定配置，不证明可混合风扇及罩体型号。保留废品返工负荷。 |  |
| allocation_scrap | physical residue records | 测量分选废料及实际去向供应商。厂内回用为配对转移，不是新共产品抵扣。区别废物处理与真实销售共产品；说明分配及回收约定，展示分配前平衡，不默认避免原生材料抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | finished_appliance | weighing | 型号；配置；序列号；验收净质量 M；验收数量 N；验收净质量总和 D | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。包含交付附件，排除废品质量。 | kg | 每台验收设备 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 校准、BOM、验收登记及皮重记录 |
| cp_abs_gf | plastic | abs_gf | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_abs_scrap | plastic | abs_scrap | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_aluminium_sheet | metal | aluminium_sheet | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_bearing | motor | bearing | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_carton | dispatch | carton | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_co2_air | services | co2_air | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 物种特定采样、校准浓度及同步干排气或排水流量按时间积分，包含实际治理；CO2纳入燃料碳平衡及实测非CO2碳去向。不得仅由燃料碳推导CO或NO2。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_co_air | services | co_air | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 物种特定采样、校准浓度及同步干排气或排水流量按时间积分，包含实际治理；CO2纳入燃料碳平衡及实测非CO2碳去向。不得仅由燃料碳推导CO或NO2。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_copper_wire | motor | copper_wire | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_cord | assembly | cord | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_cutting_oil | metal | cutting_oil | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_energy | metal | metal_electricity, plastic_electricity, motor_electricity, finish_electricity, assembly_electricity, dispatch_electricity, services_electricity | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 读取同步工序及场址进口、自发、出口、储存表；公用工程仅取得未分配剩余量；记录电压、国家年份及供应商。按3.6把kWh换MJ。 | MJ | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_film | dispatch | film | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_gas | services | natural_gas | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 校准气表及压力温度水分修正，批次组成及低位热值；匹配化石碳及供应参考。 | MJ | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_ipa | finish | ipa | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_ipa_air | finish | ipa_air | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 物种特定采样、校准浓度及同步干排气或排水流量按时间积分，包含实际治理；CO2纳入燃料碳平衡及实测非CO2碳去向。不得仅由燃料碳推导CO或NO2。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_lamination | motor | lamination | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_no2_air | services | no2_air | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 以物种特定校准的分子NO2浓度及同步干排气流量按时间积分，包含实际治理。若仪器报告以NO2当量表示的总NOx，保留该确切基准并取得单独兼容NOx交换；不得标成实际分子NO2或假定NO与NO2比例。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_powder | finish | powder | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_pp_resin | plastic | pp_resin | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_purchased_carbon_filter | receipt | purchased_carbon_filter | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_purchased_controller | receipt | purchased_controller | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_purchased_fleece_filter | receipt | purchased_fleece_filter | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_purchased_grease_filter | receipt | purchased_grease_filter | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_purchased_guard | receipt | purchased_guard | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_purchased_hood_body | receipt | purchased_hood_body | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_purchased_housing | receipt | purchased_housing | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_purchased_impeller | receipt | purchased_impeller | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_purchased_light | receipt | purchased_light | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_purchased_motor | receipt | purchased_motor | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_purchased_mount | receipt | purchased_mount | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_screw | assembly | screw | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_sludge | services | sludge | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_solvent_waste | finish | solvent_waste | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_steam | services | steam | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 独立计量供应蒸汽kg及实际压力、温度、干度确定的比焓MJ/kg；独立计量回流凝结水kg及同一零点下其自身比焓MJ/kg。供应商总量接口的净进口能量等于供应kg乘供应MJ/kg减回流kg乘回流MJ/kg，回流仅扣一次。供应商已为净能量接口时该净值仅使用一次，不再扣回流；保留两侧测量用于核对。 | MJ | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_steel_scrap | metal | steel_scrap | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_steel_sheet | metal | steel_sheet | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_varnish | motor | varnish | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_wastewater | finish | wastewater | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |
| cp_water | finish | water | meter_or_record | 期间；配置；批次；供应商；原始数量 Q；单位；库存；退回；校准；检测；水分；密度；不确定度 | 核对收货、期初期末库存、退回及工单领料或校准流量质量表；按需检测实际牌号、水分、含量及液体密度；明确外部处理及供应商。 | kg | 逐批或连续计量 | 同一生产期间 | 声明配置及场址 | 每 1 kg 参考流 | 可追溯原始记录、同步期间、校准及采样不确定度 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_denominator | all inventory rows | D为单一配置及期间校准验收净质量总和；N为验收数量；M=D/N。Q为包含废品返工负荷的归属交换数量，排除配对厂内转移。先q_item=Q/N，再q_ref=Q/D=q_item/M。不得跨配置平均或把包装及废品质量放入D。 | Q; N; D; cp_mass | per 1 kg reference flow |  |
| utility_reconcile | physical utility meter records | 每项同期间同单位场址平衡：可用量=进口+实际自发-出口-储存增加，按实测回流或回收接口调整；剩余量=可用量-已归属工序消耗总和。仅剩余量因果分配；不得在子表上叠加场址总表。按同步、单位及综合测量不确定度调查负残差，不截零。自发能源记录实际燃料排放及厂内输出，不重复外购电。 | imports; generation; exports; storage; assigned meters | reconciled residual |  |
| water_balance | physical water records | 入水、期初水库存及反应生成水等于产品、湿废料污泥废水所含水、实测蒸发、期末库存及反应消耗水。各项自身水分及基准，厂内回流循环配对抵消。不明残差保留缺口；调查采样、表计及分配综合不确定度，不设通用容差。 | water; moisture; stocks; reactions; returns | water closure |  |
| species_balance | physical material and species records | 每项实际Cu、Fe、Cr、Ni、Al、碳或化学物种在进料、验收产品、废料、污泥、废水及释放中使用各项自身对应检测及湿干基，包含库存反应及配对转移。不锈钢、ABS-GF及线材总质量不等所含元素；供应商内含组件不得重复为前景进料。 | term-specific mass; assay; moisture; stocks; reactions | species closure |  |
| solvent_balance | physical solvent records | 实际溶剂输入、期初库存及反应生成量等于产品保留、可用回收溶剂、废液及捕集介质所含溶剂、经验证实际销毁、实测空气水释放、期末库存及反应消耗。捕集不等于销毁；未知残差不能变空气释放。每项单独测溶剂浓度并调查不确定度。 | solvent quantities; own concentrations; capture; destruction; stock | solvent closure |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_route | all processes | 配置特定实际自制外购及材料规格；条件示例不构成工厂配方。区分实测零、不适用及未知。 | BOM、供应证书及工单 |
| dq_sources | all processes | 示例不提供强度范围。完整覆盖时间、空间、技术及不确定度；数据集使用前显式保留无支持UUID、供应商及范围。 | 实际场址表计及供应数据 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | all processes | 要求所有限定信息、原子流标识、实际供应商及成品实体配置；输入标识未解决不等于零数量。完整类别输出UUID不意味着所有型号共享BOM。 |  |
| validate_scope | all processes | 审计外购及自制电机、控制器、滤件路线及内含负荷仅一次；确认随货可选炭及灯；后续厨房污染物及运行瓦数不得替代工厂生产。 | `bosch-hood`; `panasonic-abs-gf`; `dyson-cf1` |
| validate_mass | physical balances | 验证同配置D、验收N、校准净M、期间Q/N后Q/D，各自项水、物种及溶剂平衡、库存反应回流及实测不确定度。调查不明残差、缺失输入及检测不匹配，不虚构产率或容差。 |  |
| validate_utilities | utility and emission records | 核对同期间工序及剩余负荷与进口自发出口储存、实际蒸汽能量接口及回流一次；验证物种、环境分室特定排放及处理。负残差及未知闭合在调查前阻止数据集完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 明确声明家用设备配置的工厂门生产 |
| excluded_use | 全生命周期比较、默认家庭功率寿命、无依据型号及主要工业、净化器、暖通替代 |
| required_metadata | 主要家用功能；风扇安装或隐藏叶轮、排气罩排风或循环模式；型号/BOM/图样版本；交付净内容；安装油脂滤件、炭滤件及照明；电机交流或直流及控制技术；材料牌号及ABS-GF纤维比例；电压、额定运行及验收试验；自制外购；场址、年份、供应商及工厂门 |
| required_quality_disclosure | 供应商缺口、自制外购、遗漏交换、不确定度、期间、分配、边界及未解决UUID范围 |
| update_trigger | BOM、电机、滤件、材料、工序或供应商变化；新实测数据及范围审查 |

## 11. 数据源

| 来源标识 | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| bosch-hood | handbook | Bosch, Operating and installation instructions, document9000022567, undated: https://media3.bosch-home.com/Documents/9000022567_A.pdf | 第2–4页：实际家用排风循环架构、条件油脂炭滤件及照明；旧多型号示例，不提供工厂因子 |
| panasonic-abs-gf | handbook | Panasonic Malaysia, F-M96JHVBWH product page, undated: https://fan.my.panasonic.com/ceiling-fan/ceilingfan-F-M96JHVBWH | 特征：玻纤增强ABS叶片、直流电机及控制反例；无纤维比例或配方 |
| dyson-cf1 | handbook | Dyson, Cool CF1 White/Silver product page: https://www.dyson.com/air-treatment/fans-heaters/cool-cf1/white-silver | 翼型坡面及无刷直流电机正文：宣传无叶风扇中的实体叶轮；实际已查看公开渲染正文，原始下载不可得；不采用数值因子 |
| jrc-metalworking | official_guidance | European Commission JRC, EUR30025 EN,2020, DOI10.2760/894966: https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf | 印刷页190：实际切削液功能配方及工艺依赖选择；非家用风扇强度数据集 |
