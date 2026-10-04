---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.electrical-machinery-and-apparatus-for-soldering-brazing-or-welding-electric-machines-a-c3fcc824
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 电软钎焊、硬钎焊、焊接及电热喷涂装置

## 1. 范围与适用性

本规则覆盖完整电软钎焊、硬钎焊、焊接装置及金属或烧结金属碳化物电热喷涂机器的制造。包括电阻点焊缝焊凸焊对焊、电弧焊、变压整流逆变结构、电阻或感应软硬钎焊，以及声明金属碳化物范围内的电弧丝或等离子热喷涂。便携装置与机械化机器人配置系统保留实际主要功能和纳入部件，单一型号参考身份不缩窄类别，其他电连接结构须有自身原始配置证据。

排除独立备件、独立销售机器人通用换流器冷却厂房、非电连接或仅燃烧喷涂回火设备、焊缝涂层服务，以及用户运行维修终期。完整电平台中的手持喷枪不能把平台归为通用手持工具。激光电子束超声、燃烧电混合及切割连接组合装置在使用前须逐项主要功能分类审查。目录重量电流额定功率负载周期效率寿命耗材配方均不是工厂清单默认值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.electrical-machinery-and-apparatus-for-soldering-brazing-or-welding-electric-machines-a-c3fcc824 |
| classification_refs | CPC 3.0 44241; exact semantic scope |
| covered_products | 实际声明配置物料的完整电软硬钎焊焊接及金属碳化物电热喷涂装置 |
| excluded_products | 非电装置独立零件机器人公用设备及客户焊缝涂层产品 |
| representative_product | 一台验收配置电装置，无通用型号材料配方 |
| production_route | 实际自制外购机械磁性电子制造集成表面处理工厂试验 |
| market_state | 工厂门验收完整供货装置，声明纳入首套硬件保留填充 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供声明电连接或金属碳化物电热喷涂装置 |
| How much | 1 kg 验收完整配置装置净质量 |
| How well | 实际电输入输出额定值工艺送料控制冷却交付范围及有据验收，不推定性能 |
| How long or cycle | 一个共同生产验收期间，不宣称运行寿命 |
| reference_flow_link | finished |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 用于焊接、钎焊或熔接的电动机械和器具，用于金属或烧结金属碳化物热喷涂的电动机械和器具 `ffcabfa7-0ae8-4a7e-af45-cfb3041a11c3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 主要连接喷涂工艺电热源；变压逆变电阻感应电弧等离子结构；电压电流真实工艺额定值；便携独立机器人主要功能；随货控制导线焊炬线圈电极送料冷却机器人防护；净质量配置验收；自制外购上游完成工序；实际材料冷却液首套附件；场址期间供应运输处理；实际工厂试验缺口披露 |


## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考为 1 kg 验收完整装置净质量，采用 cp_mass 采集同配置验收质量，排除包装不良消耗试验负载零散备件。 |
| native_amount | all inventory rows | actual native property | native unit | 保留各原生分子单位，气体体积换算采用真实密度温压湿度，电力每千瓦时为 3.6 兆焦；完整溶液配方质量与所含化学水分不同。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际采购材料或完整模块，识别供应加工附件及上游工序 |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | 完整电连接电金属碳化物热喷涂装置，主要功能供应状态审查 |
| recursive_input_rule | 外购同类别完整电源总成上游制造计一次，仅计本地扩展集成，不递归重复内含材料工艺 |
| upstream_dataset_requirement | 兼容供应地域期间牌号完成状态电力运输处理范围及有据缺口 |
| disclosure | 声明交付物料自制外购接口实际工序试验缺失身份，不把用户焊接喷涂耗材搬入机器物料 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| boundary_complete | 边界为验收配置完整装置交付前可归属制造，用户运行安装维修终期分开；机械磁性电子自制路线替代外购模块，配对内部转移抵销。 | un-cpc3; fronius-inverter; metco-equipment |
| boundary_tests | 工厂实际功能连接喷涂试验不良返修保留归属；试验焊丝焊料助焊剂气体粉末试片与随货保留硬件填充分开，不假定每结构消耗每试验流。 | fronius-inverter; hakko-spec; ambrell-braze; metco-equipment |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| fabrication | 机壳机械制造 | conditional | 仅计实际本地板型材切割成形机加工连接，外购成品模块不重复这些工序。 | foreground | 每 1 kg 参考流 |
| magnetics | 本地磁性及功率分总成制造 | conditional | 实际绕组铁芯灌封路线替代相应外购成品，不设通用变压器磁芯介质配方。 | foreground | 每 1 kg 参考流 |
| assembly | 配置电气机械集成 | conditional | 追溯电弧电阻软钎焊硬钎焊电弧等离子喷涂完整模块接口，声明实际随货硬件控制导线线圈焊炬冷却搬运。 | foreground | 每 1 kg 参考流 |
| finish | 表面处理清洗 | conditional | 仅计实际涂装清洗固化，外协已完成表面在上游。 | foreground | 每 1 kg 参考流 |
| test | 工厂验收功能试验 | conditional | 仅计供货配置实际安全控制热电流送料冷却功能试验含不良返修，排除客户全寿命焊接喷涂生产。 | foreground | 每 1 kg 参考流 |
| services | 共享剩余公用设施 | conditional | 仅计共同期间尚未归属实测本地工序功能试验负荷的公用量，不重复共享压缩冷却电力。 | foreground | 每 1 kg 参考流 |
| dispatch | 验收配置交付 | conditional | 验收完整净配置装置及实际包装声明随货附件填充，零散备件运输包装排除 Dnet。 | foreground | 每 1 kg 参考流 |
| residues | 残余物基本排放核算 | conditional | 仅按独立测量计实际外部废物物种交接，供应处理在上游。 | foreground | 每 1 kg 参考流 |

### 过程：机壳机械制造 (`fabrication`)

#### 输入

##### 产品流

###### 碳钢薄板 (`steel`)

实际机壳机架薄板牌号及轧制状态须匹配，中英钢银身份冲突不可用。

- 选定流: 碳钢薄板
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: fronius-inverter; telwin-resistance

###### 铝挤压型材 (`aluminium`)

仅计有据结构挤压型材实际牌号，外购成品散热器或壳体成形已在上游。

- 选定流: 铝挤压型材 `4f197be3-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: fronius-inverter; telwin-resistance

###### 金属加工切削液 (`cutfluid`)

实际液体切削配方浓度须匹配，测自身水分及润滑组分。

- 选定流: 切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: fronius-inverter; telwin-resistance

###### 碳钢焊丝 (`weld`)

仅计机壳机架实际连接实心焊丝牌号，设备制造焊接与焊机功能试验耗材分开。

- 选定流: 碳钢焊丝
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: fronius-inverter; telwin-resistance

###### 气态氩 (`argon`)

仅计实际纯气态氩供应过程牌号，不代替混合保护气；液态供应须含实际汽化及独立匹配身份。

- 选定流: 氩气 `f83a939c-a58f-44de-a593-d9c9ffb584e4`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: fronius-inverter; telwin-resistance

###### 中国低压用户电力 (`fabrication_electricity`)

仅限实际中国低于 1 千伏用户侧供电，原生能量千瓦时且每千瓦时等于 3.6 兆焦；其他地域电压采用独立匹配原子行。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: Energy / kWh
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源: fronius-inverter; telwin-resistance

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：本地磁性及功率分总成制造 (`magnetics`)

#### 输入

##### 产品流

###### 裸铜线材 (`copper`)

仅计本地实际端子导体制造裸线，外购变压器不重复内含铜。

- 选定流: 铜线材 `4f197beb-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: fronius-inverter

###### 漆包铜绕组线 (`magnetwire`)

仅用于实际铜漆包导线且记录绝缘线径供应状态，铝或纸包替代须独立身份；计本地绕制浸渍，不重复上游线材制造。

- 选定流: 电磁线 `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: fronius-inverter

###### 冲制电硅钢铁芯片 (`lamination`)

本地叠芯实际外购冲制绝缘成品片须匹配牌号，原始压延钢不含冲压绝缘；本地冲片须替代为实际板材路线及新增原子行。

- 选定流: 冲制电硅钢铁芯片
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: fronius-inverter

###### 功率变压器铁氧体磁芯 (`ferrite`)

实际功率变压器磁芯材料几何须匹配，不用抑制噪声磁珠或分类为链条的铁氧体记录。

- 选定流: 功率变压器铁氧体磁芯
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: fronius-inverter

###### 双酚 A 型环氧树脂 (`epoxy`)

仅计本地灌封实际未固化双酚 A 型树脂，独立固化剂填料溶剂另列原子行，完整灌封模块树脂在上游。

- 选定流: 环氧树脂 `e2bab6ae-d42f-4fca-bab5-ae9c6692f105`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: fronius-inverter

###### 中国低压用户电力 (`magnetics_electricity`)

仅限实际中国低于 1 千伏用户侧供电，原生能量千瓦时且每千瓦时等于 3.6 兆焦；其他地域电压采用独立匹配原子行。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: Energy / kWh
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源: fronius-inverter

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：配置电气机械集成 (`assembly`)

#### 输入

##### 产品流

###### 装配完成焊接控制印制电路板 (`pcb`)

实际成品装配板不是裸板助听器或数据处理总成；内含器件焊料在上游，实际本地贴装时替代模块路线。

- 选定流: 装配完成焊接控制印制电路板
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 绝缘栅双极晶体管功率开关模块 (`igbt`)

仅计实际额定 IGBT 模块，光伏模块或通用半导体类别不能证明器件。

- 选定流: 绝缘栅双极晶体管功率开关模块
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 功率整流二极管模块 (`rectifier`)

实际外购整流结构额定参数须匹配，分立二极管光伏模块完整换流器供应状态不同。

- 选定流: 功率整流二极管模块
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 薄膜电容器 (`capacitor`)

实际外购薄膜电容器电压电容量膜材加工状态须匹配，宽类别电容身份仍须逐项限定，不设通用介质重量。

- 选定流: 电容器 `df93339b-f27d-4f3e-b672-9d2ef0c536f6`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 焊接变压器成品 (`transformer`)

实际供货完整变压器不可用单独外壳替代，本地绕组铁芯装配替代外购完整制造。

- 选定流: 焊接变压器成品
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 焊接逆变电源模块成品 (`inverter`)

仅计实际焊接兼容完整逆变模块，光伏或 LED 电源不能替代；内含变压器开关电子元件在上游计一次。

- 选定流: 焊接逆变电源模块成品
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 焊接送丝单元成品 (`feed`)

实际电机辊控制器供货总成，焊丝本身不是送丝单元。

- 选定流: 焊接送丝单元成品
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 电弧焊炬成品 (`torch`)

实际外购兼容焊炬须声明软管电缆范围，焊接服务不是焊炬硬件。

- 选定流: 电弧焊炬成品
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 电弧热喷涂枪成品 (`gun`)

实际金属丝电弧枪结构介质接口须匹配，涂料喷枪或焊料不可用。

- 选定流: 电弧热喷涂枪成品
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 等离子热喷涂枪成品 (`plasmagun`)

实际电直流阴极阳极送粉接口供货枪须声明大气或受控气氛，通用粉末喷射器不等价。

- 选定流: 等离子热喷涂枪成品
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 铜合金电阻焊电极成品 (`electrode`)

实际安装首套电极合金加工状态须匹配，铜线阴极铜原料不同，后续用户电极更换排除。

- 选定流: 铜合金电阻焊电极成品
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 感应钎焊工作线圈成品 (`induction`)

实际几何导体及冷却兼容工作线圈须匹配，电机电枢照明镇流器无关。

- 选定流: 感应钎焊工作线圈成品
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 电烙铁复合加热焊头成品 (`tip`)

实际随货兼容加热焊头，毒性基准属性通用电热电阻不可用。

- 选定流: 电烙铁复合加热焊头成品
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 电动冷却风扇成品 (`fan`)

仅计实际兼容供货风扇，不用完整非电热空间加热器替代。

- 选定流: 电动冷却风扇成品
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 焊接水冷却单元成品 (`chiller`)

实际交付完整冷却总成仅在真实结构有压缩机时含制冷剂，厂房用户冷却服务为独立边界。

- 选定流: 焊接水冷却单元成品
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 工业搬运机器人 (`robot`)

仅计经审查电连接喷涂系统纳入实际外购通用搬运机器人，匹配通用机器人身份及控制器物料范围；独立销售机器人不属完整装置参考。

- 选定流: 工业机器人 `f3a1c3db-6e8f-4406-b490-2d174edfc7a8`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 可编程逻辑控制器 (`plc`)

实际完整硬件控制器须匹配中国采购电压，内含电子元件在上游。

- 选定流: 可编程逻辑控制器 `5b817eb4-cab3-4fed-87c9-457d66d0bb19`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 绝缘铜动力电缆 (`cable`)

实际供应导体绝缘电压须匹配，裸线或以能量为基准电缆不能作质量部件。

- 选定流: 绝缘铜动力电缆
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 电连接器 (`connector`)

仅计实际不超过 1000 V 电连接硬件且匹配触点电流，不用光连接器或单纯壳体替代。

- 选定流: 电连接器 `bc212a0a-0aeb-4077-ac4f-90e5ccf57140`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 三元乙丙橡胶冷却软管 (`hose`)

实际成品 EPDM 管须匹配压力温度，通用液压管不能证明聚合物。

- 选定流: 三元乙丙橡胶冷却软管
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 三元乙丙橡胶密封垫 (`gasket`)

实际成品 EPDM 垫须有配方尺寸，通用密封件不能证明牌号。

- 选定流: 三元乙丙橡胶密封垫
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 滚柱轴承 (`bearing`)

实际成品兼容滚柱轴承不是保持架或风机变桨轴承，宽类别身份须实际子类。

- 选定流: 滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 钢螺钉 (`screw`)

实际兼容成品螺钉牌号涂层数量须与校准质量核对，不设通用套数。

- 选定流: 钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 去离子水 (`di`)

仅计声明配方实际保留随货冷却水部分，外购预填充单元排除重复填充。

- 选定流: 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 乙二醇 (`ethylene`)

仅计本地混配随货冷却液实际纯乙二醇部分及自身化验水分添加剂与兼容冷却剂级供应过程；电解液溶剂供应用途不能证明该冷却投入，完整专用冷却液不等于纯乙二醇。

- 选定流: 乙二醇
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

###### 中国低压用户电力 (`assembly_electricity`)

仅限实际中国低于 1 千伏用户侧供电，原生能量千瓦时且每千瓦时等于 3.6 兆焦；其他地域电压采用独立匹配原子行。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: Energy / kWh
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源: fronius-inverter; telwin-resistance; hakko-spec; metco-equipment; ambrell-cooling

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

仅计实际干聚合物配方及有据树脂添加剂固化留存粉末回收，不设通用涂料配方。

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

###### 异丙醇 (`ipa`)

实际匹配中国厂内清洗化学品供应采用自身化验，区分回收留存销毁废水及非空气去向。

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

实际处理后工业清洗漂洗补充水须有水质，循环量不是新投入。

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

###### 中国低压用户电力 (`finish_electricity`)

仅限实际中国低于 1 千伏用户侧供电，原生能量千瓦时且每千瓦时等于 3.6 兆焦；其他地域电压采用独立匹配原子行。

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

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：工厂验收功能试验 (`test`)

#### 输入

##### 产品流

###### SAC305 无铅焊料合金 (`solder_test`)

仅计实际工厂软钎焊功能试验消耗 SAC305 锡银铜合金，本地电子板贴装为独立实际自制路线；含铅焊料银浆含助焊剂焊料不能代表无助焊剂合金。

- 选定流: SAC305 无铅焊料合金
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

###### 松香焊接助焊剂 (`flux_test`)

仅计实际工厂软钎焊功能试验独立松香配方及自身溶剂化验，本地贴装另列自身实际制造路线；复合焊料助焊剂避免重复采购组分。

- 选定流: 松香焊接助焊剂
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

###### 碳钢焊丝 (`weld_test`)

仅计实际工厂电弧功能试验消耗实测焊丝，不用客户全寿命焊缝输出；不良试件留负荷但不纳验收机器 Dnet。

- 选定流: 碳钢焊丝
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

###### 气态氩 (`argon_test`)

仅计工厂焊接或等离子功能试验实际纯气态氩，混合保护气另列实际物种配方行。

- 选定流: 氩气 `f83a939c-a58f-44de-a593-d9c9ffb584e4`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

###### 气态氮 (`nitrogen_test`)

仅在工厂试验实际匹配全球厂内保护气氛供气接口时采用，灌装顶空补充气记录无关；热等离子牌号模式须另证。

- 选定流: 氮气 `50626f35-0e0d-4139-b9f9-7e9ff238ba62`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

###### 气态氦 (`helium_test`)

仅计实际工厂等离子试验气，运行手册示例不能证明所有设备都需氦。

- 选定流: 气态氦
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

###### 钨焊接电极成品 (`tungsten_test`)

仅计实际工厂试验电极并声明纯钨掺杂牌号磨损留存，钨丝原始杆不自动等于成品电极。

- 选定流: 钨焊接电极成品
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

###### 碳钢试验试片 (`coupon_test`)

实际准备板材试验负载须匹配工厂功能试验，计留存返还废料，不属验收设备净质量。

- 选定流: 碳钢试验试片
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

###### 热喷涂锌丝 (`zincwire_test`)

仅计工厂电弧喷涂试验实际纯锌丝，锌铝合金须独立身份，锌焙砂热浸锌产品不是锌丝。

- 选定流: 热喷涂锌丝
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

###### 碳化钨钴热喷涂粉末 (`carbide_test`)

工厂电热喷涂试验粉末须匹配喷涂级形貌黏结成分，压制烧结进料颗粒不可用。

- 选定流: 碳化钨钴热喷涂粉末
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

###### 去离子水 (`di_test`)

仅计工厂冷却试验补充量并与随货保留填充分开，闭路循环配对不是新供应。

- 选定流: 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

###### 中国低压用户电力 (`test_electricity`)

仅限实际中国低于 1 千伏用户侧供电，原生能量千瓦时且每千瓦时等于 3.6 兆焦；其他地域电压采用独立匹配原子行。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: Energy / kWh
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源: fronius-inverter; hakko-spec; ambrell-braze; metco-arc; metco-plasma

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：共享剩余公用设施 (`services`)

#### 输入

##### 产品流

###### 中国低压用户电力 (`services_electricity`)

仅限实际中国低于 1 千伏用户侧供电，原生能量千瓦时且每千瓦时等于 3.6 兆焦；其他地域电压采用独立匹配原子行。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: Energy / kWh
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源: ambrell-cooling

###### 压缩空气 (`air`)

实际供应压缩空气原生体积立方米须有温压湿度，质量采集按真实密度转换；场内压缩电力只计一次，不重复当外购空气。

- 选定流: 压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位: Volume / m3
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源: ambrell-cooling

###### 天然气工业热 (`heat`)

仅计实际中国工业热能交付，供应锅炉燃料在上游不是虚构场内燃烧，蒸汽返还实物另列原子记录。

- 选定流: 区域或工业热, 天然气 `eb581eb3-c707-41a0-b4e6-ee1854551714`
- 流属性/单位: Energy / MJ
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源: ambrell-cooling

###### 自来水 (`tap`)

实际厂内供应补充量排除内部冷却循环及输出返还。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源: ambrell-cooling

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

仅限实际 C/E/F 楞且至少 80% 纤维含再生纤维纸板，记录真实比例加工状态，不代表所有成品箱。

- 选定流: 瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: un-cpc3; fronius-inverter; telwin-resistance

###### 低密度聚乙烯薄膜 (`film`)

仅限实际 PE-LD 非自黏非泡孔不增强不层压无支撑薄膜，聚丙烯复合材料须独立身份。

- 选定流: 低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: un-cpc3; fronius-inverter; telwin-resistance

###### 欧标木托盘 (`pallet`)

仅限实际欧标木托盘，记录一次性返还份额及真实数量质量，木箱非欧标尺寸另列。

- 选定流: 木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置装置净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: un-cpc3; fronius-inverter; telwin-resistance

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收完整电连接或电热喷涂装置 (`finished`)

交付主要功能配置装置须有物料附件填充凭证，包装不良设备消耗试验负载零散备件排除净参考质量。

- 选定流: 用于焊接、钎焊或熔接的电动机械和器具，用于金属或烧结金属碳化物热喷涂的电动机械和器具 `ffcabfa7-0ae8-4a7e-af45-cfb3041a11c3`
- 流属性/单位: Mass / kg
- 数量规则: 1 千克
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: un-cpc3; fronius-inverter; telwin-resistance

##### 废物流

##### 基本流

### 过程：残余物基本排放核算 (`residues`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工业后钢废料 (`wsteel`)

实际未处理外部废钢交接，内部可回收返料抵销，不虚构后续处理。

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

仅计实际外部废铜交接至有据匹配湿法冶金回收路线，保留接收方实际供应未处理状态及毛量自身合金绝缘化验；接收处理在上游，不推断场内湿法冶金；不等于所含纯铜，未经实际完成不能假定分选压制。

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

###### 废装配印制线路板 (`wpcb`)

实际装配不良板废物，区分保留返修及裸板废物。

- 选定流: 废弃装配印制线路板 `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
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

仅计实际收集涂装污泥自身水树脂金属比例及处理路线。

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

实际废溶剂采用自身异丙醇水污染物化验，回收销毁分开，不能作空气残差。

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

实际工业废水交接采用毛量水分各污染物浓度，不用造纸废水替代。

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

###### 金属打磨粉尘废物 (`dust`)

实际捕集金属粉尘采用自身粒度元素化验，捕集尘是非空气去向不是未经治理排放物种。

- 选定流: 金属打磨粉尘废物
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

仅计实际独立实测场内化石来源，不用供应热锅炉或碳库存残差。

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

实际分子化石 CO 排放不能由碳闭合换算。

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

治理后实际实测异丙醇物种加独立无组织测量，留存回收捕集销毁份额分开。

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

按自身水分反应留存库存核对后的实际净蒸发水。

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

###### 向普通空气排放臭氧 (`ozone`)

仅计实际工厂电弧喷涂试验独立定量分子 O3 治理后排放，生成量不是释放量。

- 选定流: 臭氧 `08a91e70-3ddc-11dd-9756-0050c2490048`
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

仅计实测分子 NO2，以 NO2 当量计总氮氧化物不是纯 NO2。

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

###### 向普通空气排放 PM10 (`pm10`)

仅计有据包含更细颗粒的实测气动粒径不大于 10 微米份额，单独 2.5 至 10 微米或未指定粉尘不可替代。

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

仅计实际独立实测排放元素铜量，铜合金烟或氧化物毛量不是铜，避免与颗粒物总量重复。

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

仅计真实制造工厂喷涂独立实测排放锌量，捕集粉或氧化锌毛量不是锌排放。

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
| cp_materials | fabrication | 各实际材料配方 | foreground_record | 身份牌号毛量 Qattr 自身化验水分 库存反应返料本地工序外购完成状态不确定性 | 各采购使用流称重测自身化学水分，核对供应加工库存调整本地制造绕组灌封表面处理不良返修。 | kg | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_modules | assembly | 各成品部件保留填充 | foreground_record | 部件序列原生 Qattr 兼容供应物料 内含材料工序 纳入控制导线焊炬线圈送料冷却机器人填充 不良返修数量 | 实际收据及各供货件实测质量，安装数按同件实测质量换算，外购成品上游制造仅计一次，本地贴装铁芯制造须自身原子路线上游替代。 | kg | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_tests | test | 各实际工厂试验交换 | foreground_record | 配置试验计划实际区间实测 Qattr 电输入输出负载 介质试片消耗返还 冷却库存 验收不良返修 | 计量实际绝缘控制送料热电或焊接软硬钎焊喷涂功能试验，保留可归属失败重复试验，随货首套硬件填充与消耗介质用户寿命数量分开，电阻模拟负载不虚构焊接耗材，仅核对实际试验状态。 | native unit | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_utilities | services | 各实际公用表计 | foreground_record | 原生 Qattr 共同期间输入实际场内供能量输出库存 工序试验归属表计 剩余共享服务 电压供应 气温压湿密度 毛净热返还 | 按真实输入自产输出库存核对制造磁性装配表面试验交付归属负荷，仅分配未归属剩余，调查负值不确定性不截零；毛热供应千克乘自身兆焦每千克减独立返还千克乘自身兆焦每千克，同一焓基准扣一次；净热不再扣返还，蒸汽凝结水实物独立于热能，上游供应锅炉排除场内燃料。 | native unit | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_dispatch | dispatch | 各包装成品产出 | foreground_record | 验收配置物料净产出 包装 Qattr 实际聚合物纸板托盘牌号 返还份额 外部运输原生活动 | 实际交付包装称重与验收装置净量分开，保留供应运输接口真实返还包装，不设标准包装比。 | kg | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_wastes | residues | 各真实废物流 | foreground_record | 毛量 Qattr 自身水分元素化学化验 库存内部返还回收 真实外部交接供应处理 | 采用称重交接联单自身物流取样，完整污泥合金废水不同于所含物种，捕集粉尘溶剂在实测释放前属非空气去向，外部处理排放属供应过程。 | kg | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_emissions | residues | 各基本物种 | foreground_record | CAS 来源区室 Qattr 实际治理后浓度 匹配气液流量时间 温压干湿氧单位修正 独立无组织基准 留存捕集销毁 | 按治理后实测浓度乘匹配流量乘同期间测物种，并用状态单位修正独立无组织测量，元素物种化验不同于粉尘氧化物毛量，防止总颗粒物组分排放重叠；未解释质量残差碳闭合不能推导 CO/NO2/臭氧。 | kg | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | 对一个配置期间，将各可归属原生单位交换总量除以验收配置装置净质量之和，保留原始数量单位不确定性。 | Qattr; Dnet; cp_mass | native-unit amount per kg reference flow |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_qnd | all inventory rows | Qattr 保留一个配置共同期间可归属不良返修试验负荷，Naccepted 计 Dnet 中验收装置；单件交换=Qattr/Naccepted，实测平均净质量=Dnet/Naccepted，每千克交换=Qattr/Dnet；计数换算用同配置实测平均质量，不用额定输出电流负载周期目录机器重量。 | 校准净质量验收台账 |
| quality_physical | all inventory rows | 各元素物种项采用自身毛量化验水分干湿基，计库存反应产品留存返料废物；合金污泥毛量不是所含元素。各水流采用自身水分及实际温度实测有据密度，计反应留存蒸发排出库存，内部返还配对抵销。 | 各流化验库存反应记录 |
| quality_solvent | ipa; spentipa; ipair | 按各流自身异丙醇含量核对投入库存产品留存回收捕集废水废介质销毁独立实测空气，捕集不是销毁，非空气去向不能变空气残差。 | 独立去向测量化验 |
| quality_identity | all inventory rows | 匹配状态类型原生基准属性单位金属聚合物化学物种供应完成状态供应地域基本区室，实际未列运输铜管线圈钎焊合金铁芯绝缘固化剂电子送粉器随货制冷剂金属粉试验介质气废物排放均新增独立查询计量原子行，缺失不同于零，不存在须证明。 | 原始供应物料及身份缺口披露 |
| quality_scope | reference product | 未观察电阻缝凸对焊、电阻感应软钎焊、机器人其他电连接变体须逐项原始结构，更换清单不能证明随货附件，可选冷却不意味着压缩机乙二醇，手持枪电喷涂系统仍审查整体范围，示例不推导通用配方合金运行寿命工厂负荷。 | 原始配置语义审查 |


## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| validate_scope | 须有真实电主要连接热喷涂功能完整供货物料，单一备件焊炬铁芯机器人非电装置涂层输出不得作完整参考，两语言采用相同每千克净参考原生分子。 | un-cpc3 |
| validate_interfaces | 拒绝重复外购模块制造未配对内部返料假定附件填充纳入及用户寿命运行作工厂负荷，保留可归属真实工厂试验不良返修。 | fronius-inverter; telwin-resistance; hakko-spec; metco-equipment |
| validate_balances | 须各流自身元素水溶剂平衡及实测治理后物种浓度乘匹配流量时间状态加独立无组织测量，公用核对共同期间输入实际自产输出库存工序归属负荷，仅共享未归属剩余；毛热按同基准独立实测返还扣一次，净热不重复扣。 |  |
| validate_completeness | NO2 当量氮氧化物不同于分子 NO2，金属氧化物烟毛量不同于所含元素且颗粒物组分报告不得重叠，状态 20 错误基准属性区室未查询身份不可用，报告接受输入已执行跳过检查发现缺失证据完整性。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 声明电连接热喷涂装置制造及兼容下游供货情景 |
| excluded_use | 通用用户焊接喷涂配方寿命效率因子及未经审查无关非电零件机器人输出 |
| required_metadata | 全部限定信息 Qattr/Naccepted/Dnet 原生单位 实际物料自制外购配置路线场址期间供应运输处理 工厂试验分配缺口 |
| required_quality_disclosure | 实测估计缺失校准取样不确定性物理残差供应身份分类缺口已执行跳过检查完整性 |
| update_trigger | 主要功能结构物料牌号自制外购供应场址期间或真实供货试验范围变化 |


## 11. 数据源

| source_id | type | title | reference | used_for |
| --- | --- | --- | --- | --- |
| un-cpc3 | official_guidance | 中央产品分类第 3.0 版，2025 年 6 月 30 日 | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 完整电连接及电热喷涂范围与非电装置零件区分。 |
| fronius-inverter | handbook | TransSteel 4000 Pulse 与 5000 Pulse 操作说明，未标日期网页版本 | https://manuals.fronius.com/html/4204260353/en-US.html | 逆变电源可选送丝焊炬冷却导线，用户运行与工厂试验不同。 |
| telwin-resistance | handbook | MODULAR 20 TI，未标日期产品资料 | https://www.telwin.com/intl/en/products/spot-welding-machines/823015-modular-20-ti | 电子电阻点焊定时及臂电极随货可选配置。 |
| hakko-spec | handbook | HAKKO FX-971 规格，未标日期 | https://www.hakko.com/english/products/detail.php?s_url=hakko_fx971_spec | 焊台复合加热烙铁结构，分开规格质量有排除线缆，不能当验收完整配置 Dnet。 |
| hakko-solder | handbook | HAKKO FX-971 更换零件，未标日期 | https://www.hakko.com/english/products/hakko_fx971_parts.html | 兼容烙铁及可换附件，更换清单不能证明随货物料。 |
| ambrell-braze | handbook | 感应钎焊，2022 年 9 月 15 日发布，2026 年 8 月 4 日更新 | https://www.ambrell.com/induction-heating-applications/brazing | 感应线圈电连接金属填料区别火焰路线，示例为客户应用不是通用工厂负荷。 |
| ambrell-cooling | handbook | 感应冷却系统，未标日期 | https://www.ambrell.com/products/cooling-systems | 线圈工作头电源冷却及隔离清洁闭路水气水水方案，不证明必用乙二醇制冷剂。 |
| metco-equipment | handbook | 热喷涂设备指南，BRO-0002.15，2022 年 5 月 | https://www.oerlikon.com/ecoma/files/BRO-0002_Equipment_Guide_EN.pdf?download=true | 电喷涂控制电源送料搬运外围部件，燃烧喷涂为不同路线反例。 |
| metco-arc | handbook | EcoArc 350 电弧丝热喷涂系统，未标日期 | https://www.oerlikon.com/metco/en/products-services/thermal-spray-equipment/system-platforms/electric-arc-wire/ecoarc-350-electric-arc-wire-spray-system/ | 电气动推拉送丝及完整电系统手持枪，可选卷盘解卷。 |
| metco-plasma | handbook | 等离子喷涂枪，未标日期 | https://www.oerlikon.com/metco/en/products-services/thermal-spray-equipment/thermal-spray-components/spray-guns/plasma/ | 电阴阳极等离子源送粉气氛选项，金属碳化物声明范围须实际兼容喷涂粉。 |
