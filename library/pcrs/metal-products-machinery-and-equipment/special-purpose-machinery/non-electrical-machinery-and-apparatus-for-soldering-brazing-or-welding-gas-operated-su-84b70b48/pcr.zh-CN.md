---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.non-electrical-machinery-and-apparatus-for-soldering-brazing-or-welding-gas-operated-su-84b70b48
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 非电软钎焊、硬钎焊、焊接及燃气表面回火装置

## 1. 范围与适用性

本规则覆盖完整非电软钎焊、硬钎焊、焊接装置及燃气操作的表面回火机器器具制造。燃气连接包括氧乙炔焊接、氧燃料或空气燃料硬钎焊，以及火焰加热铜头软钎焊系统。燃气表面热处理涵盖声明的固定、旋转、渐进扫描及旋转扫描组合结构，保留真实加热淬冷控制总成。火焰淬火示例须对实际表面回火或淬火主要功能逐项审查，示例不能证明所有可能的回火机器；便携烙铁仅为一种结构，不是完整类别。其他非电连接机制须有自身原始供货配置证据。

排除独立备件更换焊头软管燃烧头、电阻电弧感应电连接及金属碳化物电热喷涂、无关炉及仅通用加热切割器具、客户已处理工件。辅助电控制泵冷水机运动驱动本身不能把燃气热源变为电连接。燃气焊接切割组合及未熟悉非电连接须按实际主要功能审查。参考是验收装置配置，不是客户工件质量最大能力；目录压力耗气火炬数量额定热寿命产量均不是工厂默认值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.non-electrical-machinery-and-apparatus-for-soldering-brazing-or-welding-gas-operated-su-84b70b48 |
| classification_refs | CPC 3.0 44242; exact semantic scope |
| covered_products | 完整非电软硬钎焊焊接及燃气表面回火器具，声明完整供货配置 |
| excluded_products | 独立更换零件、电连接喷涂机器、无关炉或仅切割设备、已处理工件用户运行 |
| representative_product | 一台验收完整燃气连接或经审查燃气表面处理装置 |
| production_route | 实际本地金属焊炬制造或外购完整硬件、装配气路集成表面处理及工厂泄漏控制功能试验 |
| market_state | 工厂门完整配置装置，声明保留首套硬件填充并区分空瓶 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供声明非电连接或燃气表面热处理装置 |
| How much | 1 kg 验收完整配置装置净质量 |
| How well | 有据主要工艺气路安全控制验收及真实供货机械冷却范围，不推定配方性能 |
| How long or cycle | 一个共同生产验收期间，不宣称客户运行寿命 |
| reference_flow_link | finished |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 用于焊接、钎焊或熔接的非电气机械和器具，气动表面回火机和器具 `0626cfa9-ddf9-41c2-8994-44088c8ccfec` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 主要软硬钎焊焊接或燃气表面回火淬火功能；火焰非电机制；燃料物种混合物及氧空气供应；真实压力流量接口；便携固定旋转渐进配置；随货焊炬混合器喷嘴铜头减压器回火防止器软管气瓶空满状态；随货滑台淬冷泵冷水机控制高温计火焰传感器；实际合金聚合物化学牌号；验收净质量物料自制外购；场址期间供应运输处理；工厂试验身份缺口 |


## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考为 1 kg 验收完整装置净质量，采用 cp_mass 采集同配置验收质量，排除包装不良消耗试验负载零散备件。 |
| native_amount | all inventory rows | actual native property | native unit | 保留各原生分子单位，气体体积换算采用真实密度温压湿度，电力每千瓦时为 3.6 兆焦；完整溶液配方质量与所含化学水分不同。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际采购金属化学原料或完整兼容焊炬气路运动淬冷控制总成 |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | 完整非电连接及燃气表面回火，审查真实供货主要功能 |
| recursive_input_rule | 外购完整燃气装置分总成内含制造计一次，仅计本地扩展集成；实际本地制造替代对应外购完整投入，不再叠加内含原料。 |
| upstream_dataset_requirement | 匹配供应地域期间化学材料牌号气体供应状态总成完成状态运输处理边界 |
| disclosure | 交付物料真实空满瓶保留首充自制外购已执行试验身份缺口，不把下游运行燃料配方纳入工厂物料 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| boundary_complete | 纳入验收完整配置交付前可归属制造，外购完整硬件上游金属橡胶控制制造计一次，本地机壳焊炬制造与装置工厂功能试验分开，内部物流配对抵销；客户安装运行维修终期独立。 | un-cpc3; harris-catalog; sievert-kit; flame-machines |
| boundary_tests | 纳入真实气路泄漏压力减压回火防止控制点火及软硬钎焊焊接表面加热淬冷功能试验含不良返修；试验燃料氧化剂吹扫气填料助焊剂试片水为实测消耗，与随货保留填充硬件分开；随货空瓶不能证明首充燃料，目录运行耗率不能推定试验时间用量。 | harris-catalog; sievert-kit; sievert-promatic; flame-machines |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| fabrication | 本地金属焊炬制造 | conditional | 仅实际机架气路硬件金属切割成形机加工连接，外购完整零件工序在上游。 | foreground | 每 1 kg 参考流 |
| assembly | 配置燃气机械装配 | conditional | 真实燃气焊炬烙铁表面处理结构，分别有据供减压回火防止软管控制运动淬冷冷却硬件保留填充。 | foreground | 每 1 kg 参考流 |
| finish | 表面处理清洗 | conditional | 仅真实本地涂装清洗固化，外协完成表面在上游。 | foreground | 每 1 kg 参考流 |
| test | 工厂泄漏功能试验 | conditional | 实际执行气路安全控制点火连接表面加热淬冷验收含可归属不良返修，不设客户寿命燃料配方。 | foreground | 每 1 kg 参考流 |
| services | 未归属剩余公用设施 | conditional | 仅真实共同期间制造装配表面试验交付归属负荷后公用剩余。 | foreground | 每 1 kg 参考流 |
| dispatch | 验收配置交付 | conditional | 真实完整验收净装置运输包装分开，明确随货空满瓶保留附件。 | foreground | 每 1 kg 参考流 |
| residues | 真实废物基本释放核算 | conditional | 实测外部废物交接真实治理后物种释放，接收供应工序在上游。 | foreground | 每 1 kg 参考流 |

### 过程：本地金属焊炬制造 (`fabrication`)

#### 输入

##### 产品流

###### 碳钢薄板 (`steel`)

仅计实际机架机壳薄板牌号加工状态，银钢冲突不可用，外购完整机架制造在上游。

- 选定流: 碳钢薄板
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: harris-catalog

###### 铝挤压型材 (`aluminium`)

仅计有据实际挤压结构型材牌号，外购完整滑台挤压机加工计一次。

- 选定流: 铝挤压型材 `4f197be3-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: harris-catalog

###### 黄铜棒料 (`brass`)

本地焊炬减压器体实际铜锌棒杆型材须匹配半成品供货，记录自身含铅等合金加工供应；完整外购黄铜硬件排除内含棒料。

- 选定流: 铜锌合金 `e422cfbf-5444-43ab-a68a-22be82e2ad47`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: harris-catalog

###### 铜管 (`copper`)

仅计本地水冷火焰头气路实际铜管牌号尺寸加工，滑管游乐注释冲突不可匹配；成品外购燃烧头铜管在上游。

- 选定流: 铜管
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: harris-catalog

###### 金属加工切削液 (`cutfluid`)

实际机加工液配方浓度采用自身水润滑组分化验库存，不设通用稀释。

- 选定流: 切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: harris-catalog

###### 碳钢实心焊丝 (`weld`)

仅计实际机架制造实心焊丝牌号，不用药芯丝或燃气设备客户寿命耗材，本地连接方法独立声明。

- 选定流: 碳钢实心焊丝
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: harris-catalog

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：配置燃气机械装配 (`assembly`)

#### 输入

##### 产品流

###### 氧燃料焊炬成品 (`torch`)

实际成品手柄混合器兼容总成气氧接口及附件范围，完整模块金属阀制造计一次，仅切割设备不能作完整连接参考。

- 选定流: 氧燃料焊炬成品
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 气体减压器 (`regulator`)

实际气种专用减压器须有进出连接完成状态，各安装件独立记录氧清洁燃料兼容压力；气体压力传感器不是减压器。

- 选定流: 气体减压器
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 回火防止器 (`arrestor`)

实际安装燃料氧兼容完整回火防止件及逆流保护，不假定所有目录选项随货。

- 选定流: 回火防止器
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 燃料气橡胶软管成品 (`hose`)

实际燃料兼容成品管配方增强接头压力须匹配，液压或未硫化生管不等价，氧软管另加独立牌号行。

- 选定流: 燃料气橡胶软管成品
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 黄铜燃料气阀 (`valve`)

实际完整黄铜阀须兼容燃料接口，钢灭火器阀通用气体不能作硬件替代。

- 选定流: 黄铜燃料气阀
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 铜合金焊嘴 (`nozzle`)

实际供货成品焊嘴合金混合结构须匹配，合金原料焊料不同于成品燃气硬件。

- 选定流: 铜合金焊嘴
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 铜质烙铁头 (`tip`)

仅计有据纳入成品铜头，独售手柄可能不含；记录实际形状涂层加工，不用原锡铜或仅备件数量。

- 选定流: 铜质烙铁头
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 水冷火焰淬火头 (`burner`)

实际完整燃气氧头水道声明表面处理兼容，无关炉燃烧器总成不可用。

- 选定流: 水冷火焰淬火头
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 火焰头扫描滑台 (`carriage`)

实际供货兼容完整运动总成，声明车床旋转夹具驱动范围，不以工件质量代替硬件。

- 选定流: 火焰头扫描滑台
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 淬冷喷水环 (`quench`)

实际兼容完整淬冷分配硬件，水不是喷水环，外购一体淬冷总成歧管在上游。

- 选定流: 淬冷喷水环
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 离心水泵 (`pump`)

仅计真实完整液态水循环泵须匹配宽液体泵身份并声明驱动流量扬程材料，内含驱动计一次，单位外罐换热器另列。

- 选定流: 泵 `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 可编程逻辑控制器 (`plc`)

仅计真实纳入完整兼容中国采购控制器电压，辅助控制不能使燃气加热成为电连接，内含电子在上游一次。

- 选定流: 可编程逻辑控制器 `5b817eb4-cab3-4fed-87c9-457d66d0bb19`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 火焰头冷水机 (`chiller`)

真实供货完整冷却单元，仅真实结构有压缩机制冷剂时纳入，客户公用接口不是随货机器。

- 选定流: 火焰头冷水机
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 光学高温计 (`pyrometer`)

真实安装完整光学测温器量程须匹配，宽未指定仪表须有光学结构证据。

- 选定流: 光学高温计
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 紫外火焰传感器 (`sensor`)

真实安装成品紫外火焰检测器，不用紫外涂料胶黏剂，声明兼容安全控制总成范围。

- 选定流: 紫外火焰传感器
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 压电燃气点火器 (`igniter`)

真实随货兼容成品压电点火件仅在供货时纳入，手动点火汽车起动器不同。

- 选定流: 压电燃气点火器
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 空的可再充装钢气瓶 (`cylinder`)

真实纳入空瓶加工材料阀范围，气容量规格不是填充证明；满气筒壳须自身硬件身份，空硬件质量不含气体。

- 选定流: 空的可再充装钢气瓶
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 焊接护目镜 (`goggles`)

仅有真实供应材料成品证据随货首套兼容护目附件，可选更换清单不能证明纳入。

- 选定流: 焊接护目镜
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 木制工具箱 (`box`)

仅真实交付可重用木工具箱须有物料纳入，与一次货运包装分开；钢塑箱须另加独立查询硬件行。

- 选定流: 木制工具箱
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 滚柱轴承 (`bearing`)

仅真实成品滚柱子类型尺寸牌号须匹配宽轴承身份，保持架本身不同。

- 选定流: 滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 钢螺钉 (`screw`)

真实供货成品螺钉钢尺寸加工，外购完整总成已内含紧固件。

- 选定流: 钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 丁腈橡胶密封垫 (`gasket`)

真实燃气兼容成品丁腈配方供应状态须匹配，通用硫化密封件原丁腈不能证明此牌号。

- 选定流: 丁腈橡胶密封垫
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 气态氧随货保留填充 (`oxygen_retained`)

仅真实低温空气分离制得工厂供应气态氧，原生质量千克，记录自身纯度供应交付完成；体积计量须有据匹配温压湿密度；液氧实际汽化另需匹配供应状态路线，不能用环境空气抽取替代。 仅称重有据随货保留填充，排除真实试验消耗；随货空瓶不能推定充气。

- 选定流: 氧气 `4f19ca15-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 乙炔随货保留填充 (`acetylene_retained`)

仅真实工厂乙炔化学品供氧燃料试验，记录牌号及适用溶解瓶丙酮DMF多孔壳接口，不能把乙炔发生器机器作气体。 仅称重有据随货保留填充，排除真实试验消耗；随货空瓶不能推定充气。

- 选定流: 乙炔 `0ee52d35-6fea-4c7a-8922-fe2164a5d84b`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 液化丙烷随货保留填充 (`propane_retained`)

真实纯丙烷燃料牌号液汽交付须有据，标准醚注释存疑记录不可用；LPG混合物不能替代丙烷专用系统，空瓶排除假定填充。 仅称重有据随货保留填充，排除真实试验消耗；随货空瓶不能推定充气。

- 选定流: 液化丙烷随货保留填充
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 液化正丁烷随货保留填充 (`butane_retained`)

仅真实供货纯正丁烷 CAS106-97-8液态牌号及供应汽化边界逐项兼容装置，不是异丁烷或气筒混气。 仅称重有据随货保留填充，排除真实试验消耗；随货空瓶不能推定充气。

- 选定流: 丁烷 `e02e31b8-818f-44b7-af25-f32f1e923965`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 丙烷丁烷丙烯气筒混合物随货保留填充 (`mix_retained`)

仅真实有据三组分气筒配方供货填充兼容燃烧器，纯组分UUID不能代替完整混合物推定通用比例。 仅称重有据随货保留填充，排除真实试验消耗；随货空瓶不能推定充气。

- 选定流: 丙烷丁烷丙烯气筒混合物随货保留填充
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### 炼油液化石油气随货保留填充 (`lpg_retained`)

仅真实接受炼油液化丙丁LPG混合物工厂供应接口自身组分，原生质量真实汽化交付状态负荷分开；不用通用热值密度或替代纯丙烷。 仅称重有据随货保留填充，排除真实试验消耗；随货空瓶不能推定充气。

- 选定流: 液化石油气 `3786072f-d3ce-4941-9249-ed5d346b21a6`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: harris-catalog; sievert-kit; sievert-promatic; flame-machines

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：表面处理清洗 (`finish`)

#### 输入

##### 产品流

###### 粉末涂料 (`coat`)

仅实际干聚合物配方牌号本地固化，外协已涂部件表面在上游。

- 选定流: 涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源:

###### 异丙醇清洗溶剂 (`ipa`)

仅实际兼容中国工厂化学品投入，自身异丙醇水化验实测清洗用量，不用未表征整套清洗剂。

- 选定流: 异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源:

###### 工艺用水 (`water`)

实际本地清洗工艺供水，不把内部循环作新供水，自身水分密度返还须记录。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：工厂泄漏功能试验 (`test`)

#### 输入

##### 产品流

###### 气态氧用于实际工厂试验 (`oxygen`)

仅真实低温空气分离制得工厂供应气态氧，原生质量千克，记录自身纯度供应交付完成；体积计量须有据匹配温压湿密度；液氧实际汽化另需匹配供应状态路线，不能用环境空气抽取替代。

- 选定流: 氧气 `4f19ca15-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: harris-catalog; sievert-kit; flame-machines

###### 乙炔用于实际工厂试验 (`acetylene`)

仅真实工厂乙炔化学品供氧燃料试验，记录牌号及适用溶解瓶丙酮DMF多孔壳接口，不能把乙炔发生器机器作气体。

- 选定流: 乙炔 `0ee52d35-6fea-4c7a-8922-fe2164a5d84b`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: harris-catalog; sievert-kit; flame-machines

###### 液化丙烷用于实际工厂试验 (`propane`)

真实纯丙烷燃料牌号液汽交付须有据，标准醚注释存疑记录不可用；LPG混合物不能替代丙烷专用系统，空瓶排除假定填充。

- 选定流: 液化丙烷用于实际工厂试验
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: harris-catalog; sievert-kit; flame-machines

###### 液化正丁烷用于实际工厂试验 (`butane`)

仅真实供货纯正丁烷 CAS106-97-8液态牌号及供应汽化边界逐项兼容装置，不是异丁烷或气筒混气。

- 选定流: 丁烷 `e02e31b8-818f-44b7-af25-f32f1e923965`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: harris-catalog; sievert-kit; flame-machines

###### 气态丙烯用于实际工厂试验 (`propylene`)

仅真实兼容蒸汽裂解工厂气态丙烯供货自身牌号纯度状态，炼厂化工级及多组分筒气不同。

- 选定流: 丙烯 `4f1a182b-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: harris-catalog; sievert-kit; flame-machines

###### 丙烷丁烷丙烯气筒混合物用于实际工厂试验 (`mix`)

仅真实有据三组分气筒配方供货填充兼容燃烧器，纯组分UUID不能代替完整混合物推定通用比例。

- 选定流: 丙烷丁烷丙烯气筒混合物用于实际工厂试验
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: harris-catalog; sievert-kit; flame-machines

###### 炼油液化石油气用于实际工厂试验 (`lpg`)

仅真实接受炼油液化丙丁LPG混合物工厂供应接口自身组分，原生质量真实汽化交付状态负荷分开；不用通用热值密度或替代纯丙烷。

- 选定流: 液化石油气 `3786072f-d3ce-4941-9249-ed5d346b21a6`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: harris-catalog; sievert-kit; flame-machines

###### 气态工业燃料天然气用于实际工厂试验 (`ng`)

真实焊炬表面加热燃料供货组分温压供应须有据，状态20仅干燥项目NGCC已工业炉燃烧记录不能证明兼容入口气。

- 选定流: 气态工业燃料天然气用于实际工厂试验
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: harris-catalog; sievert-kit; flame-machines

###### 气态氮吹扫气用于实际工厂试验 (`nitrogen`)

仅真实兼容全球工厂气态保护吹扫供应有据牌号，排除灌装顶空补气或试验计划未执行假定吹扫。

- 选定流: 氮气 `50626f35-0e0d-4139-b9f9-7e9ff238ba62`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: harris-catalog; sievert-kit; flame-machines

###### 锡锌焊料合金 (`solder`)

仅真实软钎焊试验消耗合金，自身锡锌其他元素化验牌号，不设固定比例或含铅替代。

- 选定流: 锡锌焊料合金
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: harris-catalog; sievert-kit; flame-machines

###### 银铜锌钎焊合金 (`braze`)

仅真实硬钎试验牌号自身元素化验，通用铜合金不能证明含银填料。

- 选定流: 银铜锌钎焊合金
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: harris-catalog; sievert-kit; flame-machines

###### 硼酸助焊剂原料 (`flux`)

仅真实独立供货正硼酸原料须化学供应化验，三氧化二硼路线CAS冲突杂项制品分类不可用；成品助焊配方独立原子身份，不能重复加成分。

- 选定流: 硼酸助焊剂原料
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: harris-catalog; sievert-kit; flame-machines

###### 碳钢试验片 (`coupon`)

仅真实连接表面热处理钢试片消耗牌号几何返还，试验工件排除装置 Dnet，能力参数不能决定消耗。

- 选定流: 碳钢试验片
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: harris-catalog; sievert-kit; flame-machines

###### 淬冷试验工艺水 (`water_trial`)

仅实际执行工厂试验新淬冷换热补水，循环抵销随货保留液体分开，自身温度密度水分库存实测。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: harris-catalog; sievert-kit; flame-machines

###### 去离子水 (`di`)

仅真实火焰头冷却工厂试验牌号新补水，不设通用随货填充去离子要求。

- 选定流: 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: harris-catalog; sievert-kit; flame-machines

###### 聚亚烷基二醇水性淬冷液 (`quenchfluid`)

仅真实有据工厂试验PAG配方浓度水分回收，仅用水来源不能推定二醇，油防冻液不等价。

- 选定流: 聚亚烷基二醇水性淬冷液
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: harris-catalog; sievert-kit; flame-machines

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：未归属剩余公用设施 (`services`)

#### 输入

##### 产品流

###### 低压电力 (`electricity`)

仅真实兼容中国用户端低于1千伏供电，计本地机器辅助工厂试验，其他电压地域独立匹配供应，不推定电主要加热。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: Energy / kWh
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源:

###### 压缩空气 (`air`)

真实兼容供压缩空气原生立方米须温压湿密度，外购空气不重复自身压缩机电耗。

- 选定流: 压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位: Volume / m3
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源:

###### 天然气供应工业热 (`heat`)

仅真实兼容中国外购天然气集中工业供热原生兆焦，供应燃料燃烧在上游，不虚构场内焊炬气。

- 选定流: 区域或工业热, 天然气 `eb581eb3-c707-41a0-b4e6-ee1854551714`
- 流属性/单位: Energy / MJ
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源:

###### 自来水 (`tap`)

真实兼容厂房新供水，自身水分密度库存返还，不用闭路毛循环量。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：验收配置交付 (`dispatch`)

#### 输入

##### 产品流

###### 瓦楞纸板 (`board`)

真实C/E/F瓦楞至少80%纤维素且有据再生成分，仅兼容包装牌号，不作通用纸箱。

- 选定流: 瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: un-cpc3; harris-catalog; sievert-kit

###### 低密度聚乙烯薄膜 (`film`)

仅真实非自黏非泡孔未增强未层压无支撑PE-LD膜，实际包装质量自身牌号。

- 选定流: 低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: un-cpc3; harris-catalog; sievert-kit

###### 欧标木托盘 (`pallet`)

仅真实欧标托盘实测质量数量返还份额，其他木箱托盘规格独立身份。

- 选定流: 木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: un-cpc3; harris-catalog; sievert-kit

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收完整非电连接或燃气表面回火装置 (`finished`)

实际验收完整交付配置声明保留硬件填充；运输包装不良零散备件试验消耗试片燃料排除净参考质量。

- 选定流: 用于焊接、钎焊或熔接的非电气机械和器具，气动表面回火机和器具 `0626cfa9-ddf9-41c2-8994-44088c8ccfec`
- 流属性/单位: Mass / kg
- 数量规则: 1 千克
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: un-cpc3; harris-catalog; sievert-kit

##### 废物流

##### 基本流

### 过程：真实废物基本释放核算 (`residues`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工业后废钢 (`wsteel`)

真实称重未处理外部废钢交接，自身合金污染化验接收路线库存返料，内部可回收废料抵销。

- 选定流: 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 废铜 (`wcu`)

仅真实称重外部废铜至有据匹配湿法冶金接收路线，自身铜锌绝缘水分化验返还，不等于所含铜元素；接收处理在上游，不虚构场内湿法。

- 选定流: 废铜 `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 涂装污泥 (`sludge`)

真实外送收集涂装污泥毛量自身水树脂金属组分库存返还及有据接收处理，干涂料产品不同。

- 选定流: 涂装污泥
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 废异丙醇溶剂 (`spentipa`)

真实外送废清洗流自身异丙醇水污染物化验实测交接回收销毁接收路线，捕集溶剂不能自动作空气排放。

- 选定流: 废异丙醇溶剂
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 工业废水 (`wastewater`)

真实交接工厂废水毛量水分自身污染化验库存返还接收路线，不用空气区室造纸默认。

- 选定流: 工业废水
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 废PAG水性淬冷液 (`quenchwaste`)

仅真实执行试验交接废PAG水配方，自身组分回收返还接收方，新补水废油不同。

- 选定流: 废PAG水性淬冷液
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 捕集金属磨削粉尘 (`dust`)

真实外送捕集尘自身粒度元素水分接收路线，实测收集库存返还与释放颗粒物分开。

- 选定流: 捕集金属磨削粉尘
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

##### 基本流

###### 向普通空气排放化石二氧化碳 (`co2`)

仅独立定量治理后场内化石燃烧释放，真实气流时间状态；排除供应锅炉碳残差。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:

###### 向普通空气排放化石一氧化碳 (`co`)

仅治理后独立实测分子化石CO匹配真实流量时间无组织，碳闭合不能推导CO。

- 选定流: 一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:

###### 向普通空气排放异丙醇 (`ipair`)

真实治理后异丙醇浓度乘匹配流量时间状态加独立无组织，回收捕集留存废水销毁为实测非空气去向。

- 选定流: 异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:

###### 向普通空气排放水蒸气 (`vapor`)

真实净蒸发反应生成水释放须各流水分库存淬冷返还真实实测尾气状态核对。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:

###### 向普通空气排放二氧化氮 (`no2`)

仅分子NO2 CAS10102-44-0治理后独立实测匹配流量时间状态，NO2当量总氮氧化物不是此物种。

- 选定流: 二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:

###### 向普通空气排放PM10 (`pm10`)

仅治理后实测不大于10微米气动份额含细颗粒，自身取样流量时间，捕集尘或单2.5至10微米不同。

- 选定流: 颗粒物 (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:

###### 向普通空气排放铜 (`copperair`)

仅治理后独立实测真实烟所含排放铜元素，整合金氧化尘不是铜；匹配流量时间防颗粒组分重叠。

- 选定流: 铜 `fe0acd60-3ddc-11dd-a7a0-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:

###### 向普通空气排放锌 (`zincair`)

仅真实本地连接工厂试验治理后独立实测释放锌量匹配流量时间，黄铜氧化锌毛量捕集残余不同。

- 选定流: 锌 `08a91e70-3ddc-11dd-94e3-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:


## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| allocate_burdens | 先区分配置场址共同期间记录，直接部件工序试验记录优先；共享服务仅分配未归属剩余并采用有据因果计量基准，保留不良返修试验负荷，不以全厂无关产量稀释。 |  |
| allocate_scrap | 保留可回收材料为库存配对返料，真实外部共产品须明确分配替代法及兼容产出状态，废物交接不自动获得避免原生金属收益。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | 验收配置参考 | foreground_record | 配置序列物料 Naccepted 各校准验收净质量 Dnet 纳入附件填充 排除包装备件不良试验负载 | 同配置验收完整装置采用校准称重可追溯记录，核对验收实际供货物料；拆件运输各纳入模块仅加一次。 | kg | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_materials | fabrication | 各实际材料配方 | foreground_record | 身份牌号毛量 Qattr 自身化验水分 库存反应返料本地工序外购完成状态不确定性 | 各采购使用流称重测自身化学水分，核对供应加工库存调整本地制造气路制造表面处理不良返修。 | kg | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_modules | assembly | 各成品部件保留填充 | foreground_record | 部件序列原生 Qattr 兼容供应物料 内含材料工序 纳入焊炬减压器软管气瓶运动淬冷控制填充 不良返修数量 | 实际收据及各供货硬件实测质量，安装数按同件实测质量换算；保留充气维持原生质量体积真实温压密度供应完成库存，硬件质量不是气量。外购成品上游制造仅计一次，本地贴装焊炬制造须自身原子路线上游替代。 | native unit | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_tests | test | 各实际工厂试验交换 | foreground_record | 配置试验计划实际区间实测 Qattr 气体输入返还排放真实辅助电负荷 介质试片消耗返还 冷却库存 验收不良返修 | 计量实际气路泄漏压力控制点火或焊接软硬钎焊表面加热淬冷功能试验，保留可归属失败重复试验，随货首套硬件填充与消耗介质用户寿命数量分开，仅泄漏检查不虚构连接填料或表面淬冷消耗，仅核对实际执行试验状态。 | native unit | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_utilities | services | 各实际公用表计 | foreground_record | 原生 Qattr 共同期间输入实际场内供能量输出库存 工序试验归属表计 剩余共享服务 电压供应 气温压湿密度 毛净热返还 | 按真实输入自产输出库存核对制造磁性装配表面试验交付归属负荷，仅分配未归属剩余，调查负值不确定性不截零；毛热供应千克乘自身兆焦每千克减独立返还千克乘自身兆焦每千克，同一焓基准扣一次；净热不再扣返还，蒸汽凝结水实物独立于热能，上游供应锅炉排除场内燃料。 | native unit | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_dispatch | dispatch | 各包装成品产出 | foreground_record | 验收配置物料净产出 包装 Qattr 实际聚合物纸板托盘牌号 返还份额 外部运输原生活动 | 实际交付包装称重与验收装置净量分开，保留供应运输接口真实返还包装，不设标准包装比。 | kg | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_wastes | residues | 各真实废物流 | foreground_record | 毛量 Qattr 自身水分元素化学化验 库存内部返还回收 真实外部交接供应处理 | 采用称重交接联单自身物流取样，完整污泥合金废水不同于所含物种，捕集粉尘溶剂在实测释放前属非空气去向，外部处理排放属供应过程。 | kg | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_emissions | residues | 各基本物种 | foreground_record | CAS 来源区室 Qattr 实际治理后浓度 匹配气液流量时间 温压干湿氧单位修正 独立无组织基准 留存捕集销毁 | 按治理后实测浓度乘匹配流量乘同期间测物种，并用状态单位修正独立无组织测量，元素物种化验不同于粉尘氧化物毛量，防止总颗粒物组分排放重叠；未解释质量残差碳闭合不能推导 CO/NO2。 | kg | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | 对一个配置期间，将各可归属原生单位交换总量除以验收配置装置净质量之和，保留原始数量单位不确定性。 | Qattr; Dnet; cp_mass | native-unit amount per kg reference flow |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_qnd | all inventory rows | Qattr 保留一个配置共同期间可归属不良返修试验负荷，Naccepted 计 Dnet 中验收装置；单件交换=Qattr/Naccepted，实测平均净质量=Dnet/Naccepted，每千克交换=Qattr/Dnet；计数换算用同配置实测平均质量，不用额定热量耗气工件能力目录机器重量。 | 校准净质量验收台账 |
| quality_physical | all inventory rows | 各元素物种项采用自身毛量化验水分干湿基，计库存反应产品留存返料废物；合金污泥毛量不是所含元素。各水流采用自身水分及实际温度实测有据密度，计反应留存蒸发排出库存，内部返还配对抵销。 | 各流化验库存反应记录 |
| quality_solvent | ipa; spentipa; ipair | 按各流自身异丙醇含量核对投入库存产品留存回收捕集废水废介质销毁独立实测空气，捕集不是销毁，非空气去向不能变空气残差。 | 独立去向测量化验 |
| quality_identity | all inventory rows | 匹配状态类型原生基准属性单位金属聚合物化学物种供应完成状态供应地域基本区室，实际未列运输钛不锈钢塑料原料焊炬混合器气筒壳罐换热器驱动连接合金助焊剂成分随货制冷剂试验介质气废物排放均新增独立查询计量原子行，缺失不同于零，不存在须证明。 | 原始供应物料及身份缺口披露 |
| quality_scope | reference product | 未观察非电连接机制及切割连接炉燃气电混合结构须逐项原始主要功能审查，火焰淬火示例不能证明所有表面回火装置，控制泵只是实际燃气热源辅助；更换清单不证明随货，空瓶排除假定燃料首充，冷却淬冷罐不能证明随货液体乙二醇；示例不设通用运行配方工厂负荷。 | 原始配置语义审查 |


## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| validate_scope | 须有真实非电主要连接或燃气表面回火功能完整供货物料，单一备件焊炬喷嘴软管无关炉电热源装置客户已处理工件不得作完整参考，两语言采用相同每千克净参考原生分子。 | un-cpc3 |
| validate_interfaces | 拒绝重复外购模块制造未配对内部返料假定附件填充纳入及用户寿命运行作工厂负荷，保留可归属真实工厂试验不良返修。 | harris-catalog; sievert-kit; sievert-promatic; flame-machines |
| validate_balances | 须各流自身元素水溶剂平衡及实测治理后物种浓度乘匹配流量时间状态加独立无组织测量，公用核对共同期间输入实际自产输出库存工序归属负荷，仅共享未归属剩余；毛热按同基准独立实测返还扣一次，净热不重复扣。 |  |
| validate_completeness | NO2 当量氮氧化物不同于分子 NO2，金属氧化物烟毛量不同于所含元素且颗粒物组分报告不得重叠，状态 20 错误基准属性区室未查询身份不可用，报告接受输入已执行跳过检查发现缺失证据完整性。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 声明非电连接燃气表面回火装置制造及兼容供货情景 |
| excluded_use | 通用用户燃料连接热处理配方寿命效率因子及未经审查无关电炉备件输出 |
| required_metadata | 全部限定信息 Qattr/Naccepted/Dnet 原生单位 实际物料自制外购配置路线场址期间供应运输处理 工厂试验分配缺口 |
| required_quality_disclosure | 实测估计缺失校准取样不确定性物理残差供应身份分类缺口已执行跳过检查完整性 |
| update_trigger | 主要功能结构物料牌号自制外购供应场址期间或真实供货试验范围变化 |


## 11. 数据源

| source_id | type | title | reference | used_for |
| --- | --- | --- | --- | --- |
| un-cpc3 | official_guidance | 中央产品分类第3.0版解释说明，2025年6月30日 | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 完整非电连接燃气表面回火装置与电装置独立零件区分。 |
| harris-catalog | handbook | Harris国际工业设备目录，未标日期，AB_INT0623_EN | https://d347awuzx0kdse.cloudfront.net/harrisproducts/content-file/Harris%20International%20Industrial%20Equipment%20Catalogue.pdf?v=ebf3379622181d378ba2d3273b0d324d22333bb8 | 氧乙炔替代燃料焊接硬钎配置及完整套装手柄混合器减压器软管回火防止附件供货，切割组合须真实主要功能审查。 |
| sievert-kit | handbook | Pro95烙铁套装，未标日期 | https://sievert.se/en/products/soldering-iron-systems/pro-95-soldering-iron/kits/ | 真实丙烷铜头软钎总成纳入软管减压器空可充瓶，Filled No优先于气容量标签。 |
| sievert-promatic | handbook | Promatic烙铁，未标日期 | https://sievert.se/en/products/soldering-iron-systems/promatic-soldering-iron/ | 丙烷焊炬压电点火及独售不含铜头手柄，兼容备件清单不证明交付范围。 |
| flame-machines | handbook | 火焰淬火机器，未标日期 | https://flametreatingsystems.com/flame-hardening-machines/ | 燃气氧表面淬火固定旋转渐进组合总成水冷头淬冷罐换热泵PLC高温计冷水机紫外传感器，真实回火淬火主要功能随货液体范围须审查。 |
