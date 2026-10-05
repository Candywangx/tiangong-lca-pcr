---
status: candidate
content_maturity: authored_methodology
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.central-heating-boilers-for-producing-hot-water-or-low-pressure-steam
language: zh-CN
sync_with: pcr.en-US.md
---


# 生产热水或低压蒸汽的中央供暖锅炉

## 1. 范围与适用性

用于向建筑供暖回路提供热水或低压蒸汽的完整中央供暖锅炉制造方法。实际配置声明后纳入铸铁节片、钢制、不锈钢冷凝、电阻及木柴燃烧设计。组合锅炉可提供生活热水，但独立生活热水器不纳入；还排除高压工业蒸汽发生器、热泵、室内空气加热器、散热器、独立供应的锅炉零件及场地供热网络。边界止于制造验收；客户安装、使用燃料及效率单独建模。代表产品不决定整个类别技术。

CPC 3.0 上级 4482 明确为非电家用炊事及供暖设备。本方法中对应的非电部分才与 44825 分类匹配；由于保留有证据的电热供暖锅炉，独立方法比该叶类别更宽。实际电热设备分类需另行按功能及权威分类审查，不声明其他分类边。来源：un-cpc-3-0，印刷页 240。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.central-heating-boilers-for-producing-hot-water-or-low-pressure-steam |
| classification_refs | CPC 3.0 44825; broader |
| covered_products | 完整热水或低压蒸汽供暖锅炉 |
| excluded_products | 工业高压蒸汽发生器；热泵；独立生活热水器；散热器；独立零件 |
| representative_product | 声明的完整组装锅炉；铸造、焊接、电热及生物质路线保持区别 |
| production_route | 实际自制/外购、炉体制造、表面处理、装配、水压/功能验收及包装 |
| market_state | 工厂出口实际交付状态的验收锅炉及配套附件、物料清单要求保留的密闭流体/填充剂；游离试验水及运输包装不计净质量 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应声明的验收锅炉 |
| How much | 1 kg |
| How well | 声明热介质、额定能力、工作压力、材料牌号、能源技术及验收配置 |
| How long or cycle | 工厂出口一次供应；不声明寿命或全寿命热输出 |
| reference_flow_link | `final_product` |


| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收合格中央供暖锅炉 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；同一配置/物料清单；验收净质量；材料牌号；热介质；压力；额定热输出；能源技术/燃料；冷凝状态；自制/外购；所含附件；试验状态；场址；期间 |


在数据包中声明限定信息。D 为同一配置及报告期的经校准验收净质量之和；N 为这些验收台数，M = D/N。保留包括不合格及返工负荷的可归属期间交换 Q；q_item = Q/N，q_ref = Q/D。不得跨配置平均，D 不含不合格品、包装或试验水。质量参考代表制造供应，不代表交付供热服务。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | final_product | Mass | kg | cp_mass 使用校准秤测量 D；所有适用交换使用同一期间/配置 D。 |
| energy_basis | test_natural_gas, test_oil, test_wood, purchased_steam | Energy | MJ | 燃料采用实际低位热值、声明条件下实测质量或体积；木柴需水分。外购蒸汽采用计量交付热，或质量乘以共同参考下实际供汽焓再扣实际凝结水回流焓，各自质量 kg 乘以焓 MJ/kg。不叠加供应商燃料负荷与外购热。 |
| material_basis | physical material and species records | Mass | kg | 湿质量、干固体及所含金属不同；每项投入、产品、废料、炉渣、污泥、废水及释放使用自身匹配化验和干湿基准。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际收到的金属、铸造节片或完整部件及供应商处理状态 |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC 3.0 44825 涵盖对应非电部分；本方法还纳入有证据的电热锅炉 |
| recursive_input_rule | 外购同类别完整锅炉作为一项供货产品及上游数据集记录，不递归重复制造 |
| upstream_dataset_requirement | 实际牌号、组成、技术、地理及交付接口；完整部件数据集仅计一次其内含材料和电机 |
| disclosure | 自制/外购矩阵、实际过程排除和供应商完成状态；工厂试验与使用分开 |


| rule_id | 规则 | source_ids |
| --- | --- | --- |
| gate | 纳入出口前实际制造、表面处理、装配、试验水/能量/燃料/释放/冷凝水、重复试验、不合格及包装；排除客户调试和后续供热燃料。 | weil-80; acv-electric |
| make_buy | 外购节片/换热器绕过对应厂内材料/铸造行。外购燃烧器、泵、控制板仅计一次内含制造，不另加其内含金属、电机或电子元件。自制替代成品采购，每项实际组成独立记录。 | acv-electric; viessmann-condensing |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| casting | 厂内节片铸造 | conditional | 仅实际在边界内铸造节片时 | foreground | 1 kg |
| fabrication | 炉体和护套制造 | conditional | 仅实际切割、成形、焊接、加工时 | foreground | 1 kg |
| finish | 清洁和表面处理 | conditional | 仅实际指定表面路线时 | foreground | 1 kg |
| assembly | 外购部件装配 | required | 全部声明交货部件 | foreground | 1 kg |
| test | 工厂水压及功能验收 | required | 出口前实际试验，含重复试验 | foreground | 1 kg |
| dispatch | 包装和公用辅助服务 | required | 实际出货和剩余辅助负荷 | foreground | 1 kg |


### 过程：厂内节片铸造 (`casting`)

#### 输入

##### 产品流

###### 铸造生铁 (`iron_charge`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：铸造生铁

- 流属性/单位：Mass / kg

- 数量规则：cp_iron_charge 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_iron_charge`

- 来源：`jrc-foundry-2024`

###### 铸铁废料炉料 (`iron_scrap_charge`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：铸铁废料炉料

- 流属性/单位：Mass / kg

- 数量规则：cp_iron_scrap_charge 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_iron_scrap_charge`

- 来源：`jrc-foundry-2024`

###### 硅质造型砂 (`silica_sand`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：硅质造型砂

- 流属性/单位：Mass / kg

- 数量规则：cp_silica_sand 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_silica_sand`

- 来源：`jrc-foundry-2024`

###### 酚醛树脂砂型粘结剂 (`phenolic_binder`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：酚醛树脂砂型粘结剂

- 流属性/单位：Mass / kg

- 数量规则：cp_phenolic_binder 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_phenolic_binder`

- 来源：`jrc-foundry-2024`

###### 铸造焦炭 (`coke`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：铸造焦炭

- 流属性/单位：Mass / kg

- 数量规则：cp_coke 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_coke`

- 来源：`jrc-foundry-2024`

###### 工厂用电计量点电力 (`cast_electricity`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：工厂用电计量点电力

- 流属性/单位：Energy / kWh

- 数量规则：cp_cast_electricity 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_cast_electricity`

- 来源：`jrc-foundry-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 铁熔炼炉渣 (`slag`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：铁熔炼炉渣

- 流属性/单位：Mass / kg

- 数量规则：cp_slag 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_slag`

- 来源：`jrc-foundry-2024`

###### 废硅质造型砂 (`spent_sand`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：废硅质造型砂

- 流属性/单位：Mass / kg

- 数量规则：cp_spent_sand 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_spent_sand`

- 来源：`jrc-foundry-2024`

###### 含铁铸造收集粉尘 (`foundry_dust`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：含铁铸造收集粉尘

- 流属性/单位：Mass / kg

- 数量规则：cp_foundry_dust 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_foundry_dust`

- 来源：`jrc-foundry-2024`

##### 基本流

### 过程：炉体和护套制造 (`fabrication`)

#### 输入

##### 产品流

###### 碳钢板 (`carbon_steel`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：碳钢板

- 流属性/单位：Mass / kg

- 数量规则：cp_carbon_steel 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_carbon_steel`

- 来源：`acv-electric`

###### 不锈钢板 (`stainless_steel`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：不锈钢板

- 流属性/单位：Mass / kg

- 数量规则：cp_stainless_steel 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_stainless_steel`

- 来源：`viessmann-condensing`

###### 钢焊丝 (`weld_wire`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：钢焊丝

- 流属性/单位：Mass / kg

- 数量规则：cp_weld_wire 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_weld_wire`

- 来源：`acv-electric`

###### 氩气保护气 (`argon`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：氩气保护气

- 流属性/单位：Mass / kg

- 数量规则：cp_argon 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_argon`

- 来源：`viessmann-condensing`

###### 水基切削乳液 (`machining_emulsion`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：水基切削乳液

- 流属性/单位：Mass / kg

- 数量规则：cp_machining_emulsion 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_machining_emulsion`

- 来源：`jrc-foundry-2024`

###### 工厂用电计量点电力 (`fabrication_power`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：工厂用电计量点电力

- 流属性/单位：Energy / kWh

- 数量规则：cp_fabrication_power 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_fabrication_power`

- 来源：`acv-electric`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 碳钢加工废料 (`steel_scrap`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：碳钢加工废料

- 流属性/单位：Mass / kg

- 数量规则：cp_steel_scrap 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_steel_scrap`

- 来源：`acv-electric`

###### 不锈钢加工废料 (`stainless_scrap`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：不锈钢加工废料

- 流属性/单位：Mass / kg

- 数量规则：cp_stainless_scrap 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_stainless_scrap`

- 来源：`viessmann-condensing`

###### 废切削乳液 (`spent_emulsion`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：废切削乳液

- 流属性/单位：Mass / kg

- 数量规则：cp_spent_emulsion 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_spent_emulsion`

- 来源：`acv-electric`

##### 基本流

### 过程：清洁和表面处理 (`finish`)

#### 输入

##### 产品流

###### 过程清洗水 (`finish_water`)

条件性指名化学品；需实际配方及安全数据表。制造商表面处理描述不证明本配方；其他实际试剂/配方物种逐项拆为独立交换。

- 选定流：过程清洗水

- 流属性/单位：Mass / kg

- 数量规则：cp_finish_water 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_finish_water`

- 来源：`acv-electric`

###### 氢氧化钠 (`sodium_hydroxide`)

条件性指名化学品；需实际配方及安全数据表。制造商表面处理描述不证明本配方；其他实际试剂/配方物种逐项拆为独立交换。

- 选定流：氢氧化钠

- 流属性/单位：Mass / kg

- 数量规则：cp_sodium_hydroxide 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_sodium_hydroxide`

- 来源：`acv-electric`

###### 磷酸 (`phosphoric_acid`)

条件性指名化学品；需实际配方及安全数据表。制造商表面处理描述不证明本配方；其他实际试剂/配方物种逐项拆为独立交换。

- 选定流：磷酸

- 流属性/单位：Mass / kg

- 数量规则：cp_phosphoric_acid 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_phosphoric_acid`

- 来源：`acv-electric`

###### 聚酯涂料粉末 (`polyester_powder`)

条件性指名化学品；需实际配方及安全数据表。制造商表面处理描述不证明本配方；其他实际试剂/配方物种逐项拆为独立交换。

- 选定流：聚酯涂料粉末

- 流属性/单位：Mass / kg

- 数量规则：cp_polyester_powder 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_polyester_powder`

- 来源：`acv-electric`

###### 二甲苯涂料溶剂 (`xylene`)

条件性指名化学品；需实际配方及安全数据表。制造商表面处理描述不证明本配方；其他实际试剂/配方物种逐项拆为独立交换。

- 选定流：二甲苯涂料溶剂

- 流属性/单位：Mass / kg

- 数量规则：cp_xylene 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_xylene`

- 来源：`acv-electric`

###### 工厂用电计量点电力 (`finish_power`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：工厂用电计量点电力

- 流属性/单位：Energy / kWh

- 数量规则：cp_finish_power 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_finish_power`

- 来源：`acv-electric`

###### 涂层烘炉用管输天然气 (`finish_gas`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：涂层烘炉用管输天然气

- 流属性/单位：Energy / MJ

- 数量规则：cp_finish_gas 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_finish_gas`

- 来源：`acv-electric`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 涂装污泥 (`paint_sludge`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：涂装污泥

- 流属性/单位：Mass / kg

- 数量规则：cp_paint_sludge 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_paint_sludge`

- 来源：`acv-electric`

###### 含金属表面处理废水 (`finish_wastewater`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：含金属表面处理废水

- 流属性/单位：Mass / kg

- 数量规则：cp_finish_wastewater 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_finish_wastewater`

- 来源：`acv-electric`

##### 基本流

###### 排入空气的二甲苯 (`xylene_air`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：排入空气的二甲苯

- 流属性/单位：Mass / kg

- 数量规则：cp_xylene_air 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_xylene_air`

- 来源：`acv-electric`

### 过程：外购部件装配 (`assembly`)

#### 输入

##### 产品流

###### 成品铸铁锅炉节片 (`purchased_section`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：成品铸铁锅炉节片

- 流属性/单位：Mass / kg

- 数量规则：cp_purchased_section 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_purchased_section`

- 来源：`weil-80`

###### 成品不锈钢锅炉换热器 (`purchased_exchanger`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：成品不锈钢锅炉换热器

- 流属性/单位：Mass / kg

- 数量规则：cp_purchased_exchanger 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_purchased_exchanger`

- 来源：`viessmann-condensing`

###### 完整燃气燃烧器组件 (`burner`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：完整燃气燃烧器组件

- 流属性/单位：Mass / kg

- 数量规则：cp_burner 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_burner`

- 来源：`viessmann-condensing`

###### 完整燃油燃烧器组件 (`oil_burner`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：完整燃油燃烧器组件

- 流属性/单位：Mass / kg

- 数量规则：cp_oil_burner 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_oil_burner`

- 来源：`weil-80`

###### 800镍合金电加热元件 (`element`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：800镍合金电加热元件

- 流属性/单位：Mass / kg

- 数量规则：cp_element 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_element`

- 来源：`acv-electric`

###### 完整循环泵 (`pump`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：完整循环泵

- 流属性/单位：Mass / kg

- 数量规则：cp_pump 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_pump`

- 来源：`acv-electric`

###### 锅炉电子控制板 (`control`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：锅炉电子控制板

- 流属性/单位：Mass / kg

- 数量规则：cp_control 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_control`

- 来源：`viessmann-condensing`

###### 锅炉压力安全阀 (`valve`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：锅炉压力安全阀

- 流属性/单位：Mass / kg

- 数量规则：cp_valve 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_valve`

- 来源：`acv-electric`

###### 耐火水泥衬里 (`refractory`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：耐火水泥衬里

- 流属性/单位：Mass / kg

- 数量规则：cp_refractory 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_refractory`

- 来源：`viessmann-wood`

###### 矿棉保温层 (`insulation`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：矿棉保温层

- 流属性/单位：Mass / kg

- 数量规则：cp_insulation 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_insulation`

- 来源：`weil-80`

###### 三元乙丙橡胶密封垫 (`seal`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：三元乙丙橡胶密封垫

- 流属性/单位：Mass / kg

- 数量规则：cp_seal 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_seal`

- 来源：`acv-electric`

###### 工厂用电计量点电力 (`assembly_power`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：工厂用电计量点电力

- 流属性/单位：Energy / kWh

- 数量规则：cp_assembly_power 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_assembly_power`

- 来源：`acv-electric`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：工厂水压及功能验收 (`test`)

#### 输入

##### 产品流

###### 工厂水压试验水 (`test_water`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：工厂水压试验水

- 流属性/单位：Mass / kg

- 数量规则：cp_test_water 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_test_water`

- 来源：`acv-electric`

###### 工厂用电计量点电力 (`test_power`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：工厂用电计量点电力

- 流属性/单位：Energy / kWh

- 数量规则：cp_test_power 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_test_power`

- 来源：`acv-electric`

###### 工厂燃烧试验天然气 (`test_natural_gas`)

仅出货前实际工厂燃烧试验；不含客户后续燃料。保留燃料质量/体积、实际组成/水分及热值。

- 选定流：工厂燃烧试验天然气

- 流属性/单位：Energy / MJ

- 数量规则：cp_test_natural_gas 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_test_natural_gas`

- 来源：`viessmann-condensing`

###### 工厂燃烧试验轻燃油 (`test_oil`)

仅出货前实际工厂燃烧试验；不含客户后续燃料。保留燃料质量/体积、实际组成/水分及热值。

- 选定流：工厂燃烧试验轻燃油

- 流属性/单位：Energy / MJ

- 数量规则：cp_test_oil 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_test_oil`

- 来源：`weil-80`

###### 工厂燃烧试验木柴 (`test_wood`)

仅出货前实际工厂燃烧试验；不含客户后续燃料。保留燃料质量/体积、实际组成/水分及热值。

- 选定流：工厂燃烧试验木柴

- 流属性/单位：Energy / MJ

- 数量规则：cp_test_wood 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_test_wood`

- 来源：`viessmann-wood`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 水压试验排水 (`test_drain`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：水压试验排水

- 流属性/单位：Mass / kg

- 数量规则：cp_test_drain 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_test_drain`

- 来源：`acv-electric`

###### 燃烧冷凝废水 (`condensate`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：燃烧冷凝废水

- 流属性/单位：Mass / kg

- 数量规则：cp_condensate 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_condensate`

- 来源：`viessmann-condensing`

###### 木柴燃烧灰 (`wood_ash`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：木柴燃烧灰

- 流属性/单位：Mass / kg

- 数量规则：cp_wood_ash 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_wood_ash`

- 来源：`viessmann-wood`

##### 基本流

###### 排入空气的化石二氧化碳 (`fossil_co2`)

仅实际释放的物种及空气环境介质。需物种特定烟气流量/浓度或适用排放方法；效率广告不是排放因子。

- 选定流：排入空气的化石二氧化碳

- 流属性/单位：Mass / kg

- 数量规则：cp_fossil_co2 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_fossil_co2`

- 来源：`weil-80`

###### 排入空气的生物源二氧化碳 (`biogenic_co2`)

仅实际释放的物种及空气环境介质。需物种特定烟气流量/浓度或适用排放方法；效率广告不是排放因子。

- 选定流：排入空气的生物源二氧化碳

- 流属性/单位：Mass / kg

- 数量规则：cp_biogenic_co2 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_biogenic_co2`

- 来源：`viessmann-wood`

###### 排入空气的一氧化碳 (`co`)

仅实际释放的物种及空气环境介质。需物种特定烟气流量/浓度或适用排放方法；效率广告不是排放因子。

- 选定流：排入空气的一氧化碳

- 流属性/单位：Mass / kg

- 数量规则：cp_co 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_co`

- 来源：`weil-80`

###### 以二氧化氮计排入空气的氮氧化物 (`nox`)

仅实际释放的物种及空气环境介质。需物种特定烟气流量/浓度或适用排放方法；效率广告不是排放因子。

- 选定流：以二氧化氮计排入空气的氮氧化物

- 流属性/单位：Mass / kg

- 数量规则：cp_nox 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_nox`

- 来源：`weil-80`

###### 排入空气的颗粒物 (`particles`)

仅实际释放的物种及空气环境介质。需物种特定烟气流量/浓度或适用排放方法；效率广告不是排放因子。

- 选定流：排入空气的颗粒物

- 流属性/单位：Mass / kg

- 数量规则：cp_particles 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_particles`

- 来源：`weil-80`

### 过程：包装和公用辅助服务 (`dispatch`)

#### 输入

##### 产品流

###### 瓦楞纸板包装 (`corrugated`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：瓦楞纸板包装

- 流属性/单位：Mass / kg

- 数量规则：cp_corrugated 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_corrugated`

- 来源：`acv-electric`

###### 木托盘 (`wood_pallet`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：木托盘

- 流属性/单位：Mass / kg

- 数量规则：cp_wood_pallet 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_wood_pallet`

- 来源：`acv-electric`

###### 工厂用电计量点电力 (`residual_power`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：工厂用电计量点电力

- 流属性/单位：Energy / kWh

- 数量规则：cp_residual_power 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_residual_power`

- 来源：`acv-electric`

###### 外购饱和蒸汽热 (`purchased_steam`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：外购饱和蒸汽热

- 流属性/单位：Energy / MJ

- 数量规则：cp_purchased_steam 采集的可归属期间数量 / D。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_purchased_steam`

- 来源：`acv-electric`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格中央供暖锅炉 (`final_product`)

仅该交换实际发生时记录；识别确切牌号、组成及交付接口。

- 选定流：验收合格中央供暖锅炉

- 流属性/单位：Mass / kg

- 数量规则：1 千克

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`collected_record`

- 采集协议：`cp_mass`

- 来源：`acv-electric`

##### 废物流

##### 基本流

以 NO2 计的 NOx 为声明的报告当量约定，不证明全部分子为 NO2；分别保留实测 NO、NO2 物种或换算约定。颗粒物需实际采样定义及实测粒径分数；实测 PM10、PM2.5 各自独立交换，不从未知粒径总尘推断。实际密闭流体/填充剂增加各自交换及物料清单保留量，不重复完整外购部件内部组成。

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| allocation | 区分配置和路线；共用作业采用实测因果机时、热、试验周期或处理面积。保留服务于验收生产的不合格/返工负荷于 Q。内部回用成对转移抵消；废料不自动获得避免负荷信用。声明实际废物/共产品状态及一致上游回收分配。 | jrc-foundry-2024 |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | final_product | measurement | 型号；配置；序列号；验收净质量；N；报告期 | 使用校准秤称量实际交付状态的验收完整锅炉，包含物料清单要求保留的密闭流体/填充剂，排除运输包装及游离试验水；核对物料清单及验收。D 记录为验收净质量之和。 | kg | 每台验收设备 | 匹配报告期 | 同一配置和工厂 | 每 1 kg 参考流 | 秤校准；验收序列；物料清单 |
| cp_iron_charge | casting | iron_charge | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_iron_scrap_charge | casting | iron_scrap_charge | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_silica_sand | casting | silica_sand | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_phenolic_binder | casting | phenolic_binder | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_coke | casting | coke | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_cast_electricity | casting | cast_electricity | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kWh | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_slag | casting | slag | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_spent_sand | casting | spent_sand | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_foundry_dust | casting | foundry_dust | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_carbon_steel | fabrication | carbon_steel | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_stainless_steel | fabrication | stainless_steel | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_weld_wire | fabrication | weld_wire | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_argon | fabrication | argon | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_machining_emulsion | fabrication | machining_emulsion | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_fabrication_power | fabrication | fabrication_power | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kWh | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_steel_scrap | fabrication | steel_scrap | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_stainless_scrap | fabrication | stainless_scrap | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_spent_emulsion | fabrication | spent_emulsion | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_finish_water | finish | finish_water | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_sodium_hydroxide | finish | sodium_hydroxide | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_phosphoric_acid | finish | phosphoric_acid | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_polyester_powder | finish | polyester_powder | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_xylene | finish | xylene | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_finish_power | finish | finish_power | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kWh | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_finish_gas | finish | finish_gas | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | MJ | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_paint_sludge | finish | paint_sludge | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_finish_wastewater | finish | finish_wastewater | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_xylene_air | finish | xylene_air | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 以匹配浓度及排水/烟气流量测实际物种和介质，记录采样、干湿及氧基准。碳平衡仅支持总碳，不能确定 CO 或 NOx 物种。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_purchased_section | assembly | purchased_section | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_purchased_exchanger | assembly | purchased_exchanger | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_burner | assembly | burner | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_oil_burner | assembly | oil_burner | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_element | assembly | element | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_pump | assembly | pump | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_control | assembly | control | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_valve | assembly | valve | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_refractory | assembly | refractory | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_insulation | assembly | insulation | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_seal | assembly | seal | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_assembly_power | assembly | assembly_power | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kWh | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_test_water | test | test_water | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_test_power | test | test_power | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kWh | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_test_natural_gas | test | test_natural_gas | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | MJ | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_test_oil | test | test_oil | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | MJ | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_test_wood | test | test_wood | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | MJ | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_test_drain | test | test_drain | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_condensate | test | condensate | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_wood_ash | test | wood_ash | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_fossil_co2 | test | fossil_co2 | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 以匹配浓度及排水/烟气流量测实际物种和介质，记录采样、干湿及氧基准。碳平衡仅支持总碳，不能确定 CO 或 NOx 物种。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_biogenic_co2 | test | biogenic_co2 | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 以匹配浓度及排水/烟气流量测实际物种和介质，记录采样、干湿及氧基准。碳平衡仅支持总碳，不能确定 CO 或 NOx 物种。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_co | test | co | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 以匹配浓度及排水/烟气流量测实际物种和介质，记录采样、干湿及氧基准。碳平衡仅支持总碳，不能确定 CO 或 NOx 物种。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_nox | test | nox | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 以匹配浓度及排水/烟气流量测实际物种和介质，记录采样、干湿及氧基准。碳平衡仅支持总碳，不能确定 CO 或 NOx 物种。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_particles | test | particles | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 以匹配浓度及排水/烟气流量测实际物种和介质，记录采样、干湿及氧基准。碳平衡仅支持总碳，不能确定 CO 或 NOx 物种。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_corrugated | dispatch | corrugated | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_wood_pallet | dispatch | wood_pallet | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | kg | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_residual_power | dispatch | residual_power | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 同一期间/单位场址总表扣已分配铸造、制造、表面处理、装配、试验及包装负荷；核对购入、自发电、外送及储存。仅分配实测未分配剩余负荷；调查负剩余，不截零。 | kWh | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |
| cp_purchased_steam | dispatch | purchased_steam | measurement | 期间；配置；数量；单位；牌号/物种；供应商/介质；库存；采样及不确定性 | 计量或称量实际可归属期间交换；核对票据、库存变化、内部回用及不合格/返工。 | MJ | 每批/试验或计量期间 | 匹配报告期 | 声明过程及配置 | 每 1 kg 参考流 | 校准计量；化验；凭证；分配记录 |


### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | 每项交换采用可归属期间数量 Q / D；保留原数量及单位；final_product = 1 kg。 | Q; D; cp_mass | q_ref | acv-electric |


### 数据质量要求

| requirement_id | Applies to | 要求 | 证据 |
| --- | --- | --- | --- |
| identity | all applicable rows | 确认实际 UUID、属性/单位、材料牌号、供应接口及后续废物供应商。缺失身份保留未知；not_applicable 需证实不发生，不是零。未列出的实际合金、燃料、试剂、废物或物种增加独立卡片。 | 直读身份及供应商/场址记录 |
| period | all exchanges | 采用匹配期间、配置、物料清单及试验；跟踪实际缺失覆盖及不确定性。不用通用经验范围或广告效率填补制造数据。 | 记录及不确定性预算 |


## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| reference_check | 要求正 D 和 N、相同验收配置及校准净质量；核对参考输出 1 kg、Q/D 及保留不合格/返工负荷。 | acv-electric |
| water_closure | 闭合实际水：外部水和投入水分加期初库存及反应生成，等于产品保留水、期末库存、蒸发、排水及反应消耗。内部回流成对；试验循环不重复视为外购水。按实际计量/采样/分配合成不确定性调查剩余，无通用容差。 | acv-electric |
| metal_closure | 对每个所含金属/物种，全部投入、产品、废料、炉渣、污泥、废水及释放使用各自匹配化验；纳入期初/期末库存、反应转化及成对转移。材料总质量不等于所含元素。按实际计量/采样/分配合成不确定性调查闭合。 | jrc-foundry-2024 |
| solvent_closure | 对每种实际溶剂，投入及库存变化对产品保留、回收溶剂、捕集介质、实际销毁、空气释放及非空气残余闭合；区分捕集与销毁。采用实际合成不确定性。 | acv-electric |
| utility_check | 核对全部过程/试验/出货已分配负荷及未分配公用剩余与同一场址计量平衡、期间和单位。不在分表之上叠加工厂总表。按实际计量/采样/分配不确定性调查负残差，禁止截断；核对购入、实际自发、燃料、外送及库存接口，同一载体不重复计算。燃料碳不能独立确定 CO/NOx，需物种证据及化石/生物源区分。以 NO2 计的 NOx 为报告当量，不是纯 NO2 身份；保留实际 NO/NO2 测量及约定。颗粒物需实际采样定义及粒径分数；实测 PM10/PM2.5 为独立交换，不从未知粒径总尘推断。工厂燃烧排放和冷凝水仍为生产交换；后续使用独立。 | weil-80; viessmann-condensing |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明制造供应及下游过程/生命周期投影 |
| excluded_use | 未限定的供热服务比较、运行效率或寿命声明 |
| required_metadata | 全部限定信息；场址/期间；D,N；自制/外购；试验；实际供应商 |
| required_quality_disclosure | 缺失 UUID/范围；路线及前景覆盖；不确定性；采样；分配；实际缺口 |
| update_trigger | 配置、材料、供应商、能源技术、试验或期间改变 |


## 11. 数据源

| Source id | Type | Reference | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-0 | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, subclass 44825 https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类坐标及相邻产品边界，不作为制造路线或清单证据 |
| weil-80 | handbook | Weil-McLain 80 Cast Iron Boiler Submittal, p.1 https://www.weil-mclain.com/wp-content/uploads/SUB_001_80-Submittal.pdf | 铸铁热水/蒸汽燃气燃油锅炉、护套、耐火材料及条件性工厂燃烧试验 |
| acv-electric | handbook | ACV E-Tech W A1007841 664Y7800 A, p.6 https://downloads.acv.com/A1007841_664Y7800_A_E-Tech%20W_EN.pdf | 钢制炉体和壳体、镍合金电热元件、表面处理和水压试验；型号参数不作为默认值 |
| viessmann-condensing | handbook | Vitocrossal 300 CI3, 6222565 GB 3/2024, p.2 https://www.viessmann.co.uk/content/dam/public-brands/gb/products/gas-heating/vitocrossal-200-type-ci3/Technical%20Data%20Manual%20Vitocrossal%20300%20240301.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/Technical%20Data%20Manual%20Vitocrossal%20300%20240301.pdf | 不锈钢冷凝换热器及燃烧器/控制器装配配置 |
| viessmann-wood | handbook | Vitoligno 150-S product information https://www.viessmann.it/it/prodotti/caldaia-a-pellet-cippato/vitoligno-150-s.html | 木柴供暖替代路线、耐火材料及灰；不采用广告效率 |
| jrc-foundry-2024 | official_guidance | JRC Smitheries and Foundries BREF 2024, section 2.2.1.1, p.67; DOI 10.2760/4805267 https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2024-12/SF_BREF_2024-bref.pdf | 条件性厂内铸造分解；无锅炉特定数量 |
