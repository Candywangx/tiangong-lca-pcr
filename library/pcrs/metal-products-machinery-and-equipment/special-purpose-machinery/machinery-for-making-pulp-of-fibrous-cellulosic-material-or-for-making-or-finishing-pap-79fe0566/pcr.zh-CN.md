---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-for-making-pulp-of-fibrous-cellulosic-material-or-for-making-or-finishing-pap-79fe0566
status: candidate
content_maturity: authored_methodology
language: zh-CN
sync_with: pcr.en-US.md
---

# 制浆、造纸、纸板及纸制品加工机械

## 1. 范围与适用性

本制造 PCR 适用于声明配置的纤维素纤维制浆、纸张纸板制造整饰及纸浆纸张纸板制品加工机械，装订除外。纳入兼容的机械及热机械磨浆、化学和非木浆蒸煮、再生纤维备料、成形压榨干燥压光施胶涂布起皱、分切复卷裁切、瓦楞、纸盒纸袋信封及折叠上胶配置。须声明主要功能及集成或独立供货设备。首套安装网毯辊刀控制驱动和实际填充随供货配置纳入，松散备件库存及客户耗材另行披露。un-cpc3 与厂商结构用于类别和对照示例，不建立行业配方。

完整参考流排除独立装订印刷设备、另行分类通用电动机泵锅炉化学回收装置、独立供货干燥机及备件；经审查整机实际采购纳入的投入仍可记录。印刷转换联线、化学压力容器、干燥模块或纸塑混合设备须逐项审查主要功能分类，产线名称不能归类其中每个单元。排除下游纸厂使用的纸浆纸张回收纸化学品及蒸汽，实际实测工厂试验除外；翻新设备及客户场址调试须作独立披露情景。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-for-making-pulp-of-fibrous-cellulosic-material-or-for-making-or-finishing-pap-79fe0566 |
| classification_refs | CPC3.0:44913；语义类别精确匹配，具体项目仍须分类审查 |
| covered_products | 配置制浆、造纸纸板及整饰、纸制品加工转换机械，装订除外 |
| excluded_products | 印刷装订、通用工厂公用设备、独立供货备件干燥机、浆纸产品及全厂产出 |
| representative_product | 一个验收声明的磨浆机碎浆机造纸机或瓦楞糊盒制袋机配置，单一型号不定义完整类别 |
| production_route | 实际铸造或外购铸件、轧制成形焊接加工、表面处理、供货模块、装配控制集成、工厂测试返修及包装 |
| market_state | 声明制造工厂门的新验收配置机器，完整供货范围及运输拆解须声明 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供给声明配置的制浆造纸纸板纸制品加工机械 |
| How much | 1 千克验收配置机器净质量 |
| How well | 声明实际主要功能、供货模块、验收条件及材料牌号压力驱动控制接口 |
| How long or cycle | 一次制造验收周期，用户寿命及更换负载为情景证据而非默认 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 制造纤维素纸浆的机器或制造或加工纸张或纸板的机器，制造配料纸浆、纸张或纸板的机械（图书装订机械除外） `59606f39-b2c5-4c5d-a906-0b9110b7c256` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 主要功能及分类决定；制浆造纸转换族；型号配置；完整供货物料清单及安装填充网毯附件；净质量验收数量；场址期间；制造工厂门及运输拆解；压力材料驱动控制规格；自制外购；工厂试验；公用供应地域；分配及缺口 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 校准验收配置机器净质量定义 Dnet，包装不良品游离试验负载及不属声明参考的松散备件排除；对一个配置期间使用 cp_mass。 |
| native_quantity | all inventory rows | 实际基准属性 | native | 保留质量千克、体积立方米及能量兆焦或千瓦时原生分子，立方米千克仅按各流实际温压实测密度转换；电力兆焦=千瓦时×3.6；单位标签不能修复错误物理身份。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际上游供应连接的到厂金属化学原料及供应状态模块 |
| starting_condition_role | foreground_input_interface |
| product_classification_scope | 经审查完整类别，声明各具体功能及模块例外 |
| recursive_input_rule | 外购同类别完成单元仅计一次上游制造，再加本地实际集成试验；部分完成投入仅包含完成工序，本地剩余工序明确。 |
| upstream_dataset_requirement | 各实际投入废物处理须匹配供应状态牌号地域供应过程单位 |
| disclosure | 工厂门场址外包运输、未随货安装调试、模块填充网毯范围、自制外购及未解决身份 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| boundary_factory | 纳入实际供应运输制造表面装配工厂试验不良返修公用治理包装；运输按实际方式供应过程另列服务行。下游用户纸厂生产服务及用户报废保持独立。 | un-cpc3; andritz-cast |
| boundary_makebuy | 外购完整或部分模块完成工序仅计一次，不再计其内含材料电力；内部转移配对抵销一次。实际纳入安装首套物品进入配置 Dnet，运输包装及排除松散供货不进入。 | valmet-headbox; bhs-corrugator; holweg-bag |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| casting | 按条件本地铸造 | conditional | 实际声明场址工序，不作通用配方 | foreground_process | 每 1 kg 参考流 |
| fabrication | 金属成形与机加工 | conditional | 实际声明场址工序，不作通用配方 | foreground_process | 每 1 kg 参考流 |
| finish | 清洗表面处理 | conditional | 实际声明场址工序，不作通用配方 | foreground_process | 每 1 kg 参考流 |
| assembly | 配置机电集成 | required | 实际声明场址工序，不作通用配方 | foreground_process | 每 1 kg 参考流 |
| test | 工厂验收与返修 | conditional | 实际声明场址工序，不作通用配方 | foreground_process | 每 1 kg 参考流 |
| utilities | 实际场址公用工程 | conditional | 实际声明场址工序，不作通用配方 | foreground_process | 每 1 kg 参考流 |
| dispatch | 包装工厂门交接 | required | 实际声明场址工序，不作通用配方 | foreground_process | 每 1 kg 参考流 |
| residues | 外部废物及实测排放 | conditional | 实际声明场址工序，不作通用配方 | foreground_process | 每 1 kg 参考流 |

### 过程：按条件本地铸造 (`casting`)

#### 输入

##### 产品流

###### 铸造生铁 (`pigiron`)

仅记录实际场址熔炼炉料，测定合金组成与供应状态，不设定标准配方。

- 选定流: 铸造生铁
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `andritz-cast`

###### 分选重熔废钢原料 (`scrapcharge`)

仅记录与选定供应路线匹配的实际外部预处理分选或重熔废料，保留实际牌号化学组成及已完成工序；配对厂内浇冒口返料不是再次采购。

- 选定流: 钢铁废碎料 `6cb5e364-ba39-4009-8b40-a76fdc88bc42`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `andritz-cast`

###### 硅砂铸型砂 (`sand`)

实际规格铸型砂补充量须声明粒度、硅含量及水分，内部循环砂抵销。

- 选定流: 硅砂铸型砂
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `andritz-cast`

###### 酚醛树脂 (`resin`)

仅用于有凭证树脂黏结铸型路线实际使用的酚醛缩聚树脂；核对预聚物及配方状态，独立供应的催化剂与溶剂须另列原子行。

- 选定流: 酚醛树脂 `9f10798f-ffb5-402d-b805-27d2db4e2caf`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `andritz-cast`

###### 铸造膨润土黏结剂 (`bentonite`)

仅适用于有凭证膨润土黏结铸型路线，葡萄酒澄清剂或原矿黏土不能代表加工后铸造黏结剂。

- 选定流: 铸造膨润土黏结剂
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `andritz-cast`

###### 工厂电力 (`casting_electricity`)

仅计该过程实际表计可归属用电；中国用户侧 1–35 千伏身份須匹配地域、电压与供应过程，共享服务仅纳入未归属剩余量。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: Energy / kWh
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_utilities。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utilities`
- 来源: `andritz-cast`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：金属成形与机加工 (`fabrication`)

#### 输入

##### 产品流

###### 碳钢板 (`steel`)

机架、容器或焊制辊实际牌号、厚度及轧制状态须声明，中英金属身份冲突不可用。

- 选定流: 碳钢板
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `andritz-cast`; `valmet-headbox`

###### 304 不锈钢板 (`stainless`)

仅用于实际 304 板材制造；Valmet 纸浆干燥流浆箱示例证明不锈钢结构，并不证明通用 304 牌号。

- 选定流: 304 不锈钢板
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `andritz-cast`; `valmet-headbox`

###### 双相不锈钢板 (`duplex`)

仅在采购与合金化验支持的腐蚀工况实际使用双相牌号时适用，不假定所有蒸煮器或湿部均用双相钢。

- 选定流: 双相不锈钢板
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `andritz-cast`; `valmet-headbox`

###### 铝挤压型材 (`aluminium`)

仅按实际有据合金记录防护罩或框架所用挤压型材；外购成品罩不重复展开型材加工。

- 选定流: 铝挤压型材 `4f197be3-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `andritz-cast`; `valmet-headbox`

###### 铜线材 (`copper`)

仅用于本地实际接线或绕线的裸铜线，绝缘电缆与外购电动机是不同供应状态。

- 选定流: 铜线材 `4f197beb-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `andritz-cast`; `valmet-headbox`

###### 不锈钢焊丝 (`weld`)

仅用于实际消耗填料的不锈钢焊接，声明合金及实心或药芯状态，无填料连接不意味着焊丝存在。

- 选定流: 不锈钢焊丝
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `andritz-cast`; `valmet-headbox`

###### 气态氩 (`argon`)

仅记录实际气态氩保护气，纯度与供应过程须匹配；液态供应须含自身实际汽化，体积转质量采用实际温压与密度。

- 选定流: 氩气 `f83a939c-a58f-44de-a593-d9c9ffb584e4`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `andritz-cast`; `valmet-headbox`

###### 金属加工切削液 (`cutfluid`)

仅记录机加工实际外购液体配方，匹配组成及浓度，测定自身水分和润滑组分；气体冷却另列交换。

- 选定流: 切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `andritz-cast`; `valmet-headbox`

###### 工厂电力 (`fabrication_electricity`)

仅计该过程实际表计可归属用电；中国用户侧 1–35 千伏身份須匹配地域、电压与供应过程，共享服务仅纳入未归属剩余量。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: Energy / kWh
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_utilities。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utilities`
- 来源: `andritz-cast`; `valmet-headbox`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：清洗表面处理 (`finish`)

#### 输入

##### 产品流

###### 粉末涂料 (`coat`)

仅记录本地实际施用的外购干聚合物粉末配方，声明树脂、添加剂、保留涂层、回收及固化，不假定环氧配方或覆盖率。

- 选定流: 涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`

###### 异丙醇 (`ipa`)

实际异丙醇清洗投入采用自身溶液含量，选定中国厂内身份须匹配采购；区分保留、回收、销毁、废水及排放去向。

- 选定流: 异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`

###### 柠檬酸 (`citric`)

仅用于实际柠檬酸清洗或钝化配方，采用自身化验及水分，其他酸另列。

- 选定流: 柠檬酸
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`

###### 硝酸 (`nitric`)

仅计实际外购 50% 硝酸水溶液清洗蚀刻试剂，数量为完整溶液并采用自身化验水分；其他浓度须另证匹配身份，不设定通用不锈钢钝化配方。

- 选定流: 硝酸，50%水溶液 `db613797-10b0-4252-b818-659b99ce85dd`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`

###### 工艺用水 (`water`)

仅计实际处理后工业清洗或漂洗补充水及自身水质供应接口，循环量不是新水投入。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`

###### 工厂电力 (`finish_electricity`)

仅计该过程实际表计可归属用电；中国用户侧 1–35 千伏身份須匹配地域、电压与供应过程，共享服务仅纳入未归属剩余量。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: Energy / kWh
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_utilities。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utilities`
- 来源: `valmet-headbox`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：配置机电集成 (`assembly`)

#### 输入

##### 产品流

###### 灰铸铁机器铸件成品 (`castiron`)

实际外购已完成制造的灰铸铁机壳或筒体铸件；原生铸铁金属或铁矿不包含铸件制造；本地自制时用实际铸造路线替代该投入。

- 选定流: 灰铸铁机器铸件成品
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 磨浆机磨片成品 (`refiner`)

匹配实际合金、供应加工状态及机械、热机械或化学浆兼容性；Muncy 铸造示例不能证明一个通用合金。

- 选定流: 磨浆机磨片成品
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 造纸机干燥缸成品 (`roll`)

区分实际外购干燥缸、独立分类完整干燥机或场址轧制焊接钢制扬克缸；供货涂层及内部总成仅计一次。

- 选定流: 造纸机干燥缸成品
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 纸浆干燥流浆箱成品 (`headbox`)

仅计实际兼容水力式或整流辊式整体流浆箱；Valmet 证据仅为纸浆干燥湿部，不代表所有造纸机。

- 选定流: 纸浆干燥流浆箱成品
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 碎浆机转子成品 (`pulper`)

实际兼容碎浆机外购转子，不以风机或直升机转子替代；本地加工为独立自制路线。

- 选定流: 碎浆机转子成品
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 纸浆筛鼓成品 (`screen`)

记录实际成品筛鼓及缝孔、耐腐蚀规格，原浆或普通布不是该设备投入。

- 选定流: 纸浆筛鼓成品
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 纸浆蒸煮器容器成品 (`digester`)

声明实际外购容器压力边界及随货范围，场址板材成形焊接替代上游成品容器制造。

- 选定流: 纸浆蒸煮器容器成品
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 瓦楞辊盒成品 (`corrroll`)

仅计包含实际辊及驱动、服务接口的外购辊盒；BHS 证明可更换模块与蒸汽凝结水接口，不证明通用物料清单。

- 选定流: 瓦楞辊盒成品
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 纸袋袋底闭合模块成品 (`bagmodule`)

仅计实际兼容外购闭合模块；Holweg 伺服闭合及把手、窗选项证明制袋配置，并不代表所有设备或自动归类印刷设备。

- 选定流: 纸袋袋底闭合模块成品
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 工业电动机 (`motor`)

实际工业电动机须有额定值及转速、驱动接口，不借用输送清洗模块专家估计物料清单代表磨浆机电动机。

- 选定流: 工业电动机
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 工业减速齿轮箱 (`gearbox`)

实际外购减速箱须声明负载、传动比及油液状态，风机齿轮箱不能作为通用兼容投入。

- 选定流: 工业减速齿轮箱
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 液压动力单元 (`hydraulic`)

仅计实际兼容外购液压总成，以能量计量的金属压力机子系统不能作质量部件投入。

- 选定流: 液压动力单元
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 滚柱轴承 (`bearing`)

实际外购成品滚柱轴承须匹配负载与兼容性，宽类别轴承身份仍须实际子类规格，不能用保持架或风机变桨系统。

- 选定流: 滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 可编程逻辑控制器 (`plc`)

仅在采购及电压兼容时计实际中国完整硬件控制器，内含电路板、芯片及焊料属上游。

- 选定流: 可编程逻辑控制器 `5b817eb4-cab3-4fed-87c9-457d66d0bb19`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 绝缘铜控制动力电缆 (`cable`)

实际外购绝缘电缆须声明截面积与电压，裸线或以能量作基准的部件不能替代。

- 选定流: 绝缘铜控制动力电缆
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 三元乙丙橡胶密封垫 (`gasket`)

仅计实际聚合物及尺寸得到确认的三元乙丙橡胶成品垫，通用密封件不能证明聚合物。

- 选定流: 三元乙丙橡胶密封垫
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 造纸机成形网 (`fabric`)

仅计实际供货网毯的聚合物、结构及净质量，印花服装面料及其营销寿命无关。

- 选定流: 造纸机成形网
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 造纸机压榨毛毯 (`felt`)

实际随货压榨毛毯须有纤维及物料规格，区分首套供货、后续用户更换和额外运输备件。

- 选定流: 造纸机压榨毛毯
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 聚氨酯输送带 (`belt`)

仅计有凭证实际聚氨酯带，橡胶带或输送服务身份不同，BOBST 结构不能推导通用带材。

- 选定流: 聚氨酯输送带
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 机械用切纸刀 (`blade`)

实际兼容安装刀具须与钢锯片、通用机加工耗材或非机械剪刀区分。

- 选定流: 机械用切纸刀
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 纸板钢刀模 (`die`)

仅计供货转换机器实际安装的外购刀模，工厂试验使用客户工具须另列消耗或返还负载。

- 选定流: 纸板钢刀模
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 液压油 (`oil`)

仅计兼容矿物或合成基础液压系统实物随货填充，选定体积基准原生为立方米，称重数量按实际温度独立实测密度转换；外购已填充模块排除重复油液。

- 选定流: 液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位: Volume / m3
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 润滑脂 (`grease`)

仅计实际有凭证随货润滑脂，另分工厂消耗，液体润滑剂不能自动作为同牌号。

- 选定流: 润滑脂
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### 工厂电力 (`assembly_electricity`)

仅计该过程实际表计可归属用电；中国用户侧 1–35 千伏身份須匹配地域、电压与供应过程，共享服务仅纳入未归属剩余量。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: Energy / kWh
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_utilities。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utilities`
- 来源: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：工厂验收与返修 (`test`)

#### 输入

##### 产品流

###### 自来水 (`tap`)

实际水压、循环或清洗试验用水按新供、库存及匹配返流记录自身水质和密度，排除客户浆纸厂用水。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_test。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_test`
- 来源: `bobst-fold`; `holweg-bag`

###### 漂白硫酸盐木浆试验负载 (`pulp`)

仅计实际有据工厂验收或样机浆料测试，绝不采用固定客户纸厂配方，匹配制浆、漂白及干固体状态；返还客户浆料抵销。

- 选定流: 漂白硫酸盐木浆试验负载
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_test。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_test`
- 来源: `bobst-fold`; `holweg-bag`

###### 瓦楞纸板试验纸坯 (`paper`)

仅计工厂转换试验实际使用的 C/E/F 瓦楞纸板，纤维含量至少 80%，含再生材料且其实际比例有凭证，其他牌号另证身份。

- 选定流: 瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_test。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_test`
- 来源: `bobst-fold`; `holweg-bag`

###### 未漂白牛皮纸试验纸幅 (`kraft`)

仅计制袋或裁切验收试验实际纸幅，声明牌号、水分、消耗返还数量及不良试验；用户生产吞吐量不是工厂投入。

- 选定流: 未漂白牛皮纸试验纸幅
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_test。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_test`
- 来源: `bobst-fold`; `holweg-bag`

###### 聚醋酸乙烯酯胶黏剂 (`glue`)

仅计糊盒机工厂验收试验实际消耗的聚醋酸乙烯酯胶配方，保留自身固体水分及库存返还，不能自动用于瓦楞淀粉胶或机器制造。

- 选定流: 聚醋酸乙烯酯胶黏剂
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_test。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_test`
- 来源: `bobst-fold`; `holweg-bag`

###### 瓦楞淀粉胶黏剂 (`starch`)

仅计工厂瓦楞试验实际消耗的已配制淀粉胶，场址混配时逐项确认组分，不设用户运行配方。

- 选定流: 淀粉基粘合剂 `2a847cb1-f8c0-4fd4-8c7c-2f26f1dcec70`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_test。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_test`
- 来源: `bobst-fold`; `holweg-bag`

###### 工厂电力 (`test_electricity`)

仅计该过程实际表计可归属用电；中国用户侧 1–35 千伏身份須匹配地域、电压与供应过程，共享服务仅纳入未归属剩余量。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: Energy / kWh
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_utilities。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utilities`
- 来源: `bobst-fold`; `holweg-bag`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：实际场址公用工程 (`utilities`)

#### 输入

##### 产品流

###### 外购工业热 (`heat`)

仅计与供应过程匹配的实际外购中国天然气工业热服务；虽属性名为总热值，使用原生能量兆焦，蒸汽返还实物质量分别计量；供应方锅炉燃料属上游。

- 选定流: 区域或工业热, 天然气 `eb581eb3-c707-41a0-b4e6-ee1854551714`
- 流属性/单位: Energy / MJ
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_utilities。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utilities`
- 来源:

###### 气态天然气 (`gas`)

仅计实际场址燃烧且声明气质、温压、密度与热值；单一电厂项目或干燥特定接口不能建立通用燃气身份。

- 选定流: 气态天然气
- 流属性/单位: Volume / m3
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_utilities。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utilities`
- 来源:

###### 压缩空气 (`air`)

仅计按声明参考状态以原生立方米记录的实际外购压缩空气；场址压缩仅计一次实际用电，不重复外购服务。

- 选定流: 压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位: Volume / m3
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_utilities。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utilities`
- 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：包装工厂门交接 (`dispatch`)

#### 输入

##### 产品流

###### 工厂电力 (`dispatch_electricity`)

仅计该过程实际表计可归属用电；中国用户侧 1–35 千伏身份須匹配地域、电压与供应过程，共享服务仅纳入未归属剩余量。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: Energy / kWh
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_utilities。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_utilities`
- 来源: `bhs-corrugator`

###### 瓦楞纸板 (`board`)

仅计纤维至少 80%、含有凭证实际比例再生材料的 C/E/F 包装纸板；其他牌号及外购纸箱另证身份。

- 选定流: 瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `bhs-corrugator`

###### 低密度聚乙烯薄膜（PE-LD） (`film`)

仅计实际低密度聚乙烯防护薄膜，且非自粘、非泡沫、未经增强、层压、支撑或与其他材料复合。确认供应聚合物牌号及供货状态；其他 PE 牌号与多层膜另建原子身份。

- 选定流: 低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `bhs-corrugator`

###### EURO 木托盘 (`pallet`)

仅计尺寸与供应状态匹配的实际 EURO 托盘，复用按有凭证周转返还分配，其他箱具不同。

- 选定流: 木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_inputs。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `bhs-corrugator`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收配置制浆造纸转换机械 (`finished_machine`)

工厂门每千克已验收配置机器净质量，范围及随货模块附件须明确；纸浆、纸张或纸厂产出不是参考流。

- 选定流: 制造纤维素纸浆的机器或制造或加工纸张或纸板的机器，制造配料纸浆、纸张或纸板的机械（图书装订机械除外） `59606f39-b2c5-4c5d-a906-0b9110b7c256`
- 流属性/单位: Mass / kg
- 数量规则: 1 千克
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_mass`
- 来源: `bhs-corrugator`

##### 废物流

##### 基本流

### 过程：外部废物及实测排放 (`residues`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 钢机加工废料 (`wsteel`)

实际分选钢边角料切屑送回收，采用自身牌号化验，厂内重熔及部件返修转移抵销。

- 选定流: 废钢 `e4449c6f-3b27-426d-ba8d-47c20c99c609`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_waste。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- 来源:

###### 废硅砂铸型砂 (`wsand`)

仅计实际外排使用后铸型砂及黏结剂、污染物和水分化验，循环型砂不是废物。

- 选定流: 废硅砂铸型砂
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_waste。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- 来源:

###### 金属氢氧化物处理污泥 (`sludge`)

实际外排湿表面处理污泥须有自身水分及各金属化验，湿毛量不是元素金属。

- 选定流: 金属氢氧化物处理污泥
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_waste。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- 来源:

###### 机械工厂废水 (`wastewater`)

实际工厂清洗试验废水按处理交接及自身水分物种化验记录，造纸厂生产废水或市政进水不可互换。

- 选定流: 机械工厂废水
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_waste。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- 来源:

###### 废异丙醇清洗液 (`spentipa`)

实际交接废异丙醇溶液須有自身化验与回收去向，与销毁或排放溶剂分开。

- 选定流: 废异丙醇清洗液
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_waste。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- 来源:

###### 纸板工厂试验废物 (`wtest`)

仅计实际外排经试验瓦楞纸坯，包装边角料与客户生产废物不可替代，返还可复用试验负载抵销。

- 选定流: 纸板工厂试验废物
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_waste。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- 来源:

###### 不合格纸加工机械总成 (`reject`)

实际最终不合格配置总成作为废物移出，可复用返修不是外部废物，用户报废设备不属工厂范围。

- 选定流: 不合格纸加工机械总成
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_waste。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- 来源:

##### 基本流

###### 化石二氧化碳排放到空气 (`co2`)

实际可归属化石 CO2 进入普通未指定室外空气，保留来源与治理后监测，排除供应方用户排放。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_emissions。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emissions`
- 来源:

###### 化石一氧化碳排放到空气 (`co`)

实际物种特定化石 CO 进入普通未指定室外空气，仅碳闭合不能推导排放。

- 选定流: 一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_emissions。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emissions`
- 来源:

###### 分子二氧化氮排放到空气 (`no2`)

仅计实测分子 NO2，亚硝酸根或以 NO2 当量报告的 NOx 不是同一化学交换。

- 选定流: 分子二氧化氮排放到空气
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_emissions。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emissions`
- 来源:

###### 二氧化硫排放到普通空气 (`so2`)

实际 SO2 须为普通室外空气区室，不以平流层、水或室内流替代。

- 选定流: 二氧化硫排放到普通空气
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_emissions。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emissions`
- 来源:

###### PM2.5 排放到普通空气 (`pm`)

实际测量小于 2.5 微米粒级进入普通空气，错误区室或未指定粒径不可替代。

- 选定流: PM2.5 排放到普通空气
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_emissions。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emissions`
- 来源:

###### 水蒸气排放到空气 (`vapor`)

工厂实际净蒸发进入普通空气，分开污泥产品自身水分、反应、返还与库存。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_emissions。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emissions`
- 来源:

###### 异丙醇排放到空气 (`ipair`)

实际治理后异丙醇排放进入普通空气，浓度、流量与时间须匹配并独立测定无组织排放；捕集回收销毁去向保持不同。

- 选定流: 异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 声明配置及期间的实测可归属原生单位交换除以 Dnet，使用 cp_emissions。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emissions`
- 来源:

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| allocation_actual | 优先按配置工序实测分隔，共享加工服务采用有据因果驱动，无法避免时明确论证分配；不良返修试验负荷保留在验收生产中。仅分配未归属共享剩余量，调查负剩余不截零。 |  |
| allocation_recycling | 区分内部返还与外部废物处理，披露回收方法及处理供应过程；不随意赋予回收信用替代、免费共产品或复用寿命系数。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | 验收配置机器 | foreground_record | 型号配置序列物料清单；校准验收净质量；Naccepted；Dnet；工厂门期间；安装首套填充；排除包装松散备件试验库存 | 使用校准称重或可追溯称重记录核对精确验收供货配置，将实际验收净质量求和为 Dnet 并匹配数量；运输拆解套件保留一个不重复完整物料清单。 | kg | 每批及匹配表计区间 | 一个共同生产期间 | 声明配置场址 | 每 1 kg 参考流 | 校准收据自身化验物料验收不确定性 |
| cp_inputs | fabrication | 各实际物料部件 | foreground_record | 原子身份供应状态；原生数量 Qattr；自身成分化验水分；库存返还场址反应留存；供应运输；自制外购；配置期间 | 核对校准收据实际物料领用库存返还；各流采用自身毛质量化验，合金污泥毛量不能作所含铁铜；区分完成或部分模块及本地实际工序。 | native | 每批及匹配表计区间 | 一个共同生产期间 | 声明配置场址 | 每 1 kg 参考流 | 校准收据自身化验物料验收不确定性 |
| cp_utilities | utilities | 各计量公用工程 | foreground_record | 原生 Qattr；输入自产输出库存；铸造加工表面装配试验发运计量；未归属剩余；焓基准；独立供返千克及兆焦每千克；实际温压密度；供应配置期间 | 匹配一个场址期间，核对输入自产减输出库存与过程负载；共享服务仅从未归属剩余分配。同焓基准独立测毛供与返还，毛返扣一次已净热不再扣，蒸汽实物质量独立。 | native | 每批及匹配表计区间 | 一个共同生产期间 | 声明配置场址 | 每 1 kg 参考流 | 校准收据自身化验物料验收不确定性 |
| cp_test | test | 各实际工厂试验介质 | foreground_record | 试验验收返修日志；Qattr；介质自身化验水分；负载来源；随货消耗返还份额；库存；实际温度密度；排水蒸发留存反应；配置期间 | 独立计量交接工厂实际试验，分开消耗返还测试浆纸胶，绝不采用用户吞吐额定负载或模拟纸厂配方；各水流采用自身水分密度及实测损失库存。 | native | 每批及匹配表计区间 | 一个共同生产期间 | 声明配置场址 | 每 1 kg 参考流 | 校准收据自身化验物料验收不确定性 |
| cp_waste | residues | 各废物交接 | foreground_record | 身份；Qattr 湿毛量；自身水分；各污染物化验；处理供应过程；保留返修内部转移；库存配置期间 | 使用称重交接联单及自身物流取样，毛量与所含元素水分分开并配对返还；外部供应过程排放保留在该过程。 | kg | 每批及匹配表计区间 | 一个共同生产期间 | 声明配置场址 | 每 1 kg 参考流 | 校准收据自身化验物料验收不确定性 |
| cp_emissions | residues | 各基本物种 | foreground_record | 物种 CAS 来源区室；Qattr；实测治理后浓度；匹配气液流量；相同时间间隔；温压干湿氧单位修正；独立无组织基准；捕集回收销毁；库存 | 实际治理后逐物种按匹配浓度乘气液流量乘同期间测量，并应用实测状态单位修正及独立无组织排放；未解释质量残差或碳闭合不能产生排放。 | kg | 每批及匹配表计区间 | 一个共同生产期间 | 声明配置场址 | 每 1 kg 参考流 | 校准收据自身化验物料验收不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | 对一个配置期间，将各可归属原生单位交换总量除以验收配置机器净质量之和，保留原始数量单位不确定性。 | Qattr; Dnet; cp_mass | native-unit amount per kg reference flow |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_qnd | all inventory rows | 对一个配置期间，Qattr 保留可归属不良返修工厂试验；Naccepted 精确计数 Dnet 中验收配置机器。单机交换=Qattr/Naccepted；平均净质量=Dnet/Naccepted；每千克交换=Qattr/Dnet。等价单机换算采用实测平均净质量，不采用目录重量或虚构固定机器质量。 | 匹配校准净质量验收台账 |
| quality_balances | all inventory rows | 各物理元素物种项采用自身毛量化验干湿基水分并计库存反应产品留存内部返还外部废物，合金污泥毛量不是所含元素。各水流采用自身水分及实际温度实测密度，并计反应生成消耗留存蒸发排出库存，循环返还配对。 | 各物流化验库存反应台账 |
| quality_solvent | ipa; spentipa; ipair | 各流采用自身异丙醇含量核对库存调整投入产品留存捕集回收液废水废介质销毁及实测空气排放；捕集不是销毁，非空气去向不能变为空气，未解释残差保留未解决。 | 独立去向化验排放测量 |
| quality_identity | all inventory rows | 匹配实际状态类型基准属性原生单位合金聚合物化学供应完成状态供应地域环境区室；条件身份 UUID 不是数值默认。实际未列紧固件阀涂装试剂保护气试验负载运输服务蒸汽返还废物物种均增设原子查询计量行；未知不等于零，不存在须有证明。 | 实际采购物料工艺供应过程及缺口披露 |
| quality_category | reference product | 完整类别不由单一磨浆机流浆箱糊盒机型号限定；独立分类干燥机印刷装订通用设备备件須审查供应状态主要功能。压力容器成分、信封起皱压光及未观察配置须逐项原始结构证据，示例不推导通用材料牌号运行配方速度寿命效率。 | 原始配置及分类决定 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| validate_reference | 须有完整声明验收配置物料清单、正 Dnet/Naccepted 与实际主要功能审查；拒绝把浆纸产品或无关部分部件作完整参考，两语言使用相同原生分子和每千克净参考。 | un-cpc3 |
| validate_interfaces | 拒绝重复外购模块制造内含材料、未抵销内部返还、假定随货填充网毯或客户纸厂运行数量作工厂负荷；实际工厂试验不良返修负载保留归属。 | andritz-cast; valmet-headbox; bhs-corrugator; holweg-bag |
| validate_physics | 须有各物流自身元素水溶剂去向闭合、实测治理后浓度及匹配流量时间状态和独立无组织排放。公用按输入自产输出库存实际过程负载核对，仅分配未归属剩余，负值调查不截零。毛热按供应实测千克乘自身兆焦每千克减独立返还千克乘自身兆焦每千克，同一焓基准仅扣一次；已净热不再扣返还。蒸汽实物热量独立，供应锅炉属上游。 |  |
| validate_species | 碳闭合不能推导 CO 或 NO2，以 NO2 当量计 NOx 不是纯分子 NO2。普通空气排放不能用平流层室内水流，状态 20 及错误基准属性不可用。报告已执行跳过检查缺失记录发现及完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 声明配置机器生产及兼容下游供货机器情景 |
| excluded_use | 通用纸厂配方运行寿命因子、未经审查印刷装订通用设备比较及浆纸产品数据集 |
| required_metadata | 全部限定信息 Qattr/Naccepted/Dnet 原生单位实际物料自制外购路线场址期间供应运输处理试验分配缺口 |
| required_quality_disclosure | 实测估计缺失区分取样校准不确定性平衡残差分类身份供应缺口及已执行跳过检查完整性 |
| update_trigger | 配置功能分类牌号路线自制外购供应场址期间随货附件工厂试验变化 |

## 11. 数据源

| source_id | type | title | reference | used_for |
| --- | --- | --- | --- | --- |
| un-cpc3 | official_guidance | 中央产品分类第 3.0 版说明注释 | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 2025 年 6 月 30 日，PDF及印刷第 241 页 44913 与相邻类别；完整制浆造纸整饰与纸制品加工，装订除外；仅分类。 |
| andritz-cast | handbook | ANDRITZ Inc., Muncy, Pennsylvania, USA | https://www.andritz.com/pulp-and-paper-en/locations/muncy-usa | 未注明发布日期厂商页；2026 年 10 月 2 日快照。实际磨片铸造及精密加工；合金与工厂数量仍须计量，纤维板用途不属制浆造纸参考。 |
| andritz-cooking | handbook | A-ConApex cooking technology | https://www.andritz.com/products-en/power-to-x/pulp-and-paper/pulp-production/a-conapex-technology | 未注明发布日期厂商页；2026 年 10 月 2 日快照。化学及非木浆连续反应器、供料混合泵接口；不是纸厂化学配方或通用锅炉边界。 |
| andritz-recycled | handbook | ANDRITZ deinking systems | https://www.andritz.com/products-en/products/pulp-and-paper/deinking-systems | 未注明发布日期厂商页；2026 年 10 月 2 日快照。再生浆碎解筛选除杂浮选脱水分散漂白及废物污泥处理设备；不采用客户废物化学数量。 |
| valmet-headbox | handbook | Valmet Headbox | https://www.valmet.com/pulp/pulp-drying/wet-end/headbox/ | 未注明发布日期厂商页；2026 年 10 月 2 日快照。纸浆干燥湿部水力及整流辊流浆箱、不锈钢与抛光浆料接触面；不证明通用 304 规格。 |
| andritz-paper | handbook | ANDRITZ PrimeLine paper and board machines | https://www.andritz.com/products-en/forever/pulp-and-paper/paper-production/paper-board-machines/primeline | 未注明发布日期厂商页；2026 年 10 月 2 日快照。造纸纸板配置干燥部、钢缸扬克缸及实际供货压榨涂布复卷选项；不采用速度干燥负载收率默认。 |
| bobst-fold | handbook | EXPERTFOLD 106 / 145 / 165 / 215 - Folder-gluer | https://www.bobst.com/afr/en/products/folding-gluing/expertfold-145-165 | 未注明发布日期厂商页；2026 年 10 月 2 日快照。瓦楞及覆面纸板给纸预折折叠上胶、输送带及剔除选项；不证明通用带材化学或工厂数量。 |
| bhs-corrugator | handbook | Single Facer - BHS Corrugated | https://www.bhs-world.com/en/corrugators/individual-machines/single-facer | 未注明发布日期厂商页；2026 年 10 月 2 日快照。瓦楞辊盒、压力辊带结构、集成控制及蒸汽凝结水连接；用于实际供货范围，不作为造纸运行配方。 |
| holweg-bag | handbook | 5XF - HolwegWeber paper bag making line | https://www.holwegweber.com/production-lines/5xf/ | 未注明发布日期厂商页；2026 年 10 月 2 日快照。伺服袋底闭合、把手窗放卷张力胶传感选项；可选印刷覆膜提示主要功能分类审查。 |
